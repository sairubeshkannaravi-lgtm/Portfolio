import { z } from "zod";

// Define TypeScript interfaces for our data structures
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string | null;
  repoLink?: string | null;
  imageUrl?: string;
}

export interface Skill {
  id: number;
  category: string;
  items: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

export interface Publication {
  id: number;
  title: string;
  journal: string;
  link?: string | null;
  date?: string | null;
}

// Export types
export type InsertProject = Omit<Project, 'id'>;
export type InsertSkill = Omit<Skill, 'id'>;
export type InsertExperience = Omit<Experience, 'id'>;
export type InsertEducation = Omit<Education, 'id'>;
export type InsertCertification = Omit<Certification, 'id'>;
export type InsertPublication = Omit<Publication, 'id'>;
