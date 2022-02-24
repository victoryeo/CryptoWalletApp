import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: null,
  seedPhrases: null,
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
  }
})

export const walletActions = wallet.actions;

export default wallet;