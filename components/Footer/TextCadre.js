import React from 'react'

export default function TextCadre({ text, number }) {
  return (
    <div className="flex flex-col">
      <div>
        <p>{text}</p>
      </div>
      <div className="rounded border-2 border-black bg-white px-3 py-1 text-sm font-medium uppercase leading-snug text-black shadow-md transition duration-150 ease-in-out">
        <p className="text-center">{number}</p>
      </div>
    </div>
  )
}
