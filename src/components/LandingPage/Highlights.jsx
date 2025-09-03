// Highlights.jsx
import React from "react";
import {
  FaWifi,
  FaSwimmer,
  FaSpa,
  FaMapMarkerAlt,
  FaPercent,
} from "react-icons/fa";

const Highlights = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-12">
          Why Choose Us
        </h2>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Amenities */}
          <div className="p-8 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <div className="text-[#001f54] text-4xl mb-4 flex justify-center">
              <FaWifi />
            </div>
            <h3 className="text-xl font-semibold mb-2">Top Amenities</h3>
            <p className="text-gray-600">
              Stay connected with free WiFi, relax in our pool & spa, and enjoy
              modern fitness facilities.
            </p>
          </div>

          {/* Special Offers */}
          <div className="p-8 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <div className="text-[#001f54] text-4xl mb-4 flex justify-center">
              <FaPercent />
            </div>
            <h3 className="text-xl font-semibold mb-2">Special Offers</h3>
            <p className="text-gray-600">
              Save big with exclusive discounts, seasonal packages, and loyalty
              rewards for your next stay.
            </p>
          </div>

          {/* Location */}
          <div className="p-8 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <div className="text-[#001f54] text-4xl mb-4 flex justify-center">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
            <p className="text-gray-600">
              Just minutes away from city attractions, shopping, and nightlife —
              convenience at your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
