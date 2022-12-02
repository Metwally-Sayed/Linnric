import React from 'react';
import Link from 'next/link';
import LoginForm from '../components/LoginForm';

const loginPage = () => {
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
            Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              href={'/signup'}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Create a new account
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default loginPage;
