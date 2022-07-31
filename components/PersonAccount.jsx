import React from "react";

export default function PersonalAccount({
  accountName,
  accountNumber,
  setPersonalAccount,
}) {
  return (
    <div
      onClick={setPersonalAccount}
      className="flex items-center p-4 border border-[#E2E4E8] rounded-lg mt-5 bg-white cursor-pointer"
    >
      <img
        className="h-16 w-16 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <div className="flex flex-col ml-4">
        <p className=" text-2xl font-medium text-[#0F1D40] mb-2">
          Personal Account
        </p>
        <p className=" text-sm">
          Fund <span className="font-semibold">{accountName}</span> account:{" "}
          <span className="font-semibold">
            {accountNumber?.substring(0, 1)}******
            {accountNumber?.substring(accountNumber?.length - 3)}
          </span>
        </p>
      </div>
    </div>
  );
}
