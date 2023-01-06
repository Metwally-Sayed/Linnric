import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DraftForm from '../../../components/DraftForm';
import CheckoutForm from '../../../components/CheckoutForm';
import NewOrderFrom from '../../../components/NewOrderFrom';
import axios from 'axios';

const EditOrder = ({ orderData }) => {
  const [updateFormData, setUpdateFormData] = useState({});

  const updateAssignmentDataCollecter = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-full">
        {/* <DraftForm /> */}
        <div className="m-5 ">
          <DraftForm editOrderData={orderData} />
        </div>
      </div>
    </>
  );
};

export default EditOrder;

export const getServerSideProps = async (context) => {
  const token = await context.req.cookies.userrefreshToken;
  const id = context.params?.id;
  const config = {
    method: 'get',
    url: 'https://backend420.linnric.com/api/v1/get_client_detail_order/' + id,
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie: 'Cookie_1=value',
    },
  };

  const Data = await axios(config);
  const orderData = await Data.data.data;

  return {
    props: { orderData },
  };
};
