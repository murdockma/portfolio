'use client';

import dynamic from 'next/dynamic';

// Dynamically import Leaflet components to avoid SSR issues
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-black/50 animate-pulse rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Loading map...</span>
    </div>
  ),
});

export default function Map() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Location
        </h2>
        <div className="interactive-container">
          <MapComponent />
        </div>
      </div>
    </section>
  );
} 