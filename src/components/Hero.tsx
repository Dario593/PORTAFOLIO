import { useState, useEffect } from 'react';
import { personalInfo } from '../data';
import { ArrowRight, Mail, Github, Facebook, Youtube, Phone } from 'lucide-react';

export default function Hero() {
  const titles = [
    'Ingeniero en Sistemas',
    'Desarrollador Full-Stack',
    'Creador de Soluciones Digitales',
    'Especialista en Automatización'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = titles[currentTitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(100);

        if (displayedText === fullText) {
          // Finished typing, pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(50);

        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-navy-950 transition-colors"
    >
      {/* Background radial soft glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-mint-400/10 dark:bg-mint-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-navy-500/10 dark:bg-navy-800/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-1">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-mint-100 dark:bg-mint-950/30 text-mint-600 dark:text-mint-400 font-mono text-xs font-semibold tracking-wider uppercase shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500"></span>
              </span>
              <span>Disponible para proyectos</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy-800 dark:text-white leading-[1.1] tracking-tight">
              Hola, soy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-navy-600 dark:from-white dark:to-navy-200">
                {personalInfo.name}
              </span>
            </h1>

            {/* Typewriter text */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <p className="font-display font-bold text-xl sm:text-2xl text-mint-500 dark:text-mint-400 typewriter-cursor">
                {displayedText}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              {personalInfo.shortBio} {personalInfo.fullBio.substring(0, 110)}...
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                id="hero-cta-projects"
                onClick={() => handleScrollTo('proyectos')}
                className="group inline-flex items-center justify-center px-6 py-3 rounded-xl bg-navy-800 text-white dark:bg-mint-400 dark:text-navy-950 font-semibold shadow-lg shadow-navy-800/15 dark:shadow-mint-400/10 hover:bg-mint-500 dark:hover:bg-mint-300 transition-all cursor-pointer"
              >
                Ver Proyectos
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => handleScrollTo('contacto')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-300 dark:border-navy-700 bg-white/50 dark:bg-navy-900/50 backdrop-blur-sm text-slate-700 dark:text-slate-200 font-semibold hover:border-mint-400 dark:hover:border-mint-400 hover:text-mint-500 dark:hover:text-mint-400 transition-all cursor-pointer"
              >
                Contáctame
                <Mail className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Redes:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-500 dark:text-slate-400 hover:text-mint-500 dark:hover:text-mint-400 shadow-sm transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-500 dark:text-slate-400 hover:text-mint-500 dark:hover:text-mint-400 shadow-sm transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-500 dark:text-slate-400 hover:text-mint-500 dark:hover:text-mint-400 shadow-sm transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-500 dark:text-slate-400 hover:text-mint-500 dark:hover:text-mint-400 shadow-sm transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Right: Avatar Image Frame */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Back glowing pattern */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-mint-400 to-navy-500 opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
              
              {/* Spinning background geometric rings */}
              <div className="absolute -inset-4 rounded-3xl border border-dashed border-mint-400/40 animate-[spin_40s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-3xl border border-dotted border-navy-300/30 animate-[spin_65s_linear_infinite]" />
              
              {/* Solid frame container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white dark:border-navy-800 shadow-2xl bg-gradient-to-b from-navy-100 to-white dark:from-navy-900 dark:to-navy-950">
                <img
                  src="/src/assets/images/DARIO-FORMAL-GPT.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glassmorphism banner */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 dark:border-navy-800/50 flex items-center justify-between shadow-lg">
                  <div>
                    <h3 className="font-display font-bold text-sm text-navy-800 dark:text-white">
                      Ecuador, Manabí
                    </h3>
                    <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      Zona Horaria UTC-5
                    </p>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-mint-400/20 text-mint-600 dark:text-mint-400 text-xs font-mono font-bold uppercase tracking-wider">
                    Especialista
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
