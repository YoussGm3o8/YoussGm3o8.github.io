"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
];

const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/YoussGm3o8', 
    icon: <FaGithub className="w-5 h-5" /> 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/youssef-el-kesti-308/', 
    icon: <FaLinkedin className="w-5 h-5" /> 
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@YoussGm',
    icon: <FaYoutube className="w-5 h-5" />
  },
  { 
    name: 'Email', 
    url: 'mailto:elkestiyoussef@gmail.com', 
    icon: <FaEnvelope className="w-5 h-5" /> 
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-bold text-xl text-light-text hover:text-accent transition-colors">
            Youssef El Kesti
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="text-light-text hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-4 pl-6 border-l border-gray-700">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light-text hover:text-accent transition-colors duration-300"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>
          
          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-light-text hover:text-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <motion.div
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -50 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-6 mb-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path} 
                  className="text-2xl font-medium text-light-text hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-text hover:text-accent transition-colors"
                aria-label={link.name}
              >
                <div className="text-2xl">{link.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
} 