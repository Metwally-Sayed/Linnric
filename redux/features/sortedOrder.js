import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const sortedOrder = createSlice({
  name: 'sortedOrder',
  initialState,
  reducers: {
    getSortedOrder: (state, action) => {
      return action.payload;
    },
  },
});

export const { getSortedOrder } = sortedOrder.actions;

export default sortedOrder.reducer;
