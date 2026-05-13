import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = cartItems.length;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold   bg-linear-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">DigiTools</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-purple-600 transition">Products</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition">FAQ</a>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Icon */}
            <div className="relative">
              <FaShoppingCart className="text-gray-700 text-xl cursor-pointer hover:text-purple-600 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="text-gray-700 hover:text-purple-600 transition font-medium">
              Login
            </button>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#products" className="text-gray-700 hover:text-purple-600 transition">Products</a>
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition">Testimonials</a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 transition">FAQ</a>
              <div className="flex items-center space-x-4 pt-3 border-t">
                <div className="relative">
                  <FaShoppingCart className="text-gray-700 text-xl" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <button className="text-gray-700 font-medium">Login</button>
                <button className=" text-white px-5 py-2 rounded-full font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;