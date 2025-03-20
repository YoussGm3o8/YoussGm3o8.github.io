/**
 * Utility script to help list JavaDocs directories
 * 
 * This script can be used in a Next.js API route to dynamically list
 * all the JavaDocs subdirectories available in the public/javadocs folder.
 */

const fs = require('fs');
const path = require('path');

/**
 * Gets a list of all directories in the javadocs folder
 * @returns {string[]} An array of directory names
 */
function getJavadocsDirectories() {
  const javadocsPath = path.join(process.cwd(), 'public', 'javadocs');
  
  try {
    // Read the javadocs directory
    const items = fs.readdirSync(javadocsPath);
    
    // Filter to only include directories, not files like README.md
    const directories = items.filter(item => {
      const itemPath = path.join(javadocsPath, item);
      return fs.statSync(itemPath).isDirectory();
    });
    
    return directories;
  } catch (error) {
    console.error('Error reading JavaDocs directories:', error);
    return [];
  }
}

module.exports = {
  getJavadocsDirectories
}; 