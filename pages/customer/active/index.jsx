import React, { useEffect, useState } from 'react';
import EmptyOredersList from '../../../components/EmptyOredersList';
import CustomerLayout from '../../../components/CustomerLayout';
import MyOrderLayout from '../../../components/MyOrderLayout';
import { getUserOrders } from '../../../utilities/apiFunctions';
import Cookies from 'universal-cookie';
import axios from 'axios';
import OrderCard from '../../../components/OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderData } from '../../../redux/features/orderData';
import { useQuery } from 'react-query';

const Active = ({ orderData }) => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  dispatch(getOrderData(orderData));

  const data = useSelector((state) => state.orderData);

  let renderCondition = '';

  if (data.length === 0) {
    renderCondition = <EmptyOredersList />;
  } else {
    renderCondition = <OrderCard data={data} />;
  }

  return (
    <CustomerLayout>
      <MyOrderLayout>
        <div>{renderCondition}</div>
      </MyOrderLayout>
    </CustomerLayout>
  );
};

export default Active;

export const getServerSideProps = async (context) => {
  const token = await context.req.cookies.userrefreshToken;
  const config = {
    method: 'get',
    url: 'https://backend420.linnric.com/api/v1/get_all_client_orders',
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie: 'Cookie_1=value',
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
