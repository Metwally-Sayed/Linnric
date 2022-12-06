import React from 'react';
import Layout from './Layout';
import NewOrderBtn from './NewOrderBtn';
import Sort from './Sort';
import EmptyOredersList from './EmptyOredersList';
const MyOrderLayout = ({ children }) => {
  return (
    <div className="py-6 z-0 rounded">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 flex justify-between ">
        <h1 className="text-2xl font-semibold text-gray-900">My Order</h1>
        <NewOrderBtn />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-8">
        <Sort />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="py-6 rounded">{children}</div>
      </div>
    </div>
  );
};

export default MyOrderLayout;
