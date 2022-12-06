import React from 'react';
import CustomerLayout from './CustomerLayout';
import { Children } from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <CustomerLayout>{children}</CustomerLayout>
    </div>
  );
};

export default Layout;
