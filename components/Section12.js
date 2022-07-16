import React from 'react'
import AppStoreButton from './AppStoreButton'
import PlayStoreButton from './PlayStoreButton'

export default function Section12() {
  return (
    <div class=" w-full   bg-blue-600 p-9 text-center  lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div>
          <h1 className="p-6 text-center text-2xl font-bold text-white">
            Explore a world of Opportunities, Today!
          </h1>
          <div class="flex items-center gap-12 lg:grid-cols-2">
            <div className="flexflex-col">
              {' '}
              <h3 className="text-3xl font-bold text-white">
                Ready to Find Expert?
              </h3>
              <h3 className="text-2xl font-bold text-white">
                Your journey Of Growth and Transformation Awaits You!
              </h3>
              <h1 className="my-4 text-3xl font-bold text-white">
                Meet, Greet and Grow
              </h1>
              <button
                type="button"
                className=" rounded border-black bg-white px-6  py-2 text-[16px] font-medium uppercase"
              >
                Sign In
              </button>
              <div className="mt-14">
                <h2 className="mt-5 text-center text-2xl font-bold text-white">
                  Download Our App
                </h2>
                <div className="flex flex-row justify-evenly ">
                  <AppStoreButton />
                  <PlayStoreButton />
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
