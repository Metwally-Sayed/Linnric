import React from 'react';

const AssignmentSize = () => {
  return (
    <>
      <p className='className="block text-sm font-medium text-gray-700'>
        Assignment size:
      </p>
      <div className=" flex w-[60%] mt-5">
        <div className="w-[26%]">
          <label className="text-gray-500">Pages:</label>
          <input
            type="number"
            className="w-[88%] bg-[#F3F4F6] rounded-md border border-gray-300   shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm "
          />{' '}
        </div>
        <div className="w-[26%]">
          {' '}
          <label className="text-gray-500">Words:</label>
          <input
            type="number"
            className="w-[88%] bg-[#F3F4F6] rounded-md border border-gray-300   shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
          />
        </div>
        <div className="w-[26%]">
          {' '}
          <label className="text-gray-500">Line spacing:</label>
          <input
            type="number"
            className="w-[88%] bg-[#F3F4F6] rounded-md border border-gray-300  shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
          />{' '}
        </div>
      </div>
    </>
  );
};

export default AssignmentSize;
