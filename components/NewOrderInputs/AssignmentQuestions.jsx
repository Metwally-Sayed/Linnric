import React from 'react';

const AssignmentQuestions = ({ assignmentDataCollecter }) => {
  return (
    <>
      <p className='className="block text-sm font-medium  dark:text-white text-gray-700'>
        Assignment questions:
      </p>
      <div className=" flex w-[70%] flex-col mt-3 ">
        <div className="w-[70%] flex flex-col ">
          <label className="text-gray-500 md:text-sm font-semibold text-[0.65rem] dark:text-white ">
            Questions Numbers:
          </label>
          <input
            type="text"
            placeholder="Questions Numbers*"
            className="w-[70%] bg-[#F3F4F6] rounded-md border border-gray-300 dark:bg-[#33415a]  shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm "
            onChange={(e) => {
              assignmentDataCollecter('pages', e.target.value);
            }}
          />{' '}
        </div>
      </div>
    </>
  );
};

export default AssignmentQuestions;
