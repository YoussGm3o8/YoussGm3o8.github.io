'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Comments({ postId }) {
  const commentBox = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Clean up any existing scripts to avoid duplicates
    const existingScript = document.getElementById('giscus-script');
    if (existingScript) {
      existingScript.remove();
      setIsLoaded(false);
    }

    const loadGiscus = () => {
      try {
        // Create and configure the script
        const script = document.createElement('script');
        script.id = 'giscus-script';
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', 'YoussGm3o8/YoussGm3o8.github.io');
        script.setAttribute('data-repo-id', 'R_kgDOOIndkQ');
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'DIC_kwDOOIndkc4CoDYH');
        
        // Use specific mapping for blog posts if postId is provided
        if (postId) {
          script.setAttribute('data-mapping', 'specific');
          script.setAttribute('data-term', postId);
        } else {
          // Fall back to pathname for other pages
          script.setAttribute('data-mapping', 'pathname');
        }
        
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom');
        script.setAttribute('data-theme', 'preferred_color_scheme');
        script.setAttribute('data-lang', 'en');
        script.setAttribute('data-loading', 'lazy');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        // Set up event listeners
        script.onload = () => {
          setIsLoaded(true);
          console.log('Giscus loaded successfully');
          if (postId) {
            console.log(`Giscus mapped to specific term: ${postId}`);
          } else {
            const currentPath = window.location.pathname;
            console.log(`Giscus mapped to pathname: ${currentPath}`);
          }
        };

        script.onerror = () => {
          setHasError(true);
          console.error('Failed to load Giscus');
        };

        // Add the script to the DOM
        if (commentBox.current) {
          commentBox.current.innerHTML = ''; // Clear previous content
          commentBox.current.appendChild(script);
        }
      } catch (error) {
        console.error('Error setting up Giscus:', error);
        setHasError(true);
      }
    };

    // Load Giscus if we're in a browser environment
    if (typeof window !== 'undefined') {
      loadGiscus();
    }

    // Cleanup on unmount
    return () => {
      const script = document.getElementById('giscus-script');
      if (script) script.remove();
    };
  }, [postId]);

  // Error message UI
  if (hasError) {
    return (
      <div className="mt-10 pt-10 border-t border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div className="p-4 bg-red-900/30 border border-red-500 rounded-md">
          <p>There was an error loading the comments system. Please make sure:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>GitHub Discussions are enabled for this repository</li>
            <li>The Giscus app is installed on your repository</li>
            <li>Your repository IDs and category IDs are correct</li>
            <li>You're connected to the internet</li>
          </ul>
          <p className="mt-4">
            You can also comment directly on{' '}
            <a 
              href="https://github.com/YoussGm3o8/YoussGm3o8.github.io/discussions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              GitHub Discussions
            </a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 pt-10 border-t border-gray-700">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      
      {!isLoaded && (
        <p className="text-gray-400 mb-4">Loading comments system...</p>
      )}
      
      <div ref={commentBox} className="giscus-comments" />
      
      <div className="mt-4 text-sm text-gray-400">
        <p>
          Comments are powered by{' '}
          <a 
            href="https://giscus.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Giscus
          </a>
          . You'll need to authorize the Giscus app to post comments.
        </p>
      </div>
    </div>
  );
} 