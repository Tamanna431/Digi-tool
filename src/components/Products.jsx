import React from 'react';
import { toast } from 'react-toastify';
import productsData from '../data/products.json';

const Products = ({ addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart! `, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const getTagColor = (tagType) => {
    switch (tagType) {
      case 'bestseller':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'popular':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'new':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Products Grid - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
          >
            {/* Product Icon & Tag */}
            <div className="flex justify-between items-start mb-4">
              <div className="text-4xl">{product.icon}</div>
              {product.tag && (
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTagColor(product.tagType)}`}>
                  {product.tag}
                </span>
              )}
            </div>

            {/* Product Name */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              <span className="text-gray-500 text-sm">/{product.period}</span>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="truncate">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Buy Now Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-linear-to-l from-purple-800 to-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;