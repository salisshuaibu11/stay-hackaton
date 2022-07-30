import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  EyeIcon,
  EyeOffIcon,
  XIcon,
  LibraryIcon,
  ArrowNarrowUpIcon,
} from "@heroicons/react/solid";
import QRCodeComponent from "../components/Address";

import { banks } from "../utils/bankList";

import ConfirmPayment from "../components/ConfirmPayment";
import OnBoarding from "../components/onBoarding";
import QRCode from "react-qr-code";

export default function Home() {
  const [balanceVisibility, setBalanceVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmPaymentOpen, setConfirmPaymentOpen] = useState(false);

  const toggleBalanceVisibility = () => {
    setBalanceVisibility(!balanceVisibility);
  };

  const confirmPaymentHandler = () => {
    setConfirmPaymentOpen(!confirmPaymentOpen);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <nav
        className="relative w-screen py-3 px-8 bg-gray-50 flex items-center justify-between border-b-2"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">Stay</span>
              <img className="h-8 w-auto sm:h-10" src="/stay.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="md:flex">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </nav>
      <main className="flex-col">
        <div className="flex-1 flex justify-center my-6">
          <div className="bg-[#ECE8FF] py-6 px-16 text-center border-2 min-w-[28.75rem] min-h-[17rem] border-[#8247E5] rounded-lg my-8">
            <div className="flex justify-between items-center">
              <span className="text-[#525C76] font-medium text-[1.75rem]">
                Balance
              </span>
              {balanceVisibility && (
                <EyeIcon
                  onClick={toggleBalanceVisibility}
                  className="cursor-pointer text-slate-500 h-6 w-6 flex items-center"
                />
              )}
              {!balanceVisibility && (
                <EyeOffIcon
                  onClick={toggleBalanceVisibility}
                  className="cursor-pointer text-slate-500 h-6 w-6 flex items-center"
                />
              )}
            </div>
            <h2 className="font-bold text-[#0F1D40] text-[3.5rem]">
              {balanceVisibility ? " ₦ 2,000,000" : "****"}
            </h2>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex rounded justify-center items-center space-x-3 px-6 w-[full] min-w-[14.25rem] py-[10px] my-8 border border-[#A673EF] text-[#8247E5] shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span>Withdraw</span>
              <img src="/bent_arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center min-h-[34.3rem] bg-[#ECE8FF]">
          {/* <QRCodeComponent /> */}
          <form className="text-center mt-8 w-[30.6rem]">
            <h4 className="text-[#0F1D40] text-lg">
              1 USDT = <span className="font-semibold">₦670</span>
            </h4>
            <div className="mt-2">
              <label
                htmlFor="price"
                className="block text-sm text-left font-semibold text-[#525C76]"
              >
                You send
              </label>
              <div className="mt-1 relative rounded shadow-sm">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full font-semibold p-3 border text-base border-[#E2E4E8] rounded outline-none"
                  placeholder="100"
                />
                <div className="absolute inset-y-0 right-0 w-[7rem]  text-[#F9F8FF] flex items-center px-2 bg-[#7B61FF] rounded">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    className="focus:ring-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent sm:text-sm rounded text-base outline-none"
                  >
                    <option>USDT</option>
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>GBP</option>
                    <option>CAD</option>
                  </select>
                </div>
              </div>
            </div>
            <h4 className="text-[#192648] text-lg mt-8 mb-6">
              You receive <span className="font-semibold">₦67,000</span>
            </h4>

            <button
              type="button"
              className="inline-flex items-center space-x-3 uppercase px-6 py-2 h-16 border border-indigo-400 text-[#F9F8FF] bg-[#7B61FF] shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  rounded"
            >
              generate payment address
            </button>
          </form>
          {/* <div className="w-[300px] h-fit border border-indigo-700 min-w-fit">
            QR code
          </div> */}
        </div>
      </main>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="py-6 px-4 sm:px-6">
                        <div className="flex items-center justify-end">
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex-1 py-6 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 py-6 px-4 sm:px-6">
                          <h3 className="text-3xl text-slate-800 font-extrabold">
                            Fill in Your Account Details
                          </h3>
                          <form
                            action="#"
                            method="POST"
                            className="space-y-6 mt-10"
                          >
                            <div>
                              <label
                                htmlFor="amount"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Enter Amount to Withdraw
                              </label>
                              <div className="mt-1">
                                <input
                                  id="amount"
                                  name="amount"
                                  type="amount"
                                  autoComplete="amount"
                                  required
                                  placeholder="eg. N 300"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Recipient&apos;s Email Address
                              </label>
                              <div className="mt-1">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  placeholder="STAY@gmail.com"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-700"
                              ></label>
                              <div className="mt-1 relative shadow-sm border border-gray-200">
                                <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none">
                                  <LibraryIcon className="w-6 h-6 text-gray-500" />
                                </div>
                                <select
                                  id="currency"
                                  name="currency"
                                  className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-full py-2 w-full pl-10 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                >
                                  {banks.map(({ id, name }) => (
                                    <option key={id}>{name}</option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Recipient&apos;s Account Number
                              </label>
                              <div className="mt-1">
                                <input
                                  id="account-number"
                                  name="account-number"
                                  type="account-number"
                                  autoComplete="account-number"
                                  required
                                  placeholder="123456789"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Recipient&apos;s Account Name
                              </label>
                              <div className="mt-1">
                                <input
                                  id="name"
                                  name="name"
                                  type="name"
                                  autoComplete="name"
                                  required
                                  placeholder="STAY TEAM"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div>
                              <button
                                type="submit"
                                onClick={confirmPaymentHandler}
                                className="flex justify-center uppercase px-16 py-2 border border-transparent text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                withdraw
                              </button>
                            </div>
                          </form>
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <OnBoarding />
      {/* Confirm Payment Modal */}
      <ConfirmPayment
        isOpen={confirmPaymentOpen}
        modalHandler={confirmPaymentHandler}
      />
    </div>
  );
}
