import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
                <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                        <div className="col-span-full lg:col-span-2">
                            {/* logo - start */}
                            <div className="mb-4 lg:-mt-2">
                                <a
                                    href="/"
                                    className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                                    aria-label="logo"
                                >
                                    <svg
                                        width="95"
                                        height="94"
                                        viewBox="0 0 95 94"
                                        className="h-auto w-5 text-indigo-500"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                                    </svg>
                                    Flowrift
                                </a>
                            </div>
                            {/* logo - end */}

                            <p className="mb-6 text-gray-500 sm:pr-8">
                                Filler text is dummy text which has no meaning however looks very
                                similar to real text.
                            </p>

                            {/* social - start */}
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z" />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M24 4.557a9.831 9.831 0 0 1-2.828.775c1.017-.609 1.798-1.574 2.165-2.724a9.867 9.867 0 0 1-3.127 1.195A4.932 4.932 0 0 0 16.847 3c-2.734 0-4.952 2.218-4.952 4.952 0 .388.044.765.127 1.124A14.017 14.017 0 0 1 1.671 3.15a4.931 4.931 0 0 0-.668 2.485c0 1.716.873 3.229 2.201 4.118a4.903 4.903 0 0 1-2.24-.619v.062c0 2.398 1.705 4.397 3.965 4.852a4.93 4.93 0 0 1-2.235.085c.63 1.967 2.445 3.398 4.6 3.437A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z" />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764S5.534 3.204 6.5 3.204 8.25 3.994 8.25 4.968c0 .974-.784 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234C5.662 21.302 4.967 19.16 4.967 19.16c-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                            {/* social - end */}
                        </div>

                        {/* nav - start */}
                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                                Products
                            </div>
                            <nav className="flex flex-col gap-4">
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
                            </nav>
                        </div>
                        {/* nav - end */}

                        {/* nav - start */}
                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                                Company
                            </div>
                            <nav className="flex flex-col gap-4">
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
                            </nav>
                        </div>
                        {/* nav - end */}

                        {/* nav - start */}
                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                                Support
                            </div>
                            <nav className="flex flex-col gap-4">
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                            </nav>
                        </div>
                        {/* nav - end */}

                        {/* nav - start */}
                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                                Legal
                            </div>
                            <nav className="flex flex-col gap-4">
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
                            </nav>
                        </div>
                        {/* nav - end */}
                    </div>

                    <div className="border-t py-8 text-center text-sm text-gray-400">
                        © 2021 - Present Flowrift. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    )
}
