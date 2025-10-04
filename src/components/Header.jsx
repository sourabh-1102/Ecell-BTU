import React, { useState } from "react";
import logo from "../assets/5.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Common class for nav links with underline animation
  const navLink =
    "relative text-lg font-semibold text-white transition duration-200 hover:text-blue-500 " +
    "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 " +
    "after:bg-white after:transition-all after:duration-300 after:content-[''] " +
    "hover:after:w-full hover:after:left-0";

  // Mobile link styling
  const mobileLink =
    "text-2xl font-semibold text-white hover:text-blue-500 transition duration-200";

  // Dropdown link styling
  const dropdownLink =
    "block px-4 py-2 text-white hover:bg-gray-700 transition duration-200";

  return (
    <header
      className="sticky top-0 z-50 flex items-center rounded-full mb-3 h-14 w-[80%] justify-between ml-[10%] px-4 md:px-8 py-2 md:py-4 
      bg-[#243137] shadow-md backdrop-blur-sm transition-all duration-300"
    >
      {/* Logo */}
      <Link
        to="/"
        aria-label="logo"
        className="inline-flex items-center gap-2.5 text-2xl font-bold  md:text-3xl  "
      >
        <img className="h-10 w-10 rounded-xl hover:scale-130" src={logo} alt="E-Cell Logo" />
        E-Cell
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden gap-8 lg:flex">
        <Link to="/" className={navLink}>
          Home
        </Link>
        <Link to="/about" className={navLink}>
          About
        </Link>
        <Link to="/features" className={navLink}>
          Events
        </Link>
        <Link to="/gallery" className={navLink}>
          Gallery
        </Link>
        <Link to="/team" className={navLink}>
          Team
        </Link>
        <Link to="/blog" className={navLink}>
          Blog
        </Link>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className="text-lg font-semibold text-white hover:text-blue-500 flex items-center gap-1"
          >
            More
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isMoreOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isMoreOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#243137] rounded-md shadow-lg z-50">
              <Link
               to="/moregallery"
                className={dropdownLink}
                onClick={() => setIsMoreOpen(false)}
              >
                Moments
              </Link>
               <Link
                to="/reg"
                
                className={dropdownLink}
                onClick={() => setIsMoreOpen(false)}
              >
                Register
              </Link>
               <a
                href="/contact"
                className={dropdownLink}
                onClick={() => setIsMoreOpen(false)}
              >
                Contact
              </a>
              <Link
                to="/faq"
                className={dropdownLink}
                onClick={() => setIsMoreOpen(false)}
              >
                FAQ
              </Link>
             
              
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="inline-flex items-center gap-2  rounded-lg px-2.5 py-2 text-sm font-semibold text-white lg:hidden"
      >
        {isMenuOpen ? (
          // Cross Icon
          <img src="/teamImages/xmark-regular-full.svg" alt="menu" className="h-6 w-6 " />
        ) : (
          // Hamburger Icon
          <img src="/teamImages/menu.png" alt="menu" className="h-6 w-6 " />
        )}
      </button>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-[50vh] bg-black/80 rounded-4xl mt-0 flex flex-col items-center justify-start space-y-4 z-40 overflow-y-auto">
          <Link
            to="/"
            className={mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/gallery"
            className={mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
           <Link
            to="/moregallery"
            className={mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Moments
          </Link>
          <Link
            to="/features"
            className={mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <a
            href="/reg"
            className={mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Register
          </a>
          <Link
            to="/blog"
            className={mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <a
            href="/contact"
            className={mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <Link
            to="/faq"
            className={mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
        </div>
      )}
    </header>
  );
};
