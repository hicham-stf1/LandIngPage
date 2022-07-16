import React from 'react'

export default function Section6() {
  return (
    <div>
      {/* <!-- Container for demo purpose --> */}
      <div className="container my-24 mx-auto px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-gray-800">
          <h2 className=" text-center text-3xl font-bold">
            Find a fintest<span className="text-blue-600"> 50 EXperts</span> In
            your field
          </h2>
          <p className="mb-2 text-center font-sans">
            Lorem ipsumLorem ipsumLorem ipsum v Lorem ipsumLorem ipsumvLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
          <h2 className="mb-12 text-center text-2xl font-bold">
            Coose your category and connect with a Finest 50 experts today
          </h2>

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="zoom relative h-56 w-56 ">
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                  className="w-full rounded-lg align-middle transition duration-300 ease-linear"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                    <div className="flex h-full items-center justify-center">
                      <h5 className="m-6  text-lg font-bold text-white">
                        Hollywood exhibition
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="zoom relative h-56 w-56 ">
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                  className="w-full rounded-lg align-middle transition duration-300 ease-linear"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                    <div className="flex h-full items-center justify-center">
                      <h5 className="m-6  text-lg font-bold text-white">
                        Hollywood exhibition
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="zoom relative h-56 w-56 ">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                className="w-full rounded-lg align-middle transition duration-300 ease-linear"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                  <div className="flex h-full items-center justify-center">
                    <h5 className="m-6  text-lg font-bold text-white">
                      Hollywood exhibition
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
