import React from 'react';

const OrderCard = ({ data }) => {
  console.log(data);

  const result = data;

  return (
    <>
      {Array.isArray(data) === true
        ? data?.map((order, idx) => {
            return (
              <div
                key={idx}
                className=" bg-gray-100 dark:bg-[#273142] py-3 px-4 rounded-md my-5 shadow-lg "
              >
                <div>{order.assigment_topic}</div>
                <div className="text-sm mt-2 text-gray-500">
                  {order.pages} slide | {order.assigment_type} |
                </div>
              </div>
            );
          })
        : []}
    </>
  );
};

export default OrderCard;
