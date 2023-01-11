import React from 'react';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import DraftForm from '../../components/DraftForm';

const Draftorder = () => {
  const router = useRouter();

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full my-8   flex justify-between">
          <h1 className="text-5xl font-bold"></h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push('/writer/availableorders');
            }}
            className="bg-white dark:bg-[#273142] w-10 h-10 flex items-center justify-center rounded border-spacing-10 shadow-lg text-lg "
          >
            <AiOutlineClose />
          </button>
        </div>
        <DraftForm />
      </div>
    </>
  );
};

export default Draftorder;
