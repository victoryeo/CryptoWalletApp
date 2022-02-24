import { combineReducers } from 'redux';
import Wallet from './wallet';
import Modal from './modal';

// Actions
export const actions = {
  wallet: Wallet.actions,
  modal: Modal.actions,
};

// Reducers
export default combineReducers({
  wallet: Wallet.reducer,
  modal: Modal.reducer,
});
