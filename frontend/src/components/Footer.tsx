import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import Button from './Button';
import { navigation } from '../data/portfolioData';
import { Icons } from '../data/icons';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  const footerNav = navigation.filter(link => link.name !== 'Home');

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <Reveal delay={0.1}>
            <div>
              <motion.a
                href="#home"
                className="font-outfit font-bold text-3xl mb-4 block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[var(--color-mint)]">D</span><span className="text-white">Amdola</span>
              </motion.a>
              <p className="font-manrope text-gray-400 leading-relaxed">
                Creating exceptional digital experiences that blend strategic thinking with pixel-perfect design.
              </p>
            </div>
          </Reveal>

          {/* Navigation Column */}
          <Reveal delay={0.2}>
            <div>
              <h4 className="font-outfit font-bold text-lg mb-6">Navigation</h4>
              <ul className="space-y-3">
                {footerNav.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="font-manrope text-gray-400 hover:text-mint transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Social Column */}
          <Reveal delay={0.3}>
            <div>
              <h4 className="font-outfit font-bold text-lg mb-6">Connect</h4>
              <div className="flex gap-4">
                {[
                  { icon: Icons.linkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/in/divyanshuamdola/' },
                  { icon: Icons.dribbble, name: 'Dribbble', link: '#' },
                  { icon: Icons.github, name: 'GitHub', link: 'https://github.com/divamdola/' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-lg hover:bg-mint hover:text-primary-dark transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Newsletter Column */}
          <Reveal delay={0.4}>
            <div>
              <h4 className="font-outfit font-bold text-lg mb-6">Newsletter</h4>
              <p className="font-manrope text-gray-400 text-sm mb-4">
                Subscribe to get the latest design insights and updates.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-manrope text-white placeholder-gray-500 focus:outline-none focus:border-mint transition-colors"
                  required
                />
                <Button variant="primary" size="sm" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <Reveal delay={0.5}>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-manrope text-gray-500 text-sm">
              © 2024 DAmdola. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-manrope text-gray-500 hover:text-mint text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-manrope text-gray-500 hover:text-mint text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;