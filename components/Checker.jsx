import React from "react";

export default function Checker({ name, bankName, account, amount }) {
  return (
    <form className=" mt-14">
      <div className="flex w-full items-center">
        <label className="bg-[#EEEFF2] w-[9.6rem] px-2 py-3 min-h-[3.125rem] ">
          Account Name
        </label>
        <p className="bg-[#F5F5F5] flex-1 p-3 min-h-[3.125rem]">{name}</p>
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
          Amount (Naira)
        </label>
        <p className="bg-white flex-1 min-h-[3.125rem] p-3">{amount}</p>
      </div>
      <div className="flex w-full items-center">
        <label className="bg-[#EEEFF2] w-[9.6rem] px-2 min-h-[3.125rem] py-3">
          Fee (Naira)
        </label>
        <p className="bg-[#F5F5F5] flex-1 min-h-[3.125rem] p-3">120.00</p>
      </div>
    </form>
  );
}
