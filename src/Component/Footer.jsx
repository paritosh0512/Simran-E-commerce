import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 mt-12">
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
          
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row text-center md:text-left space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="hover:text-gray-400">Home</a>
            <Link to="/aboutus" className="hover:text-gray-400">About Us</Link>
            <a href="#" className="hover:text-gray-400">Shop</a>
            <Link to="/contactus" className="hover:text-gray-400">Contact Us</Link>
            <Link to="/privacypolicy" className="hover:text-gray-400">Privacy & Policy</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
