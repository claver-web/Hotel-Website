// Testimonials.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    review:
      "Our stay was amazing! The staff was so friendly and the rooms were spotless. Highly recommend!",
    img: "/events/events.webp",
  },
  {
    id: 2,
    name: "David Miller",
    review:
      "Best hotel experience ever. Great location, excellent amenities, and the spa was fantastic.",
    img: "/events/events1.webp",
  },
  {
    id: 3,
    name: "Emily Davis",
    review:
      "Perfect for a family vacation. The kids loved the pool, and we enjoyed the special offers.",
    img: "/events/events2.webp",
  },
];


const ReviewPage = () => {

  return (
    <div className="rounded-2xl my-6 py-10 px-4 lg:px-12 text-gray-700">
      {/* Section Heading */}
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
        What Our Guests Say
      </h2>

      {/* Carousel */}
      <div className="max-w-4xl mx-auto">
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          swipeable
          emulateTouch
          stopOnHover
          className="w-full"
        >
          {reviews.map((items, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 lg:p-10 w-full"
            >
              {/* User Image */}
              <img
                src={items.img}
                loading="lazy"
                className=" w-24  lg:w-40 lg:h-90 object-cover shadow-md border-4 border-amber-700 mb-6"
                alt={`Photo of ${items.name}`}
              />

              {/* Review Content */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
                {items.name}
              </h3>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 max-w-2xl">
                {items.review}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );  

}

export default ReviewPage;
