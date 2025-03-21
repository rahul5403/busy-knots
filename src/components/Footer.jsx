import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Policies Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-3 transition-all duration-300 hover:text-gray-600">
            Policies
          </h4>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-gray-500 transition">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-gray-500 transition">Returns Policy</Link></li>
            <li><Link to="#" className="hover:text-gray-500 transition">Care Instructions</Link></li>
            <li><Link to="#" className="hover:text-gray-500 transition">Terms & Services</Link></li>
          </ul>
        </div>

        {/* Navigation Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-3 transition-all duration-300 hover:text-gray-600">
            Navigation
          </h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-500 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Sign Up Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-3 transition-all duration-300 hover:text-gray-600">
            Sign Up
          </h4>
          <form className="flex justify-center md:justify-start space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              OK
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>&copy; Busyknot. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
