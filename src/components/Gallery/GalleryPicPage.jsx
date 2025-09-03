// GalleryPage.jsx
import React from "react";

const galleryImages = [
  "/hotel.jpeg",
  "Bhotel/hotelBackgound.jpeg",
  "/hotel.jpeg",
  "/hotel3.jpeg",
  "Bhotel/hotelBackgound2.jpeg",
  "/hotel2.jpeg"
];

const GalleryPicPage = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-12 text-center">
          Hotel Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={img}
                loading="lazy"
                alt={`gallery-${i}`}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPicPage;
