import React from "react";

export const Gallery = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12 ">
              <h2 className="text-[55px] font-bold text-[#243137] ">Gallery</h2>
              {/* <p className="hidden max-w-screen-sm text-gray-300 md:block">
                      This is a section of some simple filler text, also known as placeholder
                      text. It shares some characteristics of a real written text.
                  </p> */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-800 shadow-lg md:h-80"
            >
              <img
                src={"/gallery/p2.jpg"}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
              {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      VR
                  </span> */}
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-800 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={"/gallery/t0.jpg"}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
              {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      Tech
                  </span> */}
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-800 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={"/gallery/i1.jpg"}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>

              {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Dev
              </span> */}
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-800 shadow-lg md:h-80"
            >
              <img
                src={"/gallery/p1.jpg"}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>

              {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Retro
              </span> */}
            </a>
            {/* image - end */}
          </div>
          <div className="flex justify-end mt-3">
            {" "}
            {/* isko route krna hai */}
            <a
              href="#"
              className="inline-block rounded-lg border border-gray-700 bg-[#243137] px-4 py-2 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-balck hover:scale-105 hover:shadow-md hover:shadow-black transition-duration-300"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};