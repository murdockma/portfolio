'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

interface Raindrop {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
  angle: number;
  length: number;
  velocity: { x: number; y: number };
  originalAngle: number;
}

export default function RaindropBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const raindropsRef = useRef<Raindrop[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastScrollYRef = useRef(0);
  const scrollVelocityRef = useRef(0);
  const scrollDirectionRef = useRef(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize raindrops
    const initRaindrops = () => {
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      raindropsRef.current = Array.from({ length: count }, () => {
        const angle = Math.PI / 4 + (Math.random() * Math.PI / 8);
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 0.3 + Math.random() * 0.4,
          size: 2 + Math.random() * 2,
          opacity: 0.3 + Math.random() * 0.4,
          angle,
          originalAngle: angle,
          length: 6 + Math.random() * 3,
          velocity: {
            x: Math.sin(angle) * (0.3 + Math.random() * 0.4),
            y: Math.cos(angle) * (0.3 + Math.random() * 0.4)
          }
        };
      });
    };
    initRaindrops();

    // Handle scroll events with velocity
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollYRef.current;
      
      // Update scroll velocity and direction
      scrollVelocityRef.current = scrollDiff * 0.1;
      scrollDirectionRef.current = Math.sign(scrollDiff);
      
      // Adjust raindrop positions based on scroll velocity
      raindropsRef.current = raindropsRef.current.map(drop => {
        const scrollEffect = Math.abs(scrollVelocityRef.current) * 0.5;
        const angleChange = scrollDirectionRef.current * scrollEffect * 0.2;
        
        return {
          ...drop,
          y: (drop.y + scrollDiff * 0.1) % canvas.height,
          x: (drop.x + scrollVelocityRef.current * 0.2) % canvas.width,
          angle: drop.originalAngle + angleChange,
          length: drop.length + scrollEffect,
          velocity: {
            x: Math.sin(drop.angle) * (drop.speed + scrollEffect),
            y: Math.cos(drop.angle) * (drop.speed + scrollEffect)
          }
        };
      });
      
      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Draw teardrop shape
    const drawTeardrop = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      // Draw teardrop shape
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(
        size/2, -size/2,
        size/2, size/2,
        0, size
      );
      ctx.bezierCurveTo(
        -size/2, size/2,
        -size/2, -size/2,
        0, -size
      );
      
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Decay scroll velocity
      scrollVelocityRef.current *= 0.95;
      
      raindropsRef.current.forEach(drop => {
        // Update position with smooth movement
        drop.x += drop.velocity.x;
        drop.y += drop.velocity.y;
        
        // Add slight wind effect
        drop.velocity.x += (Math.random() - 0.5) * 0.01;
        
        // Reset position when off screen
        if (drop.y > canvas.height) {
          drop.y = 0;
          drop.x = Math.random() * canvas.width;
          drop.angle = drop.originalAngle;
          drop.velocity = {
            x: Math.sin(drop.originalAngle) * drop.speed,
            y: Math.cos(drop.originalAngle) * drop.speed
          };
        }
        if (drop.x < 0) drop.x = canvas.width;
        if (drop.x > canvas.width) drop.x = 0;

        // Draw raindrop with theme-based color
        const color = theme === 'light' ? '0, 0, 0' : '255, 255, 255';
        ctx.fillStyle = `rgba(${color}, ${drop.opacity})`;
        drawTeardrop(ctx, drop.x, drop.y, drop.size, drop.angle);
        ctx.fill();

        // Reset length and angle to normal when not scrolling
        drop.length = Math.max(6, drop.length - 0.05);
        drop.angle = drop.originalAngle + (drop.angle - drop.originalAngle) * 0.95;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.6 }}
    />
  );
} 