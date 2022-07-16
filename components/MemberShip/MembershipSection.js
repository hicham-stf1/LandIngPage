import React from 'react'
import Button from '../Button'
import GallerySide from './GallerySide'

export default function MembershipSection() {
  return (
    <div className="bg-white">
      <h2 className=" text-center text-4xl font-bold">Become A Member Now</h2>
      <div className="flex flex-row ">
        <div>
          <GallerySide />
        </div>
        <div className="max-x-[400px] -top-4 mt-52  text-gray-700">
          <h1 className="space-y-2  font-bold">
            List and Build your Business Or Offer Professional Solutions On The
            World's Largest Marketplace and Community
          </h1>
          <div className="mt-10 justify-center align-middle">
            {' '}
            <Button text="Become A Member Now" />
          </div>
        </div>
        <div>
          <GallerySide />
        </div>
      </div>
    </div>
  )
}
