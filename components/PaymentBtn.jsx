import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { XCircleIcon } from '@heroicons/react/20/solid';
const PaymentBtn = ({ price }) => {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold pt-24">
        For Now We Only Accepting PayPal
      </h1>
      <div className="md:w-[100%] w-full mt-28 min-h-screen mx-auto ">
        <PayPalButtons
          className="flex justify-center mx-auto"
          onError={(err) => {
            // For example, redirect to a specific error page
            return (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <XCircleIcon
                      className="h-5 w-5 text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{err}</h3>
                  </div>
                </div>
              </div>
            );
          }}
          style={{
            layout: 'vertical',
            color: 'blue',
            label: 'pay',
            tagline: 'false',
            shape: 'pill',
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: price,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            console.log(actions.order.capture());
            return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name}`);
            });
          }}
        />
      </div>
    </>
  );
};

export default PaymentBtn;
