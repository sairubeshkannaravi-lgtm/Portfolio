import { z } from "zod";

// Project Schema
export const projectSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    link: z.string().nullable().optional(),
    repoLink: z.string().nullable().optional(),
    imageUrl: z.string().optional(),
});

// Skill Schema
export const skillSchema = z.object({
    id: z.number(),
    category: z.string(),
    items: z.array(z.string()),
});

// Experience Schema
export const experienceSchema = z.object({
    id: z.number(),
    role: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
});

// Education Schema
export const educationSchema = z.object({
    id: z.number(),
    degree: z.string(),
    institution: z.string(),
    period: z.string(),
});

// Certification Schema
export const certificationSchema = z.object({
    id: z.number(),
    name: z.string(),
    issuer: z.string(),
    date: z.string(),
});

// Publication Schema
export const publicationSchema = z.object({
    id: z.number(),
    title: z.string(),
    journal: z.string(),
    link: z.string().nullable().optional(),
    date: z.string().nullable().optional(),
});

// Message Schema
export const messageSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
    createdAt: z.string().optional(),
});

// Insert Schemas
export const insertProjectSchema = projectSchema.omit({ id: true });
export const insertSkillSchema = skillSchema.omit({ id: true });
export const insertExperienceSchema = experienceSchema.omit({ id: true });
export const insertEducationSchema = educationSchema.omit({ id: true });
export const insertCertificationSchema = certificationSchema.omit({ id: true });
export const insertPublicationSchema = publicationSchema.omit({ id: true });
export const insertMessageSchema = messageSchema.omit({ id: true, createdAt: true });

// Types
export type Project = z.infer<typeof projectSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type Publication = z.infer<typeof publicationSchema>;
export type Message = z.infer<typeof messageSchema>;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
