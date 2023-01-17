import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import { MdOutlineTextsms } from 'react-icons/md';

const PaymentBtn = () => {
  const cookies = new Cookies();
  const token = cookies.get('userrefreshToken');
  const line = cookies.get('Line_spacing');

  const router = useRouter();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(window.sessionStorage.getItem('orderPrice'));
  }, [price]);

  const orderPrice = Math.round(price);

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
      body: JSON.stringify({
        ...AllFormData,
        dispute: false,
        late: false,
        line_spacing: line,
      }),
    };

    fetch('https://backend420.linnric.com/api/v1/create_order', requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log('error', error));
  };

  return (
    <>
      <h1 className="text-center text-3xl font-semibold pt-24">
        Thank You For Placing Your Order!
        <br />
        <br />
      </h1>
      <div className="md:w-[100%] w-full mt-28  mx-auto flex flex-col items-center justify-center ">
        {/* <PayPalScriptProvider>
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
              router.push('/customer/active');
            }}
          />
        </PayPalScriptProvider> */}
        <div className="text-center text-3xl font-semibold pt-24">
          After Paying Check Your Email For Billing And Invoice.
          <br />
          <br />
          <br />
          For More Inquiries,
          <a className="animate-pulse" href="tel:+1 (323) 328-5683">
            {' '}
            SMS
          </a>
          ,{' '}
          <a className="animate-pulse" href="mailto:linnric45@gmail.com">
            E-mail
          </a>{' '}
          or{' '}
          <a
            className="animate-pulse"
            href={`https://api.whatsapp.com/send/?phone=%2B13233285683&text=Hello%2C+My+total+price+is+$${orderPrice}.&type=phone_number&app_absent=0`}
          >
            WhatsAPP
          </a>
        </div>
      </div>
    </>
  );
};

export default PaymentBtn;
