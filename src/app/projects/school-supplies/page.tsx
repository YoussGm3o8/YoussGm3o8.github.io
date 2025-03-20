"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SchoolSuppliesProject() {
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
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">School Supplies Management System</h1>
            <div className="h-1 w-20 bg-accent mb-8"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                  <Image 
                    src="/projects/school-supplies.jpg"
                    alt="School Supplies Management System"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Video demo section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Video Demo</h2>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    {/* Replace your-video-id with your actual YouTube video ID */}
                    <iframe 
                      src="https://www.youtube.com/embed/your-video-id" 
                      title="School Supplies Management System Demo"
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-gray-400 mt-2 text-sm">
                    This video demonstrates the key features and functionality of the School Supplies Management System.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-gray-300 mb-4">
                    The School Supplies Management System is a JavaFX application designed to streamline the process of
                    tracking and managing school supplies for educational institutions. The system implements model-based
                    programming principles to ensure reliable data management and a clean separation between the user interface
                    and business logic.
                  </p>
                  <p className="text-gray-300">
                    This project was developed as part of a software design course, focusing on creating maintainable and 
                    extensible code using design patterns and object-oriented principles.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Order tracking and management with status updates</li>
                    <li>Comprehensive inventory management system</li>
                    <li>Intuitive user interface built with JavaFX</li>
                    <li>Data persistence using serialization</li>
                    <li>User authentication and role-based access control</li>
                    <li>Reporting capabilities for inventory and order status</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
                  <p className="text-gray-300 mb-4">
                    The application follows the Model-View-Controller (MVC) architecture to ensure clean separation of concerns.
                    Here's a breakdown of the implementation:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-secondary/50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">Frontend</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>JavaFX for UI components</li>
                        <li>FXML for layout definitions</li>
                        <li>CSS for styling</li>
                        <li>Event-driven user interactions</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-3">Backend</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Java model classes for data representation</li>
                        <li>Business logic controllers</li>
                        <li>Data persistence layer</li>
                        <li>Validation and error handling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="card mb-8">
                  <h2 className="text-2xl font-bold mb-4">Project Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Java</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">JavaFX</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">FXML</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">CSS</span>
                        <span className="px-3 py-1 bg-background rounded-full text-sm">Model-Based Programming</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Duration</h3>
                      <p className="text-gray-300">3 months</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Team Size</h3>
                      <p className="text-gray-300">4 members</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">My Role</h3>
                      <p className="text-gray-300">Software and Testcase Developer + Extra Features</p>
                    </div>
                  </div>
                </div>
                
                <div className="card mb-8">
                  <h2 className="text-2xl font-bold mb-4">Try It Out</h2>
                  <p className="text-gray-300 mb-4">
                    The School Supplies Management System is available as a downloadable JAR file.
                    You'll need Java 11 or higher and JavaFX runtime installed on your computer to run it.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="/downloads/school-supplies-management.jar" 
                      className="btn-primary w-full justify-center flex items-center"
                      download
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download JAR File
                    </a>
                    <a 
                      href="https://github.com/YoussGm3o8/ecse223-group-project" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline w-full justify-center"
                    >
                      <FaGithub className="mr-2" /> View Source Code
                    </a>
                  </div>
                </div>
                
                <div className="card">
                  <h2 className="text-2xl font-bold mb-4">Running the Application</h2>
                  <p className="text-gray-300 mb-4">
                    To run the JavaFX application:
                  </p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4">
                    <li>Ensure Java 11+ is installed (<a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Download Java</a>)</li>
                    <li>Ensure JavaFX runtime is installed (<a href="https://gluonhq.com/products/javafx/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Download JavaFX</a>)</li>
                    <li>Double-click the JAR file if your system supports it, or run:<br/>
                      <code className="bg-background px-2 py-1 rounded block mt-2 mb-2 overflow-x-auto">
                        java --module-path /path/to/javafx-sdk/lib --add-modules javafx.controls,javafx.fxml -jar school-supplies-management.jar
                      </code>
                    </li>
                    <li>Login with username: <code className="bg-background px-2 py-1 rounded">demo</code> and password: <code className="bg-background px-2 py-1 rounded">password</code></li>
                  </ol>
                  <p className="text-gray-300">
                    <strong>Note:</strong> A video demonstration is also available below if you prefer not to install the application.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
} 