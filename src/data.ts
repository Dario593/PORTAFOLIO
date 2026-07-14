import { Project, Skill, Testimonial, Stat } from './types';

export const personalInfo = {
  name: 'Dario Javier Catagua Zambrano',
  title: 'Ingeniero en Sistemas',
  shortBio: 'Especialista en desarrollo full-stack, automatización y soluciones de sistemas a medida.',
  fullBio: 'Soy un Ingeniero en Sistemas apasionado por transformar problemas complejos en soluciones digitales eficientes, escalables y centradas en el usuario. Con sólida experiencia técnica que abarca desde el desarrollo web interactivo hasta la arquitectura de sistemas robustos, me especializo en crear plataformas web modernas, integraciones de API personalizadas y soluciones de automatización empresarial.',
  email: 'dc1312934977@gmail.com',
  phone: '0981084536',
  location: 'Manabí, Ecuador',
  socials: {
    github: 'https://github.com/dcatagua',
    facebook: 'https://facebook.com/dario.catagua',
    whatsapp: 'https://wa.me/593981084536?text=Hola%20Dario,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.',
    youtube: 'https://youtube.com/@dariocatagua',
  },
  cvUrl: '#' // CV modal or mock download
};

export const statsList: Stat[] = [
  {
    id: 'exp',
    value: 5,
    suffix: '+',
    label: 'Años de Experiencia',
    icon: 'Briefcase'
  },
  {
    id: 'projs',
    value: 25,
    suffix: '+',
    label: 'Proyectos Completados',
    icon: 'Code'
  },
  {
    id: 'clients',
    value: 15,
    suffix: '+',
    label: 'Clientes Satisfechos',
    icon: 'Users'
  }
];

export const skillsList: Skill[] = [
  // Front-end
  { name: 'HTML5', level: 95, category: 'frontend', iconName: 'Html5' },
  { name: 'CSS3 / Tailwind', level: 90, category: 'frontend', iconName: 'Css3' },
  { name: 'JavaScript', level: 88, category: 'frontend', iconName: 'Js' },
  { name: 'React', level: 85, category: 'frontend', iconName: 'React' },
  // Back-end & Langs
  { name: 'Python', level: 82, category: 'backend', iconName: 'Python' },
  { name: 'Java', level: 80, category: 'backend', iconName: 'Java' },
  // CMS / No-Code
  { name: 'WordPress', level: 85, category: 'platforms', iconName: 'Wordpress' },
  { name: 'Wix', level: 80, category: 'platforms', iconName: 'Wix' }
];

export const projectsList: Project[] = [
  {
    id: 'yt-downloader',
    title: 'YouTube Music & Video Downloader',
    description: 'Plataforma web rápida y moderna para buscar, convertir y descargar música de alta calidad desde YouTube.',
    extendedDescription: 'Un software web de alto rendimiento diseñado con conversión asíncrona de formatos de audio y video. Cuenta con una interfaz fluida, previsualización en tiempo real de miniaturas, selección de tasas de bits de audio (hasta 320kbps) y descarga integrada sin ventanas emergentes molestas.',
    image: 'https://picsum.photos/seed/ytmusic/600/400',
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'API Integration'],
    githubUrl: 'https://github.com/dcatagua/yt-music-downloader',
    demoUrl: 'https://youtube.com',
    category: 'web',
    featured: true
  },
  {
    id: 'marykakes',
    title: 'Panadería & Pastelería Marykakes',
    description: 'E-commerce interactivo para una pastelería local con catálogo de productos y pedidos automatizados por WhatsApp.',
    extendedDescription: 'Solución web a medida para una panadería tradicional en Manabí. Permite a los clientes explorar un catálogo dinámico y tentador de pasteles, personalizar coberturas y sabores mediante un cotizador interactivo, y enviar las especificaciones de su pedido directamente al número de WhatsApp de la tienda.',
    image: 'https://picsum.photos/seed/bakery/600/400',
    techStack: ['React', 'Tailwind CSS', 'Wix API', 'WhatsApp Business Link'],
    githubUrl: 'https://github.com/dcatagua/marykakes-pasteleria',
    demoUrl: 'https://facebook.com',
    category: 'web',
    featured: true
  },
  {
    id: 'sis-inventario',
    title: 'Sistema de Inventario & Facturación Manabí',
    description: 'Aplicación administrativa empresarial con soporte para facturación electrónica y control de existencias en tiempo real.',
    extendedDescription: 'Un sistema robusto enfocado en PYMES locales de Ecuador. Incorpora módulos avanzados de control de existencias, cálculo de márgenes de ganancias, registro automatizado de clientes y proveedores, alertas automáticas de stock mínimo y una interfaz intuitiva para agilizar el punto de venta.',
    image: 'https://picsum.photos/seed/systems/600/400',
    techStack: ['Python', 'Java', 'SQLite', 'Tailwind CSS', 'Desktop App'],
    githubUrl: 'https://github.com/dcatagua/sistema-inventario-pymes',
    demoUrl: '#',
    category: 'systems',
    featured: true
  }
];

export const testimonialsList: Testimonial[] = [
  {
    id: 't1',
    name: 'María Cevallos',
    role: 'Propietaria',
    company: 'Marykakes Pastelería',
    content: 'Dario transformó por completo nuestro negocio. Gracias al sistema de pedidos por WhatsApp, nuestras ventas de pasteles personalizados aumentaron más de un 40% en el primer mes y el catálogo es súper fácil de manejar.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ing. Carlos Moreira',
    role: 'Director de Operaciones',
    company: 'Distribuidora del Pacífico',
    content: 'El software de inventario diseñado por Dario es impecable. Su estructura robusta y rapidez nos permite llevar un control exacto de miles de productos de ferretería sin retrasos en las cajas de facturación.',
    rating: 5
  },
  {
    id: 't3',
    name: 'David Anchundia',
    role: 'Creador de Contenido',
    company: 'Manabí Digital',
    content: 'La herramienta de conversión y descarga de YouTube que Dario desarrolló es sumamente rápida, liviana y limpia. Un excelente trabajo técnico de optimización de código y diseño responsivo.',
    rating: 5
  }
];
