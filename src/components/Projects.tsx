"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDiscord, FaGamepad } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const projectIcons = {
  'Royal Kingdoms': <FaGamepad className="w-6 h-6 text-accent" />,
  'School Supplies Management System': <FaCode className="w-6 h-6 text-accent" />,
  'Drone GPS Navigation System': <FaCode className="w-6 h-6 text-accent" />
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and interests in computer engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="h-48 relative overflow-hidden rounded-t-xl">
                {/* Display project image with fallback */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-2xl text-accent font-mono">Project {index + 1}</span>
                </div>
                {/* Project image */}
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-background p-2 rounded-full">
                    {projectIcons[project.title as keyof typeof projectIcons]}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-background text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-400 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <div className="flex gap-4">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.links.discord && (
                    <a 
                      href={project.links.discord} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                    >
                      <FaDiscord /> Discord
                    </a>
                  )}
                  {project.links.server && (
                    <span className="flex items-center gap-2 text-sm text-gray-400">
                      <FaExternalLinkAlt /> {project.links.server}
                    </span>
                  )}
                  {project.links.demo && (
                    <Link 
                      href={project.links.demo} 
                      className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt /> {project.links.demo.startsWith('/') ? 'Details' : 'Demo'}
                    </Link>
                  )}
                </div>
                {project.launchDate && (
                  <div className="mt-3 text-sm text-accent">
                    <strong>Launch Date:</strong> {project.launchDate}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link 
            href="/projects/javadocs" 
            className="btn-accent flex items-center"
          >
            <FaCode className="mr-2" /> View JavaDocs Documentation
          </Link>
          
          <a 
            href="https://github.com/YoussGm3o8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View More on GitHub <FaGithub className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 