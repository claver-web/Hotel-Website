// AmenitiesWithGallery.jsx
import React from "react";

const AmenitiesWithGallery = ({galleryImages}) => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-12 text-center">
          Amenities & Comfort
        </h2>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <img
              loading="lazy"
              key={idx}
              src={img}
              alt={`amenity-${idx}`}
              className="w-full h-56 object-cover rounded-lg shadow hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesWithGallery;
