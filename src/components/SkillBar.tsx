import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div className="mb-6 group">
      {/* Skill Info */}
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#0F3952] dark:text-gray-300 group-hover:text-orange-500 transition-colors duration-300">
          {name}
        </span>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-black text-orange-500"
        >
          {level}%
        </motion.span>
      </div>

      {/* Progress Track */}
      <div className="relative h-2 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden border border-gray-200 dark:border-white/10">
        
        {/* Animated Orange Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 h-full bg-linear-to-r from-orange-600 via-orange-400 to-amber-300 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.3)]"
        >
          {/* Moving Shimmer Effect */}
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent w-full h-full"
          />
        </motion.div>

        {/* Hover Glow Layer */}
        <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      </div>
    </div>
  );
};

export default SkillBar;