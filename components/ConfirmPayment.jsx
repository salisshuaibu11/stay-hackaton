import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import api from "@/services/api";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "./Spinner";

export default function ConfirmPayment({
  isOpen,
  modalHandler,
  name,
  bankName,
  bankCode,
  account,
  amount,
  closeModal,
  loading,
  save,
}) {
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-gray-100 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-[27.5rem] sm:p-6">
                  <div>
                    <div>
                      <div className="flex justify-between items-center mb-5">
                        <Dialog.Title
                          as="h3"
                          className="leading-6 font-semibold text-[#0F1D40] text-xl"
                        >
                          Would you like to save this account?
                        </Dialog.Title>
                        <XIcon
                          className="w-6 h-6 cursor-pointer"
                          onClick={closeModal}
                        />
                      </div>
                      <div className="mt-6">
                        <p className=" text-sm">
                          <span className="font-semibold">{name}</span> account:{" "}
                          <span className="font-semibold">
                            {account?.substring(0, 1)}******
                            {account?.substring(account?.length - 3)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex justify-around">
                    <button
                      type="button"
                      className="inline-flex text-xl justify-center items-center shadow px-6 py-2 bg-[#7B61FF] font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm rounded"
                      onClick={save}
                    >
                      {loading ? <Spinner /> : "Yes"}
                    </button>
                    <button
                      className="border border-[#7B61FF] rounded text-xl py-2 px-6 text-[#7B61FF]"
                      onClick={closeModal}
                    >
                      No
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Toaster />
    </>
  );
}
