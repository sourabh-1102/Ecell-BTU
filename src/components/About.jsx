import React from "react";
import image from "../assets/a1.jpg";

// Data for the statistics section
const stats = [
  { icon: "building", number: "1+", label: "Cities" },
  { icon: "lightbulb", number: "100+", label: "Startups" },
  { icon: "student", number: "100+", label: "Students" },
];

export const About = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16 text-center">
            <h2 className="mb-4 text-[55px] rounded-2xl inline-block font-bold text-[#243137]">
              About Us
            </h2>

            {/* About Us Content on Right */}
            <div className="md:pt-8 flex flex-col justify-center items-start">
              <p className="mb-6 text-black text-[19px] inline-block md:mb-16">
                The Entrepreneurship Cell (E-Cell) of BTU Bikaner aims to foster an entrepreneurial mindset among students and ignite their innovative spirit. We nurture budding ideas, helping them blossom into impactful ventures. This is achieved by connecting student entrepreneurs with a comprehensive network of on-campus resources, incubators, seed funds, and angel investors, thereby transforming novel concepts into successful startups.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="relative w-full h-auto py-12 md:py-16 overflow-hidden bg-[#243137] rounded-2xl">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Statistics Content */}
          <div className="relative flex flex-col md:flex-row items-center justify-around px-4 md:px-8 text-white z-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4">
                {/* Icon Placeholder (replace with actual SVGs later) */}
                <div className="h-16 w-16 text-white mb-2">
                  {/* These should be your SVG icons */}
                  {stat.icon === "building" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2v-11z"
                      />
                    </svg>
                  )}
                  {stat.icon === "lightbulb" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9.663 17h4.673M12 21h.01M15.42 20.803A5.922 5.922 0 0112 18.006c-1.396 0-2.739.563-3.719 1.573a6.57 6.57 0 00-.776 2.072c.49.52 1.13.912 1.83.992M12 16a4 4 0 100-8 4 4 0 000 8zM12 2a10 10 0 100 20 10 10 0 000-20z"
                      />
                    </svg>
                  )}
                  {stat.icon === "student" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-1.846 0-3.692.484-5.187 1.353A9.992 9.992 0 0012 21c1.846 0 3.692-.484 5.187-1.353A9.992 9.992 0 0012 14zM16 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-1">{stat.number}</div>
                <div className="text-lg md:text-xl font-semibold text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};