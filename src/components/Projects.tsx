'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticleContainer from './ParticleContainer';
import Modal from './Modal';
import ProjectDetail from './ProjectDetail';
import Image from 'next/image';

const projects = [
  {
    title: 'Personal Finance Data Pipeline',
    description: 'Built a pipeline that automatically pulls all my financial data into one place.',
    technologies: ['Python', 'Terraform', 'BigQuery', 'Selenium', 'dbt', 'Looker Studio'],
    image: '/finance-pipeline.jpg',
    link: '#',
    longDescription: 'I got tired of manually checking different bank accounts and investment platforms, so I built a pipeline that does it all for me. Now I can see all my financial data in one dashboard.',
    features: [
      'Pulls data from 5+ different banks and investment platforms',
      'Handles all the tricky stuff like CAPTCHAs and 2FA',
      'Shows everything in a clean dashboard',
      'Turns raw data into useful insights'
    ],
    challenges: [
      'Banks love to change their websites and add security measures',
      'Each platform has its own way of showing data',
      'Making sure everything stays up to date'
    ],
    solutions: [
      'Built a flexible system that can handle website changes',
      'Created a standard way to process different data formats',
      'Set up alerts when something goes wrong',
      'Made it easy to add new data sources'
    ],
  },
  {
    title: 'ParrotBar',
    description: 'A fun macOS app that puts animated party parrots in your menu bar.',
    technologies: ['Swift', 'macOS', 'System APIs', 'Network APIs'],
    image: '/parrotbar.png',
    link: 'https://apps.apple.com/us/app/parrotbar/id6618137282?mt=12',
    longDescription: 'I wanted to make my menu bar more fun while keeping it useful. ParrotBar shows fun party parrot animations and gives you quick access to system info.',
    features: [
      'Lots of fun party parrot animations',
      'Shows your system info (uptime, disk space, etc.)',
      'Displays your public IP address',
      'Randomly cycles through different parrots',
      'Shows battery level'
    ],
    challenges: [
      'Making sure the GIFs don\'t slow down your computer',
      'Getting permission to access system info',
      'Keeping the menu bar app running smoothly'
    ],
    solutions: [
      'Optimized how the GIFs load and run',
      'Built a clean way to handle system permissions',
      'Made it easy to customize settings'
    ],
  },
  {
    title: 'Portfolio Website',
    description: 'The site you\'re looking at right now! Built to showcase my work in a fun way.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/portfolio.jpg',
    link: '#',
    longDescription: 'I wanted to build a portfolio that was both professional and engaging. This site features smooth animations, interactive elements, and a clean design that works well on all devices.',
    features: [
      'Cool floating shapes that move as you scroll',
      'Smooth animations everywhere',
      'Looks great on phones and computers',
      'Dark mode for late-night browsing',
      'Interactive cards that respond to your mouse'
    ],
    challenges: [
      'Making animations smooth without slowing things down',
      'Keeping everything organized as the site grew',
      'Making sure everyone can use it easily'
    ],
    solutions: [
      'Used Framer Motion to handle animations efficiently',
      'Built reusable components for consistency',
      'Added proper accessibility features'
    ],
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl right-0 top-1/4"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl right-0 bottom-1/4"
          animate={{
            x: [0, 30, 0],
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
      <ParticleContainer count={40} color="rgba(0, 0, 0, 0.05) dark:rgba(255, 255, 255, 0.05)" size={1.5} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/40 dark:hover:bg-gray-900/40 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/30 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm group-hover:bg-white/50 dark:group-hover:bg-gray-900/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <span className="text-sm mr-2">View Details</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject !== null ? projects[selectedProject].title : ''}
      >
        {selectedProject !== null && (
          <ProjectDetail project={projects[selectedProject]} />
        )}
      </Modal>
    </section>
  );
} 