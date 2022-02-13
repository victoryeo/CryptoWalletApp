import { combineReducers } from 'redux';
import Wallet from './wallet';

// Actions
export const actions = {
  wallet: Wallet.actions,
};

// Reducers
export default combineReducers({
  wallet: Wallet.reducer,
});
