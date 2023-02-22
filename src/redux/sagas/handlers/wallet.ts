import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import { setGenericPassword, getGenericPassword } from 'react-native-keychain';
import bip39 from 'react-native-bip39';
import { hdkey } from 'ethereumjs-wallet';
import { walletActions } from '../../reducers/wallet';
import { authActions } from '../../reducers/auth';
import Selectors from '../../selectors';
import { web3Client } from '../../../utils/Web3ClientFunc';
import { navigate } from '../../../utils/NavigationService';

const CryptoJS = require("crypto-js");

export interface AccountRetType {
  accountAddress: string,
  encryptedPrivateKey: string
}

const setSecretPassword = async () => {
  try {
    const secretPassword = Math.random().toString(36).slice(-10);
    await setGenericPassword('SECRET_PASSWORD', secretPassword);
  } catch (err) {
    console.log('setSecretPassword error:', err);
    throw err;
  }
}

const getSecretPassword = async (): Promise<string | null> => {
  try {
    const credentials = await getGenericPassword();
    if (!credentials) {
      console.log('No credentials stored');
      return null;
    } 
    return credentials.password;
  } catch (err) {
    console.log('getSecretPassword error:', err);
    throw err;
  }
}

const generateSeedPhrase = async() => {
  const seedPhrase = await bip39.generateMnemonic(128);
  const seedPhraseList = seedPhrase.split(" ");
  return { seedPhrase, seedPhraseList };
}

const addAccount = async(  
    seedPhrase: string,
    addressIndex = 0): Promise<AccountRetType> => {
  // generate hdwallet from seed phrase
  const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(seedPhrase));

  // from BIP44, HD derivation path is:
  // m / purpose' / coin_type' / account' / change / address_index
  const path = `m/44'/60'/0'/0/${addressIndex}`;
  const wallet = hdwallet.derivePath(path).getWallet();
  const privateKey = wallet.getPrivateKeyString();
  console.log('pk ', privateKey)

  // Add privateKey to Web3 Wallet
  web3Client.addAccountToWallet( privateKey );

  // Encrypt privateKey
  let encryptedPrivateKey = '';
  const securePhrase = await getSecretPassword();
  if (securePhrase) {
    const encrypted = await CryptoJS.AES.encrypt(privateKey, securePhrase);
    encryptedPrivateKey = encrypted.toString();
  }
  const accountAddress = wallet.getAddressString();
  // return an object to called
  return {accountAddress, encryptedPrivateKey};
}

function* createWallet(data: any): any {

  // Create secret for encrypting privateKey
  setSecretPassword();

  try {
    const { seedPhrase, seedPhraseList } = yield generateSeedPhrase();
    const accountCreated = yield addAccount(seedPhrase);
    console.log('createWallet:', { seedPhrase, seedPhraseList, accountCreated });

    yield put(walletActions.SET_PASSWORD(data.payload.password));
    yield put(walletActions.SET_SEED_PHRASES(seedPhraseList));
    yield put(walletActions.ADD_ACCOUNT(accountCreated));
    yield put(walletActions.SET_CURRENT_ACCOUNT(accountCreated));
    yield call(navigate, 'SecureYourWallet');    
  } catch (err) {
    console.log('CreateWallet error:', err);
  }
}

function* importFromSeedPhrase(action: any) {
    // Create secret for encrypting privateKey
    setSecretPassword();

    try {
      const seedPhrase = action.payload.token;
      const seedPhraseList = seedPhrase.split(' ');
      const accountCreated: AccountRetType = yield addAccount(seedPhrase);

      console.log('importFromSeedPhrase:', { seedPhrase, seedPhraseList, accountCreated });

      yield put(walletActions.SET_SEED_PHRASES(seedPhraseList));
      yield put(walletActions.ADD_ACCOUNT(accountCreated));
      yield put(walletActions.SET_CURRENT_ACCOUNT(accountCreated));
      yield put(authActions.SIGN_IN());

    } catch (err) {
      console.log('importFromSeedPhrase error:', err);
    }
}

const addAccountFromPrivateKey = async(  
    privateKey: string): Promise<AccountRetType> => {

  // private key always start with 0x
  privateKey = '0x'+privateKey;

  // Add privateKey to Web3 Wallet
  const account = web3Client.addAccountToWallet( privateKey );
  console.log('addAccountFromPrivateKey', account)

  // Encrypt privateKey
  let encryptedPrivateKey = '';
  const securePhrase = await getSecretPassword();
  if (securePhrase) {
    const encrypted = await CryptoJS.AES.encrypt(privateKey, securePhrase);
    encryptedPrivateKey = encrypted.toString();
  }
  const accountAddress = account.address;

  // return an object to called
  return {accountAddress, encryptedPrivateKey};
}

function* importFromPrivateKey(action: any) {
  // Create secret for encrypting privateKey
  setSecretPassword();
  try {
    const privateKey = action.payload.token;

    const accountCreated: AccountRetType = yield addAccountFromPrivateKey(privateKey);

    console.log('importFromPrivateKey:', { privateKey, accountCreated });

    yield put(walletActions.ADD_ACCOUNT(accountCreated));
    yield put(walletActions.SET_CURRENT_ACCOUNT(accountCreated));
    yield put(authActions.SIGN_IN());

  } catch (err: unknown) {
    // error processing
    if (typeof err === "string") {
      console.log('string ', err);
      yield put(walletActions.SET_ERROR(err))
    }
    else if (err instanceof Error) {
      console.log('instanceof', err.message)
      yield put(walletActions.SET_ERROR(err.message))
    }
  }
}

function* sendAmount(action: any) {
  try {
    const {
      from,
      to,
      amount,
    } = action.payload;
    const currentAccount: AccountRetType = yield select(Selectors.currentAccount);
    const secretPassword: string | null = yield call(getSecretPassword);
    // decrypt the enc private key
    const bytes: string = yield CryptoJS.AES.decrypt(
      currentAccount.encryptedPrivateKey,
      secretPassword);
    const privateKey = bytes.toString(CryptoJS.enc.Utf8);
    // call web3Client 
    web3Client.sendAmount(from, to, amount, privateKey);
  } catch (err) {
    console.log('sendAmount error:', err);
  }
}

export default function* walletSaga() {
  yield all([
    yield takeEvery(walletActions.CREATE_WALLET, createWallet),
    yield takeEvery(walletActions.IMPORT_WALLET, importFromSeedPhrase),
    yield takeEvery(walletActions.IMPORT_PRIVATE_KEY, importFromPrivateKey),
    yield takeEvery(walletActions.SEND, sendAmount),
  ]);
}