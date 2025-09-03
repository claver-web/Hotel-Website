// BookingPage.jsx
import React, { useState } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Deluxe",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you’d send data to backend before payment
    const response = await fetch('http://127.0.0.1:3000', {
      method: "POSt",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({formData})
    });
    if(response.status == '200'){
      confirmPopup()
    }
    // console.log("Booking Data:", formData);
  };

  const confirmPopup =() => {
     setShowPopup(true);
    // Auto close after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  }

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Booking Form */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#001f54] mb-6">
            Book Your Stay
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Check-in */}
            <div>
              <label className="block font-medium mb-2">Check-in</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
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
                value={formData.checkOut}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block font-medium mb-2">Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                max="6"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>

            {/* Room Type */}
            <div>
              <label className="block font-medium mb-2">Room Type</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              >
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
                <option value="Family">Family</option>
                <option value="Single">Single</option>
              </select>
            </div>

            {/* Payment Section (Stripe/PayPal placeholder)
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 text-[#001f54]">
                Payment
              </h3>
              <p className="text-gray-600 mb-4">
                Choose a payment method to confirm your booking:
              </p>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex-1 bg-[#001f54] text-white py-3 rounded-md hover:bg-[#003080] transition"
                >
                  Pay with Stripe
                </button>
                <button
                  type="button"
                  className="flex-1 bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition"
                >
                  Pay with PayPal
                </button>
              </div>
            </div> */}

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
            >
              Confirm Booking
            </button>
          </form>

          {showPopup && (
            <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg animate-fade-in">
              ✅ Booking Confirmed!
            </div>
          )}
        </div>

        {/* Booking Summary */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#001f54] mb-4">
            Booking Summary
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Room Type: {formData.roomType}</li>
            <li>Guests: {formData.guests}</li>
            <li>Check-in: {formData.checkIn || "-"}</li>
            <li>Check-out: {formData.checkOut || "-"}</li>
          </ul>
          <p className="mt-6 text-xl font-semibold text-[#003080]">
            Total: ${formData.roomType === "Suite" ? 220 : 120} / night
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
