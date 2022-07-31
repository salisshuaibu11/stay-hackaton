import React, { useState } from "react";
import QRCode from "react-qr-code";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const AddressComponent = ({ address, generateAddress, back }) => {
  const [copy, setCopy] = useState(false);
  const copyHandler = () => {
    setCopy(true);
    toast.success("Address Copied Successfully");
    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };
  return (
    <div className="flex flex-col py-6 px-10 max-w-[22.8rem] bg-[#F9F8FF] border-2 border-[#A673EF] rounded-2xl my-14">
      <Toaster />
      <div className="flex justify-center items-center">
        <QRCode value={address} />
      </div>
      <div className="flex justify-between items-center my-4">
        <p className="font-medium text-sm  text-[#0F1D40]">
          Wallet Address:{" "}
          {`${address.substring(0, 9)}...${address.substring(
            address.length - 2
          )}`}
        </p>
        <CopyToClipboard text={address} onCopy={copyHandler}>
          <span className="cursor-pointer">
            <img src="/copy.svg" alt="Copy" />
          </span>
        </CopyToClipboard>
      </div>
      <button
        onClick={generateAddress}
        className="w-full bg-[#7B61FF] shadow-md rounded py-2 text-[#F9F8FF] text-xl font-medium"
      >
        Generate Again
      </button>
      <p
        onClick={() => back(false)}
        className="text-[#0F1D40] underline text-center text-base mt-3 cursor-pointer"
      >
        Go Back
      </p>
    </div>
  );
};

export default AddressComponent;
