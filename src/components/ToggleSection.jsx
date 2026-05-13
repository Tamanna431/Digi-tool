import React from 'react';

const ToggleSection = ({ activeTab, setActiveTab, cartCount }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Premium Digital Tools
        </h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Choose from our curated collection of premium digital products designed 
          to boost your productivity and creativity.
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'products'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Products
          </button>
          
          <button
            onClick={() => setActiveTab('cart')}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 relative ${
              activeTab === 'cart'
                ? 'bg-linear-to-l from-purple-800 to-purple-600 text-white shadow-lg shadow-purple-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cart
            {cartCount > 0 && (
              <span className="ml-2 text-sm">
                ({cartCount})
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleSection;