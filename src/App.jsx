import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar cartItems={cartItems} />
      
      {/* বাকি সেকশনগুলো পরে যোগ করব */}
      <div className="min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold text-center mt-10 text-gray-800">
          DigiTools - Coming Soon
        </h1>
      </div>
    </div>
  );
}

export default App;