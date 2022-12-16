import React from 'react';
import { userAuth } from '../utilities/apiFunctions';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.string().required(),
  password: Yup.string().min(6).required(),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]),
});

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (values) => {
    console.log(values);
    const userData = {
      Username: values.username,
      email: values.email,
      password: values.password,
      Phonenumber: values.phoneNumber,
    };
    console.log(userData);

    userAuth('https://linnric.com/api/v1/register/', userData);
  };

  return (
    <div className="bg-white dark:bg-[#273142] py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
      <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Username
          </label>
          <div className="mt-1">
            <input
              {...register('username', { required: true })}
              id="username"
              type="text"
              name="username"
              className="block w-full appearance-none rounded-md border dark:bg-[#33415A] border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
            <p className="text-red-400 text-xs">{errors.username?.message}</p>
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              {...register('email', { required: true })}
              id="email"
              name="email"
              type="email"
              className="block w-full appearance-none rounded-md border dark:bg-[#33415A] border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
            <p className="text-red-400 text-xs">{errors.email?.message}</p>
          </div>
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Phone
          </label>
          <div className="mt-1">
            <input
              {...register('phoneNumber', { required: true })}
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              className="block w-full appearance-none rounded-md border dark:bg-[#33415A] border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
            <p className="text-red-400 text-xs">
              {errors.phoneNumber?.message}
            </p>
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              {...register('password', { required: true })}
              id="password"
              type="password"
              name="password"
              className="block w-full appearance-none rounded-md border dark:bg-[#33415A] border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
            <p className="text-red-400 text-xs">{errors.password?.message}</p>
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Confirm Password
          </label>
          <div className="mt-1">
            <input
              {...register('confirmPassword', { required: true })}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className="block w-full appearance-none rounded-md border dark:bg-[#33415A] border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
            <p className="text-red-400 text-xs">
              {errors.confirmPassword && 'Password not matching'}
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
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
