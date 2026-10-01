import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Card from './Card';
import { services } from '../data/portfolioData';
import { Icons } from '../data/icons';

const Services = () => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      design: Icons.design,
      brand: Icons.brand,
      development: Icons.development,
      strategy: Icons.strategy,
    };
    return iconMap[iconName] || Icons.design;
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading 
          number="02 — SERVICES"
          title="Creative solutions for ambitious digital products"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <Card hover>
                <div className="p-8">
                  <div className="mb-6 text-[#38a56b]">
                    {getIcon(service.icon)}
                  </div>
                  
                  <h3 className="font-outfit font-bold text-xl md:text-2xl text-text-primary mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-manrope text-text-secondary text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <motion.div 
                    className="flex items-center text-[#38a56b] font-semibold font-outfit"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More
                    <span className="ml-2">{Icons.arrowRight}</span>
                  </motion.div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;