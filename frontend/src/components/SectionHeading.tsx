import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ number, title, subtitle, className = '' }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${className}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="font-outfit font-bold text-[#38a56b] text-lg">{number}</span>
        <div className="h-px flex-1 bg-[var(--color-border-light)]"></div>
      </div>
      <h2 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-manrope text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;