import React from "react";
import PersonalAccount from "./PersonAccount";
import Checker from "./Checker";

export default function FundAccount({
  name,
  bankName,
  account,
  amount,
  setAmount,
}) {
  return (
    <div className="absolute inset-0">
      <h3 className="text-3xl text-[#0F1D40] font-semibold">
        Fund Your Account
      </h3>
      <PersonalAccount accountName={name} accountNumber={account} />
      <div className="mt-6">
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            autoComplete="amount"
            required
            placeholder="eg. N 300"
            className="appearance-none block w-full px-3 rounded border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base h-12"
          />
        </div>
      </div>
      <Checker
        name={name}
        bankName={bankName}
        account={account}
        amount={amount}
      />
      <div className=" mt-16">
        <button
          type="button"
          className="flex justify-center items-center w-full shadow-sm h-16 rounded uppercase px-6 border border-transparent text-base font-medium text-white bg-[#7B61FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          withdraw
        </button>
      </div>
    </div>
  );
}
