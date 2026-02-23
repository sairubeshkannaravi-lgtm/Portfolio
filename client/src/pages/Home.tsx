import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Contact } from "@/components/Contact";
import { useProjects } from "@/hooks/use-projects";
import { useExperience } from "@/hooks/use-experience";
import { useEducation } from "@/hooks/use-education";
import { useCertifications } from "@/hooks/use-certifications";
import { usePublications } from "@/hooks/use-publications";
import { Briefcase, GraduationCap, Award, BookOpen, FolderGit, FileText, Building, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Custom hook for animated counters
const useAnimatedCounter = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasStarted]);

  return [count, ref] as const;
};

// Stat Card Component
const StatCard = ({ count, suffix, label, icon, gradient }: { 
  count: number; 
  suffix: string; 
  label: string; 
  icon: React.ReactNode;
  gradient: string;
}) => {
  const [currentCount, ref] = useAnimatedCounter(count);

  return (
    <motion.div
      ref={ref}
      className="relative p-6 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-500 group"
      whileHover={{ 
        y: -12,
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 15px 20px -5px rgba(34, 211, 238, 0.2)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Enhanced neon glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
      
      {/* Animated Icon Container */}
      <div className="relative mb-4 flex justify-center">
        <motion.div 
          className="relative w-20 h-20 flex items-center justify-center"
          animate="float"
          whileHover={{ 
            scale: 1.15,
          }}
        >
          {/* Animated gradient background */}
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 opacity-70 blur-xl animate-gradient-x"></div>
          
          {/* Glowing circular container */}
          <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600/30 via-cyan-500/30 to-blue-600/30 backdrop-blur-sm flex items-center justify-center border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 rounded-full"></div>
            
            {/* Icon with pulse glow */}
            <motion.div 
              className="relative z-20 w-10 h-10"
              animate="pulse-glow"
            >
              {icon}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated Number */}
      <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {currentCount}{suffix}
      </div>
      
      {/* Label */}
      <div className="text-sm text-slate-300 font-medium">{label}</div>
    </motion.div>
  );
};

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience } = useExperience();
  const { data: education } = useEducation();
  const { data: certifications } = useCertifications();
  const { data: publications } = usePublications();

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-800/50 backdrop-blur-sm border-y border-slate-700/30">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="About Me" 
              subtitle="My journey into the world of data and analytics."
              centered
            />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg prose-invert text-muted-foreground">
                <p>
                  I am an MCA graduate and Data Analyst passionate about transforming raw data into meaningful insights. With strong expertise in Python, SQL, and Power BI, I specialize in data cleaning, exploratory data analysis, and building interactive dashboards that support strategic decision-making.
                </p>
                <p>
                  I have hands-on experience across the full analytics lifecycle—from preprocessing raw datasets to developing predictive models that generate actionable business insights. I excel at translating complex data into clear, visually compelling reports that drive informed decisions and business growth.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard 
                  count={5} 
                  suffix="+" 
                  label="Years Academic Foundation" 
                  icon={<GraduationCap className="w-10 h-10" />}
                  gradient="from-purple-500 to-cyan-400"
                />
                <StatCard 
                  count={8} 
                  suffix="+" 
                  label="Major Projects Completed" 
                  icon={<FolderOpen className="w-10 h-10" />}
                  gradient="from-purple-500 to-cyan-400"
                />
                <StatCard 
                  count={2} 
                  suffix="" 
                  label="Industry Internships" 
                  icon={<Building className="w-10 h-10" />}
                  gradient="from-purple-500 to-cyan-400"
                />
                <StatCard 
                  count={1} 
                  suffix="" 
                  label="IEEE Publication" 
                  icon={<Award className="w-10 h-10" />}
                  gradient="from-purple-500 to-cyan-400"
                />
              </div>
            </div>
          </div>
        </section>

        <Skills />

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Featured Projects" 
              subtitle="A selection of my recent work in data analysis and machine learning."
              centered
            />
            
            {projectsLoading ? (
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[1, 2, 3].map(i => <div key={i} className="h-96 rounded-2xl bg-card/50 animate-pulse" />)}
               </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects?.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="py-24 bg-secondary/10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Experience Column */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-display font-bold">Experience</h2>
                </div>
                <div className="space-y-8 relative pl-8 border-l border-border">
                  {experience?.map((exp, idx) => (
                    <motion.div 
                      key={exp.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <div className="text-primary font-medium mb-2">{exp.company}</div>
                      <div className="text-sm text-muted-foreground mb-4">{exp.period}</div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education Column */}
              <div id="education">
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="w-8 h-8 text-accent" />
                  <h2 className="text-3xl font-display font-bold">Education</h2>
                </div>
                <div className="space-y-8 relative pl-8 border-l border-border">
                  {education?.map((edu, idx) => (
                    <motion.div 
                      key={edu.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-accent border-4 border-background" />
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <div className="text-accent font-medium mb-2">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground">{edu.period}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications & Certifications */}
        <section className="py-24">
          <div className="container mx-auto px-6">
             <div className="grid lg:grid-cols-2 gap-12">
               {/* Certifications */}
               <div>
                  <div className="flex items-center gap-3 mb-8">
                    <Award className="w-8 h-8 text-yellow-500" />
                    <h2 className="text-3xl font-display font-bold">Certifications</h2>
                  </div>
                  <div className="grid gap-4">
                    {certifications?.map((cert) => (
                      <motion.div 
                        key={cert.id} 
                        className="p-6 rounded-xl bg-card border border-border hover:border-yellow-500/50 transition-all flex items-center group"
                        whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 15px -8px rgba(234, 179, 8, 0.1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="mr-4 relative">
                          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-400/20 flex items-center justify-center flex-shrink-0">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 opacity-20 blur-md"></div>
                            <Award className="w-5 h-5 text-yellow-500 relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold group-hover:text-yellow-500 transition-colors">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
               </div>

               {/* Publications */}
               <div>
                  <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="w-8 h-8 text-pink-500" />
                    <h2 className="text-3xl font-display font-bold">Publications</h2>
                  </div>
                  <div className="grid gap-4">
                    {publications?.map((pub) => (
                      <div key={pub.id} className="p-6 rounded-xl bg-card border border-border hover:border-pink-500/50 transition-colors">
                        <h4 className="font-bold text-lg mb-2 text-pink-500 transition-colors">{pub.title}</h4>
                        <div className="flex justify-between text-sm text-muted-foreground mb-4">
                          <span>{pub.journal}</span>
                          <span>{pub.date}</span>
                        </div>
                        <motion.a 
                          href={pub.link || "#"} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-500/20 text-primary hover:from-purple-600/30 hover:to-cyan-500/30 transition-all duration-300 text-sm relative overflow-hidden group"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <span className="relative z-10">View Publication</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 relative z-10">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></div>
                        </motion.a>
                      </div>
                    ))}
                  </div>
               </div>
             </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="py-8 bg-black border-t border-border/50 text-center text-muted-foreground text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Rubeshkanna Ravichandran. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
