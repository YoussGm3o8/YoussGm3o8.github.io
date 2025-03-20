import Link from 'next/link';
import { getAllPosts } from '@/utils/blog';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogPostCard } from '@/components/BlogPostClient';

// Import motion from client component
const ClientMotionDiv = dynamic(() => import('@/components/ClientMotionDiv'), { ssr: false });

export const metadata: Metadata = {
  title: 'Blog | Youssef El Kesti',
  description: 'Read articles and insights from Youssef El Kesti on computer engineering, embedded systems, and software development.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <Navbar />
      <section className="py-20 pt-32 bg-background min-h-screen">
        <div className="container-custom mx-auto">
          <ClientMotionDiv
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on computer engineering, embedded systems, and software development.
            </p>
          </ClientMotionDiv>

          <div className="space-y-8">
            {posts.length > 0 ? (
              posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))
            ) : (
              <div className="bg-secondary shadow rounded-lg p-6 text-center">
                <p className="text-gray-400">No blog posts yet. Check back soon!</p>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              More articles coming soon!
            </p>
            {/* Link to admin area - hidden in plain sight */}
            <Link href="/admin/login" className="mt-4 inline-block text-gray-500 hover:text-gray-400 text-sm">
              Manage Blog
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 