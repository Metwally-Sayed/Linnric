import React from 'react';
import { useFormik } from 'formik';
import { signupSchema } from '../schemas/index';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { userAuth } from '../utilities/apiFunctions';

const LoginForm = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    validationSchemas: Yup.object({
      username: Yup.string().required('Please enter your username'),
      password: Yup.string().min(8).required('Required'),
    }),

    onSubmit: (values) => {
      console.log(values);
      const data = {
        ...values,
        Username: values.username,
      };
      userAuth('https://linnric.com/api/v1/login/', data);
    },
  });

  return (
    <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <div className="mt-1">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              id="username"
              type="text"
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
            {formik.errors.username && formik.touched.username ? (
              <div
                className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                {formik.errors.username}
              </div>
            ) : null}
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
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
            {formik.errors.password && formik.touched.password ? (
              <div
                className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                {formik.errors.password}
              </div>
            ) : null}
            <Link
              href={'/recovery'}
              className="text-sm text-[#286bb8] hover:text-[#2c76ca] pt-4"
            >
              Forgotten password?
            </Link>
          </div>
        </div>
        <div>
          <button
            onClick={() => formik.handleSubmit()}
            type="button"
            className="flex w-full mt-10 justify-center rounded-md border border-transparent bg-[#286bb8] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#358ff5] focus:outline-none focus:ring-2 focus:ring-[#286bb8] focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
