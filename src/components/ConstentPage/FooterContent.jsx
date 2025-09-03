import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Your Hotel</h2>
          <p className="text-gray-400">
            Serving authentic flavors with love since 2010. Where every meal 
            tells a story and every guest is family.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/rooms" className="hover:text-red-500 transition">Rooms</a></li>
            <li><a href="/booking" className="hover:text-red-500 transition">Booking</a></li>
            <li><a href="/about-us" className="hover:text-red-500 transition">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-gray-400">123 Main Street, Delhi, IN</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@labelladine.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Hotel Name. All rights reserved.
      </div>
    </footer>
  );
}
