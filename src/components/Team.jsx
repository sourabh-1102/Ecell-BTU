import { useState } from "react";
import img1 from "../assets/AryanRohila.jpg";

export const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the hovered item

  const arr = [
    {
      img: "/teamImages/abhi.jpg",
      name: "Abhishek Achariya",
      role: "Coordinator",
      shadowColor: "black",
      socials: {
        Gmail: "https://instagram.com/aryan",
        linkedin: "https://linkedin.com/in/aryan",
      },
    },
    {
      img: img1,
      name: "Vaibhav Pareek",
      role: "Co-coordinator",
      shadowColor: "black",
      socials: {
        Gmail:
          "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jatsourabhsinghgoindsingh@gmail.com",
        linkedin: "https://linkedin.com/in/aryan",
      },
    },
    {
      img:"teamImages/sourabh.jpg",
      name: "Sourabh Singh Jat",
      role: "Technical Head",
      shadowColor: "black",
      socials: {
        Gmail:
          "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jatsourabhsinghgoindsingh@gmail.com",
        linkedin: "https://www.linkedin.com/in/sourabh11",
      },
    },
    {
      img: "/teamImages/manshi.jpg",
      name: "Manshi Kumawat",
      role: "Social Media Head",
      shadowColor: "black",
      socials: {
        Gmail:
          "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=manshikumawat13@gmail.com",
        linkedin: "https://www.linkedin.com/in/manshi-kumawat-90b92130a",
      },
    },
    {
      img: "/teamImages/meenal.jpeg",
      name: "Meenal Soni",
      role: "Management Head",
      shadowColor: "black",
      socials: {
        Gmail: "https://instagram.com/aryan",
        linkedin: "https://linkedin.com/in/aryan",
      },
    },
    {
      img: "/teamImages/bhawna.jpg",
      name: "Bhawna Choudhary",
      role: "Media Head",
      shadowColor: "black",
      socials: {
        Gmail: "https://instagram.com/aryan",
        linkedin: "https://linkedin.com/in/aryan",
      },
    },
    {
      img: "/teamImages/sheetal.png",
      name: "Sheetal Rathore",
      role: "Designing Head",
      shadowColor: "black",
      socials: {
        Gmail:
          "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sheetalr.2006@gmail.com",
        linkedin: "https://www.linkedin.com/in/sheetal-rathore-11a947335",
      },
    },
    {
      img: "/teamImages/vasu.jpeg",
      name: "Vasu",
      role: "Content Head",
      shadowColor: "black",
      socials: {
        Gmail:
          "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=vasum1404@gmail.com",
        linkedin: "https://www.linkedin.com/in/vasu-mishra-672297325",
      },
    },
    {
      img: "/teamImages/varsha.jpg",
      name: "Varsha Bishnoi",
      role: "PR Head & Event Management",
      shadowColor: "black",
       socials: {
        Gmail:
          "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=varshabishnoi2729@gmail.com ",
        linkedin: "https://www.linkedin.com/in/varsha-bishnoi-23167732a",
      },
    },
  ];

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12" id="team">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16 text-center">
            <h2 className=" px-4 py-2 rounded-2xl mb-4 text-center text-[55px] font-bold text-[#243137] md:mb-6 lg:text-3xl">
              Our Team
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-black md:text-[19px]">
              The driving force behind our success - a team of passionate and
              dedicated individuals committed to excellence.
            </p>
          </div>

          {/* Founder card (centered and styled the same as others) */}
          <div className="grid place-items-center mb-10">
            <div
              className="team-member flex flex-col items-center gap-4 sm:flex-row md:gap-4 transition-all duration-300 ease-in-out transform p-3 rounded-3xl border-b bg-[#243137]"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                boxShadow: hoveredIndex === 0 ? `0 8px 20px black` : "none", // Emphasize the hover shadow for Founder
                transform: hoveredIndex === 0 ? "scale(1.15)" : "scale(1)", // Slightly bigger scale for Founder
              }}
            >
              <div className="h-36 w-36 overflow-hidden rounded-full bg-gray-800 shadow-lg border-4 border-yellow-400 hover:scale-110 transition-transform duration-300">
                <img
                  src={img1}
                  loading="lazy"
                  alt="Founder"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="text-center">
                <div className="font-bold text-white sm:text-left md:text-lg">
                  Aryan Rohila
                </div>
                <p className="text-lg text-gray-200 sm:text-left md:text-base">
                  Founder
                </p>

                {/* Social media links */}
                <div className="flex justify-center gap-6 mt-3">
                  <a
                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=aryanverma77.av@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/teamImages/Gmail.jpeg"
                      alt="Gmail"
                      className="h-6 w-6 rounded-md hover:shadow-md hover:shadow-white transition-all duration-200 hover:scale-120"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aryan-rohila/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/teamImages/download.jpeg"
                      alt="LinkedIn"
                      className="h-6 w-6 rounded-md hover:shadow-md hover:shadow-blue-500 transition-all duration-200 hover:scale-120"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {arr.map((data, index) => (
              <div
                key={index}
                className="team-member flex flex-col items-center gap-2 sm:flex-row md:gap-4 transition-all duration-300 ease-in-out transform p-3 rounded-3xl border-b bg-[#243137]"
                onMouseEnter={() => setHoveredIndex(index + 1)} // Adjusted for non-Founder items
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  boxShadow:
                    hoveredIndex === index + 1 && data.shadowColor
                      ? `0 4px 12px ${data.shadowColor}`
                      : "none",
                }}
              >
                <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-800 shadow-lg md:h-32 md:w-32 border-2 hover:scale-110 transition-transform duration-300">
                  <img
                    src={data.img}
                    loading="lazy"
                    alt={`Photo of ${data.name}`}
                    className="h-full w-full object-cover object-center bg-[#233f4a]"
                  />
                </div>

                <div>
                  <div className="text-center font-bold text-white sm:text-left md:text-lg">
                    {data.name}
                  </div>
                  <p className="text-center text-sm text-white sm:text-left md:text-base">
                    {data.role}
                  </p>

                  {/* Social media links */}
                  <div className="ml-1">
                    <div className="flex ml-5 gap-6 mt-3 rounded-2xl">
                      {data.socials?.Gmail && (
                        <a
                          href={data.socials.Gmail}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/teamImages/Gmail.jpeg"
                            alt="Gmail"
                            className="h-6 w-6 rounded-md hover:shadow-md hover:shadow-red-600 transition-all duration-200 hover:scale-120"
                          />
                        </a>
                      )}
                      {data.socials?.linkedin && (
                        <a
                          href={data.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/teamImages/download.jpeg"
                            alt="LinkedIn"
                            className="h-6 w-6 rounded-md hover:shadow-md hover:shadow-blue-500 transition-all duration-200 hover:scale-120"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
