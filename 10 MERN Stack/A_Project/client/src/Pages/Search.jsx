// client/src/Pages/Search.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          Search Results
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Showing results for: "{query}"
        </p>
      </div>
    </div>
  );
}