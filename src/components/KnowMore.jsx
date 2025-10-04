import React, { useState } from "react";

// Importing images from the assets folder
import image1 from "../assets/a1.jpg";
import image2 from "../assets/a1.jpg";
import image3 from "../assets/a1.jpg";

const KnowMorePage = () => {
  // Cards content
  const cards = [
    {
      title: 'What is E-Cell?',
      image: image1, // Reference the imported image here
      shortText: 'E-Cell BTU Bikaner nurtures entrepreneurial ideas and fosters innovative spirit.',
      fullText: 'The Entrepreneurship Cell (E-Cell) of BTU Bikaner aims to foster an entrepreneurial mindset among students and ignite their innovative spirit. We nurture budding ideas, helping them blossom into impactful ventures. This is achieved by connecting student entrepreneurs with a comprehensive network of on-campus resources, incubators, seed funds, and angel investors, thereby transforming novel concepts into successful startups. We provide a robust platform to ensure the growth of every entrepreneurial idea that emerges.'
    },
    {
      title: 'Our Mission',
      image: image2, // Reference the imported image here
      shortText: 'We help turn student ideas into successful ventures.',
      fullText: 'The Entrepreneurship Cell (E-Cell) of Bikaner Technical University (BTU) is Rajasthan\'s largest student-run, non-profit organization dedicated to fostering entrepreneurship. It has successfully inspired numerous entrepreneurs and continues to be a leading force in the state\'s startup ecosystem. We provide guidance, mentorship, and connections to ensure students are equipped with the right tools to take their startup ideas to the next level.'
    },
    {
      title: 'How We Help',
      image: image3, // Reference the imported image here
      shortText: 'We connect student entrepreneurs with resources and investors.',
      fullText: 'Through the E-Cell, student entrepreneurs are connected with resources like incubators, seed funding, angel investors, and a vibrant startup ecosystem. Our aim is to ensure students have all the support they need to turn their ideas into reality. We also provide access to workshops, mentorship programs, and networking events that open doors for innovative ventures to flourish.'
    },
        {
      title: 'How We Help',
      image: image3, // Reference the imported image here
      shortText: 'We connect student entrepreneurs with resources and investors.',
      fullText: 'Through the E-Cell, student entrepreneurs are connected with resources like incubators, seed funding, angel investors, and a vibrant startup ecosystem. Our aim is to ensure students have all the support they need to turn their ideas into reality. We also provide access to workshops, mentorship programs, and networking events that open doors for innovative ventures to flourish.'
    },
        {
      title: 'How We Help',
      image: image3, // Reference the imported image here
      shortText: 'We connect student entrepreneurs with resources and investors.',
      fullText: 'Through the E-Cell, student entrepreneurs are connected with resources like incubators, seed funding, angel investors, and a vibrant startup ecosystem. Our aim is to ensure students have all the support they need to turn their ideas into reality. We also provide access to workshops, mentorship programs, and networking events that open doors for innovative ventures to flourish.'
    },
        {
      title: 'How We Help',
      image: image3, // Reference the imported image here
      shortText: 'We connect student entrepreneurs with resources and investors.',
      fullText: 'Through the E-Cell, student entrepreneurs are connected with resources like incubators, seed funding, angel investors, and a vibrant startup ecosystem. Our aim is to ensure students have all the support they need to turn their ideas into reality. We also provide access to workshops, mentorship programs, and networking events that open doors for innovative ventures to flourish.'
    }
    
  ];

  // State to track opened card
  const [openIndex, setOpenIndex] = useState(null);

  const handleCardClick = (index) => {
    // Toggle the card's dropdown
    if (openIndex === index) {
      setOpenIndex(null); // Close the card if it's already open
    } else {
      setOpenIndex(index); // Open the clicked card
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Know More About E-Cell</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => handleCardClick(index)} // Handle card click
            role="button"
            aria-expanded={openIndex === index ? "true" : "false"} // ARIA accessibility
            aria-controls={`card-content-${index}`} // Link the content to the card
          >
            <div className="p-6 h-[50vh] flex flex-col">
              {/* Image at the top */}
              <div
                className={`transition-all duration-500 ease-in-out rounded-lg mb-4 ${openIndex === index ? 'opacity-0 h-0' : 'opacity-100 h-48'}`}
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              {/* Content area */}
              <h2 className="text-xl font-semibold text-blue-600">{card.title}</h2>
              <p className="mt-2 text-gray-700">{card.shortText}</p>
            </div>

            {/* Dropdown content for each card */}
            <div
              id={`card-content-${index}`}
              className={`absolute inset-0 bg-gray-100 opacity-0 transition-all duration-300 ease-in-out transform ${
                openIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                padding: "1.5rem",
                maxHeight: "200px",  // Ensure the content area is fixed height and scrollable
                overflowY: "auto",  // Make it scrollable if content overflows
              }}
              role="region" // ARIA role for the dropdown content
              aria-live="polite" // Ensure content updates are announced by screen readers
            >
              <p className="text-gray-700">{card.fullText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowMorePage;
