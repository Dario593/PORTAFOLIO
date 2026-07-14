import React, { useState } from 'react';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Facebook, Youtube, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMsg('Por favor, rellene todos los campos obligatorios.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMsg('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    setStatus('submitting');

    // Simulate database write / SMTP send
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-bold text-mint-500 uppercase tracking-widest mb-3">
            Iniciemos una conversación
          </h2>
          <p className="font-display font-bold text-3xl sm:text-4xl text-navy-800 dark:text-white tracking-tight">
            Contacto
          </p>
          <div className="w-16 h-1 bg-mint-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Left: Info & Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-2xl text-navy-800 dark:text-white">
              ¿Tiene un proyecto en mente?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Si necesita un Ingeniero en Sistemas enfocado en resultados, desarrollo robusto y optimización para automatizar su negocio local o empresa, contácteme por cualquiera de estos medios:
            </p>

            <div className="space-y-4 pt-4">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-850 hover:border-mint-400/50 dark:hover:border-mint-400/30 hover:bg-slate-100/50 dark:hover:bg-navy-900/50 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-mint-100 dark:bg-mint-950/40 text-mint-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Escríbeme por Email
                  </h4>
                  <p className="text-sm font-semibold text-navy-800 dark:text-white select-all">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone / Whatsapp */}
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-850 hover:border-mint-400/50 dark:hover:border-mint-400/30 hover:bg-slate-100/50 dark:hover:bg-navy-900/50 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-mint-100 dark:bg-mint-950/40 text-mint-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Llamadas o WhatsApp
                  </h4>
                  <p className="text-sm font-semibold text-navy-800 dark:text-white select-all">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-navy-850 shadow-inner">
                <div className="w-10 h-10 rounded-lg bg-mint-100 dark:bg-mint-950/40 text-mint-500 flex items-center justify-center shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Ubicación Actual
                  </h4>
                  <p className="text-sm font-semibold text-navy-800 dark:text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociales en Contacto */}
            <div className="pt-6 space-y-3">
              <h4 className="font-display font-bold text-sm text-slate-500 uppercase tracking-wider">
                Mis Canales de Comunicación
              </h4>
              <div className="flex gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-navy-950 dark:hover:bg-navy-850 border border-slate-100 dark:border-navy-850 text-slate-700 dark:text-slate-300 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-navy-950 dark:hover:bg-navy-850 border border-slate-100 dark:border-navy-850 text-slate-700 dark:text-slate-300 transition-all"
                >
                  <Facebook className="w-4 h-4" />
                  <span className="text-xs font-semibold">Facebook</span>
                </a>
                <a
                  href={personalInfo.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-navy-950 dark:hover:bg-navy-850 border border-slate-100 dark:border-navy-850 text-slate-700 dark:text-slate-300 transition-all"
                >
                  <Youtube className="w-4 h-4" />
                  <span className="text-xs font-semibold">YouTube</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Right: Interactive Form */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-navy-950 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-navy-850/60 shadow-md">
            
            {status === 'success' ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-mint-100 dark:bg-mint-950/40 text-mint-500 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-extrabold text-2xl text-navy-800 dark:text-white">
                    ¡Mensaje enviado con éxito!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                    Gracias por ponerte en contacto, Dario. He recibido tu mensaje correctamente y te responderé a tu correo lo antes posible para hablar sobre tu proyecto.
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-navy-800 dark:bg-mint-400 text-white dark:text-navy-950 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form header message */}
                <div>
                  <h4 className="font-display font-bold text-lg text-navy-800 dark:text-white">
                    Envía un mensaje directo
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Completa los campos abajo y responderé en un lapso menor a 24 horas.
                  </p>
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-xl text-xs text-red-600 dark:text-red-400 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Inputs Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide">
                      Nombre Completo *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Ej: Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-slate-800 dark:text-white text-sm focus:border-mint-400 focus:ring-1 focus:ring-mint-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide">
                      Correo Electrónico *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Ej: juan@empresa.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-slate-800 dark:text-white text-sm focus:border-mint-400 focus:ring-1 focus:ring-mint-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="form-subject" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide">
                    Asunto del Mensaje *
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Ej: Propuesta de Desarrollo / Cotización"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-slate-800 dark:text-white text-sm focus:border-mint-400 focus:ring-1 focus:ring-mint-400 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide">
                    Mensaje / Detalles *
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Hola Dario, me interesa construir un e-commerce para mi negocio con pedidos automatizados..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-slate-800 dark:text-white text-sm focus:border-mint-400 focus:ring-1 focus:ring-mint-400 focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  id="submit-contact-form"
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 bg-navy-800 dark:bg-mint-400 text-white dark:text-navy-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center space-x-2 shadow-md hover:bg-mint-500 dark:hover:bg-mint-300 disabled:opacity-50 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white dark:border-navy-950 border-t-transparent rounded-full animate-spin" />
                      <span>Enviando mensaje...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
