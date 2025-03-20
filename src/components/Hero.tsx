"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30 z-0"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-accent/30"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              x: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%"
              ],
              y: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%"
              ],
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="container-custom mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Computer Engineering Student
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hello, I'm <span className="text-accent">Youssef El Kesti</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A passionate Computer Engineering student at McGill University with experience in embedded systems, 
              software development, and hardware troubleshooting.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link href="/projects" className="btn-primary">
                View My Projects <FaArrowRight className="ml-2" />
              </Link>
              
              <Link href="/about" className="btn-outline">
                About Me
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a 
                href="https://github.com/YoussGm3o8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/youssef-el-kesti/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
              <div className="relative bg-secondary rounded-2xl p-8 shadow-xl">
                <pre className="text-sm md:text-base font-mono text-gray-300">
                  <code>
{`class YoussefElKesti {
  constructor() {
    this.name = "Youssef El Kesti";
    this.education = "McGill University";
    this.major = "Computer Engineering";
    this.skills = [
      "Java", "SQL", "C", 
      "VHDL", "Python", "Bash"
    ];
    this.interests = [
      "Embedded Systems",
      "Software Development",
      "Hardware Design"
    ];
  }

  getCurrentProject() {
    return "Drone GPS Navigation System";
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 