import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function AssignmentTypeInput({ assignmentDataCollecter }) {
  const [assignments, setAssignment] = useState([
    { id: '1', name: 'Paperwork' },
    { id: '2', name: 'Coursework' },
    { id: '3', name: 'Business Proposal' },
    { id: '4', name: 'Case study' },
    { id: '5', name: 'Letter/Memos' },
    { id: '6', name: 'Literature Review' },
    { id: '7', name: 'Marketing Plan' },
    { id: '8', name: 'Outline' },
    { id: '9', name: 'Personal Narrative' },
    { id: '10', name: 'Presentation or Speech' },
    { id: '11', name: 'Reaction Paper' },
    { id: '12', name: 'Essay (any type)' },
    { id: '13', name: 'Reflective Writing' },
    { id: '14', name: 'Report' },
    { id: '15', name: 'Research Paper' },
    { id: '16', name: 'Research Proposal' },
    { id: '17', name: 'SWOT Analysis' },
    { id: '18', name: 'Term Paper' },
    { id: '19', name: 'Thesis/Dissertation' },
    { id: '20', name: 'PowerPoint Presentation' },
    { id: '21', name: 'Other' },
    { id: '22', name: 'Homework Help' },
    { id: '23', name: 'Admission Essay' },
    { id: '24', name: 'Homework Assignment (Any Type)' },
    { id: '25', name: 'Biology Assignment' },
    { id: '26', name: 'Chemistry Assignment' },
    { id: '27', name: 'Engineering Assignment' },
    { id: '28', name: 'Geography Assignment' },
    { id: '29', name: 'Math Assignment' },
    { id: '30', name: 'Physics Assignment' },
    { id: '31', name: 'Statistics Assignment' },
    { id: '32', name: 'Other Assignment' },
    { id: '33', name: 'Questions & Problems' },
    { id: '34', name: 'PowerPoint Presentation with, speaker notes' },
    { id: '35', name: 'Multiple choice questions' },
    { id: '36', name: 'Short Answer Questions' },
    { id: '37', name: 'Word Problems' },
    { id: '38', name: 'Programming' },
    { id: '38', name: 'Excel Assignment' },
    { id: '39', name: 'Economics Assignment' },
    { id: '40', name: 'Accounting Assignment' },
    { id: '41', name: 'Annotated Bibliography' },
    { id: '42', name: 'Article Review' },
    { id: '43', name: 'Article Writing' },
    { id: '44', name: 'Book/Movie Review' },
    { id: '45', name: 'Business Plan' },
  ]);

  const [query, setQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredPeople =
    query === ''
      ? assignments
      : assignments.filter((assignment) => {
          return assignment.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <div className="col-span-6 sm:col-span-3">
        <Combobox as="div" onChange={setSelectedPerson}>
          <Combobox.Label className="block text-sm font-medium text-gray-700 dark:text-white">
            Assignment type:
          </Combobox.Label>
          <div className="relative mt-1">
            <Combobox.Input
              className="w-full rounded-md border border-gray-300 bg-[#F3F4F6] py-2 pl-3 pr-10 shadow-sm dark:bg-[#33415a] focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm  "
              onChange={(event) => {
                setQuery(event.target.value);
                assignmentDataCollecter('assigment_type', event.target.value);
              }}
              displayValue={(assignment) => assignment?.name}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filteredPeople.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-[#33415a]  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
}
