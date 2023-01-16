import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
const Notifications = ({ textData }) => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex-col justify-center items-center align-middle mt-[340px] ">
      <div className="flex justify-end m-20">
        <button
          onClick={(e) => {
            e.preventDefault();
            router.push('/writer/availableorders');
          }}
          className="bg-white dark:bg-[#273142] w-10 h-10 flex items-center justify-center rounded border-spacing-10 shadow-lg text-lg "
        >
          x
        </button>
      </div>
      {textData.map((text, idx) => (
        <div
          key={idx}
          className="  md:w-2/3 w-full mx-auto  bg-gray-100 dark:bg-[#273142] py-3 px-4 rounded-md my-8 shadow-lg "
        >
          <div className=" flex flex-col ">
            <p className=" my-3 text-xl">{text.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;

export const getServerSideProps = async (context) => {
  const token = await context.req.cookies.writerrefreshToken;
  const id = context.params?.id;
  const config = {
    method: 'get',
    url: `https://backend420.linnric.com/api/v1/writer/get_detail_message/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie: 'Cookie_1=value',
    },
  };

  const Data = await axios(config);
  const textData = await Data.data.data;

  return {
    props: { textData },
  };
};
