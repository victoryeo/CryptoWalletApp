import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: null,
  seedPhrases: null,
  accounts: [],
}

const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    CREATE_WALLET: data => {
      console.log('CREATE_WALLET reducer ', {data})
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
    },
    IMPORT_WALLET: () => {},
  }
})

export const walletActions = wallet.actions;

export default wallet;