import React from 'react';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';

const OrderPage = ({ orderData }) => {
  const cookies = new Cookies();
  const token = cookies.get('writerrefreshToken');

  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  const [files, setFiles] = useState([]);

  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const fileObj = (await event.target.files) && event.target.files[0];
    if (!fileObj) {
      return;
    }
    console.log('fileObj is', fileObj);

    event.target.value = null;

    console.log(fileObj);

    const formData = new FormData();
    formData.append('file', fileObj);
    formData.append('upload_preset', 'dmaf6vws');
    try {
      const sendData = async () => {
        const res = await axios.post(
          'https://api.cloudinary.com/v1_1/dr7qu1s4l/image/upload',
          formData,
        );
        console.log(res);
        if (res.status === 200) {
          const { url } = await res.data;
          setFiles((prev) => {
            return [...prev, { file: url }];
          });

          console.log(files);
        }
        return res;
      };
      await sendData();
      console.log(files);
    } catch (error) {
      console.log(error);
    }

    const saveData = async () => {
      const data = { Idorder: +id, File: files };
      console.log(data);
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);
      myHeaders.append('Content-Type', 'application/json');
      const raw = JSON.stringify({
        data,
      });
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      fetch(
        'https://backend420.linnric.com/api/v1/writer/submit_files',
        requestOptions,
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
    };
    await saveData();
  };

  const changeHandler = (event) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', 'dmaf6vws');
    try {
      const sendData = async () => {
        const res = await axios.post(
          'https://api.cloudinary.com/v1_1/dr7qu1s4l/image/upload',
          formData,
        );
        const { url } = await res.data;
        setFiles((prev) => {
          return [...prev, { field_id: url }];
        });
        assignmentDataCollecter('File', url);
        return res;
      };
      sendData();
    } catch (error) {
      console.log(error);
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
                    <div
                      onClick={() => handleClick()}
                      className="bg-blue-600 hover:bg-blue-500 px-9 py-2  rounded-lg text-md font-semibold "
                    >
                      <input
                        ref={inputRef}
                        onChange={handleFileChange}
                        type="file"
                        id="file"
                        style={{ display: 'none' }}
                      />
                      Submit
                    </div>
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
                        {new Date(item.deadline).toLocaleDateString('en-GB')},
                        {item.time_js}
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

export default OrderPage;

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
