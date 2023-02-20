import { call, put, takeEvery, all, select, delay } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import { authActions } from '../../../redux/reducers/auth';
import { initWeb3Client } from '../../../utils/Web3ClientFunc';
import { initOpenseaClient } from '../../../utils/OpenseaClientFunc';
import { bool } from 'yup';

function* initOpenseaInstance(): boolean {
  try {
    yield initOpenseaClient();
    return true;
  } catch (err) {
    console.log('init opensea ' + err);
    return false;
  }
}

function* initWeb3Instance(): boolean {
  try {
    yield initWeb3Client();
    
    return true;
  } catch (err) {
    console.log('init web3 ' + err);
    return false;
  }
}

function* initApp() {
  const web3Connected: boolean = yield call(initWeb3Instance);
  console.log('web3 connected ' + web3Connected);

  const osConnected: boolean = yield call(initOpenseaInstance);
  console.log('opensea connected ' + osConnected);
}

function* rehydrate() {
  console.log('--- APP INIT ---');

  // We want to launch screen to show at least 100msec for the animation
  yield all([call(initApp), delay(100)]);

  yield put(authActions.APP_INIT_DONE());
  console.log('--- APP INIT DONE ---');
}

export default function* generalSaga() {
  yield all([yield takeEvery(REHYDRATE, rehydrate)]);
}
