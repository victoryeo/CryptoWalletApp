import { combineReducers } from 'redux';
import Wallet from './wallet';
import Modal from './modal';
import Auth from './auth';

// Actions
export const actions = {
  wallet: Wallet.actions,
  modal: Modal.actions,
  auth: Auth.actions,
};

// Reducers
export default combineReducers({
  wallet: Wallet.reducer,
  modal: Modal.reducer,
  auth: Auth.reducer,
});
