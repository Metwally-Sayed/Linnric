import React from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const Recovery = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchemas: Yup.object({
      email: Yup.string().required('Please enter your email'),
    }),
  });
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
            <form className="space-y-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="on"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              <div>
                <button
                  onClick={() => formik.handleSubmit()}
                  type="button"
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
