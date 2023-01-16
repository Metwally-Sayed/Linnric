import React from 'react';
import WriterLayoutWrapper from '../../../components/WriterLayoutWrapper';
import WriterMyOrderLayout from '../../../components/WriterMyOrderLayout';
import WriterMyOrderTable from '../../../components/WriterMyOrderTable';
import axios from 'axios';

const dispute = ({ orderData }) => {
  return (
    <WriterLayoutWrapper>
      <WriterMyOrderLayout>
        <WriterMyOrderTable orderData={orderData} />
      </WriterMyOrderLayout>
    </WriterLayoutWrapper>
  );
};

export default dispute;

export const getServerSideProps = async (context) => {
  const token = await context.req.cookies.writerrefreshToken;
  const config = {
    method: 'get',
    url: 'https://backend420.linnric.com/api/v1/writer/dispute_order',
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
