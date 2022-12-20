import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

const AssignmentDeadline = ({ assignmentDataCollecter }) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <Combobox as="div">
        <Combobox.Label className="block text-sm font-medium dark:text-white text-gray-700">
          Deadline:
        </Combobox.Label>
        <div className="relative mt-1">
          <input
            type="date"
            name="party"
            min="2017-04-01"
            max="2030-04-20"
            required
            className="w-full rounded-md border border-gray-300 bg-[#F3F4F6] dark:text-black py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
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
    </div>
  );
};
export default AssignmentDeadline;
