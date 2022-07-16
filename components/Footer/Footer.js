import React from 'react'
import TextCadre from './TextCadre'
import AppStoreButton from '../AppStoreButton'
import PlayStoreButton from '../PlayStoreButton'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 text-center text-gray-600 lg:text-left">
        <div className="flex items-center justify-between border-b border-gray-300 p-6 ">
          <div className="mr-12 hidden lg:block">
            <div>Finest50 Logo here</div>
          </div>
          <div className="flex justify-end">
            <div className="mr-8">
              <TextCadre text="Total users" number="120.00" />
            </div>
            <div className="">
              <TextCadre text="Total members" number="120.00" />
            </div>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            <div className="">
              <AppStoreButton />
              <PlayStoreButton />
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase text-blue-500 md:justify-start">
                <u>Products</u>
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Angular
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  React
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase text-blue-500 md:justify-start">
                <u>Products</u>
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Angular
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  React
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase text-blue-500 md:justify-start">
                <u>Products</u>
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Angular
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  React
                </a>
              </p>
            </div>

            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase text-blue-500 md:justify-start">
                <u> Useful links</u>
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Pricing
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Settings
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-start bg-gray-200 p-6">
          <span>© 2022 Copyright:</span>
          <a
            className="font-semibold text-gray-600"
            href="https://tailwind-elements.com/"
          >
            Finest50
          </a>
        </div>
      </footer>
    </div>
  )
}
