
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">TechStore</h1>
            <p className="text-gray-600 text-lg">Premium Electronics & Accessories</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Welcome to TechStore</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover our carefully curated selection of premium electronics for everyone. 
            Shop by category and find the perfect tech products for you and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link to="/men" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Men</h3>
                  <p className="text-blue-100">Headphones, Watches & More</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Premium electronics designed for the modern man</p>
                <div className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                  Shop Men's Collection →
                </div>
              </div>
            </div>
          </Link>

          <Link to="/women" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Women</h3>
                  <p className="text-pink-100">Earbuds, Watches & Bags</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Stylish and functional tech for the modern woman</p>
                <div className="text-pink-600 font-semibold group-hover:text-pink-800 transition-colors">
                  Shop Women's Collection →
                </div>
              </div>
            </div>
          </Link>

          <Link to="/kids" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Kids</h3>
                  <p className="text-green-100">Tablets, Watches & Headphones</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Safe and educational tech products for children</p>
                <div className="text-green-600 font-semibold group-hover:text-green-800 transition-colors">
                  Shop Kids' Collection →
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-xl">🚚</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-600">Free shipping on all orders over $50</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
            <p className="text-gray-600">Your payment information is safe and secure</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-xl">🎧</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Get help whenever you need it</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
