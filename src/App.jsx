import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ToggleSection from './components/ToggleSection';
import Products from './components/Products';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartItems={cartItems} />
      <Banner />
      
      {/* Toggle Section with Header */}
      <ToggleSection 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        cartCount={cartItems.length}
      />
      
      {/* Main Content */}
      <div className="bg-gray-50 min-h-screen pb-20">
        {activeTab === 'products' ? (
          <Products addToCart={addToCart} />
        ) : (
          <Cart 
            cartItems={cartItems} 
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        )}
      </div>
      <Steps/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;