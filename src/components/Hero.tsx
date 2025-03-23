'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import ParticleContainer from './ParticleContainer';

const titles = [
  'Data Professional',
  'Tech Enthusiast',
  'Problem Solver',
  'Innovation Seeker'
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typeText = useCallback(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 30);
      }
    } else {
      if (currentText === currentTitle) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        }, 50);
      }
    }
  }, [currentText, isDeleting, currentTitleIndex]);

  useEffect(() => {
    const timeout = setTimeout(typeText, 50);
    return () => clearTimeout(timeout);
  }, [typeText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating particles */}
      <ParticleContainer count={100} color="rgba(255, 255, 255, 0.4)" size={2.5} />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-500">Michael</span>
            </h1>
            <div className="h-8 sm:h-10">
              <span className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 text-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 