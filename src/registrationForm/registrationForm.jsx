import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);  // State to track if the form is submitted
  const iframeRef = useRef(null);  // Reference to the iframe
  const navigate = useNavigate(); // Hook to navigate to home after submission

  const handleFormSubmit = () => {
    setSubmitted(true); // Mark as submitted
    navigate('/'); // Navigate to the Thank You page after submission
  };

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-white py-6 px-4">
      <h2 className="text-4xl text-[#243137] font-bold mb-6  text-center">Registration Form</h2>

      {submitted ? (
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600">Thank you for your submission!</h3>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Return to Home
          </button>
        </div>
      ) : (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <iframe
            ref={iframeRef}
            src="https://docs.google.com/forms/d/e/1FAIpQLSdBPi50k11hrZtdwDsb9kEyJrW83yBYTBGLvkCm-ersNHxrmg/viewform?embedded=true"
            title="Registration Form"
            className="w-full h-[600px] max-w-full border-1 border-b-2 border-[#243137]  rounded-lg mb-4"
          >
            Loading…
          </iframe>
          
          <button
            onClick={handleFormSubmit}
            className="flex w-fill max-w-xs font-semibold rounded-xl mx-auto bg-[#bd9e66] text-[#243137] py-2 px-4  hover:bg-[#243137] hover:text-[#bd9e66] hover:scale-105">
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
