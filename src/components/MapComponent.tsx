'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

interface MapProps {
  center: [number, number];
  zoom: number;
  markers: Array<{
    position: [number, number];
    title: string;
  }>;
}

interface MapInstance {
  remove: () => void;
  setView: (center: [number, number], zoom: number) => void;
}

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<MapInstance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initMap = async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (!mapRef.current) return;

      // Clean up existing map instance
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Initialize map
      const map = L.map(mapRef.current).setView([39.7392, -104.9903], 13);
      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add custom marker
      L.marker([39.7392, -104.9903]).addTo(map);
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
};

// Use dynamic import with SSR disabled
export default dynamic(() => Promise.resolve(MapComponent), {
  ssr: false,
}); 