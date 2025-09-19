export interface Skill {
  name: string;
  description: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
}

export interface ContactInfo {
  email: string;
  discord: string;
}