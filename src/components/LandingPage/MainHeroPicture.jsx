// HeroBanner.jsx
import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/Bhotel/hotelBackgound.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,20,60,0.6)]"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect Stay
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Luxury hotels, budget stays, and everything in between.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to='rooms'> <button className="bg-[#001f54] hover:bg-[#003080] text-white font-medium px-6 py-3 rounded-md transition">
            Book Now
          </button> </Link>
          <Link to='events'><button className="border border-white hover:bg-white hover:text-[#001f54] text-white font-medium px-6 py-3 rounded-md transition">
            Explore Hotels
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
