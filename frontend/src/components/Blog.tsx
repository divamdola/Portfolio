import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Card from './Card';
import { blogPosts } from '../data/portfolioData';
import { Icons } from '../data/icons';

const Blog = () => {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading 
          number="06 — INSIGHTS"
          title="Latest Articles"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.15}>
              <Card hover>
                <div className="overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#38a56b]/20 flex items-center justify-center">
                          <span className="text-2xl">📝</span>
                        </div>
                        <p className="text-gray-600 font-manrope text-sm">Blog Image</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-manrope text-[#38a56b] text-xs font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[var(--color-border-light)]">•</span>
                    <span className="font-manrope text-[var(--color-text-secondary)] text-xs">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="font-outfit font-bold text-lg md:text-xl text-[var(--color-text-primary)] mb-3 line-clamp-2 hover:text-[#38a56b] transition-colors">
                    {post.title}
                  </h3>

                  <p className="font-manrope text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <motion.div
                    className="flex items-center text-[#38a56b] font-semibold font-outfit text-sm"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read Article
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

export default Blog;