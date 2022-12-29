import React from 'react';
import WriterLayout from './WriterLayout';
import { Children } from 'react';

const CustomerLayoutWrapper = ({ children }) => {
  return (
    <div>
      <WriterLayout>{children}</WriterLayout>
    </div>
  );
};

export default CustomerLayoutWrapper;
