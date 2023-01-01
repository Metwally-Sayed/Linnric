import Head from 'next/head';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assessed/WhatsApp-Image-logo.jpg';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description " content="Generated by create next app" />
      </Head>
      <div className="relative bg-gray-50 shadow-xl">
        <Popover className="relative bg-white dark:bg-[#1F2735]  shadow-2xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    width={100}
                    height={100}
                    src={logo}
                    alt=""
                  />
                </Link>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-[#1F2735]  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon
                    className="h-6 w-6 dark:bg-[#1F2735] "
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
              <Popover.Group
                as="nav"
                className="hidden dark:bg-[#1F2735] space-x-10 md:flex"
              >
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900"
                >
                  Docs
                </a>
              </Popover.Group>
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <Link
                  href="/login"
                  className="whitespace-nowrap text-base font-medium text-gray-500 dark:text-white hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-gray-50 dark:bg-[#1F2735] rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Image
                        className="h-8 w-auto"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md dark:bg-[#1F2735] bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset ">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 dark:bg-[#273142]">
                    <nav className="grid gap-y-8 dark:bg-[#273142]">
                      {/* {features.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 dark:bg-[#273142] hover:bg-gray-50"
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))} */}
                    </nav>
                  </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                  {/* <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Docs
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                  <div>
                    <Link
                      href="/signup"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                    >
                      Sign up
                    </Link>
                    <p className="mt-6 text-center text-base font-medium dark:text-gray-100 text-gray-500">
                      Existing customer?
                      <Link
                        href="/login"
                        className="text-blue-600 hover:text-blue-500"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="lg:relative dark:bg-[#1F2735] h-screen">
          <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center dark:bg-[#1F2735] lg:py-48 lg:text-left">
            <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <motion.span
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -600, opacity: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className="block xl:inline dark:text-white"
                >
                  Data to enrich your
                </motion.span>{' '}
                <motion.span
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -600, opacity: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className="block text-blue-600 xl:inline"
                >
                  online business
                </motion.span>
              </h1>
              <motion.p
                animate={{ x: 0, opacity: 1 }}
                initial={{ opacity: 0.2 }}
                transition={{ duration: 2 }}
                className="mx-auto mt-3 max-w-md text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </motion.p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/customer/actine"
                    className="flex w-full items-center justify-center rounded-md border border-transparent animate-pulse bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 600, opacity: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </motion.div>
        </main>
      </div>{' '}
    </>
  );
}
