import React from 'react';
import NewOrderBtn from './NewOrderBtn';

const EmptyOredersList = () => {
  return (
    <>
      <div className="bg-white flex justify-center flex-col items-center min-h-[350px]">
        <p className="py-10 ">You have no Active Orders</p>
        <NewOrderBtn />
      </div>
    </>
  );
};

export default EmptyOredersList;
