import React from 'react';
import { Formik, useFormik } from 'formik';
import { signupSchema } from '../schemas/index';
import { XCircleIcon } from '@heroicons/react/20/solid';
import * as Yup from 'yup';

const SignupForm = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchemas: Yup.object({
      firstName: Yup.string().required('Please enter your first name'),
      lastName: Yup.string().required('Please enter your last name'),
      email: Yup.string().required('Please enter your email'),
      password: Yup.string()
        .min(8)
        .matches(passwordRules, { message: 'please enter a stronger password' })
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'password not matching')
        .required('required'),
    }),
  });

  return (
    <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <div className="mt-1">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="on"
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
            {formik.errors.firstName && formik.touched.firstName ? (
              <div
                className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <div className="mt-1">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="on"
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
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
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="mt-1">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="off"
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button
            onClick={() => formik.handleSubmit()}
            type="button"
            className="flex w-full mt-10 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
