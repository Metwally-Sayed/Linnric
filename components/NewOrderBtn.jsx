import React from 'react';
import { useRouter } from 'next/router';
import { PlusIcon } from '@heroicons/react/20/solid';

const NewOrderBtn = () => {
  const router = useRouter();
  const routerHandling = () => {
    router.push('/neworder');
  };

  return (
    <>
      <button
        onClick={routerHandling}
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-[#286bb8] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#2f7bd3] focus:outline-none focus:ring-2 focus:ring-[#286bb8] focus:ring-offset-2"
      >
        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        New Project
      </button>
    </>
  );
};

export default NewOrderBtn;
