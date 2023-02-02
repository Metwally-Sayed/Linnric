import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import NewOrderFrom from '../../components/NewOrderFrom';
import { useRouter } from 'next/router';
import {AssignmentServicesDataHandler,AssignmentTypeDataHandler,AssignmentEducationLevelDataHandler} from '../../utilities/apiFunctions';
import Cookies from 'universal-cookie';
import OrderFormProgressBar from '../../components/OrderFormProgressBar';

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
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-4">
        <div className="flex flex-col md:flex-row ">
          <div class="hidden md:block w-full md:w-1/5 px-2 py-4 ">
            <div className='mt-[50%]'>
              <OrderFormProgressBar title="Order Requirements" subtitle="Fill in your order requirements" backgroundcolor="#1560bd" bordercolor="#1560bd" color="#fff">
                1
              </OrderFormProgressBar>
              <OrderFormProgressBar title="Order details" subtitle="Add your order details" backgroundcolor="#273142" bordercolor="#d3d3d3" color="#b5b1b1">
                2
              </OrderFormProgressBar>
            </div>
          </div>
          <div className='w-3/5 px-2 py-4'>
            <div className="  mx-auto w-full my-8 flex justify-between">
              <h1 className="text-2xl md:text-5xl font-bold">Create new order</h1>
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
          <div class="hidden md:flex md:w-1/5 lg:w-1/7 px-2 py-4 "></div>
        </div>

      </div>
    </>
  );
};

export default Neworder;
