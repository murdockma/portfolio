'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleContainer from './ParticleContainer';
import MapComponent from './MapComponent';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl left-0 top-1/4"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl left-0 bottom-1/4"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating particles */}
      <ParticleContainer count={30} color="rgba(0, 0, 0, 0.05) dark:rgba(255, 255, 255, 0.05)" size={1.5} />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Location</h3>
              <p className="text-gray-800 dark:text-gray-300 mb-4">
                Denver, Colorado
              </p>
              <div className="h-[300px] rounded-lg overflow-hidden">
                <MapComponent />
              </div>
            </div>
            
            <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                <p className="text-gray-800 dark:text-gray-300">
                  <span className="font-medium">Email:</span> murdock.michael@gmail.com
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  <span className="font-medium">LinkedIn:</span>{' '}
                  <a 
                    href="https://linkedin.com/in/murdockma" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    linkedin.com/in/murdockma
                  </a>
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  <span className="font-medium">GitHub:</span>{' '}
                  <a 
                    href="https://github.com/murdockma" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    github.com/murdockma
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 