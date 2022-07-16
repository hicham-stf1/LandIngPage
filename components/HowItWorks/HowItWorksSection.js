import React from 'react'
import Image from 'next/image'
import home from './home.png'
import group from './group.png'
import icons from './icons.png'

export default function HowItWorksSection() {
  return (
    <div className="flex flex-col bg-white p-8">
      {' '}
      <h1 className="mb-10 text-center text-4xl font-bold uppercase">
        How Finest50 Works
      </h1>
      <div className="flex flex-row p-5">
        <div className="flex h-[30%] w-[45%] flex-col items-center justify-center">
          {' '}
          <h1 className="mb-8 text-center text-3xl font-bold tracking-tight ">
            Your Search For
            <br />
            <span className="text-blue-600">The best</span> Ends Here
          </h1>{' '}
          <p className="mb-8 max-w-[400px] justify-center text-center">
            Got an industry you need consultaion Lorum upsem Lorum upsem v Lorum
            upsem Lorum upsem Lorum upsem Lorum upsem
          </p>
        </div>
        <div className="h-[30%] w-[45%]">
          <Image alt="hh" src={home} />

          <div className="-mt-24 -ml-20 h-[30%] w-[30%]">
            {' '}
            <Image alt="hh" src={home} />
          </div>
          <div className="-mt-48 -ml-28 h-[30%] w-[25%] ">
            {' '}
            <Image alt="hh" style={{ borderRadius: '16px' }} src={icons} />
          </div>
        </div>
      </div>
      <div className="flex flex-row p-5">
        <div className="h-[30%] w-[45%]">
          <Image alt="hh" src={group} />
          {/* 
          <div className="-mt-28 -ml-20 h-[30%] w-[30%]">
            {' '}
            <Image alt="hh" src={home} />
          </div> */}
        </div>
        <div className="flex h-[30%] w-[45%] flex-col items-center justify-center">
          {' '}
          <h1 className="mb-8 mt-20 text-center text-3xl font-bold tracking-tight ">
            Your Search For
            <br />
            <span className="text-blue-600">The best</span> Ends Here
          </h1>{' '}
          <p className="mb-8 max-w-[400px] justify-center text-center">
            Got an industry you need consultaion Lorum upsem Lorum upsem v Lorum
            upsem Lorum upsem Lorum upsem Lorum upsem
          </p>
        </div>
      </div>
    </div>
  )
}
