'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import ParticleContainer from './ParticleContainer';
import Modal from './Modal';
import SkillDetail from './SkillDetail';
import ExperienceDetail from './ExperienceDetail';
import { useTheme } from "./ThemeProvider";

const skills = [
  {
    name: 'SQL & Data Modeling',
    level: 85,
    experience: 'I enjoy working with SQL and building data models that make sense. I focus on creating scalable pipelines that support a wide range of business questions.',
    projects: [
      'Built some cool dbt models for telephony analytics',
      'Set up reliable Gold Datasets at various companies',
      'Made reporting systems that give real-time insights'
    ],
    description: 'Expert in SQL and data modeling with a focus on creating scalable and efficient data pipelines.',
    experienceLevel: 'Advanced'
  },
  {
    name: 'Python & ETL',
    level: 80,
    experience: 'Python is my go-to for making data work. I build ETL pipelines that handle the heavy lifting and automate the boring stuff.',
    projects: [
      'Made a Python pipeline that handles large-scale telephony data',
      'Built a personal finance pipeline that connects to multiple banks',
      'Created predictive models that help with staffing'
    ],
    description: 'Proficient in Python for ETL processes and data automation.',
    experienceLevel: 'Advanced'
  },
  {
    name: 'Data Engineering',
    level: 75,
    experience: 'I work with all the cool data tools out there - Snowflake, BigQuery, Airflow. I make sure everything works together.',
    projects: [
      'Built a pipeline that makes Google Search data available in Snowflake',
      'Set up Airflow to orchestrate data transformations',
      'Created LookML explores that help people find insights'
    ],
    description: 'Skilled in data engineering with experience in modern data stack tools.',
    experienceLevel: 'Intermediate'
  },
  {
    name: 'Cloud & DevOps',
    level: 70,
    experience: 'I handle the cloud stuff and make sure our data infrastructure runs smoothly. Terraform and Docker are my friends.',
    projects: [
      'Used Terraform to set up data infrastructure',
      'Worked with AWS, GCP, and Azure',
      'Containerized data apps to make them portable'
    ],
    description: 'Experienced in cloud infrastructure and DevOps practices.',
    experienceLevel: 'Intermediate'
  },
  {
    name: 'Data Visualization',
    level: 80,
    experience: 'I make data look good and tell stories. I build dashboards and reports that people actually use.',
    projects: [
      'Created LookML explores that make reporting easy',
      'Built dashboards that show what&apos;s happening in real-time',
      'Made reporting systems that track what matters'
    ],
    description: 'Skilled in creating effective data visualizations and dashboards.',
    experienceLevel: 'Advanced'
  },
  {
    name: 'Machine Learning',
    level: 75,
    experience: 'I use ML to solve real problems. From predicting staffing needs to figuring out demand patterns.',
    projects: [
      'Built models that help predict staffing needs',
      'Created systems that forecast demand',
      'Made scoring systems that help find good leads'
    ],
    description: 'Proficient in applying machine learning to solve business problems.',
    experienceLevel: 'Intermediate'
  }
];

const experiences = [
  {
    id: 'angi',
    title: 'Business Analyst',
    company: 'Angi',
    period: 'June 2023 - Present',
    location: 'Denver',
    description: 'I lead data projects that improve how pros connect with customers and grow their businesses.',
    responsibilities: [
      'Built dbt models that make telephony analytics work better',
      'Created a pipeline that brings Google Search data into Snowflake',
      'Made LookML explores and dashboards that people actually use',
      'Helped optimize the affiliate program with better scoring and reimbursement frameworks'
    ],
    achievements: [
      'Improved telephony data processing by 30%',
      'Found and fixed $2.5MM in revenue issues',
      'Added over $1MM in profit'
    ],
    technologies: ['dbt', 'Snowflake', 'Looker', 'Python', 'SQL'],
    image: '/angi.png'
  },
  {
    id: 'handshake',
    title: 'Data Engineer Intern',
    company: 'Handshake',
    period: 'June 2022 - August 2022',
    location: 'San Francisco',
    description: 'I worked on making data infrastructure that helps students find jobs.',
    responsibilities: [
      'Set up reliable Gold Datasets using dbt',
      'Built Airflow DAGs that orchestrate our data transformations',
      'Created LookML explores that help analyze the job market'
    ],
    achievements: [
      'Made dataset processing 15% faster',
      'Helped 8% more students find jobs'
    ],
    technologies: ['dbt', 'Airflow', 'Looker', 'SQL', 'Python'],
    image: '/handshake.png'
  },
  {
    id: 'bci',
    title: 'Data Engineer Intern',
    company: 'BCI',
    period: 'February 2021 - June 2021',
    location: 'Chicago',
    description: 'I helped make call center operations run better with data.',
    responsibilities: [
      'Built a Python pipeline that handles call center data',
      'Created a model that predicts staffing needs',
      'Made a reporting system that tracks performance'
    ],
    achievements: [
      'Automated 60% of the manual work',
      'Cut costs by 5%',
      'Made call center response times 15% faster'
    ],
    technologies: ['Python', 'Scala', 'Spark', 'SQL', 'Tableau'],
    image: '/bci.png'
  }
];

export default function About() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating particles */}
      <div style={{ zIndex: -1 }}>
        <ParticleContainer count={40} color="rgba(0, 0, 0, 0.05) dark:rgba(255, 255, 255, 0.05)" size={1.5} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I love solving problems, building things, and making sense of complex information. 
          Whether it&apos;s working with data, developing new ideas, or optimizing systems,
          I&apos;m always looking for ways to improve and create.
          </p>
        </motion.div>

        {/* Personal Info Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            {/* Profile Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/20" />
              <Image
                src={theme === 'dark' ? "/profile.png" : "/profile.png"}
                alt="Michael Murdock"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I&apos;m passionate about analytics engineering and data design. I specialize in building scalable data models, creating intuitive dashboards, and designing data architectures that make complex information accessible and actionable.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                My approach combines technical expertise with a deep understanding of business needs. I focus on creating data solutions that are not just powerful, but also elegant and user-friendly.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Outside of data, I enjoy hiking Colorado&apos;s trails, playing chess and video games, and exploring geospatial data visualization. 
                I&apos;m always excited to find new ways to combine my interests in geography and data.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">Denver, CO</p>
              </div>
              <div className="p-4 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-700 dark:text-gray-300">BS Computer Science</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">University of Colorado Boulder</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills & Experience Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.button
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full text-left p-4 rounded-lg bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative"
                  onClick={() => setSelectedSkill(index)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-800 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{skill.name}</span>
                        <span className="text-gray-700 dark:text-gray-400">{skill.level}%</span>
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
                    <div className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors ml-4">
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
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full text-left p-4 rounded-lg bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-900/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative"
                  onClick={() => setSelectedExperience(index)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{exp.title}</h4>
                      <p className="text-gray-700 dark:text-gray-400">{exp.company} • {exp.period}</p>
                      <p className="text-gray-700 dark:text-gray-400 mt-2">{exp.description}</p>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors">
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
        size="small"
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
        size="large"
      >
        {selectedExperience !== null && (
          <ExperienceDetail experience={experiences[selectedExperience]} />
        )}
      </Modal>
    </section>
  );
} 