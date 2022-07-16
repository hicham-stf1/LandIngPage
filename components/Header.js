import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import Button from '../components/Button'

export default function Header() {
  return (
    <div className="pb-3 shadow-sm">
      <div className="mt-2 flex max-w-6xl justify-between lg:mx-auto">
        {/* LEFT */}
        <div className="flex flex-row">
          <div className="relative w-24">
            <Image
              src="https://links.papareact.com/ocw"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="relative mt-1 ml-4 rounded-md">
            <div className="pointer-events-none absolute inset-y-0  flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md border-gray-300 bg-blue-100 pl-10 focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
          <div className="ml-4 flex w-80 flex-row  ">
            <div className="relative ml-1 mt-2  cursor-pointer">
              {' '}
              <h3>How it works</h3>
            </div>
            <div className="relative mt-2 ml-3 cursor-pointer">
              {' '}
              <h3>Become a member</h3>
            </div>
          </div>
        </div>
        {/* MIDDLE - SEARCH INPUT FIELD */}
        <div className="max-x-xs flex flex-row"> </div>
        {/* RIGHT */}
        <div className="flex items-center justify-end space-x-4 ">
          <div className="mt-1">
            <Button text="Hire an expert" />
          </div>
          <HomeIcon onClick={() => router.push('/')} className="navBtn" />
          <MenuIcon className="h-10 w-10 cursor-pointer md:hidden" />

          <>
            <PlusCircleIcon className="navBtn md:mr-2  " />
            <UserGroupIcon className="navBtn" />
            <MenuIcon className="h-10 w-10 cursor-pointer " />
          </>
        </div>
      </div>
    </div>
  )
}
