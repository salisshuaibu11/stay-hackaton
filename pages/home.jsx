import { useState } from "react";
import { EyeIcon, EyeOffIcon, ArrowNarrowUpIcon } from "@heroicons/react/solid";

export default function Home() {
  const [balanceVisibility, setBalanceVisibility] = useState(false);

  const toggleBalanceVisibility = () => {
    setBalanceVisibility(!balanceVisibility);
  };

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
        </div>
      </main>
    </div>
  )
}