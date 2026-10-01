import { motion } from 'framer-motion';
import Reveal from './Reveal';
import birla from '../assets/brands/birla.png';
import CDSJourney from '../assets/brands/CDSJourney.svg';
import NisMua from '../assets/brands/NisMua.svg';
import pollaroid from '../assets/brands/pollaroid.svg';
import SSBPrep from '../assets/brands/SSBPrep.svg';

const ClientLogos = () => {
  const brands = [
    { name: 'Birla Institute', logo: birla },
    { name: 'CDSJourney', logo: CDSJourney },
    { name: 'NisMua', logo: NisMua },
    { name: 'Polaroid Store', logo: pollaroid },
    { name: 'SSBPrep', logo: SSBPrep },
  ];

  // Duplicate brands multiple times for seamless continuous scrolling
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands]; 

  return (
    <section className="py-16 bg-white border-y border-[var(--color-border-light)] overflow-hidden">
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
          <p className="font-manrope text-[var(--color-text-secondary)] text-center text-sm uppercase tracking-wider">
            TRUSTED BY
          </p>
        </div>
      </Reveal>

      <div className="relative">
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-32 h-16 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;