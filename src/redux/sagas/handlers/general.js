import { call, put, takeEvery, all, select, delay } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import { authActions } from 'src/redux/reducers/auth';
import Web3Client from 'src/utils/Web3Client';

export let web3Client = null;

function* initWeb3Instance() {
  try {
    if (!web3Client) {
      web3Client = new Web3Client();
      //console.log(web3Client)
      return true;
    }
  } catch (err) {
    console.log('init web3 ' + err);
    return false;
  }
}

function* initApp() {
  const web3Connected = yield call(initWeb3Instance);
  console.log('web3 connected ' + web3Connected);
}

function* rehydrate() {
  console.log('-- APP INIT --');

  // We want to launch screen to show at least 100msec for the animation
  yield all([call(initApp), delay(100)]);

  yield put(authActions.APP_INIT_DONE());
  console.log('-- APP INIT DONE --');
}

export default function* generalSaga() {
  yield all([yield takeEvery(REHYDRATE, rehydrate)]);
}
