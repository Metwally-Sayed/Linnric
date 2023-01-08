import { useRouter } from 'next/router';
import Link from 'next/link';
import { getWriterOrderData } from '../redux/features/writerOrderData';
import { useDispatch } from 'react-redux';

export default function WriterMyOrderTable({ orderData }) {
  const router = useRouter();
  const pageName = router.asPath.split('/')[3];
  const dispatch = useDispatch();

  const selectOrderHandler = (orderId) => {
    const selected = orderData.filter((order) => order.ID === orderId);

    dispatch(getWriterOrderData(selected));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-500 capitalize">
            {pageName}
          </h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-white ">
            A list of all the {pageName} orders in your account
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 dark:bg-[#273142]   ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-500 dark:text-white"
                    >
                      id
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-500 dark:text-white"
                    >
                      Topic
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-500 dark:text-white"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-500 dark:text-white"
                    >
                      Pg
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-500 dark:text-white"
                    >
                      Pr
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-500 dark:text-white"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-500 dark:text-white"
                    >
                      Deadline
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:bg-[#273142]  ">
                  {Array.isArray(orderData)
                    ? orderData.map((item, idx) => (
                        <tr key={idx}>
                          <Link href={`/writer/myorders/applied/${item.ID}`}>
                            <td
                              onClick={() => {
                                selectOrderHandler(item.ID);
                              }}
                              className="whitespace-nowrap flex justify-start py-3 pl-4 text-sm dark:text-gray-400"
                            >
                              <span className="mr-3 w-4">{item.ID}</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 21 21"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                              </svg>
                            </td>
                          </Link>

                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-400 ">
                            {item.assigment_topic}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-400">
                            {item.subject}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-400">
                            {item.pages}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-400">
                            {/* {item.price} */}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-400">
                            {item.price}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-400">
                            {item.deadline}
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
