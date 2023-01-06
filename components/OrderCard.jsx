import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEditOrderData } from '../redux/features/editOrederData';

const OrderCard = ({ data }) => {
  const dispaych = useDispatch();

  const inProgress = (
    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 md:text-xs text-[9px] font-medium text-green-800 w-auto">
      in progress
    </span>
  );

  const closed = (
    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 md:text-xs font-medium text-[9px] text-red-800">
      closed
    </span>
  );

  const editHandler = (orderId) => {
    const editOrder = data.filter((order) => {
      return order.ID === orderId;
    });
    dispaych(getEditOrderData(editOrder));
    console.log(editOrder);
  };

  let service = '';

  let education = '';
  let topic = '';

  Array.isArray(data) === true
    ? data?.map((order) => {
        service = order.assignment_details;
        education = order;
      })
    : null;

  return (
    <>
      {Array.isArray(data) === true
        ? data?.map((order, idx) => {
            return (
              <div
                key={idx}
                className=" bg-gray-100 dark:bg-[#273142] py-3 px-4 rounded-md my-5 shadow-lg "
              >
                <div className="w-full flex justify-between">
                  <div className=" w-[50%]">
                    <div className="flex w-full">
                      <p className="w-[70%]">{order.assigment_topic}</p>
                    </div>
                    <div className="text-sm mt-4 text-gray-500">
                      {order.pages} slide | {order.assigment_type} |Order Number
                      : {order.ID}
                    </div>
                  </div>
                  <div className=" w-[50%] flex justify-end">
                    <span className=" mx-4">
                      {order.completed === true && order.inprogress === false
                        ? closed
                        : order.inprogress === true && order.completed === false
                        ? inProgress
                        : ''}
                    </span>
                    <Link href={`/customer/active/${order.ID}`}>
                      <span
                        onClick={() => {
                          editHandler(order.ID);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 22 22"
                          fill="currentColor"
                          className="w-4 h-4 cursor-pointer "
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="w-full flex justify-end "></div>
              </div>
            );
          })
        : []}
    </>
  );
};

export default OrderCard;
