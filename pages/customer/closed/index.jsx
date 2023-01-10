import React, { useState, useEffect } from 'react';
import CustomerLayout from '../../../components/CustomerLayout';
import MyOrderLayout from '../../../components/MyOrderLayout';
import Cookies from 'universal-cookie';
import axios from 'axios';
import OrderCard from '../../../components/OrderCard';
import EmptyOredersList from '../../../components/EmptyOredersList';
import Link from 'next/link';

const cookies = new Cookies();

const Closed = ({ orderData }) => {
  let renderCondition = '';

  renderCondition = <OrderCard data={orderData} />;

  return (
    <div>
      <CustomerLayout>
        <MyOrderLayout>
          <div className="flex w-full justify-end">
            <Link href={'/customer/closed/dispute'}>
              <button className="inline-flex items-center rounded-md border border-transparent bg-[#286bb8] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#2f7bd3] focus:outline-none focus:ring-2 focus:ring-[#286bb8] focus:ring-offset-2">
                Dispute
              </button>
            </Link>
          </div>
          <div>{renderCondition}</div>
        </MyOrderLayout>
      </CustomerLayout>
    </div>
  );
};

export default Closed;

export const getServerSideProps = async (context) => {
  const token = await context.req.cookies.userrefreshToken;
  const config = {
    method: 'get',
    url: 'https://backend420.linnric.com/api/v1/get_client_finshed_orders',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getData = await axios(config);
  const orderData = await getData.data.data;

  return {
    props: {
      orderData,
    },
  };
};
