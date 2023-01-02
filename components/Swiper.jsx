import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { CheckIcon } from '@heroicons/react/24/outline';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const tiers = [
  {
    id: 'tier-hobby',
    name: 'Hobby',
    href: '#',
    priceMonthly: 49,
    description:
      'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
    ],
  },
  {
    id: 'tier-team',
    name: 'Team',
    href: '#',
    priceMonthly: 79,
    description:
      'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
      'Sapiente libero doloribus modi nostrum',
    ],
  },
];

const SwiperComponent = ({ writer }) => {
  return (
    <div className=" md:w-[50%] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {tiers.map((tier, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className=" w-[50%] min-h-screen">
                <div
                  key={tier.name}
                  className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
                >
                  <div className="p-8 sm:p-10">
                    <h3
                      className="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
                      id={tier.id}
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                      ${tier.priceMonthly}
                      <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                        /mo
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                      <ul role="list" className="space-y-6">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-600">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <a
                          href={tier.href}
                          className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                          aria-describedby={tier.id}
                        >
                          Get started today
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* {tiers.map((tier) => (
        <div
          key={tier.name}
          className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
        >
          <div className="p-8 sm:p-10">
            <h3
              className="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
              id={tier.id}
            >
              {tier.name}
            </h3>
            <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
              ${tier.priceMonthly}
              <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                /mo
              </span>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {tier.description}
            </p>
          </div>
          <div className="flex flex-1 flex-col p-2">
            <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
              <ul role="list" className="space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={tier.href}
                  className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                  aria-describedby={tier.id}
                >
                  Get started today
                </a>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};
export default SwiperComponent;
