import React from 'react'

export default function Chip({ text }) {
  return (
    <div className="py-3 px-8">
      <span className="align-center ease flex w-max cursor-pointer rounded-full border-2 border-blue-600  px-4 py-2 text-sm font-semibold text-blue-500 transition duration-300 active:bg-gray-300">
        {text}
      </span>
    </div>
  )
}
