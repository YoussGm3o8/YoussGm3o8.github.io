"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/YoussGm3o8', 
    icon: <FaGithub className="w-5 h-5" /> 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/youssef-el-kesti/', 
    icon: <FaLinkedin className="w-5 h-5" /> 
  },
  { 
    name: 'Email', 
    url: 'mailto:elkestiyoussef@gmail.com', 
    icon: <FaEnvelope className="w-5 h-5" /> 
  },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary mt-auto">
      <div className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Youssef El Kesti</h3>
            <p className="text-gray-400 mb-4">
              Computer Engineering student at McGill University, passionate about embedded systems, software development, and problem-solving.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light-text hover:text-accent transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Canada</p>
            <p className="text-gray-400">
              <a href="mailto:elkestiyoussef@gmail.com" className="hover:text-accent transition-colors">
                elkestiyoussef@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Youssef El Kesti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 