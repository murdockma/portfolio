'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticleContainer from './ParticleContainer';
import Modal from './Modal';
import ProjectDetail from './ProjectDetail';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of the project and its key features.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    image: '/project1.jpg',
    link: '#',
    longDescription: 'A comprehensive description of the project, its purpose, and the impact it has made. This section provides more context about the project and its significance.',
    features: [
      'Feature 1 description',
      'Feature 2 description',
      'Feature 3 description',
    ],
    challenges: [
      'Challenge 1 description',
      'Challenge 2 description',
    ],
    solutions: [
      'Solution 1 description',
      'Solution 2 description',
    ],
  },
  {
    title: 'Project 2',
    description: 'Another project description highlighting its unique aspects.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    image: '/project2.jpg',
    link: '#',
    longDescription: 'Detailed explanation of the project, including its goals, target audience, and the problems it solves.',
    features: [
      'Feature 1 description',
      'Feature 2 description',
      'Feature 3 description',
    ],
    challenges: [
      'Challenge 1 description',
      'Challenge 2 description',
    ],
    solutions: [
      'Solution 1 description',
      'Solution 2 description',
    ],
  },
  {
    title: 'Project 3',
    description: 'Description of a third project showcasing different skills.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    image: '/project3.jpg',
    link: '#',
    longDescription: 'In-depth overview of the project, its architecture, and the technical decisions made during development.',
    features: [
      'Feature 1 description',
      'Feature 2 description',
      'Feature 3 description',
    ],
    challenges: [
      'Challenge 1 description',
      'Challenge 2 description',
    ],
    solutions: [
      'Solution 1 description',
      'Solution 2 description',
    ],
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
      <ParticleContainer count={40} color="rgba(255, 255, 255, 0.05)" size={1.5} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="interactive-container group relative cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(index)}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden mb-4">
                <motion.div
                  animate={{
                    scale: hoveredProject === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm group-hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.button
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
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