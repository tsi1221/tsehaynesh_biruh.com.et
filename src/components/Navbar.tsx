// Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode = true, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Certificates", id: "certificates" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? isDarkMode 
            ? "bg-black/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-lg shadow-black/20" 
            : "bg-white/80 backdrop-blur-xl py-3 border-b border-slate-200 shadow-lg shadow-slate-200/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-lg sm:text-xl md:text-2xl font-black tracking-tighter cursor-pointer ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}
          onClick={() => scrollToSection("home")}
        >
          TSEHAYNESH <span className="text-orange-500">BIRUH</span>
        </motion.span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 font-bold text-xs lg:text-sm uppercase tracking-wider lg:tracking-widest">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`hover:text-orange-500 transition-colors duration-300 relative group ${
                isDarkMode ? "text-white" : "text-slate-700"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Creative Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative w-14 h-7 rounded-full p-1 transition-colors duration-500 ${
              isDarkMode 
                ? "bg-gradient-to-r from-indigo-900 to-purple-900" 
                : "bg-gradient-to-r from-sky-300 to-amber-300"
            }`}
          >
            {/* Stars/Clouds decoration */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              initial={false}
            >
              {isDarkMode ? (
                <div className="absolute inset-0">
                  <span className="absolute top-1 left-2 text-[8px]">✨</span>
                  <span className="absolute top-1 right-3 text-[6px]">⭐</span>
                  <span className="absolute bottom-0.5 left-3 text-[7px]">🌟</span>
                </div>
              ) : (
                <div className="absolute inset-0">
                  <span className="absolute top-1 left-3 text-[8px]">☁️</span>
                  <span className="absolute bottom-0 right-3 text-[7px]">⛅</span>
                </div>
              )}
            </motion.div>
            
            {/* Toggle Knob */}
            <motion.div
              animate={{ x: isDarkMode ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center ${
                isDarkMode 
                  ? "bg-gradient-to-br from-yellow-300 to-amber-500" 
                  : "bg-gradient-to-br from-yellow-200 to-orange-400"
              }`}
            >
              <motion.div
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isDarkMode ? (
                  <Moon size={10} className="text-slate-800" />
                ) : (
                  <Sun size={10} className="text-amber-800" />
                )}
              </motion.div>
            </motion.div>
          </motion.button>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed right-0 top-0 h-screen w-[75%] z-50 flex flex-col p-8 gap-6 shadow-2xl ${
                isDarkMode ? "bg-[#080808]" : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center w-full mb-6">
                <span className="font-bold text-sm text-orange-500 uppercase tracking-wider">Menu</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} className={isDarkMode ? "text-white" : "text-slate-900"} />
                </button>
              </div>

              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className={`text-2xl font-bold hover:text-orange-500 transition-colors tracking-tight text-left ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}

              <div className="mt-auto pt-6 border-t">
                <p className={`text-[10px] font-medium opacity-40 tracking-wider uppercase ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}>
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;