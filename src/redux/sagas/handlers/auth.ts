import { call, put, takeEvery, all } from 'redux-saga/effects';

import { authActions } from '../../reducers/auth';
import { walletActions } from '../../reducers/wallet';

function* signOut(action: any): Generator<unknown, any, unknown> {
  yield put(walletActions.CLEAN_USER_DATA());
}

export default function* authSaga() {
  yield all([
    yield takeEvery(authActions.SIGN_OUT, signOut),
  ])
}
