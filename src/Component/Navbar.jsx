import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/paritosh.jpg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg  w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600">
            <img src={logo} alt="logo" 
            className="w-20 h-16 sm:w-24 md:w-28 lg:w-32 xl:w-40"
            
            />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-800 hover:text-blue-600">Men</a>
            <a href="#" className="text-gray-800 hover:text-blue-600">Women</a>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-md py-2 px-4"
              />
              <FaSearch className="absolute top-3 right-3 text-gray-500" />
            </div>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              <FaHeart className="inline-block mr-1" /> Wishlist
            </a>
            <a href="" className="text-gray-800 hover:text-blue-600">
              <FaShoppingCart className="inline-block mr-1" /> Cart
            </a>
            <Link to="/signinsignup" className="text-gray-800 hover:text-blue-600">
              Sign In/Sign Up
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Men</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Women</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Wishlist</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cart</a>
        <Link to="/signinsignup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign In/Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
