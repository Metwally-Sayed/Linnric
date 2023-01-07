import React from 'react';
import NewOrderBtn from './NewOrderBtn';
import Sort from './Sort';
import EmptyOredersList from './EmptyOredersList';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const WriterMyOrderLayout = ({ children }) => {
  const router = useRouter();
  const curentURL = router.asPath;

  const [tabs, setTabs] = useState([
    { name: 'Applied', href: '/writer/myorders/applied', current: true },
    {
      name: 'Delivered',
      href: '/writer/myorders/delivered',
      current: false,
    },
    {
      name: 'Dispute',
      href: '/writer/myorders/dispute',
      current: false,
    },
  ]);
  return (
    <div className="pt-6 z-0 rounded">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 flex justify-between ">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          My Order
        </h1>
      </div>
      <div className="mx-auto md:max-w-7xl w-full px-4 py-8 sm:px-6 md:px-8">
        <div className="border-b border-gray-200">
          <div className="sm:flex w-full ">
            <div className="mt-4 sm:mt-0">
              <nav className="-mb-px flex justify-start text-left md:space-x-9">
                {tabs?.map((tab) => (
                  <Link
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      curentURL === tab.href
                        ? 'border-[#286bb8] text-[#286bb8]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap pb-4 px-1 border-b-2 md:font-medium md:text-sm text-xs md:w-[30%] text-left ',
                    )}
                  >
                    {tab.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>{' '}
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="rounded">{children}</div>
      </div>
    </div>
  );
};

export default WriterMyOrderLayout;
