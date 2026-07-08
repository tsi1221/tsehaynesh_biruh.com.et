// SkillBar.tsx
import React from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  isDarkMode?: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, isDarkMode = true }) => {
  return (
    <div className="group py-1.5">
      <div className="flex justify-between items-center mb-0.5">
        <span className={`text-[10px] font-bold tracking-wider uppercase transition-colors duration-500 ${
          isDarkMode ? "text-neutral-400 group-hover:text-white" : "text-slate-500 group-hover:text-slate-900"
        }`}>
          {name}
        </span>
        <span className={`text-[9px] font-mono font-bold transition-colors duration-500 ${
          isDarkMode ? "text-orange-500/70 group-hover:text-orange-500" : "text-orange-600/70 group-hover:text-orange-600"
        }`}>
          {level}%
        </span>
      </div>
      <div className={`h-1 rounded-full overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-white/5" : "bg-slate-200"
      }`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
        />
      </div>
    </div>
  );
};

export default SkillBar;