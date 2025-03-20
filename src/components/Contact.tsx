"use client";

import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a passionate computer engineering student
            for your team or if you have any questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-accent w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-gray-400">Canada, Canada</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <FaEnvelope className="text-accent w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a 
                    href="mailto:elkestiyoussef@gmail.com" 
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    elkestiyoussef@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/YoussGm3o8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-lg text-gray-300 hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/youssef-el-kesti-308/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-lg text-gray-300 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 