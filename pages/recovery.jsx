import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object({
  email: Yup.string().email().required(),
});

const Recovery = () => {
  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* 
Company Logo:-
<img
  className="mx-auto h-12 w-auto"
  src=""
  alt="Your Company"
/> */}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Please Enter Your Email
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  {...register('email', { required: true })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="on"
                  required
                  className="block w-full appearance-none rounded-md border dark:bg-[#33415A] border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
                />
                <p className="text-red-400 text-xs">{errors.email?.message}</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full mt-10 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recovery;
