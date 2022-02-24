import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import { navigate } from 'utils/NavigationService';
import { walletActions } from '@crypto-redux/reducers/wallet';
import { modalActions } from '@crypto-redux/reducers/modal';
import { setGenericPassword, getGenericPassword } from 'react-native-keychain';

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

function* createWallet(data) {
  console.log("createWallet")
  yield put(modalActions.TOGGLE_GLOBAL_LOADER(true));

  // Create new securePhrase for encrypting privateKey
  setSecretPassword();

  try {
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