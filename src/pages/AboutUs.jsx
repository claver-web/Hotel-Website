// AboutUs.jsx
import React from "react";

const team = [
  {
    id: 1,
    name: "John Anderson",
    role: "General Manager",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    name: "Maria Lopez",
    role: "Head of Guest Services",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Executive Chef",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const awards = [
  {
    id: 1,
    title: "Best Luxury Hotel 2023",
    organization: "Travel Awards",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Top Rated Spa 2022",
    organization: "Wellness Magazine",
    icon: "✨",
  },
  {
    id: 3,
    title: "Green Hospitality Award",
    organization: "Eco Tourism Board",
    icon: "🌿",
  },
];

const AboutUsComponent = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hotel Story */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-6 text-center">
          Our Story
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          Established in 1998, our hotel has been a place of comfort, luxury, and
          unforgettable experiences. Nestled in the heart of the city, we aim to
          provide a perfect blend of modern elegance and warm hospitality. Every
          detail is crafted to make your stay memorable.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-[#001f54] mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            To create a welcoming space where guests feel at home while
            experiencing the finest hospitality, comfort, and personalized
            service.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-10 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-10">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{award.icon}</div>
                <h3 className="font-semibold text-xl">{award.title}</h3>
                <p className="text-gray-600 mt-2">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsComponent;
