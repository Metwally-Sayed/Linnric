import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const orderData = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    getOrderData: (state, action) => {
      return action.payload;
    },
  },
});

export const { getOrderData } = orderData.actions;

export default orderData.reducer;
