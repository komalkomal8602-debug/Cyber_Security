// client/src/Pages/Cart.jsx
import React from 'react';

export default function Cart() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          Shopping Cart
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your cart is empty
        </p>
      </div>
    </div>
  );
}