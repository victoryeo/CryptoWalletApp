import { createSlice } from '@reduxjs/toolkit';

const initialState = {

}

const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {

  }
})

export const walletActions = wallet.actions;

export default wallet;