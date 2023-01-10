import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

const PaymentBtn = () => {
  const cookies = new Cookies();
  const token = cookies.get('userrefreshToken');
  const router = useRouter();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(window.sessionStorage.getItem('orderPrice'));
  }, []);

  const orderPrice = price;

  console.log(orderPrice);

  const AllFormData = useSelector((state) => state.orderPayData);
  console.log(AllFormData);

  console.log(
    JSON.stringify({
      AllFormData,
    }),
  );

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
      body: JSON.stringify({
        ...AllFormData,
        dispute: false,
        late: false,
        time_js: '',
      }),
    };

    fetch('https://backend420.linnric.com/api/v1/create_order', requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <>
      <h1 className="text-center text-3xl font-semibold pt-24">
        For Now We Only Accepting PayPal
      </h1>
      <div className="md:w-[100%] w-full mt-28 min-h-screen mx-auto flex justify-center ">
        <PayPalScriptProvider>
          <PayPalButtons
            className=" flex justify-center w-full  "
            style={{
              color: 'blue',
              label: 'pay',
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
              alert('thanks for purchase 💙');
              router.push('/login');
            }}
          />
        </PayPalScriptProvider>
      </div>
    </>
  );
};

export default PaymentBtn;
