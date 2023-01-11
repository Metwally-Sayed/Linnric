import React, { useState, useEffect } from 'react';
import AssignmentTopic from './NewOrderInputs/AssignmentTopic';
import SubjectInput from './NewOrderInputs/SubjectInput';
import StyleInput from './NewOrderInputs/StyleInput';
import { useSelector, useDispatch } from 'react-redux';
import { postingOrderHandler } from '../utilities/apiFunctions';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import { editingOrderHandler } from '../utilities/apiFunctions';
import { getOrderPrice } from '../utilities/apiFunctions';
import { getOrderPayData } from '../redux/features/orderPayData';
import axios from 'axios';

const cookies = new Cookies();
const token = cookies.get('userrefreshToken');

const DraftForm = ({ editOrderData }) => {
  const dispatch = useDispatch();
  let id = 0;
  Array.isArray(editOrderData)
    ? editOrderData.map((order) => {
        id = order.ID;
      })
    : null;

  const router = useRouter();
  const firstFormdata = useSelector((state) => state.assignmentData);
  const [formData, setFormData] = useState({});
  const [docURL, setDocURL] = useState('');
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(window.sessionStorage.getItem('orderPrice'));
  }, [price]);

  const assignmentDataCollecter = (dataKey, data) => {
    setFormData({ ...formData, [dataKey]: data });
  };
  const endpoint = `https://backend420.linnric.com/api/v1/update_client_orders/${id}`;

  const AllFormData = { ...firstFormdata, ...formData };

  const orderPrice = {
    service: AllFormData.assignment_details,
    education: AllFormData.assignmentEducationLevel,
    topic: AllFormData.assigment_type,
    pages: AllFormData.pages,
  };
  console.log(AllFormData);

  console.log(orderPrice);

  const data = useSelector((state) => console.log(state.orderPayData));

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(getOrderPayData(AllFormData));

    // const myHeaders = new Headers();
    // myHeaders.append('Authorization', `Bearer ${token}`);
    // myHeaders.append('Cookie', 'Cookie_1=value');

    // const requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   redirect: 'follow',
    // };

    // fetch(
    //   `https://backend420.linnric.com/api/v1/estimate_order_price?service=${AllFormData.assignment_details}&education=${AllFormData.assignmentEducationLevel}&topic=${AllFormData.assigment_type} Plan&pages=${AllFormData.pages}`,
    //   requestOptions,
    // )
    //   .then((response) => response.json())
    //   .then((result) =>
    //     sessionStorage.setItem('orderPrice', result.Total_price),
    //   )
    //   .catch((error) => console.log('error', error));

    router.push('/customer/payment');
  };

  const editHandler = (e) => {
    e.preventDefault();
    editingOrderHandler(formData, token, endpoint);

    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append('Cookie', 'Cookie_1=value');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      `https://backend420.linnric.com/api/v1/estimate_order_price?service=${AllFormData.assignment_details}&education=${AllFormData.assignmentEducationLevel}&topic=${AllFormData.assigment_type} Plan&pages=${AllFormData.pages}`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        sessionStorage.setItem('orderPrice', result.Total_price),
          router.push('/customer/active');
      })
      .catch((error) => console.log('error', error));
  };

  const changeHandler = (event) => {
    const formData = new FormData();
    setFileName(event.target.files[0].name);
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
        return res;
      };
      sendData();

      assignmentDataCollecter('File', files);
    } catch (error) {
      console.log(error);
    }
  };

  const currentURL = router.pathname;

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
                        className="block w-full rounded-md bg-[#F3F4F6] border-gray-300 py-3 px-4 shadow-sm dark:bg-[#33415a] focus:border-[#367fd3] focus:ring-[#367fd3]"
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
                        {fileName === '' ? (
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        ) : (
                          <p className="text-xs text-gray-500">{fileName} </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#273142] px-4 py-3 text-right sm:px-6 w-full flex justify-between">
                  {currentURL === '/customer/active/[id]' ? (
                    ''
                  ) : (
                    <div>
                      <p>{`Total Price : $${price}`}</p>
                    </div>
                  )}

                  {currentURL === '/customer/active/[id]' ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        editHandler(e);
                      }}
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#367fd3]  py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#367fd3] focus:ring-offset-2"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#367fd3]  py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#367fd3] focus:ring-offset-2"
                    >
                      Check out
                    </button>
                  )}
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
