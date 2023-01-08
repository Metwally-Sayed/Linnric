import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { postingOrderHandler } from '../utilities/apiFunctions';

const PaymentBtn = ({ price }) => {
  const orderPrice = Math.round(price);
  console.log(orderPrice);
  const cookies = new Cookies();
  const token = cookies.get('userrefreshToken');
  const [done, setDone] = useState(false);

  const AllFormData = useSelector((state) => state.orderPayData);

  const handleApprove = () => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      AllFormData,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://backend420.linnric.com/api/v1/create_order', requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log('error', error));
  };

  return (
    <>
      <h1 className="text-center text-3xl font-semibold pt-24">
        For Now We Only Accepting PayPal
      </h1>
      <div className="md:w-[100%] w-full mt-28 min-h-screen mx-auto ">
        <PayPalButtons
          className=" flex justify-center"
          style={{
            color: 'silver',
            shape: 'pill',
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: orderPrice,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            handleApprove();
          }}
        />
      </div>
    </>
  );
};

export default PaymentBtn;
