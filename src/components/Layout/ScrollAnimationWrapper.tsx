import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  [x: string]: any; // For other props like 'style', 'id', etc.
}

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start with the element out of view (below the screen)
      whileInView={{ opacity: 1, y: 0 }} // Move into view and fade in
      viewport={{ once: true, amount: 0.7 }} // Trigger animation when 70% of the element is in view
      transition={{
        type: 'spring',
        bounce: 0.3,
        duration: 0.8,
        delay: 0.1, // Animation delay for smoother effect
      }}
      className={`w-full ${className ? className : ''}`} // Ensure full width and allow custom classes
      {...props}
    >
      {children}
    </motion.div>
  );
}
