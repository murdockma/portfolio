'use client';

import { useEffect, useState } from 'react';
import Particle from './Particle';

interface ParticleContainerProps {
  count?: number;
  color?: string;
  size?: number;
  className?: string;
}

export default function ParticleContainer({
  count = 50,
  color = 'rgba(255, 255, 255, 0.4)',
  size = 2,
  className = '',
}: ParticleContainerProps) {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Generate particles with better distribution
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      // Distribute particles more evenly across the container
      x: Math.random() * 100, // Use full width
      y: Math.random() * 100, // Use full height
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [count, mounted]);

  if (!mounted) return null;

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 2 }}
    >
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          size={size}
          color={color}
          initialX={particle.x}
          initialY={particle.y}
          duration={particle.duration}
          delay={particle.delay}
        />
      ))}
    </div>
  );
} 