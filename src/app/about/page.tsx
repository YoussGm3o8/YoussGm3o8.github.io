import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Youssef El Kesti',
  description: 'Learn more about Youssef El Kesti, a Computer Engineering student at McGill University specializing in embedded systems, software development, and hardware design. Explore my education, skills, experience, projects, and volunteer work.',
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
} 