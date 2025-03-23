'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticleContainer from './ParticleContainer';
import Modal from './Modal';
import SkillDetail from './SkillDetail';
import ExperienceDetail from './ExperienceDetail';

const skills = [
  {
    name: 'React',
    level: 90,
    experience: '5+ years of experience building modern web applications with React, including complex state management, performance optimization, and component architecture.',
    projects: [
      'Built a large-scale e-commerce platform with React and Redux',
      'Developed a real-time dashboard with React and WebSocket',
      'Created reusable component libraries for multiple projects'
    ],
    certifications: ['React Certified Developer']
  },
  {
    name: 'TypeScript',
    level: 85,
    experience: '4+ years of experience with TypeScript, focusing on type safety and maintainable codebases.',
    projects: [
      'Migrated large JavaScript codebases to TypeScript',
      'Implemented complex type systems for API integrations',
      'Created type-safe component libraries'
    ]
  },
  {
    name: 'Node.js',
    level: 80,
    experience: '3+ years of experience building scalable backend services with Node.js.',
    projects: [
      'Developed RESTful APIs for multiple applications',
      'Built real-time chat applications with Socket.io',
      'Created microservices architecture'
    ]
  },
  {
    name: 'Next.js',
    level: 85,
    experience: '4+ years of experience with Next.js, focusing on performance and SEO optimization.',
    projects: [
      'Built server-side rendered applications',
      'Implemented static site generation',
      'Created hybrid applications'
    ]
  },
  {
    name: 'Python',
    level: 75,
    experience: '3+ years of experience with Python for data processing and automation.',
    projects: [
      'Developed data analysis scripts',
      'Created automation tools',
      'Built API integrations'
    ]
  },
  {
    name: 'SQL',
    level: 80,
    experience: '4+ years of experience with SQL databases and query optimization.',
    projects: [
      'Designed and optimized database schemas',
      'Implemented complex queries',
      'Created data migration scripts'
    ]
  }
];

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2020 - Present',
    description: 'Leading frontend development for multiple projects, focusing on performance, accessibility, and user experience.',
    responsibilities: [
      'Architect and implement complex frontend solutions',
      'Mentor junior developers and conduct code reviews',
      'Collaborate with design and backend teams'
    ],
    achievements: [
      'Reduced page load time by 40% through optimization',
      'Implemented new features that increased user engagement by 25%',
      'Successfully led the migration to TypeScript'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Full Stack Developer',
    company: 'Previous Company',
    period: '2018 - 2020',
    description: 'Developed and maintained web applications using modern technologies.',
    responsibilities: [
      'Developed full-stack features',
      'Maintained and improved existing applications',
      'Worked with cross-functional teams'
    ],
    achievements: [
      'Improved application performance by 30%',
      'Reduced bug reports by 50%',
      'Successfully delivered multiple major features'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  }
];

export default function About() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Floating particles */}
      <div style={{ zIndex: -1 }}>
        <ParticleContainer count={40} color="rgba(255, 255, 255, 0.05)" size={1.5} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm a passionate developer with expertise in building modern web applications.
            My focus is on creating efficient, scalable, and user-friendly solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="interactive-container"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.button
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full text-left p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative"
                  onClick={() => setSelectedSkill(index)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 group-hover:text-gray-300 transition-colors ml-4">
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
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
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="interactive-container"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full text-left p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative"
                  onClick={() => setSelectedExperience(index)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">{exp.title}</h4>
                      <p className="text-gray-400">{exp.company} • {exp.period}</p>
                      <p className="text-gray-400 mt-2">{exp.description}</p>
                    </div>
                    <div className="flex items-center text-gray-500 group-hover:text-gray-300 transition-colors">
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
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skill Detail Modal */}
      <Modal
        isOpen={selectedSkill !== null}
        onClose={() => setSelectedSkill(null)}
        title={selectedSkill !== null ? skills[selectedSkill].name : ''}
      >
        {selectedSkill !== null && (
          <SkillDetail skill={skills[selectedSkill]} />
        )}
      </Modal>

      {/* Experience Detail Modal */}
      <Modal
        isOpen={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience !== null ? experiences[selectedExperience].title : ''}
      >
        {selectedExperience !== null && (
          <ExperienceDetail experience={experiences[selectedExperience]} />
        )}
      </Modal>
    </section>
  );
} 