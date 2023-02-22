import { createSlice } from '@reduxjs/toolkit';

interface AccountsType {
  accountAddress: string,
  encryptedPrivateKey: string,
}

interface WalletState {
  password: string,
  seedPhrases: string,
  accounts: AccountsType[],
  currentAccount: AccountsType,
  sendSuccess: boolean,
  errorMsg: string,
}

const initialState: WalletState = {
  password: '',
  seedPhrases: '',
  accounts: [],
  currentAccount: {} as AccountsType,
  sendSuccess: false,
  errorMsg: '',
}

const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    FETCH_STATE: () =>{
      return {
          ...initialState, 
      }
    },
    CREATE_WALLET: (state, action) => {
      console.log('CREATE_WALLET reducer ', {action})
    },
    SET_PASSWORD: (state, action) => {
      state.password = action.payload;
    },
    SET_SEED_PHRASES: (state, action) => {
      state.seedPhrases = action.payload;
    },
    CLEAN_USER_DATA: state => {
      Object.keys(initialState).forEach(stateKey => {
        state[stateKey] = initialState[stateKey];
      });
    },
    ADD_ACCOUNT: (state, action) => {
      state.accounts = [...state.accounts, action.payload];
      console.log('ADD_ACCOUNT', state.accounts)
    },
    IMPORT_WALLET: (state, action) => {
      console.log('IMPORT_WALLET reducer ', {action})
    },
    IMPORT_PRIVATE_KEY: (state, action) => {
      console.log('IMPORT_PRIVATE_KEY reducer ', {action})
    },
    SET_CURRENT_ACCOUNT: (state, action) => {
      state.currentAccount = {
        ...action.payload,
      };
      console.log('SET_CURRENT_ACCOUNT', state.currentAccount)
    },
    SEND: (state, action) => {
      state.sendSuccess = true;
    },
    SET_ERROR: (state, action) => {
      state.errorMsg = action.payload 
    }
  }
})

export const walletActions = wallet.actions;

export default wallet;