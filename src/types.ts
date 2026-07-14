export interface Project {
  id: string;
  title: string;
  description: string;
  extendedDescription?: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  category: 'web' | 'systems' | 'automation';
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // Percentage (0-100)
  category: 'frontend' | 'backend' | 'platforms';
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}
