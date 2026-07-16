import React, { Children } from 'react';
import { motion } from 'framer-motion';
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}
// Subtle fade + slide-up reveal on scroll into view.
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div'
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{
        opacity: 0,
        y
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}>
      
      {children}
    </MotionTag>);

}
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09
    }
  }
};
export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 28
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};