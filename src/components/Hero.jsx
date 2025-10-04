import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import myImg from "../assets/h2.jpg";

export const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle navigation
  const handleKnowMoreClick = () => {
    navigate('/knowMore'); // Navigate to /know-more route
  };

  return (
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-black/50 py-16 shadow-lg md:py-20 xl:py-48">
      {/* image - start */}
      <img
        src={myImg}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* image - end */}

      {/* overlay - start */}
      <div className="absolute inset-0 "></div>
      {/* overlay - end */}

      {/* text start */}
      <div className="relative bg-[rgba(36,49,55,0.7)] flex flex-col items-center p-8 mx-auto w-full max-w-2xl rounded-3xl border border-white border-opacity-30 shadow-2xl">
        <div className="mb-6 text-center text-4xl font-bold text-[#bd9e66] sm:text-5xl md:text-6xl">
          E-CELL BTU
        </div>
        <h3 className="text-center text-lg font-semibold text-white sm:text-xl">
          The Entrepreneurship Cell (E-Cell) of Bikaner Technical University
          (BTU) is Rajasthan's largest student-run, non-profit organization
          dedicated to fostering entrepreneurship. It has successfully inspired
          numerous entrepreneurs and continues to be a leading force in the
          state's startup ecosystem.
        </h3>
        {/* Know More Button */}
        <button 
          onClick={handleKnowMoreClick} // Add onClick handler to navigate
          className="mt-8 rounded-full bg-[#bd9e66] px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 ease-in-out hover:bg-[#243137] hover:text-[#bd9e66] hover:scale-105"
        >
          Know More
        </button>
      </div>
      {/* text end */}
    </section>
  );
};
