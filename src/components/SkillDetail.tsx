'use client';

import { motion } from 'framer-motion';

interface SkillDetailProps {
  skill: {
    name: string;
    level: number;
    experience: string;
    projects: string[];
    certifications?: string[];
    description: string;
    experienceLevel: string;
  };
}

export default function SkillDetail({ skill }: SkillDetailProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
        <div className="flex items-center space-x-4">
          <div className="w-full bg-gray-800 rounded-full h-2.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-blue-500 h-2.5 rounded-full"
            />
          </div>
          <span className="text-gray-900 dark:text-gray-300 whitespace-nowrap">{skill.level}%</span>
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h4>
        <p className="text-gray-900 dark:text-gray-300">{skill.experience}</p>
      </div>

      {/* Projects */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Projects</h4>
        <ul className="space-y-2">
          {skill.projects.map((project, index) => (
            <li key={index} className="flex items-start space-x-2 text-gray-900 dark:text-gray-300">
              <span className="text-blue-500">•</span>
              <span>{project}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications */}
      {skill.certifications && skill.certifications.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Certifications</h4>
          <ul className="space-y-2">
            {skill.certifications.map((cert, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-900 dark:text-gray-300">
                <span className="text-green-500">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 