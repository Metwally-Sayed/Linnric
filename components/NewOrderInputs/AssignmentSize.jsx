import React from 'react';

const AssignmentSize = () => {
  return (
    <>
      <p className='className="block text-sm font-medium  dark:text-white text-gray-700'>
        Assignment size:
      </p>
      <div className=" flex w-[70%] mt-3 ">
        <div className="w-[30%]">
          <label className="text-gray-500 md:text-lg text-[0.65rem]  dark:text-white ">
            Pages:
          </label>
          <input
            type="number"
            placeholder="Pages*"
            className="w-[88%] bg-[#F3F4F6] rounded-md border border-gray-300   shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm "
          />{' '}
        </div>
        <div className="w-[30%]">
          {' '}
          <label className="  dark:text-white text-gray-500 md:text-lg text-[0.65rem]">
            Words:
          </label>
          <input
            type="number"
            className="w-[88%]  bg-[#F3F4F6] rounded-md border border-gray-300   shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
            placeholder="Words*"
          />
        </div>
        <div className="w-[30%]">
          {' '}
          <label className="  dark:text-white text-gray-500 break-all whitespace-pre-line md:text-lg text-[0.65rem] m-0 p-0">
            Line spacing:
          </label>
          <input
            placeholder="Line spacing*"
            type="number"
            className="w-[90%]  bg-[#F3F4F6] rounded-md border border-gray-300  shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
          />{' '}
        </div>
      </div>
    </>
  );
};

export default AssignmentSize;
