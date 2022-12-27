import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DraftForm from '../../../components/DraftForm';
import CheckoutForm from '../../../components/CheckoutForm';
import NewOrderFrom from '../../../components/NewOrderFrom';

const EditOrder = () => {
  const editOrderData = useSelector((state) => state.editOrder);
  console.log(editOrderData);





  const [updateFormData, setUpdateFormData] = useState({});

  const updateAssignmentDataCollecter = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-full">
        {/* <DraftForm /> */}
        <div className="m-5 ">
          <DraftForm
            updateAssignmentDataCollecter={updateAssignmentDataCollecter}
            editOrderData={editOrderData}
          />
        </div>
      </div>
    </>
  );
};

export default EditOrder;
