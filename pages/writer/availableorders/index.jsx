import React, { useEffect, useState } from 'react';
import WriterAvailableOrderTable from '../../../components/WriterAvailableOrderTable';
import WriterLayoutWrapper from '../../../components/WriterLayoutWrapper';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../../../components/Loading';

const Availableorders = () => {
  const cookies = new Cookies();
  const token = cookies.get('writerrefreshToken');
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, data } = useQuery(['availableOrderss', pageNumber], () => {
    return axios.get(
      `https://backend420.linnric.com/api/v1/writer/get_writers_dashboard_available_orders/?page_size=10&page=${pageNumber} `,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  });
  console.log(data?.data.data);
  const availableOrdersData = data?.data.data;
  // setAvailableOrdersData(data);
  // const getWriterOrders = async () => {
  //   const token = cookies.get('writerrefreshToken');
  //   try {
  //     const getData = await axios.get(
  //       'https://backend420.linnric.com/api/v1/writer/get_writers_dashboard_available_orders/?page_size=10&page=2 ',
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     );
  //     setAvailableOrdersData(getData.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getWriterOrders();
  // }, []);

  return (
    <div>
      <WriterLayoutWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="mb-24 h-[650px]">
              <WriterAvailableOrderTable
                availableOrdersData={availableOrdersData}
              />
            </div>
            <div className=" flex justify-around mt-10">
              <button
                onClick={() => {
                  setPageNumber((page) => page - 1);
                }}
                className=""
              >
                Previous
              </button>
              <button
                onClick={() => {
                  setPageNumber((page) => page + 1);
                }}
              >
                Next
              </button>
            </div>
          </>
        )}
      </WriterLayoutWrapper>
    </div>
  );
};

export default Availableorders;
