// import React, { useState } from "react";
// import logo from "../assets/6.png";
// import { Link } from "react-router-dom"; // Add this import

// export const Header = () => {
//   const [isMoreOpen, setIsMoreOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header
//       className="sticky top-0 z-50 flex items-center  rounded-full mb-3 h-14 w-[80%] justify-between ml-[10%] px-4 md:px-8 py-2 md:py-4
//       bg-[#243137] shadow-md backdrop-blur-sm transition-all duration-300"
//     >
//       {/* logo - start */}
//       <Link // Replaced <a> with Link
//         to="/" // Replaced href with to
//         className="inline-flex items-center gap-2.5 text-2xl font-bold bg-[] md:text-3xl"
//         aria-label="logo"
//       >
//         <img
//           id="logo"
//           className="h-17 w-17 rounded-xl"
//           src={logo}
//           alt="E-Cell Logo"
//         />
//         E-Cell
//       </Link>
//       {/* logo - end */}

//       {/* nav - start */}
//       <nav className="hidden gap-8 lg:flex">
//         <Link // Replaced <a> with Link
//           to="/about" // Replaced href with to
//           className="relative text-lg font-semibold text-white transition duration-100 hover:text-blue-500 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:left-0"
//         >
//           About
//         </Link>
//         <Link // Replaced <a> with Link
//           to="/features" // Replaced href with to
//           className="relative text-lg font-semibold text-white transition duration-100 hover:text-blue-500 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:left-0"
//         >
//           Events
//         </Link>
//         <Link // Replaced <a> with Link
//           to="/gallery" // Replaced href with to
//           className="relative text-lg font-semibold text-white transition duration-100 hover:text-blue-500 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:left-0"
//         >
//           Gallery
//         </Link>
//         <Link to="/team" className="...">
//           Team
//         </Link>
//         <Link // Replaced <a> with Link
//           to="/blogSection" // Replaced href with to
//           className="relative text-lg font-semibold text-white transition duration-100 hover:text-blue-500 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 after:content-[''] hover:after:w-full hover:after:left-0"
//         >
//           Blog
//         </Link>

//         {/* More dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setIsMoreOpen(!isMoreOpen)}
//             className="text-lg font-semibold text-white transition duration-100 hover:text-blue-500 flex items-center gap-1"
//           >
//             More
//             <svg
//               className={`w-4 h-4 transition-transform duration-200 ${
//                 isMoreOpen ? "rotate-180" : ""
//               }`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </button>
//           {isMoreOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-[#243137] rounded-md shadow-lg z-50">
//               {/* Keep <a> for anchor links or replace if a route exists */}
//               <a
//                 href="#contact"
//                 className="block px-4 py-2 text-white hover:bg-gray-700"
//                 onClick={() => setIsMoreOpen(false)}
//               >
//                 Register
//               </a>
//               <Link // Replaced <a> with Link
//                 to="/moments" // Replaced href with to
//                 className="block px-4 py-2 text-white hover:bg-gray-700"
//                 onClick={() => setIsMoreOpen(false)}
//               >
//                 Moments
//               </Link>

//               <Link // Replaced <a> with Link
//                 to="/faq" // Replaced href with to
//                 className="block px-4 py-2 text-white hover:bg-gray-700"
//                 onClick={() => setIsMoreOpen(false)}
//               >
//                 FAQ
//               </Link>
//               <a // Keep <a> for anchor links
//                 href="#contact"
//                 className="block px-4 py-2 text-white hover:bg-gray-700"
//                 onClick={() => setIsMoreOpen(false)}
//               >
//                 Contact
//               </a>
//             </div>
//           )}
//         </div>
//       </nav>
//       {/* nav - end */}

//       {/* mobile menu button - start */}
//       <button
//         type="button"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//         className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-2.5 py-2 text-sm font-semibold text-white ring-blue-300 hover:bg-gray-700 focus-visible:ring active:text-gray-100 md:text-base lg:hidden"
//       >
//         {isMenuOpen ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             />
//           </svg>
//         )}
//         Menu
//       </button>
//       {/* mobile menu button - end */}

//       {/* Mobile Menu Overlay */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center space-y-8 z-40">
//           <Link // Replaced <a> with Link
//             to="/about" // Replaced href with to
//             className="text-2xl font-semibold text-white hover:text-blue-500"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             About
//           </Link>
//           <Link // Replaced <a> with Link
//             to="/BlogSection" // Replaced href with to
//             className="text-2xl font-semibold text-white hover:text-blue-500"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Blog
//           </Link>
//           <Link // Replaced <a> with Link
//             to="/team" // Replaced href with to
//             className="text-2xl font-semibold text-white hover:text-blue-500"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Team
//           </Link>
//           <Link // Replaced <a> with Link
//             to="/gallery" // Replaced href with to
//             className="text-2xl font-semibold text-white hover:text-blue-500"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Gallery
//           </Link>
//           <Link // Replaced <a> with Link
//             to="/events" // Replaced href with to
//             className="text-2xl font-semibold text-white hover:text-blue-500"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Events
//           </Link>
//           <Link // Replaced <a> with Link
//             to="/faq" // Replaced href with to
//             className="text-2xl font-semibold text-white hover:text-blue-500"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             FAQ
//           </Link>
//           <Link // Replaced <a> with Link
//             to="/Features" // Replaced href with to
//             className="text-2xl font-semibold text-white hover:text-blue-500"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Moments
//           </Link>
//           <a // Keep <a> for anchor links
//             href="#contact"
//             className="text-2xl font-semibold text-white hover:text-blue-500"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Contact
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };
import React, { useState } from "react";
import logo from "../assets/5.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 flex items-center rounded-full mb-3 h-14 w-[80%] justify-between ml-[10%] px-4 md:px-8 py-2 md:py-4 
      bg-[#243137] shadow-md backdrop-blur-sm transition-all duration-300"
    >
      {/* Logo */}
      <Link
        to="/"
        aria-label="logo"
        className="inline-flex  items-center gap-2.5 text-2xl font-bold md:text-3xl"
      >
        <img className="h-10 w-10 rounded-xl" src={logo} alt="E-Cell Logo" />
        E-Cell
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden gap-8 lg:flex">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/features" className="nav-link">
          Events
        </Link>
        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
        <Link to="/team" className="nav-link">
          Team
        </Link>
        <Link to="/blog" className="nav-link">
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
              className="w-4 h-4 transition-transform duration-200 ${isMoreOpen ? rotate-180 : }}fill=none"
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
                to="/moments"
                className="dropdown-link"
                onClick={() => setIsMoreOpen(false)}
              >
                Moments
              </Link>
              <Link
                to="/faq"
                className="dropdown-link"
                onClick={() => setIsMoreOpen(false)}
              >
                FAQ
              </Link>
              <a
                href="#contact"
                className="dropdown-link"
                onClick={() => setIsMoreOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-2.5 py-2 text-sm font-semibold text-white lg:hidden"
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14M3 10h14M3 15h14"
              clipRule="evenodd"
            />
          </svg>
        )}
        Menu
      </button>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center space-y-8 z-40">
          <Link
            to="/about"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/blog"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/team"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/gallery"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/features"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/faq"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/moments"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Moments
          </Link>
          <a
            href="/footer2"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
