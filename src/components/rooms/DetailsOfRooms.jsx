// RoomDetails.jsx
import React from "react";
import { FaWifi, FaSwimmer, FaConciergeBell, FaBan } from "react-icons/fa";
import { useParams } from "react-router-dom";
import AmenitiesWithGallery from "./accessGallery";
import Abition from "./Ambition";

const rooms = [{
  id: 1,
  name: "Deluxe Room",
  price: 2000,
  description:
    "Experience ultimate luxury in our Executive Suite with breathtaking ocean views, spacious living area, and premium amenities.",
  images: [
    "/rooms/room1.webp",
    "/Bhotel/hotelBackgound.webp",
    "/dining/dining1.webp",
  ],
  galleryImages : [
    "/bathroom/bathroom1.webp",
    "/chef/chef.webp",
    "/gym/gym.webp",
    "/spa/spa1.webp",
    ],
  amenities: ["Free WiFi", "Swimming Pool Access", "Room Service", "Spa & Wellness"],
  policies: [
    "Check-in from 2:00 PM",
    "Check-out until 11:00 AM",
    "No smoking in rooms",
    "Pets not allowed",
  ],
}, 
{
  id: 2,
  name: "Executive Suite",
  price: 4000,
  description:
    "2Experience ultimate luxury in our Executive Suite with breathtaking ocean views, spacious living area, and premium amenities.",
  images: [
    "/rooms/room2.webp",
    "/Bhotel/hotelBackgound2.webp",
    "/dining/dining2.webp",
  ],
  galleryImages : [
    "/bathroom/bathroom2.webp",
    "/chef/chef2.webp",
    "/gym/gym1.webp",
    "/spa/spa2.webp",
    ],
  amenities: ["Free WiFi", "Swimming Pool Access", "Room Service", "Spa & Wellness"],
  policies: [
    "Check-in from 2:00 PM",
    "Check-out until 11:00 AM",
    "No smoking in rooms",
    "Pets not allowed",
  ],
}, 
{
  id: 3,
  name: "Family Room",
  price: 2400,
  description:
    "3Experience ultimate luxury in our Executive Suite with breathtaking ocean views, spacious living area, and premium amenities.",
  images: [
    "/rooms/room3.webp",
    "/Bhotel/hotelBackgound3.webp",
    "/dining/dining3.webp",
  ],
  galleryImages : [
    "/bathroom/bathroom3.webp",
    "/chef/chef3.webp",
    "/gym/gym.webp",
    "/spa/spa3.webp",
    ],
  amenities: ["Free WiFi", "Swimming Pool Access", "Room Service", "Spa & Wellness"],
  policies: [
    "Check-in from 2:00 PM",
    "Check-out until 11:00 AM",
    "No smoking in rooms",
    "Pets not allowed",
  ],
}, 
{
  id: 4,
  name: "Single Room",
  price: 1200,
  description:
    "4Experience ultimate luxury in our Executive Suite with breathtaking ocean views, spacious living area, and premium amenities.",
    images: [
    "/rooms/room1.webp",
    "/Bhotel/hotelBackgound.webp",
    "/dining/dining1.webp",
  ],
  galleryImages : [
    "/bathroom/bathroom4.webp",
    "/chef/chef.webp",
    "/gym/gym1.webp",
    "/spa/spa1.webp",
    ],
  amenities: ["Free WiFi", "Swimming Pool Access", "Room Service", "Spa & Wellness"],
  policies: [
    "Check-in from 2:00 PM",
    "Check-out until 11:00 AM",
    "No smoking in rooms",
    "Pets not allowed",
  ],
}
]

const RoomDetails = () => {
    const { id } = useParams();
    const room = rooms.find((r) => r.id === parseInt(id));

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-2">
          {room.name}
        </h1>
        <p className="text-lg text-[#003080] font-semibold mb-6">
          ${room.price} / night
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {room.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Room image ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-10 leading-relaxed">{room.description}</p>

        <Abition />

        <AmenitiesWithGallery galleryImages = {room.galleryImages}/>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Amenities */}
          <div>
            <h2 className="text-2xl font-semibold text-[#001f54] mb-4">
              Amenities
            </h2>
            <ul className="space-y-2 text-gray-600">
              {room.amenities.map((amenity, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#001f54]">✔</span> {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h2 className="text-2xl font-semibold text-[#001f54] mb-4">
              Policies
            </h2>
            <ul className="space-y-2 text-gray-600">
              {room.policies.map((policy, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaBan className="text-[#001f54]" /> {policy}
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h2 className="text-2xl font-semibold text-[#001f54] mb-4">
              Availability
            </h2>
            <div className="bg-white shadow-md rounded-lg p-4">
              <label className="block mb-2 font-medium text-gray-700">
                Select Dates
              </label>
              <input
                type="date"
                className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none"
              />
              <input
                type="date"
                className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none"
              />
              <button className="w-full bg-[#001f54] hover:bg-[#003080] text-white font-medium py-3 rounded-md transition">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
