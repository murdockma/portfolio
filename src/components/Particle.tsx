'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ParticleProps {
  size?: number;
  color?: string;
  initialX?: number;
  initialY?: number;
  duration?: number;
  delay?: number;
}

export default function Particle({
  size = 2,
  color = 'rgba(255, 255, 255, 0.4)',
  initialX = 0,
  initialY = 0,
  duration = 20,
  delay = 0,
}: ParticleProps) {
  const [mounted, setMounted] = useState(false);
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const animate = () => {
      // Generate random movement within a larger range
      const newX = initialX + (Math.random() - 0.5) * 20;
      const newY = initialY + (Math.random() - 0.5) * 20;
      setX(newX);
      setY(newY);
    };

    const interval = setInterval(animate, 2000);
    return () => clearInterval(interval);
  }, [mounted, initialX, initialY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: `${initialX}%`,
        top: `${initialY}%`,
        zIndex: 2,
      }}
      animate={{
        x: [0, x - initialX, 0],
        y: [0, y - initialY, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  );
} 