import { call, put, takeEvery, all, select, delay } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import { authActions } from 'src/redux/reducers/auth';

function* initApp() {

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
