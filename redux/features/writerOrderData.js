import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const writerOrderData = createSlice({
  name: 'writerOrderData',
  initialState,
  reducers: {
    getWriterOrderData: (state, action) => {
      return action.payload;
    },
  },
});

export const { getWriterOrderData } = writerOrderData.actions;

export default writerOrderData.reducer;
