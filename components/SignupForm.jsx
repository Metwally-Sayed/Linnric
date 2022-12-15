import React from 'react';
import { signupSchema } from '../schemas/index';
import { useFormik } from 'formik';
import validationSchema from '../schemas/index';
import { userAuth } from '../utilities/apiFunctions';

const SignupForm = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const formik = useFormik({
    initialValues: {
      username: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      const number = +values.phoneNumber;
      console.log(number);
      const data = {
        Username: values.username,
        Phonenumber: values.phoneNumber,
        password: values.password,
        email: values.email,
      };
      userAuth('https://linnric.com/api/v1/register/', data);
    },
  });

  return (
    <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <div className="mt-1">
            <input
              id="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
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
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <div className="mt-1">
            <input
              id="phoneNumber"
              type="text"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
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
              id="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
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
              id="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button
            onClick={() => formik.handleSubmit()}
            type="button"
            className="flex w-full mt-10 justify-center rounded-md border border-transparent bg-[#286bb8] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#307ed8] focus:outline-none focus:ring-2 focus:ring-[#286bb8] focus:ring-offset-2"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
