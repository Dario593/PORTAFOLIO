import { personalInfo } from '../data';
import { ArrowUp, Sparkles, Github, Facebook, Youtube, Phone } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 transition-colors border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-12 border-b border-slate-800">
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-9 h-9 rounded-lg bg-mint-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-navy-800" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight">
                Dario <span className="text-mint-400">Catagua</span>
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Ingeniero en Sistemas enfocado en el desarrollo ágil de software robusto y optimización web en Manabí, Ecuador.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-3 mt-6 md:mt-0">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-mint-400 hover:text-navy-950 text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-mint-400 hover:text-navy-950 text-slate-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-mint-400 hover:text-navy-950 text-slate-300 transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-mint-400 hover:text-navy-950 text-slate-300 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Lower footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-8 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Dario Catagua. Todos los derechos reservados.
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-2">
            <span>Desarrollado con ❤️ en Ecuador</span>
            <span>&bull;</span>
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-full bg-slate-800 hover:bg-mint-400 text-slate-300 hover:text-navy-950 transition-all shadow-md group cursor-pointer flex items-center justify-center"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
