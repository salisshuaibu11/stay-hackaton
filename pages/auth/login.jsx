import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import api from "@/services/api";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

import Spinner from "@/components/Spinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const LoginHandler = async (userData) => {
    setIsLoading(true);

    try {
      const response = await api.post("/auth/sign-in", userData);

      const { data } = response;

      toast(data.message, {
        icon: "👏",
      });

      setTimeout(() => {
        router.push("/home");
      }, 2000);

      localStorage.setItem("user-data", JSON.stringify(data.data));

      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      const message = error.response.data.message;

      toast.error(message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="hidden md:w-[50%] md:flex flex-col justify-center bg-[#220D6D] py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full">
            <div>
              <img className="h-12 w-auto" src="/logo.svg" alt="Stay Logo" />
              <h2 className="mt-6 text-[#F9F8FF] text-2xl font-medium">
                Welcome back, login to access your account.
              </h2>
            </div>

            <div className="mt-20">
              <Image
                width={540}
                height={476}
                src="/loginIllustration.svg"
                alt="Login page illustration"
              />
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col px-8 pt-20 bg-[#F9F8FF]">
          <div className="">
            <div className="flex justify-between items-center">
              <h3 className="text-[#0F1D40] font-semibold text-4xl">Login</h3>
              <h3 className="text-[#656E85] text-lg">
                Dont have an account?
                <Link href="/auth/signup" passHref>
                  <a className="text-[#7B61FF] font-semibold"> Signup.</a>
                </Link>
              </h3>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form
                  onSubmit={handleSubmit(LoginHandler)}
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
                        className="ppearance-none md:w-[32.87rem] h-12 block w-full px-3 py-2 border border-[#E2E4E8] rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base font-semibold text-[#525C76]"
                      />
                      {errors.email && (
                        <p className="text-red-600">
                          Please check the email address
                        </p>
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
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="ppearance-none md:w-[32.87rem] h-12 block w-full px-3 py-2 border border-[#E2E4E8] rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base font-semibold text-[#525C76]"
                      />
                      {errors.password && (
                        <p className="text-red-500">
                          Please check the password
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex justify-center px-6 py-2 border border-transparent w-full  md:w-[18.8rem] font-medium text-white bg-[#7B61FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded shadow"
                    >
                      {isLoading ? <Spinner /> : "Login"}
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
