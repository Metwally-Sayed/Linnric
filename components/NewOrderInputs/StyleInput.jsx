import React from 'react';
import { Fragment, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const StyleInput = ({ assignmentDataCollecter,formData }) => {
  const [assignmentStyle, setAssignmentStyle] = useState([
    { id: 1, name: 'APA 6th edition' },
    { id: 2, name: 'APA 7th edition' },
    { id: 3, name: 'Bluebook' },
    { id: 4, name: 'Chicago/Turabian' },
    { id: 5, name: 'Harvard' },
    { id: 6, name: 'IEEE' },
    { id: 7, name: 'MLA' },
    { id: 8, name: 'Other' },
    { id: 9, name: 'Not Apllicable' },
  ]);
  const [query, setQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredPeople =
    query === ''
      ? assignmentStyle
      : assignmentStyle.filter((style) => {
          return style.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <div className="col-span-6 sm:col-span-3 mt-5">
        <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Label className="block text-sm font-medium text-gray-700 dark:text-white "></Combobox.Label>
          <div className="relative mt-1">
            <Combobox.Input
              className="w-full rounded-md border dark:bg-[#33415a] border-gray-300 bg-[#F3F4F6] py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
              onChange={(event) => {
                setQuery(event.target.value);
                assignmentDataCollecter('style', event.target.value);
              }}
              displayValue={(assignmentStyle) => assignmentStyle?.name?assignmentStyle?.name:formData?.style}
              placeholder="Select style"
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
        </Combobox>
      </div>
    </>
  );
};

export default StyleInput;
