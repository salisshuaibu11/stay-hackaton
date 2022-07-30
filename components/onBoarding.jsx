import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";

export default function OnBoarding() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-w-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-gray-100 px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 lg:w-4/5 h-[35rem] sm:w-full sm:p-6">
                <div className='flex justify-between items-center'>
                  <img src='/stay.svg' alt='Stay SVG' className=''/>
                  <button onClick={() => setIsOpen(false)} type='button' className='underline focus:outline-none text-indigo-900'>
                    Skip
                  </button>
                </div>
                <Swiper
                  modules={[Pagination, Navigation]}
                  navigation={true}
                  grabCursor={true}
                  pagination={{
                    el: '.swiper__pagination',
                    bulletClass: 'swiper__pagination__bullet',
                    bulletActiveClass: 'swiper__pagination__bullet--active',
                    type: "bullets",
                    clickable: true,
                    renderBullet: function (_index, _className) {
                      return `<svg viewBox="0 0 10 10" class="swiper__pagination__bullet"><circle cx="5" cy="5" r="4.5"/></svg>`
                    }
                  }}
                >
                  <SwiperSlide className='text-center w-[50%] mx-auto'>
                    <h3 className='text-lg text-indigo-900 font-bold'>Generate a personal address</h3>
                    <p className='my-6 text-indigo-900'>
                      When you generate a personal address a 
                      wallet address is setup linked to the address
                    </p>
                    <img className='w-56 mx-auto' src='/carousel1.svg' alt='First slider image'/>
                  </SwiperSlide>
                  <SwiperSlide className='text-center w-[50%] mx-auto'>
                    <h3 className='text-lg text-indigo-900 font-bold'>Send Crypto to address</h3>
                    <p className='my-6 text-indigo-900'>
                      After generating your address, you can now send any cryptocurrency to the address
                    </p>
                    <img className='w-56 mx-auto' src='/carousel2.svg' alt='First slider image'/>
                  </SwiperSlide>
                  <SwiperSlide className='text-center w-[50%] mx-auto'>
                    <h3 className='text-lg text-indigo-900 font-bold'>Send cash to your bank account</h3>
                    <p className='my-6 text-indigo-900'>
                      You can fund your bank account from your wallet easily.
                    </p>
                    <img className='w-56 mx-auto' src='/carousel3.svg' alt='First slider image'/>
                  </SwiperSlide>
                  <div className='swiper__pagination'>
                    
                  </div>
                </Swiper>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
/*
                    <button
                      type="button"
                      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      <ArrowSmLeftIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <ArrowSmRightIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
*/