import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Icons } from '../data/icons';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineWhite';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: 'arrowRight' | 'arrowUp';
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  icon,
  iconPosition = 'right',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-outfit font-semibold transition-all duration-300 rounded-full';
  
  const variantStyles = {
    primary: 'bg-mint text-primary-dark hover:bg-mint-dark',
    secondary: 'bg-primary-dark text-white hover:bg-gray-900',
    outline: 'border-2 border-border-dark text-text-primary hover:border-mint hover:text-mint',
    outlineWhite: 'border-2 border-white text-white hover:border-mint hover:text-mint',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const iconStyles = iconPosition === 'left' ? 'mr-2' : 'ml-2';
  
  const iconComponent = icon ? (
    <motion.span 
      className={iconStyles}
      whileHover={{ x: iconPosition === 'right' ? 4 : -4 }}
      transition={{ duration: 0.2 }}
    >
      {Icons[icon]}
    </motion.span>
  ) : null;
  
  const content = (
    <>
      {iconPosition === 'left' && iconComponent}
      {children}
      {iconPosition === 'right' && iconComponent}
    </>
  );
  
  const buttonContent = (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      whileFocus={disabled ? {} : { scale: 1.02 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
  
  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }
  
  return buttonContent;
};

export default Button;