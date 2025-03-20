'use client';

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Comments from '@/components/Comments';
import { Post } from '@/utils/blog';

// Function to format dates safely
function formatDate(dateString: string | Date): string {
  try {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date instanceof Date && !isNaN(date.getTime())
      ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : 'No date';
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
}

// A more versatile header component
export function BlogPostHeader({ post }: { post: Post }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2 text-light-text">{post.title}</h1>
      <div className="flex items-center text-sm text-gray-400">
        <time dateTime={typeof post.date === 'string' ? post.date : post.date.toISOString()}>
          {formatDate(post.date)}
        </time>
        <span className="mx-2">&bull;</span>
        <span>{post.author}</span>
      </div>
    </div>
  );
}

// Component for rendering markdown content
export function BlogPostContent({ content }: { content: string }) {
  // Use client-side only rendering to avoid hydration errors
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Only render the markdown on the client side
  if (!isClient) {
    return <div className="markdown-placeholder text-gray-400">Loading content...</div>;
  }
  
  return <ReactMarkdown className="prose prose-invert max-w-none text-light-text">{content}</ReactMarkdown>;
}

// Component for the blog post card in listing
export function BlogPostCard({ post, showExcerpt = true }: { post: Post, showExcerpt?: boolean }) {
  return (
    <article className="bg-secondary shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-2">
          <time dateTime={typeof post.date === 'string' ? post.date : post.date.toISOString()}>
            {formatDate(post.date)}
          </time>
          <span className="mx-2">&bull;</span>
          <span>{post.author}</span>
        </div>
        
        <a href={`/blog/${post.slug}`} className="block mt-2">
          <h2 className="text-xl font-semibold text-light-text hover:text-accent">
            {post.title}
          </h2>
        </a>
        
        {showExcerpt && <p className="mt-3 text-gray-400">{post.excerpt}</p>}
        
        <div className="mt-4">
          <a 
            href={`/blog/${post.slug}`}
            className="text-accent hover:text-indigo-300"
          >
            Read more &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}

// Client component for comments
export function BlogPostComments({ postId }: { postId: string }) {
  // Same client-side only approach for comments
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <div className="text-gray-400">Loading comments...</div>;
  }
  
  return <Comments postId={postId} />;
}

// Default export that combines all the components
export default function BlogPost({ post }: { post: Post }) {
  return (
    <article className="bg-secondary shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <BlogPostHeader post={post} />
        <div className="prose prose-lg prose-invert max-w-none">
          <BlogPostContent content={post.content} />
        </div>
      </div>
      <div className="p-6 pt-0">
        <BlogPostComments postId={post.slug} />
      </div>
    </article>
  );
} 