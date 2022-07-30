import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'

export default function ConfirmPayment({ isOpen, modalHandler }) {

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={modalHandler}>
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
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-gray-100 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Confirm Withdrawal
                      </Dialog.Title>
                      <XIcon className='w-6 h-6 cursor-pointer' onClick={modalHandler}/>
                    </div>
                    <form className="mt-2">
                      <div className='flex w-full items-center'>
                        <label className='bg-gray-200 w-[155px] py-2 px-4'>Full name</label>
                        <p className='bg-transparent py-2 px-2 flex-1'>STAY</p>
                      </div>
                      <div className='flex w-full items-center'>
                        <label className='bg-gray-200 w-[155px] py-2 px-4'>Email Address</label>
                        <p className='bg-white py-2 px-2 flex-1'>STAY@gmail.com</p>
                      </div>
                      <div className='flex w-full items-center'>
                        <label className='bg-gray-200 w-[155px] py-2 px-4'>Bank</label>
                        <p className='bg-transparent py-2 px-2 flex-1'>WEMA BANK</p>
                      </div>
                      <div className='flex w-full items-center'>
                        <label className='bg-gray-200 w-[155px] py-2 px-4'>Account Number</label>
                        <p className='bg-white py-2 px-2 flex-1'>123456789</p>
                      </div>
                      <div className='flex w-full items-center'>
                        <label className='bg-gray-200 w-[155px] py-2 px-4'>Amount Naira</label>
                        <p className='bg-transparent py-2 px-2 flex-1'>3000</p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={modalHandler}
                  >
                    Withdraw
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}