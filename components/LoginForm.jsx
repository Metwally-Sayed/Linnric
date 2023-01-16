import React, { useState } from 'react';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { userLogIn } from '../utilities/apiFunctions';
import { useForm } from 'react-hook-form';
import { writerLogIn } from '../utilities/apiFunctions';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const LoginForm = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);

  const submitForm = (values) => {
    let res = ' ';

    if (router.asPath === '/workersslogin') {
      res = writerLogIn(
        'https://backend420.linnric.com/api/v1/login/',
        values,
        router,
        setIsError,
      );
    }
    if (router.asPath === '/login') {
      userLogIn(
        'https://backend420.linnric.com/api/v1/login/',
        values,
        router,
        setIsError,
      );
    }

    // router.push('/customer/active'),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 dark:bg-[#273142] ">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              {...register('email', { required: true })}
              id="email"
              type="email"
              name="email"
              required
              className="block w-full appearance-none rounded-md border dark:bg-[#33415A] border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
            <p className="text-red-400 text-xs">{errors.username?.message}</p>
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
              name="password"
              type="password"
              required
              className="block w-full appearance-none rounded-md border dark:bg-[#33415A] border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#286bb8] focus:outline-none focus:ring-[#286bb8] sm:text-sm"
            />
            <p className="text-red-400 text-xs">{errors.password?.message}</p>

            <Link
              href={'/recovery'}
              className="text-sm text-[#286bb8] hover:text-[#2c76ca] pt-4"
            >
              Forgotten password?
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          {isError === true ? (
            <p className="text-xs h-1 font-semibold text-red-600">
              {' '}
              Email or Password is wrong{' '}
            </p>
          ) : (
            ''
          )}
        </div>
        <div>
          {router.asPath === '/workersslogin' ? (
            <button
              onClick={handleSubmit(submitForm)}
              type="button"
              className="flex w-full mt-10 justify-center rounded-md border border-transparent bg-[#286bb8] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#358ff5] focus:outline-none focus:ring-2 focus:ring-[#286bb8] focus:ring-offset-2"
            >
              Login
            </button>
          ) : (
            <div>
              <button
                onClick={handleSubmit(submitForm)}
                type="button"
                className="flex w-full mt-10 justify-center rounded-md border border-transparent bg-[#286bb8] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#358ff5] focus:outline-none focus:ring-2 focus:ring-[#286bb8] focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
