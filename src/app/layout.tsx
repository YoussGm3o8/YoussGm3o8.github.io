import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Youssef El Kesti | Computer Engineering Student',
  description: 'Computer Engineering student at McGill University, specializing in embedded systems and software development',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-light-text`}>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
} 