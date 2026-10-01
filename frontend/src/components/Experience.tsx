import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experience, skills } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading 
          number="04 — EXPERIENCE"
          title="Professional Journey"
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div className="space-y-8">
            {experience.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.15}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-8 border-l-2 border-border-light hover:border-[#38a56b] transition-colors"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
                      item.type === 'education' ? 'bg-[#38a56b]' : 'bg-[#38a56b]'
                    }`}
                  />
                  
                  <span className="font-manrope text-[#38a56b] text-sm font-semibold mb-2 block">
                    {item.year}
                  </span>
                  
                  <h3 className="font-outfit font-bold text-lg md:text-xl text-text-primary mb-2">
                    {item.position}
                  </h3>
                  
                  <p className="font-manrope text-text-secondary font-medium mb-3">
                    {item.company}
                  </p>
                  
                  {item.fieldOfStudy && (
                    <p className="font-manrope text-text-secondary text-sm mb-2">
                      {item.fieldOfStudy}
                    </p>
                  )}
                  
                  {item.percentage && (
                    <p className="font-manrope text-text-secondary text-sm mb-3">
                      Percentage: {item.percentage}
                    </p>
                  )}
                  
                  {item.status && (
                    <p className="font-manrope text-text-secondary text-sm mb-3">
                      {item.status}
                    </p>
                  )}
                  
                  {item.description && (
                    <p className="font-manrope text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Skills */}
          <div>
            <Reveal delay={0.5}>
              <h3 className="font-outfit font-bold text-xl md:text-2xl text-text-primary mb-8">
                Core Competencies
              </h3>
            </Reveal>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <Reveal key={skill.name} delay={0.6 + index * 0.1}>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-manrope font-medium text-[var(--color-text-primary)]">
                        {skill.name}
                      </span>
                      <span className="font-manrope text-[#38a56b] font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-[var(--color-border-light)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="h-full bg-[#38a56b] rounded-full"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;