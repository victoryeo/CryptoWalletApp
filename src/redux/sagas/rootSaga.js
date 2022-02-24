import { all, fork } from 'redux-saga/effects';
import sagaHandler from './handlers';

function* rootSaga() {
  yield all(sagaHandler.map(s => fork(s)));
}

export default rootSaga;
