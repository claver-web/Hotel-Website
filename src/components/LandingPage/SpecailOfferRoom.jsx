// SpecialOffers.jsx
import React from "react";

const offers = [
  {
    id: 1,
    title: "Summer Getaway - 20% Off",
    description: "Book your summer vacation now and save 20% on deluxe rooms.",
    image: "/rooms/room1.jpeg",
  },
  {
    id: 2,
    title: "Weekend Escape - 15% Off",
    description: "Enjoy a short weekend stay with 15% discount on all suites.",
    image: "/rooms/room4.jpeg",
  },
  {
    id: 3,
    title: "Family Package",
    description: "Stay 3 nights in a family room and get the 4th night free.",
    image: "/rooms/room11.jpeg",
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-[#f9fafb] text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-10 text-center">
          Special Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{offer.title}</h3>
                <p className="text-gray-600 mt-2">{offer.description}</p>
                <button className="mt-4 bg-[#001f54] hover:bg-[#003080] text-white px-4 py-2 rounded-md transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
