import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full min-h-[500px]"
    >
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
        {/* Descriptive alt text for Unsplash images is handled in DB or defaults */}
        <img
          src={project.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-white transition-colors"
              title="View Code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-white transition-colors"
              title="View Project"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow min-h-[60px] max-h-[80px] overflow-hidden">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4 min-h-[32px]">
          {Array.isArray(project.tech) && project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
