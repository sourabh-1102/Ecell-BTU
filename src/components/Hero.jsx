import React from 'react'
import logo from "../assets/logoB.svg"
export const Hero = () => {
    return (
        <>
            <div className="bg-gray-900 pb-6 sm:pb-8 lg:pb-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <header className="mb-4 flex items-center justify-between py-4 md:py-8">
                        {/* logo - start */}
                        <a
                            href="/"
                            className="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl"
                            aria-label="logo"
                        >
                            {/* <svg
                                width="95"
                                height="94"
                                viewBox="0 0 95 94"
                                className="h-auto w-6 text-indigo-400"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                            </svg> */}
                            <img
                                id='logo'
                                width="95"
                                height="194"
                                viewBox="0 0 95 94"
                                className="h-auto w-10 text-indigo-400"
                                fill="currentColor"
                                src={logo} alt="" />
                            E-Cell
                        </a>
                        {/* logo - end */}

                        {/* nav - start */}
                        <nav className="hidden gap-12 lg:flex">
                            <a href="#" className="text-lg font-semibold text-indigo-400">
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-lg font-semibold text-gray-300 transition duration-100 hover:text-indigo-400 active:text-indigo-500"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="text-lg font-semibold text-gray-300 transition duration-100 hover:text-indigo-400 active:text-indigo-500"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="text-lg font-semibold text-gray-300 transition duration-100 hover:text-indigo-400 active:text-indigo-500"
                            >
                                About
                            </a>
                        </nav>
                        {/* nav - end */}

                        {/* buttons - start */}
                        <a
                            href="#"
                            className="hidden rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-gray-300 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:text-gray-100 md:text-base lg:inline-block"
                        >
                            Contact Sales
                        </a>

                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-2.5 py-2 text-sm font-semibold text-gray-300 ring-indigo-300 hover:bg-gray-700 focus-visible:ring active:text-gray-100 md:text-base lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Menu
                        </button>
                        {/* buttons - end */}
                    </header>

                    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-900 py-16 shadow-lg md:py-20 xl:py-48">
                        {/* image - start */}
                        <img
                            src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
                            loading="lazy"
                            alt="Photo by Fakurian Design"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        {/* image - end */}

                        {/* overlay - start */}
                        <div className="absolute inset-0 bg-indigo-500/50"></div>
                        {/* overlay - end */}

                        {/* text start */}
                        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">


                            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                                Revolutionary way to build the web
                            </h1>

                            {/* <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                                <a
                                    href="#"
                                    className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                                >
                                    Start now
                                </a>

                                <a
                                    href="#"
                                    className="inline-block rounded-lg bg-gray-700 px-8 py-3 text-center text-sm font-semibold text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-white md:text-base"
                                >
                                    Take tour
                                </a>
                            </div> */}
                        </div>
                        {/* text end */}
                    </section>
                </div>
            </div>
        </>
    )
}
