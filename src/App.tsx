import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system settings
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Apply dark mode theme class to HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Handle scroll events for "Back to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased font-sans">
      
      {/* Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Sections */}
      <main>
        {/* Section: Hero */}
        <Hero />

        {/* Section: About Me */}
        <About />

        {/* Section: Technical Skills */}
        <Skills />

        {/* Section: Projects Portfolio */}
        <Projects />

        {/* Section: Testimonials */}
        <Testimonials />

        {/* Section: Contact Form & Info */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-6 right-6 p-3.5 rounded-2xl bg-mint-400 hover:bg-mint-500 text-navy-950 font-bold shadow-lg shadow-mint-400/20 hover:shadow-mint-400/40 border border-white/10 dark:border-navy-800/20 transition-all duration-300 z-40 group cursor-pointer ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
        aria-label="Volver arriba"
        title="Volver arriba"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>

    </div>
  );
}
