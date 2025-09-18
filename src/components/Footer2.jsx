import React from "react";

const Footer2 = () => {
    return (
        <div className="bg-gray-900">
            <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* Top Section */}
                <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                    {/* Logo + About */}
                    <div className="col-span-full lg:col-span-2">
                        <div className="mb-4 lg:-mt-2">
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
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
                        <p className="mb-6 text-gray-400 sm:pr-8">
                            Filler text is dummy text which has no meaning however looks very
                            similar to real text.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-4">
                            {[
                                "M12 2.163c3.204...",
                                "M24 4.557c-.883...",
                                "M19 0h-14c-2.761...",
                                "M12 0c-6.626 0-12...",
                            ].map((d, i) => (
                                <a
                                    key={i}
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
                                        <path d={d} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                            Products
                        </div>
                        <nav className="flex flex-col gap-4">
                            {["Overview", "Solutions", "Pricing", "Customers"].map(
                                (item, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </nav>
                    </div>

                    {/* Company */}
                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                            Company
                        </div>
                        <nav className="flex flex-col gap-4">
                            {[
                                "About",
                                "Investor Relations",
                                "Jobs",
                                "Press",
                                "Blog",
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Support */}
                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                            Support
                        </div>
                        <nav className="flex flex-col gap-4">
                            {["Contact", "Documentation", "Chat", "FAQ"].map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Legal */}
                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                            Legal
                        </div>
                        <nav className="flex flex-col gap-4">
                            {["Terms of Service", "Privacy Policy", "Cookie settings"].map(
                                (item, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </nav>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
                    © 2021 - Present Flowrift. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer2;
