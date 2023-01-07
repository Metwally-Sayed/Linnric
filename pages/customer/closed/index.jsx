import React, { useState, useEffect } from 'react';
import CustomerLayout from '../../../components/CustomerLayout';
import MyOrderLayout from '../../../components/MyOrderLayout';
import Cookies from 'universal-cookie';
import axios from 'axios';
import OrderCard from '../../../components/OrderCard';
import EmptyOredersList from '../../../components/EmptyOredersList';

const cookies = new Cookies();

const Closed = ({ orderData }) => {
  let renderCondition = '';

  renderCondition = <OrderCard data={orderData} />;

  return (
    <div>
      <CustomerLayout>
        <MyOrderLayout>
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
