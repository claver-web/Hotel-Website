// LandingBooking.jsx
import React, { useState, useContext } from "react";
import BookingProvider, {BookingDetailsContext} from "../../Provider/BookingProvider";

const LandingBooking = () => {

  const {BookingDetails, setBookingDetails} = useContext(BookingDetailsContext);

  const handleChange = (e) => {
    setBookingDetails({ ...BookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(BookingDetails);
  };

  return (
    <>
    <div className="relative">
      {/* Booking Form - hidden on mobile, visible md+ */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -bottom-24 w-full max-w-5xl px-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white p-6 rounded-lg shadow-xl text-gray-800"
        >
          {/* Check-in */}
          <div>
            <label className="block font-medium mb-2">Check-in</label>
            <input
              type="date"
              name="checkIn"
              value={BookingDetails.checkIn}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block font-medium mb-2">Check-out</label>
            <input
              type="date"
              name="checkOut"
              value={BookingDetails.checkOut}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>

          {/* Room Type */}
          <div>
            <label className="block font-medium mb-2">Room Type</label>
            <select
              name="roomType"
              value={BookingDetails.roomType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            >
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
              <option value="Family">Family</option>
              <option value="Single">Single</option>
            </select>
          </div>

          {/* Guests */}
          <div>
            <label className="block font-medium mb-2">Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              max="6"
              value={BookingDetails.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>

          {/* Book Now */}
          <div className="md:col-span-4 flex justify-center">
            <button
              type="submit"
              className="mt-4 md:mt-0 bg-[#001f54] hover:bg-[#003080] text-white font-semibold py-3 px-8 rounded-md transition w-full md:w-auto"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
    <br />
    <br />
    </>
  );
};

export default LandingBooking;
