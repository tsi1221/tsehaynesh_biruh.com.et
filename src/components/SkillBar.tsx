import React from "react";
import { motion } from "framer-motion";

// 1. Declare isDarkMode in the props interface
export interface SkillBarProps {
  name: string;
  level: number;
  isDarkMode?: boolean;
}

// 2. Destructure isDarkMode in the component parameters
const SkillBar: React.FC<SkillBarProps> = ({ name, level, isDarkMode = true }) => {
  return (
    <div className="group my-2 w-full max-w-2xl">
      {/* Skill Info Header Row */}
      <div className="mb-1 flex items-end justify-between">
        <span
          className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
            isDarkMode
              ? "text-neutral-400 group-hover:text-white"
              : "text-slate-600 group-hover:text-slate-900"
          }`}
        >
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`font-mono text-[10px] font-black tabular-nums transition-colors duration-300 ${
            isDarkMode
              ? "text-orange-500/80 group-hover:text-orange-500"
              : "text-orange-600/80 group-hover:text-orange-600"
          }`}
        >
          {level}%
        </motion.span>
      </div>

      {/* Progress Track */}
      <div
        className={`relative h-1.5 w-full overflow-hidden rounded-full border transition-colors duration-500 ${
          isDarkMode
            ? "border-white/5 bg-white/5"
            : "border-slate-200/60 bg-slate-200"
        }`}
      >
        {/* Animated Bar Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="relative h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 shadow-[0_0_12px_rgba(249,115,22,0.35)]"
        >
          {/* Moving Shimmer Effect */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />
        </motion.div>

        {/* Hover Glow Accent Layer */}
        <div className="pointer-events-none absolute inset-0 bg-orange-500/10 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default SkillBar;