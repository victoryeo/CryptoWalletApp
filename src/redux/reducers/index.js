import { combineReducers } from 'redux';
import Wallet from './wallet';
import Auth from './auth';

// Actions
export const actions = {
  wallet: Wallet.actions,
  auth: Auth.actions,
};

// Reducers
export default combineReducers({
  wallet: Wallet.reducer,
  auth: Auth.reducer,
});
