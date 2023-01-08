import React, { useState, useEffect } from 'react';
import CustomerLayout from '../../../components/CustomerLayout';
import MyOrderLayout from '../../../components/MyOrderLayout';
import Cookies from 'universal-cookie';
import axios from 'axios';
import OrderCard from '../../../components/OrderCard';
import EmptyOredersList from '../../../components/EmptyOredersList';

const cookies = new Cookies();

const Draft = () => {
  const [data, setData] = useState([]);
  const getUserInprogressOrders = async () => {
    const token = cookies.get('userrefreshToken');
    try {
      const getData = await axios.get(
        'https://backend420.linnric.com/api/v1/get_client_inprogress_orders',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setData(getData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInprogressOrders();
  }, []);

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

export default Draft;
