"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaFolder, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Static list of available JavaDocs
const AVAILABLE_JAVADOCS = ['ECSE321'];

export default function JavaDocsPage() {
  const [javadocProjects, setJavadocProjects] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setJavadocProjects(AVAILABLE_JAVADOCS);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        <div className="container-custom mx-auto py-12">
          <Link href="/projects" className="flex items-center text-accent hover:text-opacity-80 mb-8">
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">JavaDocs Documentation</h1>
            <div className="h-1 w-20 bg-accent mb-8"></div>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                Access JavaDocs documentation for various projects. JavaDocs provide comprehensive API documentation
                for Java code, making it easier to understand the structure and functionality of the projects.
              </p>
            </div>
          </motion.div>

          <div className="mb-12">
            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-6">Available JavaDocs</h2>
              
              {loading ? (
                <div className="py-8 text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent"></div>
                  <p className="mt-4 text-gray-400">Loading available JavaDocs...</p>
                </div>
              ) : error ? (
                <div className="bg-red-500/20 rounded-lg p-6 text-center">
                  <p className="text-red-300">{error}</p>
                </div>
              ) : javadocProjects.length === 0 ? (
                <div className="bg-background/50 rounded-lg p-6 text-center">
                  <p className="text-gray-400">No JavaDocs documentation available yet.</p>
                  <p className="text-sm text-gray-500 mt-2">
                    When you add JavaDocs to the public/javadocs directory, they will appear here.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {javadocProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-background/50 rounded-lg p-6 hover:bg-background/80 transition-colors"
                    >
                      <div className="flex items-start">
                        <div className="text-accent mr-4">
                          <FaFolder size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2">{project}</h3>
                          <a 
                            href={`/javadocs/${project}/index.html`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-accent hover:underline text-sm"
                          >
                            View Documentation <FaExternalLinkAlt className="ml-1" size={12} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 