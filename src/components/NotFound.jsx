// src/components/NotFound.jsx
import React from 'react';
import img1 from "../assets/emoji.png"; 

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-8 sm:p-12 min-h-screen">
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">404</h1>
      
      <img 
        className='w-32 h-32 sm:w-48 sm:h-48 my-6 mx-auto'
        src={img1} 
        alt="Page Not Found Emoji"
      />
      
      {/* Message - slightly larger on bigger screens */}
      <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-lg">
        Oops! The page you are looking for does not exist.
      </p>
      
      {/* Optional: Add a link to go back home */}
      <a 
        href="/" 
        className="mt-6 px-4 py-2 bg-[#bd9e66] text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
      >
        Go to Homepage
      </a>
      
    </div>
  );
};

export default NotFound;