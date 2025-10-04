import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const MoreGallery = () => {
  const moreImages = [
    { id: 1, imgUrl: "/gallery/p1.jpg", title: "Image 1", description: "Description of Image 1" },
    { id: 2, imgUrl: "/gallery/p2.jpg", title: "Image 2", description: "Description of Image 2" },
    { id: 3, imgUrl: "/gallery/t0.jpg", title: "Image 3", description: "Description of Image 3" },
    { id: 4, imgUrl: "/gallery/t1.jpg", title: "Image 4", description: "Description of Image 4" },
    { id: 5, imgUrl: "/gallery/t2.jpg", title: "Image 5", description: "Description of Image 5" },
    { id: 6, imgUrl: "/gallery/t3.jpg", title: "Image 6", description: "Description of Image 6" },
    { id: 7, imgUrl: "/gallery/t4.jpg", title: "Image 7", description: "Description of Image 7" },
    { id: 8, imgUrl: "/gallery/c1.jpg", title: "Image 8", description: "Description of Image 8" },
    { id: 9, imgUrl: "/gallery/c2.jpg", title: "Image 9", description: "Description of Image 9" },
    { id: 10, imgUrl: "/gallery/c3.jpg", title: "Image 10", description: "Description of Image 10" },
    { id: 10, imgUrl: "/gallery/c4.jpg", title: "Image 10", description: "Description of Image 10" },
    { id: 10, imgUrl: "/gallery/finalist.jpg", title: "Image 10", description: "Description of Image 10" },
    { id: 10, imgUrl: "/gallery/pteam.jpg", title: "Image 10", description: "Description of Image 10" },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-[55px] font-bold text-[#243137]">2024</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {moreImages.map((item) => (
            <Link key={item.id} to="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-800 shadow-lg md:h-80">
              <img
                src={item.imgUrl}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreGallery;
