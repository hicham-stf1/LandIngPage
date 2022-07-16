import React from 'react'

export default function Profile() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div>
          <img
            src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="ml-2 flex flex-col">
          <p className="text-sm">Hicham Zaidi</p>
          <p className="text-xs">Another Text</p>
        </div>
      </div>
    </div>
  )
}
