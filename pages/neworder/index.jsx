import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import NewOrderFrom from '../../components/NewOrderFrom';
import { useRouter } from 'next/router';
import {
  AssignmentServicesDataHandler,
  AssignmentTypeDataHandler,
  AssignmentEducationLevelDataHandler,
} from '../../utilities/apiFunctions';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const Neworder = () => {
  const router = useRouter();
  if (router.pathname === '/customer/active') {
    cookies.remove('orderPrice', { path: '/' });
    cookies.remove('Line_spacing', { path: '/' });

    sessionStorage.removeItem('orderPrice');
  }
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full my-8   flex justify-between">
          <h1 className="text-5xl font-bold">Create new order</h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push('/customer/active');
              Cookies.remove('Line_spacing', { path: '/' });
            }}
            className="bg-white dark:bg-[#273142] w-10 h-10 flex items-center justify-center rounded border-spacing-10 shadow-lg text-lg "
          >
            <AiOutlineClose />
          </button>
        </div>
        <NewOrderFrom />
      </div>
    </>
  );
};

export default Neworder;
