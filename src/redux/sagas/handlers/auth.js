import { call, put, takeEvery, all } from 'redux-saga/effects';

import { authActions } from '@crypto-redux/reducers/auth';
import { walletActions } from '@crypto-redux/reducers/wallet';

function* signOut(action) {
  yield put(walletActions.CLEAN_USER_DATA());
}

export default function* authSaga() {
  yield all([
    yield takeEvery(authActions.SIGN_OUT, signOut),
  ])
}
