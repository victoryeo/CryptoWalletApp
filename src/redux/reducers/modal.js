import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    modalGlobalLoading: false,
    modalGlobalMessages: [],
  },
  reducers: {
    TOGGLE_GLOBAL_LOADER: (state, action) => {
      state.modalGlobalLoading = !!action.payload;
    },
  }
})

export const modalActions = modal.actions;

export default modal;

