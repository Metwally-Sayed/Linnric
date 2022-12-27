import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const editOrderData = createSlice({
  name: 'editOrderData',
  initialState,
  reducers: {
    getEditOrderData: (state, action) => {
      return action.payload;
    },
  },
});

export const { getEditOrderData } = editOrderData.actions;

export default editOrderData.reducer;
