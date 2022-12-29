import React from 'react';
import CustomerLayout from './CustomerLayout';
import { Children } from 'react';

const CustomerLayoutWrapper = ({ children }) => {
  return (
    <div>
      <CustomerLayout>{children}</CustomerLayout>
    </div>
  );
};

export default CustomerLayoutWrapper;
