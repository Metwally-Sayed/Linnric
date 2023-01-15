import React, { useState } from 'react';
import Cookies from 'universal-cookie';

const AssignmentSize = ({ assignmentDataCollecter }) => {
  const cookies = new Cookies();

  const allCockies = cookies.getAll();

  const [pages, setPages] = useState(0);
  const [words, setWords] = useState('550');
  const [space, setSpace] = useState('');

  const checker = (value) => {
    if (value === 'Single') {
      setWords('550');
      assignmentDataCollecter('words', '550');
    }
    if (value === 'Double') {
      setWords('275');
      assignmentDataCollecter('words', '275');
      console.log(space);
    }
  };

  return (
    <>
      <p className='className="block text-sm font-medium  dark:text-white text-gray-700'>
        Assignment size:
      </p>
      <div className=" flex flex-col md:flex-row md:w-[70%] mf:mt-0 mt-3 ">
        <div className="w-[30%]">
          <label className="text-gray-500 md:text-lg text-[0.55rem]  dark:text-white ">
            Pages:
          </label>
          <div>
            <input
              type="number"
              placeholder="Pages*"
              value={pages}
              className="w-[88%] bg-[#F3F4F6] rounded-md border border-gray-300 dark:bg-[#33415a]  shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm "
              onChange={(e) => {
                setPages(e.target.value);
                assignmentDataCollecter('pages', e.target.value);
              }}
            />{' '}
          </div>
        </div>
        <div className="w-[30%]">
          {' '}
          <label className="  dark:text-white text-gray-500 md:text-lg text-[0.45rem]">
            Words per one page:
          </label>
          <input
            type="number"
            className="w-[88%]  bg-[#F3F4F6] rounded-md border border-gray-300  dark:bg-[#33415a]  shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
            placeholder="Words*"
            value={words}
            onChange={(e) => {
              setWords(e.target.value);
              assignmentDataCollecter('words', e.target.value);
            }}
          />
        </div>
        <div className="w-[30%]">
          {' '}
          <label className="  dark:text-white text-gray-500 break-all whitespace-pre-line md:text-lg text-[0.65rem] m-0 p-0">
            Line spacing:
          </label>
          <select
            onChange={(e) => {
              cookies.set('Line_spacing', e.target.value);
              checker(e.target.value);
              console.log(e.target.value);
            }}
            className="w-[90%] bg-[#F3F4F6] rounded-md border border-gray-300  dark:bg-[#33415a] shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
          >
            <option
              onChange={(e) => {
                console.log(e);

                assignmentDataCollecter('line_spacing', e.target.value);
              }}
            >
              Single
            </option>
            <option
              onClick={(e) => {
                console.log(e);

                assignmentDataCollecter('line_spacing', e.target.value);
              }}
            >
              Double
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default AssignmentSize;
