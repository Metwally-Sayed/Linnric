import React, { useState } from 'react';
import CustomerLayout from '../../../components/CustomerLayout';
import MyOrderLayout from '../../../components/MyOrderLayout';
import Cookies from 'universal-cookie';

const Dispute = () => {
  const [id, setId] = useState(0);
  const [text, setText] = useState('');
  const cookies = new Cookies();
  const token = cookies.get('userrefreshToken');
  const idHandler = (e) => {
    setId(e.target.value);
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append('Content-Type', 'application/json');

    // const raw = JSON.stringify({
    //   AllFormData,
    // });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        message: text,
        order_id: id,
        time: new Date().toLocaleDateString(),
      }),
    };

    fetch(
      'https://backend420.linnric.com/api/v1/create_dispute',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <>
      <CustomerLayout>
        <MyOrderLayout>
          <div className="w-full h-full flex justify-center items-center ">
            <div className="dark:bg-[#273142] w-1/2 h-[400px] shadow-md rounded-md p-10 ">
              <div className="mb-10">
                <label className="block text-sm font-medium dark:text-white text-gray-700">
                  Order id:
                </label>{' '}
                <input
                  value={id}
                  onChange={idHandler}
                  className="w-full mt-1 dark:bg-[#33415a] rounded-md border border-gray-300 bg-[#F3F4F6]  py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-white text-gray-700">
                  Messenge:
                </label>{' '}
                <textarea
                  onChange={textHandler}
                  value={text}
                  className="w-full mt-1 dark:bg-[#33415a] rounded-md border border-gray-300 bg-[#F3F4F6]  py-2 pl-3 pr-10 shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
                  type="text"
                />
              </div>
              <div className="w-full flex justify-end mt-3">
                <button
                  onClick={clickHandler}
                  className="inline-flex items-center rounded-md border border-transparent bg-[#286bb8] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#2f7bd3] focus:outline-none focus:ring-2 focus:ring-[#286bb8] focus:ring-offset-2"
                >
                  Dispute
                </button>
              </div>
            </div>
          </div>
        </MyOrderLayout>
      </CustomerLayout>
    </>
  );
};

export default Dispute;
