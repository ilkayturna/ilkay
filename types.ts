export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  skills?: string[];
  logoUrl?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
  logoUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  icon?: 'certificate' | 'award';
}

export interface TranslatedCertification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface TranslatedEducation {
  id: string;
  school: string;
  degree: string;
  period: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  SKILLS = 'skills',
  CONTACT = 'contact'
}