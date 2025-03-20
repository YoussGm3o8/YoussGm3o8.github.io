import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Youssef El Kesti',
  description: 'Explore the projects developed by Youssef El Kesti, including embedded systems, software applications, and hardware designs.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 