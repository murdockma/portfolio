'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from './ThemeProvider';

interface Shape {
  id: number;
  path: string;
  size: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  moveX: number;
  moveY: number;
  scale: number;
}

// Deterministic random number generator
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const generateRandomPath = (size: number, seed: number): string => {
  const points = [];
  const numPoints = Math.floor(seededRandom(seed) * 3) + 3; // 3-5 points
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2;

  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return `M ${points.join(' L ')} Z`;
};

const generateShapes = (count: number, theme: 'light' | 'dark'): Shape[] => {
  const shapes: Shape[] = [];
  for (let i = 0; i < count; i++) {
    const baseSeed = i + 1; // Use index as base seed
    const opacity = theme === 'dark' ? 0.1 : 0.2;
    shapes.push({
      id: i,
      path: generateRandomPath(200 + seededRandom(baseSeed) * 200, baseSeed),
      size: 200 + seededRandom(baseSeed + 1) * 200,
      x: seededRandom(baseSeed + 2) * 100,
      y: seededRandom(baseSeed + 3) * 100,
      rotation: seededRandom(baseSeed + 4) * 360,
      color: theme === 'dark' 
        ? `rgba(255, 255, 255, ${opacity})`
        : `rgba(0, 0, 0, ${opacity})`,
      moveX: (seededRandom(baseSeed + 8) - 0.5) * 800,
      moveY: (seededRandom(baseSeed + 9) - 0.5) * 200,
      scale: 0.6 + seededRandom(baseSeed + 10) * 0.8,
    });
  }
  return shapes;
};

export default function FloatingShapes() {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const shapes = generateShapes(12, 'dark');
    setShapes(shapes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
        style={{
          x: x1,
          y: y1,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        style={{
          x: x2,
          y: y2,
        }}
      />
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute w-${shape.size} h-${shape.size} rounded-full ${
            shape.color === 'blue' ? 'bg-blue-500/20' : 'bg-purple-500/20'
          } blur-xl`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
        />
      ))}
    </div>
  );
} 