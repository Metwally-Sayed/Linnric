import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const schema = Yup.object({
  cardNumber: Yup.string().required(),
  password: Yup.string().min(6).required(),
  nameOnCard: Yup.string().required(),
  expirationDate: Yup.string().required(),
  cvc: Yup.string().required(),
});

const Payment = () => {
  const submitForm = (values) => {
    console.log(values);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <>
      <form
        className=" flex justify-self-center h-full"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="w-[35%] mx-auto my-auto mt-[290px] bg-[#273142] rounded-lg">
          <div className="m-9 grid grid-cols-4 gap-y-6 gap-x-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 ">
              Payment
            </h2>
            <div className="col-span-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700 dark:text-gray-100 "
              >
                Card number
              </label>
              <div className="mt-1">
                <input
                  {...register('cardNumber', { required: true })}
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  autoComplete="cc-number"
                  className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm dark:bg-[#33415a] "
                />
                <p className="text-red-400 text-xs">
                  {errors.cardNumber?.message}
                </p>
              </div>
            </div>

            <div className="col-span-4">
              <label
                htmlFor="nameOnCardd"
                className="block text-sm font-medium text-gray-700 dark:text-gray-100"
              >
                Name on card
              </label>
              <div className="mt-1">
                <input
                  {...register('nameOnCard', { required: true })}
                  type="text"
                  id="nameOnCard"
                  name="nameOnCard"
                  autoComplete="cc-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm dark:bg-[#33415a] "
                />
                <p className="text-red-400 text-xs">
                  {errors.nameOnCard?.message}
                </p>
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="expirationDate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-100"
              >
                Expiration date (MM/YY)
              </label>
              <div className="mt-1">
                <input
                  {...register('expirationDate', { required: true })}
                  type="text"
                  name="expirationDate"
                  id="expirationDate"
                  autoComplete="cc-exp"
                  className="block w-full rounded-md border-gray-300 shadow-sm   sm:text-sm dark:bg-[#33415a]"
                />
                <p className="text-red-400 text-xs">
                  {errors.expirationDate?.message}
                </p>
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
                  {...register('csc', { required: true })}
                  type="text"
                  name="cvc"
                  id="cvc"
                  autoComplete="csc"
                  className="block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm dark:bg-[#33415a]"
                />
                <p className="text-red-400 text-xs">{errors.cvc?.message}</p>
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
