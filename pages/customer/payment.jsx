import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const Payment = () => {
  return (
    <>
      <form className=" flex justify-self-center h-full">
        <div className="w-[35%] mx-auto my-auto mt-[290px] bg-[#273142] rounded-lg">
          <div className="m-9 grid grid-cols-4 gap-y-6 gap-x-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 ">
              Payment
            </h2>
            <div className="col-span-4">
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700 dark:text-gray-100"
              >
                Card number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  autoComplete="cc-number"
                  className="block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm dark:bg-[#273142] "
                />
              </div>
            </div>

            <div className="col-span-4">
              <label
                htmlFor="name-on-card"
                className="block text-sm font-medium text-gray-700 dark:text-gray-100"
              >
                Name on card
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name-on-card"
                  name="name-on-card"
                  autoComplete="cc-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm dark:bg-[#273142] "
                />
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="expiration-date"
                className="block text-sm font-medium text-gray-700 dark:text-gray-100"
              >
                Expiration date (MM/YY)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="expiration-date"
                  id="expiration-date"
                  autoComplete="cc-exp"
                  className="block w-full rounded-md border-gray-300 shadow-sm   sm:text-sm dark:bg-[#273142]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-gray-700 dark:text-gray-100"
              >
                CVC
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  autoComplete="csc"
                  className="block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm dark:bg-[#273142]"
                />
              </div>
            </div>
            <button className="bg-[#286bb8] h-10 rounded-md text-md font-bold">
              Pay
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Payment;
