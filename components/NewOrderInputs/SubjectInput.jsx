import React from 'react';
import { Fragment, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const people = [
  { id: 1, name: 'Leslie Alexander', url: '#' },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const SubjectInput = ({ assignmentDataCollecter }) => {
  const [assignmentSubject, setAssignmentSubject] = useState([
    { id: '1', name: 'Advertising' },
    { id: '2', name: 'Agriculture' },
    { id: '3', name: 'Algebra' },
    { id: '4', name: 'American History' },
    { id: '5', name: 'American Literature' },
    { id: '6', name: 'Anatomy' },
    { id: '7', name: 'Ancient Literature' },
    { id: '8', name: 'Anthropology' },
    { id: '9', name: 'Application Writing' },
    { id: '10', name: 'Architecture' },
    { id: '11', name: 'Art' },
    { id: '12', name: 'Astronomy' },
    { id: '13', name: 'Aviation' },
    { id: '14', name: 'Biology' },
    { id: '15', name: 'Business and manageme' },
    { id: '16', name: 'Criminology' },
    { id: '17', name: 'Cryptography' },
    { id: '18', name: 'Cultural Studies' },
    { id: '19', name: 'Dance' },
    { id: '20', name: 'Dentistry' },
    { id: '21', name: 'Drama and Theatre' },
    { id: '22', name: 'Economics' },
    { id: '23', name: 'Education' },
    { id: '24', name: 'Engineering' },
    { id: '25', name: 'English' },
    { id: '26', name: 'Entrepreneurship' },
    { id: '27', name: 'Environmental Science' },
    { id: '28', name: 'Ethics' },
  ]);
  const [query, setQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredPeople =
    query === ''
      ? assignmentSubject
      : assignmentSubject.filter((subject) => {
          return subject.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <div className="col-span-6 sm:col-span-3">
        <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Label className="block text-sm font-medium dark:text-white text-gray-700">
            Subject:
          </Combobox.Label>
          <div className="relative mt-1">
            <Combobox.Input
              className="w-full rounded-md border dark:bg-[#33415a] border-gray-300 bg-[#F3F4F6] py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
              onChange={(event) => {
                setQuery(event.target.value);
                assignmentDataCollecter('subject', event.target.value);
              }}
              displayValue={(person) => person?.name}
              placeholder="Select subject"
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

export default SubjectInput;
