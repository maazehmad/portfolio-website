export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  image?: string;
  featured?: boolean;
}
