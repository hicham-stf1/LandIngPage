import React from 'react'

import { PaperAirplaneIcon } from '@heroicons/react/outline'
export default function Section2() {
  return (
    <div className="bg-white p-8">
      <div className="container mx-auto xl:px-32">
        <div className="flex items-center gap-6 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h1 className="mb-12  space-y-3 text-3xl font-bold tracking-tight  ">
              Why<span className="text-blue-600"> Finest50</span> <br />
              <span> Marketplace Consultation</span>
            </h1>
            <div className="flex flex-row">
              <div>
                <PaperAirplaneIcon className="mt-1 h-5 w-5 rotate-90 p-1 text-blue-700" />
              </div>
              <div>
                <p className="mb-4 font-bold">
                  Anim pariatur cliche reprehenderit?
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <PaperAirplaneIcon className="mt-1 h-5 w-5 rotate-90 p-1 text-blue-700" />
              </div>
              <div>
                <p className="mb-4 font-bold">
                  Anim pariatur cliche reprehenderit?
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <PaperAirplaneIcon className="mt-1 h-5 w-5 rotate-90 p-1 text-blue-700" />
              </div>
              <div>
                <p className="mb-4 font-bold">
                  Anim pariatur cliche reprehenderit?
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 lg:mb-0">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/horizontal/048.jpg"
              className="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
