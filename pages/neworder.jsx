import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import NewOrderFrom from '../components/NewOrderFrom';
const neworder = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto w-full my-8   flex justify-between">
          <h1 className="text-5xl font-bold">Create new order</h1>
          <button className="bg-white w-10 h-10 flex items-center justify-center rounded border-spacing-10 shadow-lg text-lg">
            <AiOutlineClose />
          </button>
        </div>
        <NewOrderFrom />
      </div>
    </>
  );
};

export default neworder;
