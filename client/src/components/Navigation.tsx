import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Animated background particles */}
      <div className="fixed top-0 left-0 w-full h-20 overflow-hidden pointer-events-none z-40">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full"
              animate={{
                x: [0, Math.random() * 100, Math.random() * 100, 0],
                y: [0, Math.random() * 50, Math.random() * 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: "0 0 10px rgba(168, 85, 247, 0.7)",
              }}
            />
          ))}
        </div>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-black/40 backdrop-blur-xl py-3 shadow-[0_0_25px_rgba(168,85,247,0.4)] border-b border-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-400/30" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Anime Logo with Glow Effect */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-3 group relative"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glowing ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.6)",
                    "0 0 30px rgba(236, 72, 153, 0.6)",
                    "0 0 20px rgba(34, 211, 238, 0.6)",
                    "0 0 20px rgba(168, 85, 247, 0.6)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="logo-badge relative flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 backdrop-blur-lg border border-purple-500/50">
                <span className="chart-icon absolute top-1 right-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </span>
                <span className="logo-text font-bold text-xl bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  RK
                </span>
              </div>
            </motion.div>
            
            <motion.span 
              className="full-name hidden sm:block font-medium bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent"
              animate={scrolled ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              Rubeshkanna
            </motion.span>
          </ScrollLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link text-sm font-medium cursor-pointer relative px-1 py-2"
                  activeClass="text-cyan-300"
                >
                  <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.name}
                  </span>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active indicator */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </ScrollLink>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden p-2 text-purple-300 hover:text-cyan-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Animated Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="md:hidden bg-black/30 backdrop-blur-xl border-t border-purple-500/30 overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-purple-200 hover:text-cyan-300 transition-colors cursor-pointer py-3 px-4 rounded-lg hover:bg-purple-900/20 block"
                    >
                      {item.name}
                    </ScrollLink>
                    
                    {/* Neon divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-2" />
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}