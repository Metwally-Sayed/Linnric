import React from 'react';
import { Fragment, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AssignmentDetails = ({ assignmentDataCollecter, formData }) => {
  const [assignmentDetails, setAssignmentDetails] = useState([
    { id: '1', name: 'Writing' },
    { id: '2', name: 'Rewriting' },
    { id: '3', name: 'Editing' },
    { id: '4', name: 'Proofreading' },
    { id: '5', name: 'Problem Solving' },
    { id: '6', name: 'Calculations' },
  ]);
  const [query, setQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [error, setError] = useState(false);

  const filteredPeople =
    query === ''
      ? assignmentDetails
      : assignmentDetails.filter((assignment) => {
        return assignment.name.toLowerCase().includes(query.toLowerCase());
      });

  return (
    <>
      <div className="flex w-[100%]">
        <Combobox as="div" className="flex flex-col w-[100%]" value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Label className="block text-base font-medium dark:text-white text-gray-700">
            Assignment details:
          </Combobox.Label>
          <div className="relative mt-1">
            <Combobox.Input
              required
              className="w-full rounded-md border border-gray-300 dark:bg-[#33415a] bg-[#F3F4F6] py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
              onChange={(event) => {
                setQuery(event.target.value);
                assignmentDataCollecter(
                  'assignment_details',
                  event.target.value,
                );
              }}
              displayValue={(assignmentDetails) => assignmentDetails?.name ? assignmentDetails?.name : formData.assignment_details}
              placeholder="Service*"
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filteredPeople.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    value={person}
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
                          {person.name}
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
          {error && (
            <p className="p-0 mt-1 text-[10px] text-red-400 h-0 w-auto">
              Please add assignment details *
            </p>
          )}
        </Combobox>
      </div>
    </>
  );
};

export default AssignmentDetails;
