import { Suspense } from 'react';
import Link from 'next/link';
import { Post, getPostBySlug, getPostSlugs } from '@/utils/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPostClient';

// This function is crucial for static site generation
// It tells Next.js which paths to pre-render
export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map(slug => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Youssef El Kesti`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-32">
          <div className="bg-secondary shadow rounded-lg p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-500 mb-6">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blog" className="text-accent hover:text-indigo-300">
              &larr; Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-32">
        <Link href="/blog" className="text-accent hover:text-indigo-300 mb-6 inline-block">
          &larr; Back to Blog
        </Link>
        
        <Suspense fallback={<div className="p-6 bg-secondary rounded-lg">Loading post...</div>}>
          <BlogPost post={post} />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
} 