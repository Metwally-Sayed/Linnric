import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const notifications = ({ textData }) => {
  console.log(textData);
  return (
    <div className="w-full   min-h-screen">
      {textData.map((text, idx) => (
        <div
          key={idx}
          className=" flex-col justify-center md:w-1/2 w-full mx-auto  bg-gray-100 dark:bg-[#273142] py-3 px-4 rounded-md my-8 shadow-lg hover:shadow-2xl "
        >
          <div className=" flex flex-col ">
            <Link href={`/writer/notifications/${text.ID}`}>
              <p className=" my-3 text-xl">{text.message}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default notifications;

export const getServerSideProps = async (context) => {
  const token = await context.req.cookies.writerrefreshToken;
  const config = {
    method: 'get',
    url: 'https://backend420.linnric.com/api/v1/writer/get_writer_messages',
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie: 'Cookie_1=value',
    },
  };
  const getData = await axios(config);
  const textData = await getData.data.data;

  return {
    props: {
      textData,
    },
  };
};
