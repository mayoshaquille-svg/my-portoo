export type ProjectStatus = "completed" | "in-development" | "production";

export interface Project {
  slug: string;
  title: string;
  context: string;
  problem: string;
  solution: string;
  architecture: string;
  technicalDecisions: string[];
  role: string[];
  challenges: string[];
  technologies: string[];
  status: ProjectStatus;
  liveUrl?: string;
  repositoryUrl?: string;
  year: string;
}
