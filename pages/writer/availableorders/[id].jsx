import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import axios from 'axios';

const Availableorder = ({ orderData }) => {
  console.log(orderData);
  const cookies = new Cookies();
  const router = useRouter();
  const id = router.query.id;
  const [orderId, setOrderId] = useState([]);

  const token = cookies.get('writerrefreshToken');



  const startHandler = async () => {
    try {
      const start = await axios.get(
        `https://backend420.linnric.com/api/v1/writer/start_order/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // mode: cors,
            //   'Access-Control-Allow-Origin': '*',
            //   'Content-Type': 'application/json',
            //   mode: 'no-cors',
          },
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center md:mt-20  ">
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
                  <div>
                    <button
                      onClick={startHandler}
                      className="bg-blue-600 hover:bg-blue-500 px-9 py-2  rounded-lg text-md font-semibold "
                    >
                      start
                    </button>
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
                        {order.deadline}
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
                                <div className="ml-4 flex-shrink-0">
                                  <button className="font-medium text-blue-600 hover:text-blue-500">
                                    Download
                                  </button>
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
  );
};

export default Availableorder;

export const getServerSideProps = async (context) => {
  const token = await context.req.cookies.writerrefreshToken;
  const id = context.params?.id;
  const config = {
    method: 'get',
    url: `https://backend420.linnric.com/api/v1/writer/detail_order/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie: 'Cookie_1=value',
    },
  };

  const Data = await axios(config);
  // console.log(Data);
  const orderData = await Data.data.data;

  return {
    props: { orderData },
  };
};
