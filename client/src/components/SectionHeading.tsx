import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          <span className="text-gradient">{title}</span>
        </h2>
        <div className={`h-1.5 w-24 bg-primary rounded-full mb-6 ${centered ? "mx-auto" : ""}`} />
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
}
