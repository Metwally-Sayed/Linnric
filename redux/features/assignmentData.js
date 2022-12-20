import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const assignmentData = createSlice({
  name: 'assignmentData',
  initialState,
  reducers: {
    getAssignmentData: (state, action) => {
      return action.payload;
    },
  },
});

export const { getAssignmentData } = assignmentData.actions;

export default assignmentData.reducer;
