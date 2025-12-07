import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-md sticky top-0 w-full z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* LEFT SIDE: Logo + Desktop Menu */}
          <div className="flex items-center space-x-10">
            <NavLink to="/">
              <img src="/logo1.webp" className="w-16 rounded-full" alt="logo" />
            </NavLink>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden md:flex space-x-10">
              <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
              <NavLink to="rooms" className="hover:text-blue-400">Rooms</NavLink>
              <NavLink to="events" className="hover:text-blue-400">Events</NavLink>
              <NavLink to="booking" className="hover:text-blue-400">Booking</NavLink>
              <NavLink to="about-us" className="hover:text-blue-400">About Us</NavLink>
            </div>
          </div>

          {/* RIGHT SIDE: Desktop SignIn */}
          <div className="hidden md:flex">
            <NavLink to="login" className="hover:text-blue-400">
              login
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-4 space-y-2 shadow-lg">

          {/* Mobile Nav Items */}
          {[
            { to: "/", label: "Home" },
            { to: "/rooms", label: "Rooms" },
            { to: "/events", label: "Events" },
            { to: "/booking", label: "Booking" },
            { to: "/about-us", label: "About Us" },
            { to: "/login", label: "SignIn" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 transition ${
                  isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
