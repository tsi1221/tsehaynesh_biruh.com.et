import React from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  isDarkMode?: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  level,
  isDarkMode = false,
}) => {
  return (
    <div className="w-full py-2">
      <div className="mb-2 flex justify-between">
        <span
          className={`text-xs font-semibold ${
            isDarkMode ? "text-neutral-300" : "text-slate-700"
          }`}
        >
          {name}
        </span>
        <span className="text-xs text-orange-500">{level}%</span>
      </div>

      <div
        className={`h-1.5 w-full overflow-hidden rounded-full ${
          isDarkMode ? "bg-white/10" : "bg-slate-200"
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-orange-500"
        />
      </div>
    </div>
  );
};

export default SkillBar;