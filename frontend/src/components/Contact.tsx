import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';
import Reveal from './Reveal';
import { Icons } from '../data/icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Icons.mail,
      label: 'Email',
      value: 'divyanshuamdola01@gmail.com',
      link: 'mailto:divyanshuamdola01@gmail.com',
    },
    {
      icon: Icons.linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/divyanshuamdola',
      link: 'https://www.linkedin.com/in/divyanshuamdola/',
    },
    {
      icon: Icons.github,
      label: 'GitHub',
      value: 'github.com/divamdola',
      link: 'https://github.com/divamdola/',
    },
    {
      icon: Icons.location,
      label: 'Location',
      value: 'India',
      link: null,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary-dark relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-20 right-20 w-96 h-96 bg-[var(--color-mint)] rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.08, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute top-1/2 left-1/4 w-64 h-64 border-2 border-[var(--color-mint)] rounded-2xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <Reveal delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="font-outfit font-semibold text-[var(--color-mint)] text-lg tracking-wide">
                  GET IN TOUCH
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-outfit font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6"
              >
                Let's Build<br />
                <span className="text-[var(--color-mint)]">Something Amazing Together</span>
              </motion.h2>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="font-manrope text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[var(--color-mint)]/20 flex items-center justify-center text-[var(--color-mint)] hover:bg-[var(--color-mint)] hover:text-primary-dark transition-colors"
                      >
                        {info.icon}
                      </a>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[var(--color-mint)]/20 flex items-center justify-center text-[var(--color-mint)]">
                        {info.icon}
                      </div>
                    )}
                    <div>
                      <p className="font-manrope text-gray-500 text-sm mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-manrope text-white hover:text-[var(--color-mint)] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-manrope text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Content - Contact Form */}
          <div className="relative z-10">
            <Reveal delay={0.3}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
                      Failed to send message. Please try again or email me directly.
                    </div>
                  )}
                  <div>
                    <label className="font-manrope text-gray-400 text-sm mb-2 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-manrope text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-mint)] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-manrope text-gray-400 text-sm mb-2 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-manrope text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-mint)] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-manrope text-gray-400 text-sm mb-2 block">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-manrope text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-mint)] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-manrope text-gray-400 text-sm mb-2 block">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-manrope text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-mint)] transition-colors resize-none"
                      required
                    />
                  </div>

                  <Button variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
