import walletSaga from './wallet';
import authSaga from './wallet';

const sagaHandler = [
  walletSaga,
  authSaga,
];

export default sagaHandler;