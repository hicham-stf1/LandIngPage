import React from 'react'
import Filter from '../components/Filter'
export default function TheHome() {
  return (
    <div className="m-32 mt-36 flex flex-col">
      <div>
        <h1 className="text-6xl font-bold text-black">Hire the best experts</h1>
      </div>

      <div>
        {' '}
        <p className="mt-1 text-3xl font-bold">
          With The Leading Global Advisory Network
        </p>
      </div>
      <div>
        <h1 className="mt-5 text-xl font-bold">
          Start Live consultation with our Handpicked Experts For Your Business
          And Personal Growth
        </h1>
      </div>
      <div className="mt-5 flex flex-row">
        <Filter text="all" />
        <div class="input-group relative mb-4 flex flex-wrap items-stretch rounded">
          <div>
            <input
              type="search"
              className="form-control relative m-0 block min-w-0 flex-auto rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div>
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded bg-blue-600 px-4 py-[11px] text-center text-base font-normal text-white"
              id="basic-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div>
          <Filter text="filter" />
        </div>
        <div>
          <div>
            <Filter text="Sort" />
          </div>
          <div className="ml-3">
            <p className="text-white">clear all</p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-row">
        <div className="mr-6">
          {' '}
          <button
            type="submit"
            class="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Hire an expert
          </button>
        </div>
        <div>
          {' '}
          <button
            type="submit"
            class="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Become an expert
          </button>
        </div>
      </div>
    </div>
  )
}
