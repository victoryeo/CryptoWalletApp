import { all, fork, call } from 'redux-saga/effects';
import sagaHandler from './handlers';

function* rootSaga() {
  yield all(sagaHandler.map(saga => 
    fork(saga)
  ));
}

export default rootSaga;
