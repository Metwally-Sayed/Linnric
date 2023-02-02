import React from 'react';
import { Fragment, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const AssignmentEducationLevel = ({ assignmentDataCollecter, formData }) => {
  const [
    assignmentassignmentEducationLevel,
    setAssignmentassignmentEducationLevel,
  ] = useState([
    { id: '1', name: 'High School' },
    { id: '2', name: 'College' },
    { id: '3', name: 'University' },
    { id: '4', name: 'Master' },
    { id: '5', name: 'Doctorate' },
  ]);

  const [query, setQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filtered =
    query === ''
      ? assignmentassignmentEducationLevel
      : assignmentassignmentEducationLevel.filter((assignmentassignment) => {
        return assignmentassignment.name
          .toLowerCase()
          .includes(query.toLowerCase());
      });

  return (
    <>
      <div className="flex w-full">
        <Combobox as="div" className="flex flex-col w-[100%]" value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Label className="block text-sm font-medium text-gray-700"></Combobox.Label>
          <div className="relative  mt-6">
            <Combobox.Input
              className="w-full rounded-md border border-gray-300 bg-[#F3F4F6] py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm dark:bg-[#33415a]"
              onChange={(event) => {
                setQuery(event.target.value);
                assignmentDataCollecter('education', event.target.value);
              }}
              displayValue={(assignmentassignmentEducationLevel) =>
                assignmentassignmentEducationLevel?.name ? assignmentassignmentEducationLevel?.name : formData.education
              }
              placeholder="Education Level*"
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filtered.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filtered.map((assignmentassignment) => (
                  <Combobox.Option
                    key={assignmentassignment.id}
                    value={assignmentassignment}
                    className={({ active }) =>
                      classNames(
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                        active ? 'bg-[#367fd3] text-white' : 'text-gray-900',
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={classNames(
                            'block truncate',
                            selected && 'font-semibold',
                          )}
                        >
                          {assignmentassignment.name}
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                              active ? 'text-white' : 'text-[#367fd3]',
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
      </div>
    </>
  );
};

export default AssignmentEducationLevel;
