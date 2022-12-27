import { configureStore } from '@reduxjs/toolkit';
import allAssignmentData from './features/assignmentData';
import allOrderData from './features/orderData';
import editOrderData from './features/editOrederData';

export const store = configureStore({
  reducer: {
    assignmentData: allAssignmentData,
    orderData: allOrderData,
    editOrder: editOrderData,
  },
});
