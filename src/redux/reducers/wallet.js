import { createSlice } from '@reduxjs/toolkit';

const initialState = {

}

const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    CREATE_WALLET: data => {
      console.log(data)
    },
  }
})

export const walletActions = wallet.actions;

export default wallet;