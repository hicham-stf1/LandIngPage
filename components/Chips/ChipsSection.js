import React from 'react'
import Chip from './Chip'

export default function ChipsSection() {
  return (
    <div className="bg-white p-8">
      <div className="flex flex-row justify-between">
        <div>
          {' '}
          <h3 class="mb-8 text-3xl font-bold">Explore our best Skills</h3>
        </div>
        <div>
          <h2 className="text-blue-600">View All</h2>
        </div>
      </div>

      <div className=" grid grid-cols-6  ">
        <Chip text="Business Incorporation" />
        <Chip text="Business Incorporation" />
        <Chip text="Business Incorporation" />
        <Chip text="Business Incorporation" />
        <Chip text="Business Incorporation" />
        <Chip text="Business Incorporation" />
        <Chip text="Business Incorporation" />
        <Chip text="Business Incorporation" />
      </div>
    </div>
  )
}
