import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

function TypingName() {
  const fullName = "Rubeshkanna Ravichandran";
  const [displayedName, setDisplayedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev: string) => prev + fullName[currentIndex]);
        setCurrentIndex((prev: number) => prev + 1);
      }, 100); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullName]);

  // Toggle cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev: boolean) => !prev);
    }, 500); // cursor blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="relative inline-block">
      <span className="text-gradient relative z-10">
        {displayedName}
        <span className={`inline-block w-1 h-8 bg-current ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 blur-xl rounded-full opacity-30 -z-10"></span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Column 1 - Main Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-4">
               Data Analyst
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight max-w-2xl">
              Hi, I'm <br />
              <TypingName />
            </h1>
            
            <p className="text-lg text-[#B8C1D9] leading-loose tracking-wide max-w-xl pt-2">
              Transforming complex datasets into meaningful, data-driven insights.
              Skilled in Python, SQL, and Power BI for data analysis, modeling, and interactive dashboards
              Passionate about applying analytics to support smarter business decisions.
            </p>

            <div className="flex flex-wrap gap-3 pt-6">
              <a
                href="/Rubeshkanna-Ravichandran-FlowCV-Resume-20260219.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-103 transition-all duration-300 cursor-pointer text-sm flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                Download Resume
              </a>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-md hover:shadow-lg hover:scale-103 transition-all duration-300 cursor-pointer text-sm"
              >
                View Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="px-6 py-3 rounded-xl bg-background border border-border text-foreground transition-all duration-300 cursor-pointer text-sm hover:border-primary/50"
              >
                Get In Touch
              </ScrollLink>
            </div>
            
            <div className="social-icons-container flex items-center gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/rubeshkannaravichandran" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="linkedin-icon relative text-white hover:text-[#0A66C2] transition-colors duration-300 transform hover:scale-105 inline-block"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/sairubeshkannaravi-lgtm" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="github-icon relative text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-105 inline-block"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="mailto:rubeshkannaravichandran@gmail.com" 
                aria-label="Email"
                className="relative text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-105 inline-block"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Profile Column 2 - Professional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl transform rotate-6" />
              <div className="relative w-full h-[470px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card/50 backdrop-blur-sm">
                <img 
                  src="/hero3.jpg"
                  alt="Professional Profile" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-6 h-6" />
      </ScrollLink>
    </section>
  );
}
