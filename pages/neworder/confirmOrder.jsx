import React,{useState,useEffect}from 'react';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import ConfirmOrderForm from '../../components/ConfirmOrderForm';
import Cookies from 'universal-cookie';
const Draftorder = () => {
  const cookies = new Cookies();

  const router = useRouter();


  return (
    <>
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-4">
        <div className="flex flex-col md:flex-row ">
          <div class="hidden md:block w-full md:w-1/5 px-2 py-4 ">
          </div>
          <div className='w-3/5 px-2 py-4'>
            <div className="mx-auto w-full my-8   flex justify-between">
              <h1 className="text-5xl font-bold">Confirm order details</h1>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/writer/availableorders');
                  cookies.remove('orderPrice', { path: '/' });
                  cookies.remove('Line_spacing', { path: '/' });
                }}
                className="bg-white dark:bg-[#273142] w-10 h-10 flex items-center justify-center rounded border-spacing-10 shadow-lg text-lg "
              >
                <AiOutlineClose />
              </button>
            </div>
           <ConfirmOrderForm/>
          </div>
          <div class="hidden md:flex md:w-1/5 px-2 py-4 "></div>
        </div>
      </div>
    </>
  );
};

export default Draftorder;
