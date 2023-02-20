import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import { navigate } from '../../../utils/NavigationService';
import { walletActions } from '@crypto-redux/reducers/wallet';
import { authActions } from '@crypto-redux/reducers/auth';
import { setGenericPassword, getGenericPassword } from 'react-native-keychain';
import bip39 from 'react-native-bip39';
import { hdkey } from 'ethereumjs-wallet';
import { web3Client } from 'src/utils/Web3ClientFunc';
import Selectors from '@crypto-redux/selectors';

const CryptoJS = require("crypto-js");

const setSecretPassword = async () => {
  try {
    const secretPassword = Math.random().toString(36).slice(-10);
    await setGenericPassword('SECRET_PASSWORD', secretPassword);
  } catch (err) {
    console.log('setSecretPassword error:', err);
    throw err;
  }
}

const getSecretPassword = async () => {
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

interface AddAccountRetType {
  accountAddress: string,
  encryptedPrivateKey: string
}

const addAccount = async(  
    seedPhrase: string,
    addressIndex = 0): Promise<AddAccountRetType> => {
  // generate hdwallet from seed phrase
  const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(seedPhrase));

  // from BIP44, HD derivation path is:
  // m / purpose' / coin_type' / account' / change / address_index
  const path = `m/44'/60'/0'/0/${addressIndex}`;
  const wallet = hdwallet.derivePath(path).getWallet();
  const privateKey = wallet.getPrivateKeyString();

  // Add privateKey to Web3 Wallet
  web3Client.addAccountToWallet({ privateKey });

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
      const accountCreated = yield addAccount(seedPhrase);

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
    privateKey: string): Promise<AddAccountRetType> => {

  // private key always start with 0x
  privateKey = '0x'+privateKey;

  // Add privateKey to Web3 Wallet
  const account = web3Client.addAccountToWallet({ privateKey });
  console.log(account)

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

    const accountCreated = yield addAccountFromPrivateKey(privateKey);

    console.log('importFromPrivateKey:', { privateKey, accountCreated });

    yield put(walletActions.ADD_ACCOUNT(accountCreated));
    yield put(walletActions.SET_CURRENT_ACCOUNT(accountCreated));
    yield put(authActions.SIGN_IN());

  } catch (err) {
    console.log('importFromPrivateKey error:', err);
  }
}

function* sendAmount(action: any) {
  try {
    const {
      from,
      to,
      amount,
    } = action.payload;
    const currentAccount = yield select(Selectors.currentAccount);
    const secretPassword = yield call(getSecretPassword);
    // decrypt the enc private key
    const bytes = yield CryptoJS.AES.decrypt(
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