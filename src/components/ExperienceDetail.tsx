'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ExperienceDetailProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
    image: string;
  };
}

export default function ExperienceDetail({ experience }: ExperienceDetailProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 h-full">
      {/* Content Section */}
      <div className="space-y-8 overflow-y-auto pr-4 pb-8">
        {/* Header */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
          <div className="space-y-2">
            <p className="text-xl text-gray-900 dark:text-gray-300">{experience.company}</p>
            <p className="text-gray-700 dark:text-gray-400">{experience.period}</p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
            <p className="text-gray-900 dark:text-gray-300">{experience.description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-900 dark:text-gray-300">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Achievements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-900 dark:text-gray-300">
              {experience.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative h-full rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <Image
          src={experience.image}
          alt={`${experience.company} logo`}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 