// Rooms.jsx  image: "/rooms/room1.jpeg",
// RoomsWithFilters.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const allRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    type: "Deluxe",
    capacity: 2,
    price: 2000,
    image: "/rooms/room1.webp",
    features: ["1 King Bed", "Free WiFi", "City View", "Breakfast Included"],
  },
  {
    id: 2,
    name: "Executive Suite",
    type: "Suite",
    capacity: 3,
    price: 4000,
    image: "/rooms/room8.webp",
    features: ["1 King Bed", "Living Area", "Ocean View", "Complimentary Drinks"],
  },
  {
    id: 3,
    name: "Family Room",
    type: "Family",
    capacity: 4,
    price: 2400,
    image: "/rooms/room2.webp",
    features: ["2 Queen Beds", "Free WiFi", "Balcony", "Kids Friendly"],
  },
  {
    id: 4,
    name: "Single Room",
    type: "Single",
    capacity: 1,
    price: 1200,
    image: "/rooms/room11.webp",
    features: ["1 Single Bed", "Free WiFi", "City View"],
  },
];

const RoomsWithFilters = () => {

  const [type, setType] = useState("All");
  const [capacity, setCapacity] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10000);

  const filteredRooms = allRooms.filter((room) => {
    const typeMatch = type === "All" || room.type === type;
    const capacityMatch = capacity === "All" || room.capacity === Number(capacity);
    const priceMatch = room.price <= maxPrice;
    return typeMatch && capacityMatch && priceMatch;
  });

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-8 text-center">
          Choose Your Room
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-10 justify-center">
          {/* Type Filter */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none"
          >
            <option value="All">All Types</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="Family">Family</option>
            <option value="Single">Single</option>
          </select>

          {/* Capacity Filter */}
          <select
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none"
          >
            <option value="All">Any Capacity</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>

          {/* Price Filter */}
          <div className="flex items-center gap-2">
            <label className="font-medium">Max Price:</label>
            <input
              type="range"
              min="1000"
              max="4000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="cursor-pointer"
            />
            <span className="font-semibold">Rs{maxPrice}</span>
          </div>
        </div>

        {/* Rooms Grid */}
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                {/* Image */}
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#001f54] mb-2">
                    {room.name}
                  </h3>
                  <p className="text-lg font-bold text-[#003080] mb-4">
                    Rs {room.price} / night
                  </p>

                  <ul className="mb-4 text-gray-600 space-y-1">
                    {room.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>

                  <Link to={"/booking"}>
                    <button className="w-full bg-[#001f54] hover:bg-[#003080] text-white font-medium py-3 rounded-md transition">
                      Book Now
                    </button>
                  </Link>

                  <Link to={`/rooms/${room.id}` }> <button className="w-full bg-white text-blue font-medium py-3 rounded-md transition">
                    Room Details
                  </button> </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No rooms match your filters.</p>
        )}
      </div>
    </section>
  );
};

export default RoomsWithFilters;

