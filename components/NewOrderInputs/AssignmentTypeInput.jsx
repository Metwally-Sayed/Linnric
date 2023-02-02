import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function AssignmentTypeInput({ assignmentDataCollecter, formData }) {
  const [assignments, setAssignment] = useState([
    { id: '1', name: 'Paperwork', questions: 'false' },
    { id: '2', name: 'Coursework', questions: 'false' },
    { id: '3', name: 'Business Proposal', questions: 'false' },
    { id: '4', name: 'Case study', questions: 'false' },
    { id: '5', name: 'Letter/Memos', questions: 'false' },
    { id: '6', name: 'Literature Review', questions: 'false' },
    { id: '7', name: 'Marketing Plan', questions: 'false' },
    { id: '8', name: 'Outline', questions: 'false' },
    { id: '9', name: 'Personal Narrative', questions: 'false' },
    { id: '10', name: 'Presentation or Speech', questions: 'false' },
    { id: '11', name: 'Reaction Paper', questions: 'false' },
    { id: '12', name: 'Essay (any type)', questions: 'false' },
    { id: '13', name: 'Reflective Writing', questions: 'false' },
    { id: '14', name: 'Report', questions: 'false' },
    { id: '15', name: 'Research Paper', questions: 'false' },
    { id: '16', name: 'Research Proposal', questions: 'false' },
    { id: '17', name: 'SWOT Analysis', questions: 'false' },
    { id: '18', name: 'Term Paper', questions: 'false' },
    { id: '19', name: 'Thesis/Dissertation', questions: 'false' },
    { id: '20', name: 'PowerPoint Presentation', questions: 'false' },
    { id: '21', name: 'Other', questions: 'false' },
    { id: '22', name: 'Homework Help', questions: 'false' },
    { id: '23', name: 'Admission Essay', questions: 'false' },
    { id: '24', name: 'Homework Assignment (Any Type)', questions: 'true' },
    { id: '25', name: 'Biology Assignment', questions: 'true' },
    { id: '26', name: 'Chemistry Assignment', questions: 'true' },
    { id: '27', name: 'Engineering Assignment', questions: 'true' },
    { id: '28', name: 'Geography Assignment', questions: 'true' },
    { id: '29', name: 'Math Assignment', questions: 'true' },
    { id: '30', name: 'Physics Assignment', questions: 'true' },
    { id: '31', name: 'Statistics Assignment', questions: 'true' },
    { id: '32', name: 'Other Assignment', questions: 'true' },
    { id: '33', name: 'Questions & Problems', questions: 'true' },
    {
      id: '34',
      name: 'PowerPoint Presentation with, speaker notes',
      questions: 'false',
    },
    { id: '35', name: 'Multiple choice questions', questions: 'false' },
    { id: '36', name: 'Short Answer Questions', questions: 'false' },
    { id: '37', name: 'Word Problems', questions: 'false' },
    { id: '38', name: 'Programming', questions: 'false' },
    { id: '39', name: 'Excel Assignment', questions: 'true' },
    { id: '40', name: 'Economics Assignment', questions: 'true' },
    { id: '41', name: 'Accounting Assignment', questions: 'true' },
    { id: '42', name: 'Annotated Bibliography', questions: 'false' },
    { id: '43', name: 'Article Review', questions: 'false' },
    { id: '44', name: 'Article Writing', questions: 'false' },
    { id: '45', name: 'Book/Movie Review', questions: 'false' },
    { id: '46', name: 'Business Plan', questions: 'false' },
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
              required
              className="w-full rounded-md border border-gray-300 bg-[#F3F4F6] py-2 pl-3 pr-10 shadow-sm dark:bg-[#33415a] focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm  "
              onChange={(event) => {
                setQuery(event.target.value);
                assignmentDataCollecter('assigment_type', event.target.value);
              }}
              displayValue={(assignment) => assignment?.name?assignment?.name:formData.assigment_type}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filteredPeople.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white   py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
