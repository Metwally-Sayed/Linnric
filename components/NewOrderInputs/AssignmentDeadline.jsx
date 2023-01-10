import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

const AssignmentDeadline = ({ assignmentDataCollecter }) => {
  let today = new Date().toLocaleDateString();
  return (
    <div className="flex flex-col justify-start w-full md:flex-row ">
      <Combobox className="mr-3 w-full " as="div">
        <Combobox.Label className="block text-sm font-medium mr-3 dark:text-white text-gray-700">
          Deadline:
        </Combobox.Label>
        <div className="relative mt-1 w-[260px] md:w-auto">
          <input
            type="date"
            name="party"
            min={today}
            max="2090-04-20"
            required
            className="w-full dark:bg-[#33415a] rounded-md border border-gray-300 bg-[#F3F4F6]  py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
            onChange={(e) => {
              assignmentDataCollecter(
                'assignmentDeadline',
                JSON.stringify(e.target.value),
              );
            }}
            placeholder="Deadline*"
          />
        </div>
      </Combobox>
      <Combobox as="div">
        <div className="relative mt-6 w-[260px] md:w-auto">
          <input
            type="time"
            name="time"
            required
            className="w-full dark:bg-[#33415a] rounded-md border border-gray-300 bg-[#F3F4F6]  py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
            onChange={(e) => {
              assignmentDataCollecter(
                'time_js',
                JSON.stringify(e.target.value),
              );
            }}
            placeholder="Deadline*"
          />
        </div>
      </Combobox>
    </div>
  );
};
export default AssignmentDeadline;
