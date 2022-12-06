import React from 'react';
import { useRouter } from 'next/router';

const NewOrderBtn = () => {
  const router = useRouter();
  const routerHandling = () => {
    router.push('/neworder');
  };

  return (
    <>
      <button onClick={routerHandling} className="bg-[#286bb8] text-xs w-[90px] rounded text-white h-8 ">
        New Order
      </button>
    </>
  );
};

export default NewOrderBtn;
