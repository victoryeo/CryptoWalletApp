import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import { navigate } from 'utils/NavigationService';
import { walletActions } from '@crypto-redux/reducers/wallet';
import { modalActions } from '@crypto-redux/reducers/modal';
import { setGenericPassword, getGenericPassword } from 'react-native-keychain';
import bip39 from 'react-native-bip39';
import { hdkey } from 'ethereumjs-wallet';

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

const addAccount = async(  
    seedPhrase,
    addressIndex = 0) => {
  // generate hdwallet from seed phrase
  const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(seedPhrase));

  // from BIP44, HD derivation path is:
  // m / purpose' / coin_type' / account' / change / address_index
  const path = `m/44'/60'/0'/0/${addressIndex}`;
  const wallet = hdwallet.derivePath(path).getWallet();
  const privateKey = wallet.getPrivateKeyString();

  // Encrypt privateKey
  let encryptedPrivateKey = '';
  const securePhrase = await getSecretPassword();
  if (securePhrase) {
    const encrypted = await CryptoJS.AES.encrypt(privateKey, securePhrase);
    encryptedPrivateKey = encrypted.toString();
  }
  return encryptedPrivateKey;
}

function* createWallet(data) {
  yield put(modalActions.TOGGLE_GLOBAL_LOADER(true));

  // Create secret for encrypting privateKey
  setSecretPassword();

  try {
    const { seedPhrase, seedPhraseList } = yield generateSeedPhrase();
    const encryptedPrivateKey = yield addAccount(seedPhrase);
    console.log('createWallet:', { seedPhrase, seedPhraseList, encryptedPrivateKey });

    yield put(walletActions.SET_PASSWORD(data.payload.password));
    yield put(walletActions.SET_SEED_PHRASES(seedPhraseList));
    yield call(navigate, 'SecureYourWallet');    
  } catch (err) {
    console.log('CreateWallet error:', err);
  }
}

export default function* walletSaga() {
  yield all([
    yield takeEvery(walletActions.CREATE_WALLET, createWallet),
  ]);
}