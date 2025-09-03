// ContactPage.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-6">
            Contect Us
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f54]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f54]"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#001f54]"
              required
            />
            <button
              type="submit"
              className="bg-[#001f54] hover:bg-[#003080] text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-8 text-[#001f54]">
            <a href="#" className="hover:text-[#003080]">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-[#003080]">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-[#003080]">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f54] mb-6">
            Find Us
          </h2>
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.085914367417!2d-122.4194150846829!3d37.77492977975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3c0c1235%3A0xf67b8d7e93f6e62b!2sHotel!5e0!3m2!1sen!2sus!4v1618889999999!5m2!1sen!2sus"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-96 border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
