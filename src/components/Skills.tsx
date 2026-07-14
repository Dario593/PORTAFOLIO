import { useEffect, useState, useRef } from 'react';
import { skillsList } from '../data';
import { Code2, Monitor, Database, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'platforms'>('all');
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const filteredSkills = skillsList.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Monitor className="w-4 h-4" />;
      case 'backend':
        return <Code2 className="w-4 h-4" />;
      case 'platforms':
        return <Database className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="py-24 bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-bold text-mint-500 uppercase tracking-widest mb-3">
            Mi Arsenal Técnico
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-navy-800 dark:text-white tracking-tight">
            Habilidades Especializadas
          </p>
          <div className="w-16 h-1 bg-mint-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm ${
              activeCategory === 'all'
                ? 'bg-navy-800 text-white dark:bg-mint-400 dark:text-navy-950 font-semibold scale-105'
                : 'bg-white hover:bg-slate-100 dark:bg-navy-900 dark:hover:bg-navy-850 border border-slate-200 dark:border-navy-850 text-slate-600 dark:text-slate-300'
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setActiveCategory('frontend')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm flex items-center space-x-1.5 ${
              activeCategory === 'frontend'
                ? 'bg-navy-800 text-white dark:bg-mint-400 dark:text-navy-950 font-semibold scale-105'
                : 'bg-white hover:bg-slate-100 dark:bg-navy-900 dark:hover:bg-navy-850 border border-slate-200 dark:border-navy-850 text-slate-600 dark:text-slate-300'
            }`}
          >
            {getCategoryIcon('frontend')}
            <span>Front-End</span>
          </button>
          <button
            onClick={() => setActiveCategory('backend')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm flex items-center space-x-1.5 ${
              activeCategory === 'backend'
                ? 'bg-navy-800 text-white dark:bg-mint-400 dark:text-navy-950 font-semibold scale-105'
                : 'bg-white hover:bg-slate-100 dark:bg-navy-900 dark:hover:bg-navy-850 border border-slate-200 dark:border-navy-850 text-slate-600 dark:text-slate-300'
            }`}
          >
            {getCategoryIcon('backend')}
            <span>Back-End & Lenguajes</span>
          </button>
          <button
            onClick={() => setActiveCategory('platforms')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm flex items-center space-x-1.5 ${
              activeCategory === 'platforms'
                ? 'bg-navy-800 text-white dark:bg-mint-400 dark:text-navy-950 font-semibold scale-105'
                : 'bg-white hover:bg-slate-100 dark:bg-navy-900 dark:hover:bg-navy-850 border border-slate-200 dark:border-navy-850 text-slate-600 dark:text-slate-300'
            }`}
          >
            {getCategoryIcon('platforms')}
            <span>CMS & Plataformas No-Code</span>
          </button>
        </div>

        {/* Skills Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-navy-900 p-6 rounded-2xl border border-slate-100 dark:border-navy-850 shadow-sm space-y-4 hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-mint-50 dark:bg-mint-950/20 text-mint-500 flex items-center justify-center font-mono font-bold text-sm shadow-inner">
                    {skill.name.substring(0, 2)}
                  </div>
                  <span className="font-display font-semibold text-base text-navy-800 dark:text-white group-hover:text-mint-500 dark:group-hover:text-mint-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-sm font-bold text-navy-600 dark:text-slate-300">
                  {skill.level}%
                </span>
              </div>

              {/* Progress track */}
              <div className="w-full h-2.5 bg-slate-100 dark:bg-navy-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-navy-500 to-mint-400 dark:from-navy-700 dark:to-mint-400 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animate ? `${skill.level}%` : '0%',
                  }}
                />
              </div>

              <div className="flex justify-between text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                <span>Iniciado</span>
                <span>Intermedio</span>
                <span>Avanzado / Pro</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats callout */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-white dark:bg-navy-900 border border-slate-100 dark:border-navy-850 rounded-2xl shadow-sm text-sm text-slate-500 dark:text-slate-400">
          💡 <span className="font-medium text-slate-700 dark:text-slate-200">Enfoque de Ingeniería:</span> Aplico metodologías ágiles de refactorización y pruebas estructuradas en cada ecosistema para asegurar entregas robustas y optimizadas.
        </div>

      </div>
    </section>
  );
}
