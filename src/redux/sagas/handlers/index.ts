import authSaga from './auth';
import walletSaga from './wallet';
import generalSaga from './general';

const sagaHandler = [
  authSaga,
  walletSaga,
  generalSaga,
];

export default sagaHandler;