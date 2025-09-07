import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-md sticky w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-10">
            <NavLink to='/'><img src="/logo1.webp" className='w-16 rounded-full' alt="logo" /></NavLink>
            <div className="hidden md:flex space-x-18">
              <NavLink to='/' className="hover:text-blue-500">Home</NavLink>

              <NavLink to='rooms' className="hover:text-blue-500">Rooms</NavLink>

              <NavLink to='events' className="hover:text-blue-500">Events</NavLink>
              
              <NavLink to='booking' className="hover:text-blue-500">Booking</NavLink>
                
              <NavLink to='about-us'  className="hover:text-blue-500">About Us</NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
  <div className="md:hidden bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-4 space-y-2 shadow-lg">
    <NavLink
      to="/"
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        `block py-2 transition ${
          isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
        }`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/rooms"
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        `block py-2 transition ${
          isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
        }`
      }
    >
      Rooms
    </NavLink>

    <NavLink
      to="/events"
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        `block py-2 transition ${
          isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
        }`
      }
    >
      Events
    </NavLink>

    <NavLink
      to="/booking"
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        `block py-2 transition ${
          isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
        }`
      }
    >
      Booking
    </NavLink>

    <NavLink
      to="/about-us"
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        `block py-2 transition ${
          isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
        }`
      }
    >
      About Us
    </NavLink>
  </div>
)}

    </nav>
  );
};

export default Navbar;
