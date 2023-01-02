import Head from 'next/head';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assessed/WhatsApp-Image-logo.jpg';
import { motion } from 'framer-motion';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { RiFolder2Fill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';
import { MdOutlineMonetizationOn } from 'react-icons/md';
import Services from '../components/Services';
import * as Scroll from 'react-scroll';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const features = [
  {
    name: 'ZERO PERCENT PLAGIARISM GUARANTEE',
    description:
      'Plagiarism is a serious academic misconduct. Our writers understand and uphold academic dignity. As such, always expect 100% unique essays.',
    icon: RiFolder2Fill,
  },
  {
    name: 'AROUND-THE-CLOCK CUSTOMER SUPPORT',
    description:
      'Feel free to contact us at any time to say “write my essays for me” or ask your questions. The friendly customer support team of our essay service is here 24/7 to give you a helping hand.',
    icon: BiSupport,
  },
  {
    name: 'ANONIMITY QUARANTEED',
    description:
      'We assure all our clients 100% protection from third- party. Your identity is always SEALED.',
    icon: AiFillSafetyCertificate,
  },
  {
    name: 'AFFORDABLE PRICES',
    description:
      'We are the top agency to write your essay not only because we have talented English- speaking writers, but also because our prices are fair and affordable.',
    icon: MdOutlineMonetizationOn,
  },
];

const writer = [
  {
    name: 'Andrew W.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    reviews: 1936,
    Degree: 'Master',
    Totalorders: 5200,
  },
  {
    name: 'Susan M.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    reviews: 1281,
    Degree: 'Bachelor’s',
    Totalorders: 3896,
  },
  {
    name: 'Allan T.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    reviews: 441,
    Degree: 'Master’s',
    Totalorders: 851,
  },
  {
    name: 'Lydia A.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    reviews: 3550,
    Degree: 'Master’s',
    Totalorders: 7631,
  },
  {
    name: 'Sandriana U.',
    img: 'https://images.unsplash.com/photo-1564222576620-3fc4b6f6bb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    reviews: 104,
    Degree: 'Master’s',
    Totalorders: 347,
  },
  {
    name: 'Theresa P.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    reviews: 989,
    Degree: 'Master’s',
    Totalorders: 2922,
  },
];

const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>linnric</title>
        <link rel="icon" href="/assessed/WhatsApp-Image-logo.jpg" />
        <meta name="description " content="Generated by create next app" />
      </Head>
      <div className="relative bg-gray-50 h-auto dark:bg-[#1F2735]">
        <Popover className="relative bg-white dark:bg-[#1F2735] ">
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
                <Scroll.Link
                  to="whyus"
                  spy={true}
                  offset={-70}
                  duration={500}
                  className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900 cursor-pointer"
                >
                  Why us
                </Scroll.Link>
                <Scroll.Link
                  to="writer"
                  spy={true}
                  offset={-70}
                  duration={500}
                  href="#"
                  className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900"
                >
                  Writers{' '}
                </Scroll.Link>
                <Scroll.Link
                  to="services"
                  spy={true}
                  offset={-70}
                  duration={500}
                  className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900 cursor-pointer"
                >
                  Our services{' '}
                </Scroll.Link>
                <Scroll.Link
                  to="aboutus"
                  spy={true}
                  offset={-70}
                  duration={500}
                  className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900 cursor-pointer"
                >
                  About us{' '}
                </Scroll.Link>
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
        <main className="lg:relative dark:bg-[#1F2735] ">
          <div className="h-screen">
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center dark:bg-[#1F2735] lg:py-48 lg:text-left   "
            >
              <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline dark:text-white">
                    YOU GOT AN ASSIGNMENT DUE,{' '}
                    <span className="text-blue-500 pl-2">WE GOT YOU.</span>
                  </span>{' '}
                </h1>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/customer/active"
                      className="flex w-full items-center justify-center rounded-md border border-transparent animate-pulse bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Place Your Order Now!{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: 600 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </motion.div>
          </div>
        </main>

        <motion.div
          // animate={{ x: 0, opacity: 1 }}
          className="h-screen mt-[180px] "
        >
          <motion.div
            id="whyus"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center flex-col items-center"
          >
            <h1 className="font-bold text-center dark:text-white text-black text-4xl">
              Why
              <span className="text-blue-500 dark:hover:text-white hover:text-black pl-1 transform transition duration-500 ">
                Us{' '}
              </span>
            </h1>
          </motion.div>
          <motion.div className=" py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white sm:shrink-0">
                        <feature.icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100">
                          {feature.name}
                        </p>
                        <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div
          id="writer"
          className="flex flex-col min-h-screen w-[85%] mt-[570px] justify-center mx-auto md:mt-0 items-center "
        >
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-56"
          >
            <h2 className="font-bold text-4xl">
              Take a look on our best writers
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-10 md:gap-y-16 md:w-full mx-auto w-[90%]   ">
            {writer.map((person) => (
              <>
                <div
                  key={person.name}
                  className=" w-1/2 h-52 items-center mx-auto flex md:flex-row flex-col justify-center "
                >
                  <div className="flex flex-row md:flex-col h-24 w-full justify-evenly items-center md:items-center md:mr-5 ">
                    <img
                      className="inline-block md:h-34 md:w-34 h-20 w-20 rounded-full mr-5 md:mr-0 "
                      src={person.img}
                      alt=""
                    />{' '}
                    <p className="text-md text-left font-semibold leading-8 text-gray-900 dark:text-gray-100">
                      {person.name}
                    </p>
                  </div>
                  <div className=" flex flex-col w-full mx-auto md:justify-start justify-center ">
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400 md:text-left text-center">
                      <span className="font-semibold dark:text-white">
                        Degree:{' '}
                      </span>
                      {person.Degree}
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400 md:text-left text-center">
                      <span className="font-semibold dark:text-white">
                        reviews:{' '}
                      </span>
                      +{person.reviews}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div
            id="aboutus"
            className="h-screen flex flex-col justify-center items-center align-middle "
          >
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.h2 className="font-bold text-4xl text-center">
                About
                <span className="text-blue-500 pl-2">Us</span>
              </motion.h2>
            </motion.div>
            <div className="mt-44 w-1/2 ">
              <p className="dark:text-gray-500 text-lg">
                We offer all students quality papers and online class
                assistance. By hiring a professional writer, you could wrest
                control of your academic life from a demanding curriculum and
                random circumstances. Spectacular success does not arise by
                magic; it occurs through the sequence of small and sure steps,
                the first of which is to place an order.
              </p>
            </div>
          </div>
          <div id="services" className="min-h-screen mt-64">
            <motion.h2
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-3xl font-bold text-center tracking-tight sm:text-4xl"
            >
              Types Of Essays We Write{' '}
            </motion.h2>
            <Services />
          </div>
        </div>
        <footer className="">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="dark:text-gray-100 dark:hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-base dark:text-gray-100 dark:hover:text-gray-500">
                &copy; 2020 Linnric, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
