import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="lg:h-screen bg-gradient-to-r from-indigo-900 to-indigo-700 overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Stay</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/logo.svg"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex">
             <Link href="/auth/login" passHref>
              <a
                className="inline-flex items-center px-16 py-2 border border-gray-300 shadow-sm text-base text-white font-medium rounded-md focus:outline-none"
              >
                Login
              </a>
             </Link>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-black ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <Link href="/auth/login" passHref>
                  <a
                    className="inline-flex mx-2 my-3 items-center px-16 py-2 border border-gray-300 shadow-sm text-base text-white font-medium rounded-md focus:outline-none"
                  >
                  Login
                  </a>
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6">
                    <span className="md:block">
                      <span className='text-indigo-400'>Crypto</span> to <span className="text-indigo-400">Naira</span> conversion
                    </span>{' '}
                    <span className="md:block">made simple and fast.</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Transfer any cryptocurrency you have from any exchange
                    to your naira account instantly.
                  </p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-center space-x-6">
                      <Link href="/auth/signup" passHref>
                        <a
                          className="inline-flex items-center px-16 py-2 border border-transparent text-base font-medium shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Signup
                       </a>
                      </Link>
                       <a href="#" className='text-white'>
                        Learn more
                       </a>
                    </div>
                    <div className='mt-2 mx-12'>
                      <Image 
                        width={50}
                        height={50}
                        src='/signupIndicator.svg' 
                        alt='Signup Indicator'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="sm:max-w-md sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <Image width={100} height={100} layout='responsive' src="/homeLogo.svg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}