import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";

interface NavbarProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

// Static array defined outside to prevent useEffect re-renders and ESLint warnings
const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Certificates", id: "certificates" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({ isDarkMode = true, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? "border-b border-white/10 bg-[#080808]/80 py-2.5 shadow-xl backdrop-blur-md"
            : "border-b border-slate-200/80 bg-white/80 py-2.5 shadow-sm backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10">
        {/* Brand & Animated Code Icon */}
        <motion.div
          onClick={() => scrollToSection("home")}
          whileTap={{ scale: 0.95 }}
          className="flex cursor-pointer items-center gap-2.5 select-none group"
        >
          {/* Animated Floating Code Badge */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotate: 180, scale: 1.1 }}
            className={`relative flex h-10 w-10 items-center justify-center rounded-2xl border transition-all duration-500 ${
              isDarkMode
                ? "border-orange-500/40 bg-gradient-to-br from-orange-500/20 via-neutral-900 to-amber-500/20 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.25)] group-hover:border-orange-400 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.45)]"
                : "border-orange-500/30 bg-gradient-to-br from-orange-100 via-white to-amber-100 text-orange-600 shadow-sm group-hover:border-orange-500 group-hover:shadow-md"
            }`}
          >
            <Code2 size={20} className="stroke-[2.5]" />
            <span className="absolute inset-0 rounded-2xl bg-orange-500/10 blur-sm animate-pulse" />
          </motion.div>

          {/* Brand Name */}
          <div className="flex flex-col">
            <span
              className={`text-base font-extrabold tracking-tight leading-none transition-colors ${
                isDarkMode ? "text-white group-hover:text-orange-400" : "text-slate-900 group-hover:text-orange-600"
              }`}
            >
              Tsehaynesh
            </span>
            <span className={`text-[10px] font-semibold uppercase tracking-wider mt-0.5 ${
              isDarkMode ? "text-white/80" : "text-neutral-500"
            }`}>
              Biruh
            </span>
          </div>
        </motion.div>

        {/* Grouped Nav Buttons */}
        <nav
          className="hidden items-center md:flex"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            const isHovered = hoveredSection === link.id;

            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={() => setHoveredSection(link.id)}
                className={`relative cursor-pointer px-3.5 py-1.5 text-xs font-bold tracking-wider transition-colors duration-200 select-none ${
                  isActive || isHovered
                    ? isDarkMode
                      ? "text-orange-400"
                      : "text-orange-600"
                    : isDarkMode
                    ? "text-white"
                    : "text-slate-700"
                }`}
              >
                {/* Sliding Highlight Pill */}
                {(isHovered || (!hoveredSection && isActive)) && (
                  <motion.div
                    layoutId="groupedButtonHighlight"
                    className={`absolute inset-0 rounded-full ${
                      isDarkMode
                        ? "bg-orange-500/20 border border-orange-500/40"
                        : "bg-orange-500/10 border border-orange-400/20"
                    }`}
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
            className={`relative flex h-6 w-12 cursor-pointer items-center rounded-full p-0.5 border transition-colors ${
              isDarkMode
                ? "border-white/10 bg-neutral-900"
                : "border-slate-300 bg-slate-100"
            }`}
          >
            <motion.div
              animate={{ x: isDarkMode ? 22 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`flex h-4 w-4 items-center justify-center rounded-full shadow-md ${
                isDarkMode ? "bg-amber-400" : "bg-orange-500 text-white"
              }`}
            >
              {isDarkMode ? (
                <Moon size={9} className="text-slate-900" />
              ) : (
                <Sun size={9} className="text-white" />
              )}
            </motion.div>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer p-1 text-orange-500 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className={`fixed top-0 right-0 z-50 flex h-screen w-64 flex-col gap-5 p-6 shadow-2xl backdrop-blur-2xl ${
                isDarkMode
                  ? "bg-[#080808]/95 border-l border-white/10"
                  : "bg-white/95 border-l border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between border-b pb-3 border-orange-500/20">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                  Menu
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer p-1"
                >
                  <X size={20} className={isDarkMode ? "text-white" : "text-slate-900"} />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.id)}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className={`flex items-center justify-between text-left text-base font-bold transition-colors ${
                        isActive
                          ? "text-orange-500"
                          : isDarkMode
                          ? "text-white hover:text-orange-400"
                          : "text-slate-800 hover:text-orange-600"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />}
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-auto border-t border-orange-500/10 pt-4">
                <p className="text-[10px] font-semibold text-white/70 uppercase tracking-widest">
                  📍 Addis Ababa, Ethiopia
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;