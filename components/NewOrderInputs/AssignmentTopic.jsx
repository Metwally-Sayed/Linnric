import React from 'react';
import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const AssignmentTopic = ({ assignmentDataCollecter }) => {
  return (
    <>
      <div className="col-span-6 sm:col-span-3">
        <Combobox as="div" value="" onChange={''}>
          <Combobox.Label className="block text-sm font-medium text-gray-700 dark:text-white">
            Assignment topic:
          </Combobox.Label>
          <div className="relative mt-1">
            <input
              onChange={(e) => {
                assignmentDataCollecter('assigment_topic', e.target.value);
              }}
              className="w-full rounded-md border dark:text-black border-gray-300 bg-[#F3F4F6] py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
            />
          </div>
        </Combobox>
      </div>
    </>
  );
};

export default AssignmentTopic;
