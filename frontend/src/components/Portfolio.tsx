import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { projects } from '../data/portfolioData';
import { Icons } from '../data/icons';

const Portfolio = () => {
  // State to track current image index for each project
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>({});
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Initialize current image indices
  useEffect(() => {
    const initialIndices: Record<number, number> = {};
    projects.forEach(project => {
      initialIndices[project.id] = 0;
    });
    setCurrentImageIndices(initialIndices);
  }, []);

  // Handle image slideshow on hover
  useEffect(() => {
    let interval: number | undefined;
    
    if (hoveredProject !== null) {
      interval = window.setInterval(() => {
        setCurrentImageIndices(prev => {
          const project = projects.find(p => p.id === hoveredProject);
          if (!project || !project.images || project.images.length === 0) return prev;
          
          const currentIndex = prev[hoveredProject] || 0;
          const nextIndex = (currentIndex + 1) % project.images.length;
          return {
            ...prev,
            [hoveredProject]: nextIndex
          };
        });
      }, 3000); // Change image every 5 seconds
    } else {
      // Reset to first image when not hovering
      setCurrentImageIndices(() => {
        const resetIndices: Record<number, number> = {};
        projects.forEach(project => {
          resetIndices[project.id] = 0;
        });
        return resetIndices;
      });
    }

    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [hoveredProject, projects]);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading 
          number="03 — SELECTED WORK"
          title="Featured Projects"
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.15}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-border-light hover:border-mint transition-all duration-300"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                    {project.images && project.images.length > 0 ? (
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndices[project.id] || 0}
                          src={project.images[currentImageIndices[project.id] || 0]}
                          alt={`${project.title} screenshot`}
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -100, opacity: 0 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="w-full h-full object-contain absolute inset-0"
                        />
                      </AnimatePresence>
                    ) : (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-mint/20 flex items-center justify-center">
                            <span className="text-3xl">🚀</span>
                          </div>
                          <p className="text-gray-600 font-manrope text-sm">Project Image</p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-start gap-6 mb-6">
                      <span className="font-outfit font-bold text-4xl text-[#38a56b]/30">
                        {project.number}
                      </span>
                      <div className="flex-1">
                        <span className="font-manrope text-[var(--color-text-secondary)] text-sm uppercase tracking-wider mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="font-outfit font-bold text-xl md:text-2xl text-[var(--color-text-primary)] mb-4 group-hover:text-[#38a56b] transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-manrope text-[var(--color-text-secondary)] text-base leading-relaxed mb-4">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies?.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-[#38a56b]/10 text-[#38a56b] text-xs font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.frontend_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#38a56b] font-semibold font-outfit"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        Live Demo
                        <span className="ml-2">{Icons.arrowRight}</span>
                      </motion.a>
                      <motion.a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[var(--color-text-secondary)] font-semibold font-outfit hover:text-[#38a56b] transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        GitHub
                        <span className="ml-2">{Icons.arrowRight}</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;