import React from 'react';
import { Formik, useFormik } from 'formik';
import { signupSchema } from '../schemas/index';
import { XCircleIcon } from '@heroicons/react/20/solid';
import * as Yup from 'yup';
import Link from 'next/link';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchemas: Yup.object({
      email: Yup.string().required('Please enter your email'),
      password: Yup.string().min(8).required('Required'),
    }),
  });
  return (
    <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
      <form className="space-y-6">
        <div>
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
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              id="password"
              name="password"
              type="password"
              autoComplete="on"
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            <Link
              href={'/recovery'}
              className="text-sm text-indigo-600 hover:text-indigo-500 pt-4"
            >
              Forgotten password?
            </Link>
          </div>
        </div>
        <div>
          <button
            onClick={() => formik.handleSubmit()}
            type="button"
            className="flex w-full mt-10 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
