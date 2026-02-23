import { useSkills } from "@/hooks/use-skills";
import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";
import { Code2, Database, BarChart3, Wrench, Brain } from "lucide-react";
import type { Skill } from "@shared/schema";

const iconMap: Record<string, React.ReactNode> = {
  "Programming": <Code2 className="w-6 h-6" />, 
  "Databases": <Database className="w-6 h-6" />, 
  "Analytics": <BarChart3 className="w-6 h-6" />, 
  "Tools": <Wrench className="w-6 h-6" />, 
  "Concepts": <Brain className="w-6 h-6" />, 
};

export function Skills() {
  const { data: skills, isLoading } = useSkills();

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="My expertise spans across various domains of data science and analytics."
          centered 
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-48 rounded-2xl bg-card/50 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills?.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {iconMap[skillGroup.category] || <Code2 className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold font-display">{skillGroup.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {Array.isArray(skillGroup.items) && skillGroup.items.map((item: string, i: number) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 text-sm font-medium bg-secondary rounded-lg text-muted-foreground border border-transparent hover:border-primary/30 hover:text-primary transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
