'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  path: string;
  size: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
}

const generateRandomPath = () => {
  const points = [];
  const numPoints = Math.floor(Math.random() * 3) + 3; // 3-5 points
  const centerX = 50;
  const centerY = 50;
  const radius = 40;

  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    points.push(`${x},${y}`);
  }

  return `M ${points.join(' L ')} Z`;
};

const generateRandomColor = () => {
  const colors = [
    'rgba(59, 130, 246, 0.1)', // blue
    'rgba(147, 51, 234, 0.1)', // purple
    'rgba(236, 72, 153, 0.1)', // pink
    'rgba(16, 185, 129, 0.1)', // green
    'rgba(245, 158, 11, 0.1)', // yellow
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const newShapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      path: generateRandomPath(),
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      color: generateRandomColor(),
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            x: `${shape.x}%`,
            y: `${shape.y}%`,
            rotate: shape.rotation,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            x: [
              `${shape.x}%`,
              `${shape.x + (Math.random() - 0.5) * 20}%`,
              `${shape.x}%`,
            ],
            y: [
              `${shape.y}%`,
              `${shape.y + (Math.random() - 0.5) * 20}%`,
              `${shape.y}%`,
            ],
            rotate: [shape.rotation, shape.rotation + 45, shape.rotation],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.svg
            viewBox="0 0 100 100"
            style={{ y }}
            className="w-full h-full"
          >
            <motion.path
              d={shape.path}
              fill={shape.color}
              stroke="none"
            />
          </motion.svg>
        </motion.div>
      ))}
    </div>
  );
} 