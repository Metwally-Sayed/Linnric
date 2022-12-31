import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import axios from 'axios';

const Availableorder = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const id = router.query.id;
  const idURL = router.asPath.split('/')[3];
  const [orderId, setOrderId] = useState([]);
  const [orderdara, setOrderData] = useState([]);
  console.log(
    `https://backend420.linnric.com/api/v1/writer/detail_order/${orderId}`,
  );

  const getWriterOrder = async () => {
    const token = cookies.get('writerrefreshToken');
    try {
      const getData = await axios.get(
        `https://backend420.linnric.com/api/v1/writer/detail_order/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setOrderData(getData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setOrderId(window.sessionStorage.getItem('writerOrderId'));
    getWriterOrder();
  }, []);

  return (
    <div className="flex justify-center items-center md:mt-20  ">
      {Array.isArray
        ? orderdara.map((order, idx) => {
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
                    <button className="bg-blue-500 hover:bg-blue-500 px-9 py-1 rounded-lg text-sm ">
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
                      <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">
                        <ul
                          role="list"
                          className="divide-y divide-gray-200 rounded-md border border-gray-200"
                        >
                          <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                            <div className="flex w-0 flex-1 items-center">
                              {/* <PaperClipIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              /> */}
                              <span className="ml-2 w-0 flex-1 truncate">
                                {order.file}
                              </span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <button className="font-medium text-blue-600 hover:text-blue-500">
                                Download
                              </button>
                            </div>
                          </li>
                        </ul>
                      </dd>
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
