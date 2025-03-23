'use client';

import { motion } from 'framer-motion';

interface ExperienceDetailProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
  };
}

export default function ExperienceDetail({ experience }: ExperienceDetailProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 h-full">
      {/* Content Section */}
      <div className="space-y-8 overflow-y-auto pr-4">
        {/* Header */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-white">{experience.title}</h3>
          <div className="space-y-2">
            <p className="text-xl text-gray-300">{experience.company}</p>
            <p className="text-gray-400">{experience.period}</p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Overview</h4>
          <p className="text-gray-300">{experience.description}</p>
        </div>

        {/* Responsibilities */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Key Responsibilities</h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-300">
                <span className="text-blue-500">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Key Achievements</h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-300">
                <span className="text-green-500">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Section */}
      <div className="relative h-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-6xl font-bold text-white">{experience.company[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 