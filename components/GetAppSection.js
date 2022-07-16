import React from 'react'
import AppStoreButton from './AppStoreButton'
import PlayStoreButton from './PlayStoreButton'

export default function GetAppSection() {
  return (
    <div>
      <div>
        <section NameName="mb-40">
          <div className="bg-gray-50 px-6 py-12 text-center text-gray-800 md:px-12 lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="flex grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="mb-12 text-xl font-bold tracking-tight md:text-3xl xl:text-7xl">
                    Get the <br />
                    <span className="text-blue-600">Finest50</span> App
                  </h1>{' '}
                  <p className="mb-8 max-w-[500px] text-center">
                    Got an industry you need consultaion Lorum upsem Lorum upsem
                    v Lorum upsem Lorum upsem Lorum upsem Lorum upsem
                  </p>
                  <div className="flex flex-row ">
                    <PlayStoreButton />
                    <div className="ml-4">
                      <AppStoreButton />
                    </div>
                  </div>
                </div>
                <div className="mb-12 lg:mb-0">
                  <img
                    src="https://mdbootstrap.com/img/new/ecommerce/vertical/028.jpg"
                    className="w-full rounded-lg shadow-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
