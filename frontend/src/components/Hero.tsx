import { motion } from 'framer-motion';
import Button from './Button';
import { Icons } from '../data/icons';
import portrait from '../assets/potrait.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-primary-dark overflow-hidden">
      {/* Geometric Background Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-20 right-20 w-96 h-96 bg-mint rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.08, rotate: 45 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute top-1/2 left-1/4 w-64 h-64 border-2 border-mint rounded-2xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="font-outfit font-semibold text-mint text-lg tracking-wide">
                PRODUCT DESIGNER & UI/UX SPECIALIST
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-outfit font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-6"
            >
              Looking For<br />
              Your Next<br />
              <span className="text-mint">Creative Partner?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-manrope text-gray-400 text-lg md:text-xl max-w-lg mb-10"
            >
              I craft exceptional digital experiences that blend strategic thinking with pixel-perfect design to help ambitious brands stand out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="#portfolio" variant="primary" size="lg" icon="arrowRight">
                Explore My Work
              </Button>
              <Button href="#contact" variant="outlineWhite" size="lg" icon="arrowRight">
                Let's Talk
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative lg:mt-20"
          >
            <div className="relative">
              {/* Main Portrait Image */}
              <div className="relative z-10 w-full aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-border-dark">
                <img 
                  src={portrait} 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-mint rounded-2xl -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-6 -left-6 w-24 h-24 border-2 border-mint rounded-2xl -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500"
        >
          {Icons.arrowUp}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;