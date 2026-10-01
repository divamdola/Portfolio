import { motion } from 'framer-motion';
import Reveal from './Reveal';
import Button from './Button';

const CTA = () => {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-primary-dark relative overflow-hidden">
      {/* Geometric Decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-10 right-10 w-64 h-64 bg-mint rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.08, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-mint rounded-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl lg:text-6xl text-white leading-tight mb-8">
              Let's build something<br />
              <span className="text-mint">meaningful together.</span>
            </h2>

            <p className="font-manrope text-gray-400 text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's collaborate to create exceptional experiences that drive results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact" variant="primary" size="lg" icon="arrowRight">
                Get In Touch
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;