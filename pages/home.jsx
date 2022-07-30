import { useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { EyeIcon, EyeOffIcon, XIcon, LibraryIcon, ArrowNarrowUpIcon } from "@heroicons/react/solid";
import {  useForm } from "react-hook-form";
import Auth from "@/hooks/useAuth";
import ConfirmPayment from "../components/ConfirmPayment";
import OnBoarding from "../components/onBoarding";
import api from "@/services/api";
import toast, { Toaster } from "react-hot-toast";

const Home = ({ banks }) => {
  const [balanceVisibility, setBalanceVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmPaymentOpen, setConfirmPaymentOpen] = useState(false);
  const { register, formState: { errors } } = useForm();

  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [bankName, setBankName] = useState("");
  const [loadingName, setLoadingName] = useState(false);
  const [bankCode, setBankCode] = useState("");

  const toggleBalanceVisibility = () => {
    setBalanceVisibility(!balanceVisibility);
  };

  const confirmPaymentHandler = () => {
    setConfirmPaymentOpen(!confirmPaymentOpen);
  };

  const getAccountName = async (code) => {
    setLoadingName(true);
    try {
      const {data} = await api.get(`https://stay-demo.herokuapp.com/account/name?bank_code=${code}&account_number=${account}`);

      setName(data?.data.name);

      setLoadingName(false);
    } catch (error) {
      const message = error.response.data.message;
      toast(message);
      setLoadingName(false);
    }
  }

  return (
    <div className="h-screen overflow-hidden">
      <nav
        className="relative w-screen py-3 px-8 bg-gray-50 flex items-center justify-between border-b-2"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">Stay</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/stay.svg"
                alt=""
              />
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
          <div className="bg-gray-50 text-center border p-3 min-w-fit w-[300px] min-h-fit border-indigo-700 rounded-md">
            <div className="header flex justify-between">
              <span className="text-lg">Balance</span>
              {balanceVisibility && <EyeIcon onClick={toggleBalanceVisibility} className="cursor-pointer text-slate-500 h-6 w-6 flex items-center" />}
              {!balanceVisibility && <EyeOffIcon onClick={toggleBalanceVisibility} className="cursor-pointer text-slate-500 h-6 w-6 flex items-center" />}
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 my-4">₦ 2,000,000</h3>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center space-x-3 px-6 py-3 border border-indigo-400 text-indigo-600 shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span>Withdraw</span>
              <ArrowNarrowUpIcon className="-ml-1 rotate-8 mr-3 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex-1 py-8 flex justify-center h-screen bg-gray-200">
          <form className="text-center min-w-fit w-[350px]">
            <h4>
              1 USDT = ₦670
            </h4>
            <div>
              <label htmlFor="price" className="block text-sm text-left font-medium text-gray-700">
                You send
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 py-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 text-white flex items-center px-2 bg-indigo-500">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    className="focus:ring-indigo-500 bg-indigo-600 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent sm:text-sm rounded-md"
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
            <h4 className="my-3">
              You receive ₦0
            </h4>

            <button
              type="button"
              className="inline-flex items-center space-x-3 uppercase px-6 py-3 border border-indigo-400 text-white bg-indigo-500 shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                          <h3 className="text-3xl text-slate-800 font-extrabold">Fill in Your Account Details</h3>
                          <div className="space-y-6 mt-10">
                            <div>
                              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                                Enter Amount to Withdraw
                              </label>
                              <div className="mt-1">
                                <input
                                  id="amount"
                                  name="amount"
                                  type="amount"
                                  {...register("amount", {required: true})}
                                  value={amount}
                                  onChange={e => setAmount(e.target.value)}
                                  autoComplete="amount"
                                  required
                                  placeholder="eg. N 300"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.amount && <p className="text-red-600">Please make sure you put amount</p>}
                              </div>
                            </div>

                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Recipient&apos;s Account Number
                              </label>
                              <div className="mt-1">
                                <input
                                  id="account"
                                  name="account"
                                  type="account"
                                  autoComplete="account"
                                  {...register("account", {required: true, minLength: 10})}
                                  value={account}
                                  onChange={e => setAccount(e.target.value)}
                                  required
                                  placeholder="123456789"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.account && <p className="text-red-600">Please check the account number</p>}
                              </div>
                            </div>

                            <div>
                              <div className="mt-1 relative shadow-sm border border-gray-200">
                                <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none">
                                  <LibraryIcon className="w-6 h-6 text-gray-500"/>
                                </div>
                                <select
                                    id="currency"
                                    name="currency"
                                    onChange={(e) => {
                                      getAccountName(e.target.value);
                                      const bank = banks.find((bank) => bank.code === e.target.value);
                                      setBankName(bank.name);
                                      setBankCode(bank.code);
                                    }}
                                    className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-full py-2 w-full pl-10 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                  >
                                    {banks.map((bank) => (
                                      <option
                                        value={bank.code}
                                        key={bank.name}
                                      >{bank.name}</option>
                                    ))}
                                  </select>
                              </div>
                            </div>

                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Recipient&apos;s Account Name
                              </label>
                              <div className="mt-1">
                                <input
                                  id="name"
                                  name="name"
                                  type="name"
                                  autoComplete="name"
                                  value={loadingName ? "Loading..." : name}
                                  onChange={e => setName(e.target.value)}
                                  {...register("name")}
                                  required
                                  className="appearance-none cursor-not-allowed block w-full px-3 py-2 border text-slate-600 bg-gray-100 border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div>
                              <button
                                type="click"
                                onClick={confirmPaymentHandler}
                                className="flex justify-center uppercase px-16 py-2 border border-transparent text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                withdraw
                              </button>
                            </div>
                          </div>
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
        name={name}
        bankCode={bankCode}
        bankName={bankName}
        account={account}
        amount={amount}
      />
      <Toaster />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://stay-demo.herokuapp.com/account/banks");

  const banks = await res.json();

  return {
    props: {
      banks: banks.data,
    },
  }
}

export default Auth(Home);