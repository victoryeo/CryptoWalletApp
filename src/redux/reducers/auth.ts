import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    isAppInitialized: false,
    isAuthenticated: false,
  },
  reducers: {
    APP_INIT_DONE: (state) => {
      state.isAppInitialized = true;
    },
    SIGN_IN: (state) => {
      state.isAuthenticated = true;
    },
    SIGN_OUT: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = auth.actions;

export default auth;
