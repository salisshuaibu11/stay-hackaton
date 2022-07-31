import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Spinner from "@/components/Spinner";

import Image from "next/image";
import Link from "next/link";
import api from "@/services/api";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const createAccount = async (userData) => {
    setIsLoading(true);

    try {
      const response = await api.post("/auth/sign-up", userData);

      const { data } = response;

      if (data) {
        localStorage.setItem("user-data", JSON.stringify(data.data));
        toast(data.message, {
          icon: "👏",
        });

        router.push("/home");
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="hidden md:w-[50%] md:flex flex-col justify-center bg-[#220D6D] py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full">
            <div>
              <img className="h-12 w-auto" src="/logo.svg" alt="Stay Logo" />
              <h2 className="mt-6 text-2xl font-medium text-[#F9F8FF] w-[32.8rem]">
                Create your account and get your crytocurrency in Naira.
              </h2>
            </div>

            <div className="mt-8">
              <Image
                width={540}
                height={476}
                src="/loginIllustration.svg"
                alt="Login page illustration"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col px-4 md:px-8 pt-20 bg-[#F9F8FF]">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-[#0F1D40] font-semibold text-2xl md:text-4xl">
                Signup
              </h3>
              <h3 className="text-[#656E85] text-base md:text-lg">
                Already have an account?
                <Link href="/auth/login" passHref>
                  <a className="text-[#7B61FF] font-semibold"> Login.</a>
                </Link>
              </h3>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form
                  onSubmit={handleSubmit(createAccount)}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#525C76]"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                        placeholder="stay@gmail.com"
                        className="appearance-none md:w-[32.87rem] h-12 block w-full px-3 py-2 border border-[#E2E4E8] rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base font-semibold text-[#525C76]"
                      />
                      {errors.email && (
                        <p className="text-red-500">
                          Please check the email address
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-[#525C76]"
                    >
                      Fullname
                    </label>
                    <div className="mt-1">
                      <input
                        id="fullname"
                        name="fullname"
                        type="fullname"
                        value={fullname}
                        {...register("fullname", {
                          required: true,
                          minLength: 3,
                        })}
                        onChange={(e) => setFullname(e.target.value)}
                        autoComplete="name"
                        required
                        placeholder="STAY"
                        className="appearance-none md:w-[32.87rem] h-12 block w-full px-3 py-2 border border-[#E2E4E8] rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base font-semibold text-[#525C76]"
                      />
                      {errors.fullname && (
                        <p className="text-red-500">Please check the name</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-xs font-semibold text-[#525C76]"
                    >
                      Password
                    </label>
                    <div className="mt-1 relative">
                      {/* {passwordVisibility && (
                        <EyeIcon
                          onClick={togglePasswordVisibility}
                          className="absolute cursor-pointer text-slate-500 h-6 w-6 right-1 top-[7px] flex items-center"
                        />
                      )}
                      {!passwordVisibility && (
                        <EyeOffIcon
                          onClick={togglePasswordVisibility}
                          className="absolute cursor-pointer text-slate-500 h-6 w-6 right-1 top-[7px] flex items-center"
                        />
                      )} */}
                      <input
                        id="password"
                        name="password"
                        type={passwordVisibility ? "text" : "password"}
                        autoComplete="password"
                        {...register("password", { required: true })}
                        value={password}
                        placeholder="stay"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="appearance-none h-12 block w-full md:w-[32.87rem] px-3 py-2 border border-[#E2E4E8] rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base font-semibold text-[#525C76]"
                      />
                      {errors.password && (
                        <p className="text-red-500">
                          Please check the Password
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-14">
                    <button
                      type="submit"
                      className="flex justify-center px-6 py-2 border border-transparent w-full  md:w-[18.8rem] font-medium text-white bg-[#7B61FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded shadow"
                    >
                      {isLoading ? <Spinner /> : "Create Account"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
