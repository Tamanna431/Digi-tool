import React from 'react';
import { FaYoutube, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand Info (Spans 4 columns) */}
          <div className="lg:col-span-4 text-white">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Column 2: Product (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-lg">Product</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Column 3: Company (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-lg">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Column 4: Resources (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-lg">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 5: Social Links (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-lg">Social Links</h3>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">
                <FaYoutube size={16} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          
          {/* Copyright */}
          <p className="text-gray-500">
            © 2026 Digitools. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookies</a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;