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
                <Link href={`/customer/active/${order.ID}`}>
                   <div  onClick={() => {
                          editHandler(order.ID);
                        }}className="w-full flex justify-between">
                  <div className=" w-[50%]">
                    <div className="flex w-full">
                      <p className="w-[70%]">{order.assigment_topic}</p>
                    </div>
                    <div className="text-sm mt-4 text-gray-500">
                      {order.pages} Page | {order.assigment_type} |Order Number
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
                  </div>
                </div>
                </Link>
               
                <div className="w-full flex justify-end "></div>
              </div>
            );
          })
        : []}
    </>
  );
};

export default OrderCard;
