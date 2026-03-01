import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "DevSecOps Enthusiast",
  "Problem Solver",
  "Blockchain Developer"
];

const TypingTitle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // FIX 1: Use .length instead of .size for arrays
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-12 md:h-16 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          // FIX 2: Use "backOut" or "easeOut" instead of the invalid "stiff"
          transition={{ duration: 0.5, ease: "backOut" }}
          className="text-xl md:text-3xl font-black uppercase tracking-[0.3em] text-orange-500 text-center"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TypingTitle;