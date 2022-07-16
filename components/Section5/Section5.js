import React from 'react'
import Button from '../Button'
import Profile from './Profile'
import SmallComponent from './SmallComponent'

export default function Section5() {
  return (
    <div className="bg-white p-6">
      <div>
        <h2 className=" text-center text-4xl font-bold">
          The wall of Finest50
        </h2>
        <p className="mb-2 text-center font-sans">
          Lorem ipsumLorem ipsumLorem ipsum v Lorem ipsumLorem ipsumvLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        </p>
        <h2 className="mb-12 text-center text-2xl font-bold">Discover now</h2>
      </div>
      <div class="zoom relative mb-10 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat p-4 shadow-lg">
        <div className="-p-14 mb-20 lg:mb-0">
          <div
            className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              className="w-full"
            />
            <a href="#!">
              <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="flex flex-row justify-between">
            <div className="ml-3">
              {' '}
              <div className="mb-3  flex items-end justify-end text-sm font-medium text-black lg:justify-start">
                <Profile />
              </div>
            </div>
            <div>
              {' '}
              <div className="mb-3 flex items-end justify-end text-sm font-medium text-blue-500 lg:justify-start">
                113.6 $
              </div>
            </div>
          </div>
          <div className="divide-y-2">
            <p className=" font-sm mb-4 text-gray-500">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>
            <div className="flex flex-row p-6">
              <div>
                <SmallComponent />
              </div>
              <div className="pl-10">
                <SmallComponent />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around">
            <Button text="Message" />
            <button
              type="button"
              className=" rounded border border-2 border-sky-600 bg-white px-6 py-2 text-sm font-medium uppercase leading-snug text-black shadow-md transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg"
            >
              Hire
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
