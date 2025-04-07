'use client';

import Image from 'next/image';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
    longDescription: string;
    features: string[];
    challenges: string[];
    solutions: string[];
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 h-full">
      {/* Content Section */}
      <div className="space-y-8 overflow-y-auto pr-4">
        {/* Header */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-gray-900 dark:text-gray-300">{project.description}</p>
        </div>

        {/* Technologies */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Overview</h4>
          <p className="text-gray-900 dark:text-gray-300">{project.longDescription}</p>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-900 dark:text-gray-300">
                <span className="text-blue-500">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Challenges</h4>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-900 dark:text-gray-300">
                  <span className="text-red-500">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Solutions</h4>
            <ul className="space-y-2">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-900 dark:text-gray-300">
                  <span className="text-green-500">•</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative h-full rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
} 