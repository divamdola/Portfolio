import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Button from './Button';
import aboutme from '../assets/aboutme.jpg';

const About = () => {
  const stats = [
    { value: '10+', label: 'Projects Completed' },
    { value: '5+', label: 'Technologies' },
    { value: '3+', label: 'Years Learning' },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading 
          number="01 — WHO I AM"
          title="About Me"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Portrait */}
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <img 
                  src={aboutme} 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#38a56b] rounded-2xl -z-10"
              />
            </div>
          </Reveal>

          {/* Right - Content */}
          <div className="space-y-8">
            <Reveal delay={0.3}>
              <h3 className="font-outfit font-bold text-2xl md:text-3xl lg:text-4xl text-text-primary leading-tight">
                Creating Digital Experiences That Matter
              </h3>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="font-manrope text-text-secondary text-base md:text-lg leading-relaxed">
                I'm a Full Stack Developer and creative problem solver passionate about building modern, responsive, and user-focused digital experiences.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="font-manrope text-text-secondary text-base md:text-lg leading-relaxed">
                I specialize in React, JavaScript, Node.js, Express, and MongoDB, with a strong interest in UI/UX design and frontend development. I enjoy turning ideas into functional products — from designing intuitive interfaces to developing the backend systems that power them.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="font-manrope text-text-secondary text-base md:text-lg leading-relaxed">
                Through projects like SSBPrep and other web applications, I've worked on authentication, REST APIs, databases, responsive interfaces, dashboards, and interactive user experiences.
              </p>
            </Reveal>

            <Reveal delay={0.7}>
              <p className="font-manrope text-text-secondary text-base md:text-lg leading-relaxed">
                I'm constantly learning, experimenting with new technologies, and looking for opportunities where I can build meaningful products, solve real problems, and grow as a developer.
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <Button href="#contact" variant="primary" icon="arrowRight">
                Let's Build Something Meaningful Together
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.9 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-white rounded-2xl border border-border-light"
              >
                <div className="font-outfit font-bold text-4xl md:text-5xl text-[#38a56b] mb-2">
                  {stat.value}
                </div>
                <div className="font-manrope text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;