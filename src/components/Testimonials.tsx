import { testimonialsList } from '../data';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-24 bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 transition-colors relative overflow-hidden"
    >
      {/* Visual backdrops */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-navy-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-mint-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-bold text-mint-500 uppercase tracking-widest mb-3">
            Garantía de Confianza
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-navy-800 dark:text-white tracking-tight">
            Opiniones de Clientes
          </p>
          <div className="w-16 h-1 bg-mint-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsList.map((test) => (
            <div
              key={test.id}
              className="relative bg-white dark:bg-navy-900 p-8 rounded-2xl border border-slate-100 dark:border-navy-850/60 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all group hover:-translate-y-1 duration-300"
            >
              {/* Giant quote icon */}
              <div className="absolute top-6 right-6 text-slate-100 dark:text-navy-850 group-hover:text-mint-400/10 transition-colors">
                <Quote className="w-12 h-12 stroke-[4]" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="text-sm italic leading-relaxed text-slate-600 dark:text-slate-300">
                  "{test.content}"
                </p>
              </div>

              {/* Client Profile details */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-navy-950 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-navy-800 to-mint-400 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-navy-800 dark:text-white leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {test.role}, <span className="text-mint-500 font-semibold">{test.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
