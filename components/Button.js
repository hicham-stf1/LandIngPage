import Link from 'next/link'
import React from 'react'

export default function Button({ text, onClick, link }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className=" rounded bg-blue-400 px-3 py-2 text-sm font-medium uppercase leading-snug text-black shadow-md transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg"
      >
        {text}
      </button>
    </div>
  )
}
