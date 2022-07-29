import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

import Image from "next/image"
import Link from "next/link"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="flex-1 flex flex-col justify-center bg-indigo-900 py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="/logo.svg"
                alt="Stay Logo"
              />
              <h2 className="mt-6 text-lg text-white">Create your account and get your crytocurrency in Naira.</h2>
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
        <div className="flex-1 flex flex-col mt-10 py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex justify-between items-center">
              <h3 className="text-slate-700 font-bold text-2xl">Signup</h3>
              <h3 className="text-gray-400">
                Already have an account?
                <Link href="/auth/signup" passHref>
                  <a className="text-slate-700 font-bold" href="/auth/signup">{" "}Login.</a>
                </Link>
              </h3>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                        placeholder="stay@gmail.com"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Fullname
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoComplete="name"
                        required
                        placeholder="STAY"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1 relative">
                      {passwordVisibility && <EyeIcon onClick={togglePasswordVisibility} className="absolute cursor-pointer text-slate-500 h-6 w-6 right-1 top-[7px] flex items-center" />}
                      {!passwordVisibility && <EyeOffIcon onClick={togglePasswordVisibility} className="absolute cursor-pointer text-slate-500 h-6 w-6 right-1 top-[7px] flex items-center" />}
                      <input
                        id="password"
                        name="password"
                        type={passwordVisibility ? "text" : "password"}
                        autoComplete="password"
                        value={password}
                        placeholder="stay"
                        onChange={e => setPassword(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex justify-center px-16 py-2 border border-transparent text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
