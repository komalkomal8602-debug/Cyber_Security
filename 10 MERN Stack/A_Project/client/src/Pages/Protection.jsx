// client/src/Pages/Protection.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Protection() {
  const { subcategory } = useParams();
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          {subcategory ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1) : 'Protection Gear'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Premium protection equipment for your safety
        </p>
      </div>
    </div>
  );
}