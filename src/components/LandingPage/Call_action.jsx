// CallToAction.jsx
import React from "react";
import { Link } from "react-router-dom"; // if using React Router

const CallToAction = () => {
  return (
    <section className="relative bg-[#001f54] text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Book Your Dream Stay?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Experience luxury and comfort in our curated hotels. Book now and make
          unforgettable memories.
        </p>

        {/* CTA Button */}
        <Link
          to="/booking"
          className="inline-block bg-white text-[#001f54] font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-gray-100 transition"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
