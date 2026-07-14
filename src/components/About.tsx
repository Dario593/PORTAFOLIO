import { useState, useEffect } from 'react';
import { personalInfo, statsList } from '../data';
import { Download, FileText, Check, Award, GraduationCap, X, Printer } from 'lucide-react';

export default function About() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    exp: 0,
    projs: 0,
    clients: 0,
  });
  const [showCVModal, setShowCVModal] = useState(false);

  useEffect(() => {
    // Basic counting animation when component mounts
    const duration = 1500; // ms
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        exp: Math.min(Math.round((statsList[0].value / steps) * step), statsList[0].value),
        projs: Math.min(Math.round((statsList[1].value / steps) * step), statsList[1].value),
        clients: Math.min(Math.round((statsList[2].value / steps) * step), statsList[2].value),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handlePrintCV = () => {
    window.print();
  };

  const strengths = [
    'Análisis y Arquitectura de Sistemas',
    'Desarrollo Web Full-Stack Escalable',
    'Administración de Bases de Datos',
    'Soporte Técnico & Automatización',
    'Metodologías de Desarrollo Ágiles',
    'Solución de Problemas Complejos',
  ];

  return (
    <section
      id="sobre-mi"
      className="py-24 bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-bold text-mint-500 uppercase tracking-widest mb-3">
            Conóceme mejor
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-navy-800 dark:text-white tracking-tight">
            Sobre Mí
          </p>
          <div className="w-16 h-1 bg-mint-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* About Left: Bio & Details */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-2xl text-navy-800 dark:text-white">
              Ingeniero en Sistemas con base en Manabí, Ecuador
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              {personalInfo.fullBio}
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Me enfoco en el desarrollo sustentable de software, asegurando que cada línea de código sea óptima, comprensible y adaptable. Desde la panadería local de Marykakes hasta plataformas dinámicas de descarga de YouTube, aporto soluciones analíticas de ingeniería a problemas reales.
            </p>

            {/* Strengths bullet grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-mint-100 dark:bg-mint-950/40 text-mint-500 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium">{strength}</span>
                </div>
              ))}
            </div>

            {/* CTA to View CV */}
            <div className="pt-4">
              <button
                id="view-cv-btn"
                onClick={() => setShowCVModal(true)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-navy-50 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 hover:border-mint-400 dark:hover:border-mint-400 text-navy-800 dark:text-white font-semibold rounded-xl hover:text-mint-600 dark:hover:text-mint-400 transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-5 h-5" />
                <span>Ver Curriculum Vitae (CV)</span>
              </button>
            </div>
          </div>

          {/* About Right: Stats & Cards */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Stats list with animated counter */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {statsList.map((stat, index) => (
                <div
                  key={stat.id}
                  className="bg-slate-50 dark:bg-navy-950 p-6 rounded-2xl border border-slate-100 dark:border-navy-800/60 shadow-sm flex items-center space-x-4 hover:border-mint-400/50 dark:hover:border-mint-400/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-mint-100 dark:bg-mint-950/40 text-mint-600 dark:text-mint-400 flex items-center justify-center shadow-inner">
                    {index === 0 && <Award className="w-6 h-6" />}
                    {index === 1 && <FileText className="w-6 h-6" />}
                    {index === 2 && <GraduationCap className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-3xl text-navy-800 dark:text-white">
                      {counts[stat.id] || 0}
                      <span className="text-mint-400">{stat.suffix}</span>
                    </div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Location info card */}
            <div className="bg-gradient-to-tr from-navy-800 to-navy-900 dark:from-navy-950 dark:to-navy-900 text-white p-6 rounded-2xl border border-white/5 shadow-xl space-y-4">
              <h4 className="font-display font-bold text-lg text-mint-400">
                Información del Profesional
              </h4>
              <div className="space-y-2 text-sm text-slate-300 font-mono">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Ubicación:</span>
                  <span className="text-white">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Educación:</span>
                  <span className="text-white">Ing. en Sistemas</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Email:</span>
                  <span className="text-white select-all">{personalInfo.email}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>Teléfono:</span>
                  <span className="text-white select-all">{personalInfo.phone}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* CV Preview Modal */}
      {showCVModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-navy-950 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 dark:border-navy-800 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-navy-900 border-b border-slate-200 dark:border-navy-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-mint-500" />
                <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white">
                  Curriculum Vitae - Dario Catagua
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrintCV}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-200 flex items-center space-x-1.5 text-xs font-semibold transition-colors cursor-pointer"
                  title="Imprimir o Guardar en PDF"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Imprimir / PDF</span>
                </button>
                <button
                  onClick={() => setShowCVModal(false)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-500 dark:text-slate-300 hover:text-red-500 transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content / Printed Area */}
            <div id="cv-printable-area" className="flex-1 overflow-y-auto p-6 sm:p-10 text-slate-800 dark:text-slate-100 space-y-8 select-text">
              {/* CV Top Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-slate-200 dark:border-navy-800 pb-6">
                <div>
                  <h1 className="font-display font-extrabold text-3xl text-navy-800 dark:text-white">
                    {personalInfo.name}
                  </h1>
                  <p className="font-display font-bold text-lg text-mint-500 dark:text-mint-400 mt-1">
                    Ingeniero en Sistemas
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 font-mono text-sm space-y-1 text-slate-500 dark:text-slate-400">
                  <p>📍 {personalInfo.location}</p>
                  <p>📧 {personalInfo.email}</p>
                  <p>📞 {personalInfo.phone}</p>
                </div>
              </div>

              {/* CV Summary */}
              <div className="space-y-2">
                <h2 className="font-display font-bold text-lg text-navy-800 dark:text-white uppercase tracking-wider border-l-4 border-mint-400 pl-3">
                  Perfil Profesional
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {personalInfo.fullBio} Especializado en el desarrollo ágil de software, arquitectura de sistemas y soluciones de automatización comercial. Enfocado en la optimización de procesos y experiencia de usuario.
                </p>
              </div>

              {/* CV Experience */}
              <div className="space-y-4">
                <h2 className="font-display font-bold text-lg text-navy-800 dark:text-white uppercase tracking-wider border-l-4 border-mint-400 pl-3">
                  Experiencia Laboral
                </h2>
                <div className="space-y-4">
                  <div className="relative pl-6 border-l border-slate-200 dark:border-navy-800">
                    <div className="absolute w-3 h-3 bg-mint-400 rounded-full -left-[6px] top-1.5" />
                    <div className="flex justify-between items-start text-sm">
                      <h3 className="font-display font-bold text-navy-800 dark:text-white">
                        Desarrollador de Software Independiente & Consultor de Sistemas
                      </h3>
                      <span className="text-xs font-mono text-mint-500 dark:text-mint-400 font-bold whitespace-nowrap">
                        2021 - Presente
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Manabí, Ecuador
                    </p>
                    <ul className="list-disc list-inside mt-2 text-xs text-slate-600 dark:text-slate-300 space-y-1 pl-1">
                      <li>Diseño y desarrollo de páginas web autogestionables y e-commerce interactivos para negocios locales.</li>
                      <li>Desarrollo de sistemas de inventario y facturación para la automatización comercial en PYMES.</li>
                      <li>Integración de interfaces dinámicas como el sistema de cotizaciones y pedidos directos a WhatsApp.</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l border-slate-200 dark:border-navy-800">
                    <div className="absolute w-3 h-3 bg-slate-300 dark:bg-navy-700 rounded-full -left-[6px] top-1.5" />
                    <div className="flex justify-between items-start text-sm">
                      <h3 className="font-display font-bold text-navy-800 dark:text-white">
                        Soporte Técnico de Redes y Administrador de Bases de Datos (Freelance)
                      </h3>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        2019 - 2021
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Manabí, Ecuador
                    </p>
                    <ul className="list-disc list-inside mt-2 text-xs text-slate-600 dark:text-slate-300 space-y-1 pl-1">
                      <li>Mantenimiento preventivo y correctivo de infraestructuras de red locales en locales comerciales.</li>
                      <li>Administración, consulta y optimización de bases de datos relacionales en MySQL y SQLite.</li>
                      <li>Mantenimiento y configuración de portales corporativos basados en WordPress y Wix.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CV Education */}
              <div className="space-y-4">
                <h2 className="font-display font-bold text-lg text-navy-800 dark:text-white uppercase tracking-wider border-l-4 border-mint-400 pl-3">
                  Educación Académica
                </h2>
                <div className="relative pl-6 border-l border-slate-200 dark:border-navy-800">
                  <div className="absolute w-3 h-3 bg-mint-400 rounded-full -left-[6px] top-1.5" />
                  <div className="flex justify-between items-start text-sm">
                    <h3 className="font-display font-bold text-navy-800 dark:text-white">
                      Título Profesional: Ingeniero en Sistemas
                    </h3>
                    <span className="text-xs font-mono text-mint-500 dark:text-mint-400 font-bold">
                      Graduado
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Universidad Laica Eloy Alfaro de Manabí (ULEAM) / UTM
                  </p>
                </div>
              </div>

              {/* CV Skills */}
              <div className="space-y-3">
                <h2 className="font-display font-bold text-lg text-navy-800 dark:text-white uppercase tracking-wider border-l-4 border-mint-400 pl-3">
                  Habilidades Técnicas
                </h2>
                <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono font-semibold">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 rounded-lg">HTML5 / CSS3</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 rounded-lg">JavaScript (ES6+)</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 rounded-lg">React & TypeScript</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 rounded-lg">Python (FastAPI / Pandas)</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 rounded-lg">Java SE</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 rounded-lg">WordPress & Wix</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 rounded-lg">Git / Github</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 rounded-lg">SQL / SQLite / MySQL</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-navy-900 border-t border-slate-200 dark:border-navy-800 flex justify-end">
              <button
                onClick={() => setShowCVModal(false)}
                className="px-5 py-2.5 bg-navy-800 hover:bg-navy-700 dark:bg-navy-800 dark:hover:bg-navy-700 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
