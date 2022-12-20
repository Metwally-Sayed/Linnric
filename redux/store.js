import { configureStore } from '@reduxjs/toolkit';
import allAssignmentData from './features/assignmentData';

export const store = configureStore({
  reducer: {
    assignmentData: allAssignmentData,
  },
});
