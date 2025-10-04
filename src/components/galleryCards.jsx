import React from "react";

const GalleryCards = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {data.map((item) => (
        <div key={item.id} className="group relative flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={item.imgUrl}
            alt={item.title}
            className="w-full h-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-100"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryCards;
