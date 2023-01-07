import { useRouter } from 'next/router';

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
];

export default function WriterMyOrderTable({ orderData }) {
  const router = useRouter();
  const pageName = router.asPath.split('/')[3];
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
                          <td
                            onClick={() => {
                              selectOrderHandler(item.ID);
                            }}
                            className="whitespace-nowrap flex justify-start py-3 pl-4 text-sm dark:text-gray-400"
                          >
                            <span className="mr-3 w-4">{item.ID}</span>
                          </td>
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
                            {/* {person.role} */}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-400">
                            {/* {person.role} */}
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
