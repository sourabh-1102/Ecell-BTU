import React from "react";
import logo from "../assets/5.png";
import instagramLogo from "../assets/instalogo.png";
import gmaillogo from "../assets/maillogo.png";
import linkedinlogo from "../assets/linkedinlogo.png";
// SVG Icons for social media
const socialIcons = {
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.851.07 1.171.055 1.838.214 2.378.411.64.237 1.173.612 1.706 1.145.533.533.908 1.066 1.145 1.706.197.54.356 1.207.411 2.378.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.055 1.171-.214 1.838-.411 2.378-.237.64-.612 1.173-1.145 1.706-.533.533-1.066.908-1.706 1.145-.54.197-1.207.356-2.378.411-1.267.058-1.647.07-4.851.07s-3.584-.012-4.851-.07c-1.171-.055-1.838-.214-2.378-.411-.64-.237-1.173-.612-1.706-1.145-.533-.533-.908-1.066-1.145-1.706-.197-.54-.356-1.207-.411-2.378-.058-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.851c.055-1.171.214-1.838.411-2.378.237-.64.612-1.173 1.145-1.706.533-.533 1.066-.908 1.706-1.145.54-.197 1.207-.356 2.378-.411C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.324.015 7.042.072 5.76.128 4.793.303 3.868.663c-.927.36-1.717.868-2.433 1.584C.717 2.964.209 3.754.85 4.68.49 5.605.315 6.572.258 7.854.201 9.136.186 9.553.186 12s.015 2.864.072 4.146c.057 1.282.232 2.249.592 3.174.36.925.868 1.716 1.584 2.432.716.716 1.507 1.224 2.432 1.584.925.36 1.892.535 3.174.592 1.282.057 1.699.072 4.146.072s2.864-.015 4.146-.072c1.282-.057 2.249-.232 3.174-.592.925-.36 1.716-.868 2.432-1.584.716-.716 1.224-1.507 1.584-2.432.36-.925.535-1.892.592-3.174.057-1.282.072-1.699.072-4.146s-.015-2.864-.072-4.146c-.057-1.282-.232-2.249-.592-3.174-.36-.925-.868-1.716-1.584-2.432-.716-.716-1.507-1.224-2.432-1.584-.925-.36-1.892-.535-3.174-.592C15.136 0 14.719.015 12 .015zm0 5.484a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.745a4.245 4.245 0 110-8.49 4.245 4.245 0 010 8.49zm6.307-8.455a1.536 1.536 0 11-3.072 0 1.536 1.536 0 013.072 0z" />
    </svg>

    //  <img
    //         src={instagramLogo} // Use the imported image here
    //         alt="Instagram Logo"
    //         className="h-15 w-15 inline-block" // Customize size as needed
    //       />
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-2-7c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13 7h-2v-3.5c0-.92-.76-1.5-1.5-1.5-.735 0-1.5.58-1.5 1.5v3.5h-2v-6h2v1.2c.57-.866 1.48-1.2 2.76-1.2 2 0 3.24 1.25 3.24 3.79v3.21z" />
    </svg>
    //  <img
    //         src={linkedinlogo} // Use the imported image here
    //         alt="Instagram Logo"
    //         className="h-15 w-15 inline-block" // Customize size as needed
    //       />
  ),
  gmail: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 6.5V17c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V6.5l10 7.5 10-7.5zM24 4c0-1.103-.897-2-2-2H2C.897 2 0 2.897 0 4v16c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V4zM2 4h20l-10 7.5L2 4z" />
    </svg>
    //  <img
    //         src={gmaillogo} // Use the imported image here
    //         alt="Gmail Logo"
    //         className="h-15 w-15 inline-block" // Customize size as needed
    //       />
  ),
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#243137] text-white py-10 rounded-t-4xl">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 mx-auto max-w-screen-xl">
        {/* Left Section: Logo and Name */}
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          <img
            src={logo}
            alt="E-Cell Logo"
            className="h-30 w-30 inline-block "
          />
          <div className="ml-4 md:ml-6 text-center md:text-left">
            <h1 className="text-xl font-bold leading-none">
              <span className="block text-white mt-1">ENTREPRENEURSHIP</span>
              <span className="block text-white mt-2">CELL</span>
            </h1>
            <p className="text-sm mt-1 text-white">
              Bikaner Technical University
            </p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-400 h-30"></div>

        {/* Right Section: Contact Info and Social Links */}
        <div className="flex flex-col w-full md:w-auto mt-6 md:mt-0 md:ml-20">
          {/* Contact Information */}
          <div className="flex flex-col space-y-4 text-gray-300 w-full md:w-auto">
            {/* Address */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
                RIICO Karni Industrial Area, Pugal Road, Bikaner -334004
              </span>
            </div>
            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.342l-2.582 1.353a1 1 0 00-.466 1.151l1.353 2.582a1 1 0 001.151.466l1.353-2.582a1 1 0 011.342-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>0151 2250940, 50</span>
            </div>
            {/* Email */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>ecell.btu@gmail.com</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-2 justify-center md:justify-start">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="  hover:shadow-amber-200 hover:shadow-2xl rounded-2xl  hover:scale-105  transition-colors duration-200"
            >
              {socialIcons.instagram}
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:shadow-amber-200 hover:shadow-2xl rounded-2xl hover:scale-105  transition-colors duration-200"
            >
              {socialIcons.linkedin}
            </a>
            <a
              href="mailto:ecell.btu@gmail.com"
              className=" hover:shadow-amber-200 hover:shadow-2xl rounded-2xl hover:scale-105  transition-colors duration-200"
            >
              {socialIcons.gmail}
            </a>
            
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center items-center mt-10 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} E-Cell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
