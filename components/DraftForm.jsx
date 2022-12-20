import React, { useState } from 'react';
import AssignmentTopic from './NewOrderInputs/AssignmentTopic';
import SubjectInput from './NewOrderInputs/SubjectInput';
import StyleInput from './NewOrderInputs/StyleInput';
import { useSelector } from 'react-redux';
import { postingOrderHandler } from '../utilities/apiFunctions';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('accessToken');
console.log(token);

const DraftForm = () => {
  const firstFormdata = useSelector((state) => state.assignmentData);
  const [formData, setFormData] = useState({});
  const assignmentDataCollecter = (dataKey, data) => {
    setFormData({ ...formData, [dataKey]: data });
    // console.log(formData);
  };
  console.log(firstFormdata);
  console.log(formData);
  const AllFormData = { ...firstFormdata, ...formData };
  console.log(AllFormData);
  const submitHandler = (e) => {
    e.preventDefault();
    postingOrderHandler(
      AllFormData,
      token,
      'https://backend420.linnric.com/api/v1/create_order',
    );
  };

  const changeHandler = (event) => {
    assignmentDataCollecter('file', event.target.files[0]);
  };

  return (
    <div className="mx-auto my-11 max-w-full shadow-lg bg-white dark:bg-[#273142] ">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={submitHandler}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6 dark:bg-[#273142] ">
                  <div className="my-5">
                    <AssignmentTopic
                      assignmentDataCollecter={assignmentDataCollecter}
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-6 mt-20 ">
                    <StyleInput
                      assignmentDataCollecter={assignmentDataCollecter}
                    />
                    <SubjectInput
                      assignmentDataCollecter={assignmentDataCollecter}
                    />
                    {/* <SourcesInput /> */}
                  </div>
                  <div className="mt-20">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md bg-[#F3F4F6] border-gray-300 py-3 px-4 shadow-sm dark:text-black focus:border-[#367fd3] focus:ring-[#367fd3]"
                        defaultValue={''}
                        onChange={(e) => {
                          assignmentDataCollecter(
                            'instruction',
                            e.target.value,
                          );
                        }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6 mt-20">
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400  dark:text-white"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600 dark:text-white ">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md  font-medium text-[#367fd3] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#367fd3] focus-within:ring-offset-2 hover:text-[#629ada]"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={changeHandler}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#273142] px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#367fd3]  py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#367fd3] focus:ring-offset-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftForm;
