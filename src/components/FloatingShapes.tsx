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
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    layoutEffect: false
  });
  const { theme } = useTheme();
  const shapes = generateShapes(12, theme);

  // Create transforms for all shapes outside the map function
  const transforms = shapes.map(shape => ({
    scrollX: useTransform(
      scrollYProgress,
      [0, 1],
      [0, shape.moveX],
      { clamp: true }
    ),
    scrollY: useTransform(
      scrollYProgress,
      [0, 1],
      [0, shape.moveY],
      { clamp: true }
    ),
    scale: useTransform(
      scrollYProgress,
      [0, 1],
      [1, shape.scale],
      { clamp: true }
    )
  }));
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {shapes.map((shape, index) => (
        <motion.div
          key={shape.id}
          style={{
            x: `${shape.x}%`,
            top: `${shape.y}%`,
            rotate: shape.rotation,
            position: 'absolute',
            willChange: 'transform',
            transformOrigin: 'center center',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [shape.rotation, shape.rotation + 10, shape.rotation],
          }}
          transition={{
            duration: 8 + seededRandom(shape.id) * 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        >
          <motion.div
            style={{
              x: transforms[index].scrollX,
              y: transforms[index].scrollY,
              scale: transforms[index].scale,
              willChange: 'transform',
            }}
          >
            <svg
              width={shape.size}
              height={shape.size}
              viewBox="0 0 200 200"
              style={{ opacity: theme === 'dark' ? 0.3 : 0.5 }}
            >
              <path
                d={shape.path}
                fill={shape.color}
                stroke={shape.color}
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
} 