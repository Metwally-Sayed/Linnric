import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const orderPayData = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    getOrderPayData: (state, action) => {
      return action.payload;
    },
  },
});

export const { getOrderPayData } = orderPayData.actions;

export default orderPayData.reducer;
