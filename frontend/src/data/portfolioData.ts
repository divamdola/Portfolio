import CDSJourney1 from '../assets/projects/CDSJourney1.png';
import CDSJourney2 from '../assets/projects/CDSJourney2.png';
import CDSJourney3 from '../assets/projects/CDSJourney3.png';
import CDSJourney4 from '../assets/projects/CDSJourney4.png';
import NishMua1 from '../assets/projects/NishMua1.png';
import NishMua2 from '../assets/projects/NishMua2.png';
import NishMua3 from '../assets/projects/NishMua3.png';
import Pollaroid1 from '../assets/projects/Pollaroid1.png';
import Pollaroid2 from '../assets/projects/Pollaroid2.png';
import Pollaroid3 from '../assets/projects/Pollaroid3.png';
import Pollaroid4 from '../assets/projects/Pollaroid4.png';
import Pollaroid5 from '../assets/projects/Pollaroid5.png';
import BIAS1 from '../assets/projects/BIAS1.png';
import BIAS2 from '../assets/projects/BIAS2.png';
import BIAS3 from '../assets/projects/BIAS3.png';
import SSBPrep1 from '../assets/projects/SSBPrep1.png';
import SSBPrep2 from '../assets/projects/SSBPrep2.png';
import SSBPrep3 from '../assets/projects/SSBPrep3.png';
import SSBPrep4 from '../assets/projects/SSBPrep4.png';

export const services = [
  {
    id: 1,
    icon: 'design',
    title: 'UX/UI & Product Design',
    description: 'Crafting intuitive digital experiences that users love through research-driven design and pixel-perfect interfaces.',
  },
  {
    id: 2,
    icon: 'brand',
    title: 'Brand & Visual Design',
    description: 'Building memorable brand identities that resonate with your audience and stand out in competitive markets.',
  },
  {
    id: 3,
    icon: 'development',
    title: 'Web & App Development',
    description: 'Bringing designs to life with clean, performant code and modern development practices.',
  },
  {
    id: 4,
    icon: 'strategy',
    title: 'Strategy & Digital Growth',
    description: 'Developing comprehensive digital strategies that drive business growth and user engagement.',
  },
];

export const projects = [
  {
    id: 1,
    number: '01',
    category: 'React, TypeScript, CSS',
    title: 'CDSJourney',
    description: 'A modern defence-exam preparation platform designed for aspirants preparing for CDS, AFCAT, NDA, and CAPF. The platform presents courses, mock tests, learning resources, student results, batches, and an engaging educational experience through a responsive React-based interface.',
    frontend_url: 'https://cdsjourney.onrender.com/',
    github_url: 'https://github.com/divamdola/CDSJourney',
    technologies: ['React', 'TypeScript', 'CSS', 'Responsive Web Design'],
    language_breakdown: { CSS: '53.3%', TypeScript: '46.0%', Other: '0.7%' },
    images: [CDSJourney1, CDSJourney2, CDSJourney3, CDSJourney4],
  },
  {
    id: 2,
    number: '02',
    category: 'React, TypeScript, CSS',
    title: 'NishMua',
    description: 'A modern beauty and makeup-focused web experience built with a component-based frontend. The project focuses on creating an attractive, responsive interface for presenting beauty services, products, and brand content.',
    frontend_url: 'https://nishmua.onrender.com/',
    github_url: 'https://github.com/divamdola/NishMua',
    technologies: ['React', 'TypeScript', 'CSS', 'Responsive Web Design'],
    language_breakdown: { TypeScript: '92.8%', CSS: '5.9%', Other: '1.3%' },
    images: [NishMua1, NishMua2, NishMua3],
  },
  {
    id: 3,
    number: '03',
    category: 'JavaScript, CSS, HTML',
    title: 'Polaroid Store',
    description: 'An e-commerce-style Polaroid store that allows users to explore products through a responsive shopping interface. The project includes an integrated Razorpay payment gateway for handling online payments and demonstrates practical implementation of an online shopping workflow.',
    frontend_url: 'https://polaroids-2.onrender.com/',
    github_url: 'https://github.com/divamdola/Polaroids',
    technologies: ['JavaScript', 'CSS', 'HTML', 'Razorpay'],
    language_breakdown: { JavaScript: '79.0%', CSS: '20.9%', HTML: '0.1%' },
    images: [Pollaroid1, Pollaroid2, Pollaroid3, Pollaroid4, Pollaroid5],
  },
  {
    id: 4,
    number: '04',
    category: 'JavaScript, CSS, HTML',
    title: 'BIAS Grievance Portal',
    description: 'An online college grievance management portal designed to provide students with a structured way to submit complaints and track their resolution. The system is intended to improve communication between students and the institution through organized complaint workflows and administrative management.',
    frontend_url: 'https://bias-grievance-portal-1.onrender.com/',
    github_url: 'https://github.com/divamdola/BIAS_Grievance_Portal',
    technologies: ['JavaScript', 'CSS', 'HTML', 'Responsive Web Design'],
    language_breakdown: { JavaScript: '97.3%', CSS: '2.5%', HTML: '0.2%' },
    images: [BIAS1, BIAS2, BIAS3],
  },
  {
    id: 5,
    number: '05',
    category: 'MERN Stack',
    title: 'SSBPrep',
    description: 'A MERN-based defence-exam preparation platform built for aspirants preparing for SSB, NDA, and CDS. It provides study materials, books, roadmaps, mock tests, authentication, test attempts and results, user profiles, and administrative features for managing educational content.',
    frontend_url: 'https://frontend7-sm0h.onrender.com/',
    github_url: 'https://github.com/divamdola/SSBPrep',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'CSS', 'HTML', 'Redux Toolkit', 'JWT Authentication'],
    language_breakdown: { JavaScript: '79.0%', CSS: '20.4%', HTML: '0.6%' },
    images: [SSBPrep1, SSBPrep2, SSBPrep3, SSBPrep4],
  },
];

export const experience = [
  {
    id: 1,
    type: 'education',
    year: 'June 2022',
    position: 'Higher Secondary Education',
    company: 'St. Joseph\'s Convent School',
    fieldOfStudy: 'PCM + Computer Science',
    percentage: '80%',
  },
  {
    id: 2,
    type: 'education',
    year: 'July 2026',
    position: 'Bachelor of Technology',
    company: 'Birla Institute of Applied Sciences',
    fieldOfStudy: 'Computer Science and Engineering',
    degree: 'B.Tech',
    percentage: '70%',
  },
  {
    id: 3,
    type: 'experience',
    year: 'Present',
    position: 'Freelancer & Full Stack Developer',
    company: 'Independent',
    status: 'Currently a Fresher and Freelancer',
    description: 'Building and maintaining web applications and digital experiences through personal projects and freelance work, with a focus on full-stack development, responsive interfaces, and practical problem solving.',
  },
];

export const skills = [
  { name: 'Product Design', level: 95 },
  { name: 'UX Research', level: 88 },
  { name: 'Design Systems', level: 92 },
  { name: 'Prototyping', level: 90 },
  { name: 'Brand Design', level: 85 },
  { name: 'Frontend Development', level: 78 },
];

export const blogPosts = [
  {
    id: 1,
    date: 'March 15, 2024',
    category: 'Design Process',
    title: 'The Art of User-Centered Design',
    excerpt: 'Exploring methodologies and best practices for creating designs that truly serve user needs and drive business success.',
    image: '/api/placeholder/800/500',
  },
  {
    id: 2,
    date: 'February 28, 2024',
    category: 'Design Systems',
    title: 'Building Scalable Design Systems',
    excerpt: 'A comprehensive guide to creating design systems that grow with your product and maintain consistency across teams.',
    image: '/api/placeholder/800/500',
  },
  {
    id: 3,
    date: 'January 10, 2024',
    category: 'UX Research',
    title: 'The Power of User Research',
    excerpt: 'How to conduct effective user research that informs design decisions and leads to better product outcomes.',
    image: '/api/placeholder/800/500',
  },
];

export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
