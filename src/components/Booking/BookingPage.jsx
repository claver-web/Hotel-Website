// BookingPage.jsx
import { useState, useContext} from "react";
import CalanderOptimization from "../AtomicComp/CalanderOptimization";
import BookingProvider, {BookingDetailsContext} from "../../Provider/BookingProvider";

const BookingPage = () => {

  const {BookingDetails, setBookingDetails} = useContext(BookingDetailsContext);

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setBookingDetails({ ...BookingDetails, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(BookingDetails)
    // Here you’d send data to backend before payment
    const response = await fetch('http://127.0.0.1:3000', {
      method: "POSt",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({BookingDetails})
    });
    if(response.status == '200'){
      confirmPopup()
    }
    // console.log("Booking Data:", BookingDetails);
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
        <div className="md:col-span-2 bg-white shadow-lg text-center rounded-lg p-8 w-full">
          <h2 className="text-3xl font-bold text-[#001f54] mb-6">
            Book Your Stay
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

              <div className="flex justify-around w-full">

                {/* Check-in */}
                <div className="m-1">
                  <label className="block font-medium mb-2 text-[#001f54]">Check-in</label>
                  <CalanderOptimization
                    name="checkIn"
                    value={BookingDetails.checkIn}
                    onChange={handleChange}
                    classes="border border-gray-300 rounded-lg px-3 py-2 w-full 
                   text-gray-700 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500 
                   bg-white shadow-sm"
                  />
                </div>
                <br />

                {/* Check-out */}
                <div className="m-1">
                  <label className="block font-medium mb-2 text-[#001f54]">Check-out</label>
                  <CalanderOptimization
                    name="checkOut"
                    value={BookingDetails.checkOut}
                    onChange={handleChange}
                    classes="border border-gray-300 rounded-lg px-3 py-2 w-full
                   text-gray-700 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500 
                   bg-white shadow-sm"
                  />
                </div>
                <br />


              </div>

            {/* Guests */}
            <div>
              <label className="block font-medium mb-2 text-[#001f54]">Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                max="6"
                value={BookingDetails.guests}
                onChange={handleChange}
                className="border-2 border-gray-400 w-full px-4 py-2 
                rounded-md focus:border-blue-500 focus:outline-none "
              />
            </div>

            {/* Room Type */}
            <div>
              <label className="block font-medium mb-2">Room Type</label>
              <select
                name="roomType"
                value={BookingDetails.roomType}
                onChange={handleChange}
                className="border-2 border-gray-400 w-full px-4 py-2 
                rounded-md focus:border-blue-500 focus:outline-none "
              >
                <option value="Deluxe"> Deluxe  </option>
                <option value="Suite">  Suite   </option>
                <option value="Family"> Family  </option>
                <option value="Single"> Single  </option>

              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-6 bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
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
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">

          <div>
            <h3 className="text-2xl font-bold text-[#001f54] mb-4">
              Booking Summary
            </h3>
          </div>

          <div>
          <ul className="space-y-7 text-[#001f54]">

            <li className="flex justify-between border-b pb-1">
              <span className="font-medium">Room Type:</span>
              <span>{BookingDetails.roomType || "-"}</span>
            </li>

            <li className="flex justify-between border-b pb-1">
              <span className="font-medium">Guests:</span>
              <span>{BookingDetails.guests || "-"}</span>
            </li>

            <li className="flex justify-between border-b pb-1">
              <span className="font-medium">Check-in:</span>
              <span>{BookingDetails.checkIn || "-"}</span>
            </li>

            <li className="flex justify-between border-b pb-1">
              <span className="font-medium">Check-out:</span>
              <span>{BookingDetails.checkOut || "-"}</span>
            </li>

          </ul>

          </div>

          <p className="mt-6 text-xl font-semibold text-[#003080]">
            Total: {BookingDetails.roomType === "Suite" ? 220 : 1200} / night
          </p>

        </div>

      </div>
    </section>
  );
};

export default BookingPage;
