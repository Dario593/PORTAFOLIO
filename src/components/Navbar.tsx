import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi', id: 'sobre-mi' },
    { name: 'Habilidades', href: '#habilidades', id: 'habilidades' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Testimonios', href: '#testimonios', id: 'testimonios' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Header shadow on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Highlight active section on scroll
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickLink = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleClickLink('inicio');
            }}
            className="flex items-center space-x-2 text-navy-800 dark:text-white"
          >
            <div className="w-10 h-10 rounded-xl bg-mint-400 flex items-center justify-center shadow-lg shadow-mint-400/20">
              <Sparkles className="w-5 h-5 text-navy-800" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight tracking-tight">
                Dario <span className="text-mint-400">Catagua</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400">
                Ing. en Sistemas
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClickLink(link.id);
                  }}
                  className={`font-medium text-sm transition-colors relative py-1 px-1 ${
                    activeSection === link.id
                      ? 'text-mint-400 font-semibold'
                      : 'text-slate-600 hover:text-navy-800 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-mint-400 rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              id="desktop-dark-mode-toggle"
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:text-mint-400 dark:hover:text-mint-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              id="mobile-dark-mode-toggle"
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:text-mint-400 dark:hover:text-mint-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Hamburger Menu Toggle */}
            <button
              id="hamburger-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:text-navy-800 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-nav-drawer"
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-navy-800 transition-all duration-300 shadow-xl overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClickLink(link.id);
              }}
              className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                activeSection === link.id
                  ? 'bg-mint-50 dark:bg-mint-950/20 text-mint-500 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-navy-800/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
