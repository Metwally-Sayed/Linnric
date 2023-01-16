import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import { TbBrandWhatsapp } from 'react-icons/tb';

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
        For Now We Are Using WhatsApp For Payment
      </h1>
      <div className="md:w-[100%] w-full mt-28 min-h-screen mx-auto flex justify-center ">
        <div>
          <a
            className="flex text-center font-semibold text-4xl"
            href={`https://api.whatsapp.com/send/?phone=%2B13233285683&text=Hello%2C+My+total+price+is+$${orderPrice}.&type=phone_number&app_absent=0`}
          >
            <TbBrandWhatsapp />
            Pay Here!
          </a>
          {}
        </div>
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
      </div>
    </>
  );
};

export default PaymentBtn;
