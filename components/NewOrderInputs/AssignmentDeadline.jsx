import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

const AssignmentDeadline = ({ assignmentDataCollecter,formData }) => {
  let today = new Date().toLocaleDateString();

  var date = new Date(formData?.deadline);

var year = date.getFullYear();
var month = (date.getMonth() + 1).toString().padStart(2, "0");
var day = date.getDate().toString().padStart(2, "0");

var outputDateStr = year + "-" + month + "-" + day;
  return (
    <div className="flex flex-col w-full md:flex-row md:justify-between ">
      <Combobox className="md:w-1/3" as="div">
        <Combobox.Label className="block text-base font-medium mr-3 dark:text-white text-gray-700">
          Deadline:
        </Combobox.Label>
        <div className="relative mt-1 w-[100%] md:w-full md:flex]">
          <input
            type="date"
            name="party"
            min={today}
            max="2090-04-20"
            required
            value={outputDateStr}
            className="w-full dark:bg-[#33415a] rounded-md border border-gray-300 bg-[#F3F4F6]  py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
            onChange={(e) => {
              assignmentDataCollecter('deadline', new Date(e.target.value));
            }}
            placeholder="Deadline*"
          />
        </div>
      </Combobox>
      <Combobox className="md:w-1/3" as="div">
        <div className="relative mt-6 w-[100%] md:w-auto">
          <input
            type="time"
            name="time"
            required
            value={formData?.time_js?JSON.parse(formData?.time_js):null}
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
