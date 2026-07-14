import { useState } from 'react';
import { projectsList } from '../data';
import { Project } from '../types';
import { ExternalLink, Github, Eye, X, BookOpen, Layers } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'systems'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsList.filter(
    (proj) => filter === 'all' || proj.category === filter
  );

  return (
    <section
      id="proyectos"
      className="py-24 bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-bold text-mint-500 uppercase tracking-widest mb-3">
            Mis Creaciones
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-navy-800 dark:text-white tracking-tight">
            Proyectos Destacados
          </p>
          <div className="w-16 h-1 bg-mint-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-navy-800 text-white dark:bg-mint-400 dark:text-navy-950 font-semibold'
                : 'bg-slate-50 hover:bg-slate-100 dark:bg-navy-800 dark:hover:bg-navy-750 text-slate-600 dark:text-slate-300'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === 'web'
                ? 'bg-navy-800 text-white dark:bg-mint-400 dark:text-navy-950 font-semibold'
                : 'bg-slate-50 hover:bg-slate-100 dark:bg-navy-800 dark:hover:bg-navy-750 text-slate-600 dark:text-slate-300'
            }`}
          >
            Aplicaciones Web
          </button>
          <button
            onClick={() => setFilter('systems')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === 'systems'
                ? 'bg-navy-800 text-white dark:bg-mint-400 dark:text-navy-950 font-semibold'
                : 'bg-slate-50 hover:bg-slate-100 dark:bg-navy-800 dark:hover:bg-navy-750 text-slate-600 dark:text-slate-300'
            }`}
          >
            Sistemas & Escritorio
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-50 dark:bg-navy-950 rounded-2xl overflow-hidden border border-slate-100 dark:border-navy-850/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Card Image Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay with icons */}
                <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-3 bg-mint-400 text-navy-950 rounded-xl font-bold hover:scale-110 transition-transform cursor-pointer"
                    title="Ver detalles del proyecto"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white text-navy-800 rounded-xl font-bold hover:scale-110 transition-transform"
                    title="Código en GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white text-navy-800 rounded-xl font-bold hover:scale-110 transition-transform"
                      title="Ver Demostración"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Category Tag */}
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mint-500">
                    {project.category === 'web' ? 'Aplicación Web' : 'Sistemas e Ingeniería'}
                  </span>
                  
                  <h3 className="font-display font-bold text-xl text-navy-800 dark:text-white group-hover:text-mint-500 dark:group-hover:text-mint-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges & Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-900 flex flex-col space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 text-xs font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 text-xs font-mono rounded">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full text-center py-2.5 px-4 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-200 hover:text-mint-500 dark:hover:text-mint-400 hover:border-mint-400 dark:hover:border-mint-400 rounded-xl font-semibold text-sm transition-all cursor-pointer"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-navy-950 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-navy-850 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Image */}
            <div className="relative aspect-video bg-slate-200">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/65 hover:bg-black/85 text-white transition-colors cursor-pointer"
                aria-label="Cerrar detalles"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-mint-500">
                  {selectedProject.category === 'web' ? 'Aplicación Web' : 'Sistemas e Ingeniería'}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-navy-800 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-navy-800 dark:text-white flex items-center space-x-2 border-b border-slate-100 dark:border-navy-900 pb-2">
                  <BookOpen className="w-4 h-4 text-mint-500" />
                  <span>Descripción del Proyecto</span>
                </h4>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedProject.extendedDescription || selectedProject.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-sm text-navy-800 dark:text-white flex items-center space-x-2 border-b border-slate-100 dark:border-navy-900 pb-2">
                  <Layers className="w-4 h-4 text-mint-500" />
                  <span>Tecnologías & Recursos</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 font-mono text-xs rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Action Links */}
            <div className="p-4 bg-slate-50 dark:bg-navy-900 border-t border-slate-200 dark:border-navy-850 flex flex-col sm:flex-row gap-3 justify-end">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center py-2.5 px-5 rounded-xl border border-slate-200 dark:border-navy-850 bg-white dark:bg-navy-950 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-mint-400 dark:hover:border-mint-400 hover:text-mint-500 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                Ver Código Fuente
              </a>
              {selectedProject.demoUrl !== '#' && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center py-2.5 px-5 rounded-xl bg-navy-800 text-white dark:bg-mint-400 dark:text-navy-950 text-sm font-semibold hover:bg-mint-500 dark:hover:bg-mint-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Demostración En Vivo
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="py-2.5 px-4 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-200 text-sm font-semibold transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
