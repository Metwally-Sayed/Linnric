import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { postingOrderHandler } from '../utilities/apiFunctions';

const PaymentBtn = ({ price }) => {
  const cookies = new Cookies();
  const token = cookies.get('userrefreshToken');
  const [done, setDone] = useState(false);

  const AllFormData = useSelector((state) => state.orderPayData);

  const handleApprove = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzM3MjY3NTAsImlzV3JpdGVyIjpmYWxzZSwidXNlcklkIjoiZWNlMmYyOTItMGQ3ZS00ZDMzLTg2ZDItOWI2Mzc0NzhhMDI0In0.1FAvJE5lbhjVbD7yLO6vAuKg50M9yMyFiW1ayHZ6ioU',
    );
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
                    value: +price,
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
