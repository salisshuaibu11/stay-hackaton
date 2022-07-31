import React from "react";

export default function Confirm({ name, bankName, account, amount }) {
  return (
    <div className="absolute inset-0">
      <h3 className="text-3xl text-[#0F1D40] font-semibold">
        Fill in Your Account Details
      </h3>
      <form className=" mt-14">
        <div className="flex w-full min-h-[3.125rem] items-center">
          <label className="bg-[#EEEFF2] w-[9.6rem] px-2 py-3 h-full">
            Account Name
          </label>
          <p className="bg-[#F5F5F5] flex-1 h-full p-3">{name}</p>
        </div>
        <div className="flex w-full items-center">
          <label className="bg-[#EEEFF2] w-[9.6rem] px-2 min-h-[3.125rem] py-3">
            Bank
          </label>
          <p className="bg-white flex-1 min-h-[3.125rem] p-3">{bankName}</p>
        </div>
        <div className="flex w-full items-center">
          <label className="bg-[#EEEFF2] w-[9.6rem] px-2 min-h-[3.125rem] py-3">
            Account Number
          </label>
          <p className="bg-[#F5F5F5] flex-1 min-h-[3.125rem] p-3">{account}</p>
        </div>
        <div className="flex w-full items-center">
          <label className="bg-[#EEEFF2] w-[9.6rem] min-h-[3.125rem] px-2 py-3">
            Amount
          </label>
          <p className="bg-white flex-1 min-h-[3.125rem] p-3">{amount}</p>
        </div>
      </form>
      <div className=" mt-16">
        <button
          type="click"
          className="flex justify-center items-center w-full shadow-sm h-16 rounded uppercase px-6 border border-transparent text-base font-medium text-white bg-[#7B61FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          withdraw
        </button>
      </div>
    </div>
  );
}
