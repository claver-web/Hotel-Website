// GalleryPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  "/gallery/hotel_gallery.webp",
  "/gallery/hotel_gallery 2.webp",
  "/gallery/hotel_gallery 3.webp",
  "/gallery/hotel_gallery.webp",
];

const GalleryPreview = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-10 text-center">
          Hotel Gallery
        </h2>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              loading="lazy"
              src={img}
              alt={`gallery-${i}`}
              className="w-full h-64 object-cover rounded-lg shadow hover:scale-105 transition-transform"
            />
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-10">
          <Link to='events'> <button className="bg-[#001f54] hover:bg-[#003080] text-white px-6 py-3 rounded-md transition">
            See Full Gallery
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
