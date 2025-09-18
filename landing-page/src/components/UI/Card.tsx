import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md'
}: CardProps) {
  const baseClasses = 'bg-white rounded-xl shadow-lg transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
