import React from "react";
import QRCode from "react-qr-code";

const AddressComponent = ({ address }) => {
  return (
    <div className="flex flex-col py-6 px-10 min-w-[22.8rem] bg-[#F9F8FF] border-2 border-[#A673EF] rounded-2xl my-14">
      <div className="flex justify-center items-center">
        <QRCode value="Tobi is a guy" />
      </div>
      <div className="flex justify-between items-center my-4">
        <p className="font-medium text-sm  text-[#0F1D40]">
          Wallet Address: 0x27e27e2...27
        </p>
        <img src="/copy.svg" alt="Copy" className=" cursor-pointer" />
      </div>
      <button className="w-full bg-[#7B61FF] shadow-md rounded py-2 text-[#F9F8FF] text-xl font-medium">
        Generate Now
      </button>
    </div>
  );
};

export default AddressComponent;
