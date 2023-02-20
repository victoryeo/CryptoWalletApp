import { combineReducers } from 'redux';
import Wallet from './wallet';
import Auth from './auth';

// Actions
export const actions = {
  wallet: Wallet.actions,
  auth: Auth.actions,
};

// Reducers
const reducer =  combineReducers({
  wallet: Wallet.reducer,
  auth: Auth.reducer,
});

export default reducer;
