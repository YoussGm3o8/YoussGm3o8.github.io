"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ClientMotionDivProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  whileInView?: any;
  viewport?: any;
}

export default function ClientMotionDiv({
  children,
  className,
  initial,
  animate,
  transition,
  whileInView,
  viewport,
}: ClientMotionDivProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
} 