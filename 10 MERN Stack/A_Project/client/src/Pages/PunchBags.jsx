// client/src/Pages/PunchBags.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function PunchBags() {
  const { subcategory } = useParams();
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          {subcategory ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1) : 'Punch Bags'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Heavy bags, speed bags, and training equipment
        </p>
      </div>
    </div>
  );
}