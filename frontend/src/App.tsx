import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import ClientLogos from './components/ClientLogos';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <ClientLogos />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;