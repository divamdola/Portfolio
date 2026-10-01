import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card = ({ children, className = '', hover = false, onClick }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white border border-border-light rounded-2xl overflow-hidden ${hover ? 'hover:border-mint hover:bg-mint/5' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;