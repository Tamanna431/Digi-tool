import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (product) => {
    removeFromCart(product.id);
    toast.error(`${product.name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning('Your cart is empty!', {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    
    clearCart();
    toast.success('Checkout successful! Thank you for your purchase. 🎉', {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Empty Cart State */}
      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-md">
          <div className="text-6xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Your cart is empty
          </h3>
          <p className="text-gray-500">
            Add some products to get started!
          </p>
        </div>
      ) : (
        /* Cart Items */
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="space-y-4 mb-6">
            {cartItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-gray-600 text-sm">${item.price}/{item.period}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item)}
                  className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors px-3 py-1"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total & Checkout */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-gray-700">Total:</span>
              <span className="text-2xl font-bold text-gray-900">${totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-purple-600 text-white py-4 rounded-full font-medium hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;