"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        <div className="container-custom mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Browse through my portfolio of computer engineering and software development projects.
            </p>
          </motion.div>
          
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
} 