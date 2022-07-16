import React from 'react'
import Category from './Category'

export default function CategoriesSection() {
  return (
    <div className="bg-white p-10">
      <div className="flex flex-row justify-between">
        <div>
          {' '}
          <h3 class="mb-8 text-3xl font-bold">
            Brows By our wide range of Categories
          </h3>
        </div>
        <div>
          <h2 className="text-blue-600">View All</h2>
        </div>
      </div>
      <div className="mb-10 grid  grid-cols-5">
        <Category />

        <Category />

        <Category />
        <Category />
        <Category />
      </div>
    </div>
  )
}
