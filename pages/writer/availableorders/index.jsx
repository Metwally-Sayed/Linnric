import React, { useEffect, useState } from 'react';
import WriterAvailableOrderTable from '../../../components/WriterAvailableOrderTable';
import WriterLayoutWrapper from '../../../components/WriterLayoutWrapper';
import Cookies from 'universal-cookie';
import axios from 'axios';

const Availableorders = () => {
  const cookies = new Cookies();

  const [availableOrdersData, setAvailableOrdersData] = useState([]);
  const getWriterOrders = async () => {
    const token = cookies.get('writerrefreshToken');
    try {
      const getData = await axios.get(
        'https://backend420.linnric.com/api/v1/writer/get_writers_dashboard_available_orders/',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setAvailableOrdersData(getData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWriterOrders();
  }, []);

  return (
    <div>
      <WriterLayoutWrapper>
        <WriterAvailableOrderTable availableOrdersData={availableOrdersData} />
      </WriterLayoutWrapper>
    </div>
  );
};

export default Availableorders;
