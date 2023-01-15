import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { AiOutlineClose } from 'react-icons/ai';

import axios from 'axios';

const EditOrder = ({ orderData }) => {
  const [updateFormData, setUpdateFormData] = useState({});
  console.log(orderData);

  return (
    <>
      <div className="flex justify-center flex-col items-center ">
        {Array.isArray
          ? orderData.map((order, idx) => {
              return (
                <div
                  key={idx}
                  className="overflow-hidden items-center  dark:bg-[#273142] dark:text-white shadow sm:rounded-lg max-w-full md:w-[60%] w-full mt-[120px]"
                >
                  <div className="px-4 py-5 sm:px-6 bg-gray-200 dark:bg-[#273142] flex justify-between ">
                    <div className="">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                        {order.assigment_topic}
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        {order.assignment_details}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6 bg-gray-200 dark:bg-[#273142] ">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Assigment Type
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">
                          {order.assigment_type}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Deadline
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">
                          {new Date(order.deadline).toLocaleDateString('en-GB')},{' '}
                          {order.time_js}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Instruction
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">
                          {order.instruction}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          words
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">
                          {' '}
                          {order.words}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Pages
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">
                          {order.pages}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Line Spacing
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">
                          {order.line_spacing}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Style
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">
                          {order.style}
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          Subject
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">
                          {order.subject}
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          Attachments
                        </dt>
                        {order.File.map((item, idx) => {
                          return (
                            <dd
                              key={idx}
                              className="mt-2 text-sm text-gray-900 dark:text-gray-300"
                            >
                              <ul
                                role="list"
                                className="divide-y divide-gray-200 rounded-md border border-gray-200"
                              >
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                  <div className="flex w-0 flex-1 items-center">
                                    <a
                                      href={item.field_id}
                                      target="_blank"
                                      className="ml-2 w-0 flex-1 truncate"
                                      rel="noreferrer"
                                    >
                                      {item.field_id}
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </dd>
                          );
                        })}
                      </div>
                    </dl>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default EditOrder;

export const getServerSideProps = async (context) => {
  const token = await context.req.cookies.userrefreshToken;
  const id = context.params?.id;
  const config = {
    method: 'get',
    url: 'https://backend420.linnric.com/api/v1/get_client_detail_order/' + id,
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie: 'Cookie_1=value',
    },
  };

  const Data = await axios(config);
  const orderData = await Data.data.data;

  return {
    props: { orderData },
  };
};
