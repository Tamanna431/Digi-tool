import React from 'react';
const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side Content */}
        <div className="space-y-6">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
            <img src="./Group.png" alt="" className="w-4 h-4" />
            <span>New: AI-Powered Tools Available</span>
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-linear-to-l from-purple-800 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition shadow-lg shadow-purple-200"
            >
              Explore Products
            </a>
            <button className="bg-white text-purple-600 border-2 border-purple-200 px-8 py-3 rounded-full font-medium hover:border-purple-600 hover:text-purple-700 transition flex items-center gap-2">
              <span><img src="./Play.png" alt="icon" /></span> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <img
            src="./banner.png"
            alt="Digital Workflow"
            className="w-full rounded-2xl shadow-2xl object-cover h-[400px]"
          />
        </div>
      </div>

      {/* Stats Section (Purple Bar) */}
      <div className="bg-linear-to-r from-purple-800 to-purple-500 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-purple-400">

          {/* Stat 1 */}
          <div className="p-4">
            <h3 className="text-4xl font-bold mb-2">50K+</h3>
            <p className="text-purple-100 font-medium">Active Users</p>
          </div>

          {/* Stat 2 */}
          <div className="p-4">
            <h3 className="text-4xl font-bold mb-2">200+</h3>
            <p className="text-purple-100 font-medium">Premium Tools</p>
          </div>

          {/* Stat 3 */}
          <div className="p-4">
            <h3 className="text-4xl font-bold mb-2">4.9</h3>
            <p className="text-purple-100 font-medium">Rating</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Banner;