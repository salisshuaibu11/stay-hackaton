import React from "react";
import Checker from "./Checker";
import Spinner from "./Spinner";

export default function Confirm({
  name,
  bankName,
  account,
  amount,
  withdrawalHandler,
  loading,
}) {
  return (
    <div className="absolute inset-0">
      <h3 className="text-3xl text-[#0F1D40] font-semibold">
        Fill in Your Account Details
      </h3>
      <Checker
        name={name}
        bankName={bankName}
        account={account}
        amount={amount}
      />
      <div className=" mt-16">
        <button
          onClick={withdrawalHandler}
          type="button"
          className="flex justify-center items-center w-full shadow-sm h-16 rounded uppercase px-6 border border-transparent text-base font-medium text-white bg-[#7B61FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading ? <Spinner /> : "Withdraw"}
        </button>
      </div>
    </div>
  );
}
