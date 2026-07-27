import React from "react";
import { motion } from "framer-motion";
import { Palette, Server, Cloud, Code2 } from "lucide-react";
import SkillBar from "./SkillBar";

interface SkillsProps {
  isDarkMode?: boolean;
}

// Skill Data Categories (All levels calibrated strictly between 72% - 88%)
const skillCategories = [
  {
    category: "Frontend & UI Engineering",
    icon: Palette,
    accentGradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    skills: [
      { name: "React & Next.js Architecture", level: 88 },
      { name: "Angular Framework", level: 82 },
      { name: "TypeScript System Design", level: 86 },
      { name: "Tailwind CSS & Modern Styling", level: 87 },
      { name: "Ant Design (antd) & Material-UI", level: 85 },
      { name: "Shadcn UI & Design Systems", level: 84 },
      { name: "Iconography (Lucide / React Icons)", level: 88 },
    ],
  },
  {
    category: "Backend Systems & Databases",
    icon: Server,
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    skills: [
      { name: "Node.js Microservices", level: 86 },
      { name: "Express.js Framework", level: 85 },
      { name: "RESTful API Design", level: 87 },
      { name: "MongoDB NoSQL Database", level: 84 },
      { name: "MySQL Relational Database", level: 82 },
      { name: "Prisma ORM & Database Schema", level: 82 },
      { name: "Real-Time Systems (Socket.IO)", level: 80 },
    ],
  },
  {
    category: "DevOps & Cloud Orchestration",
    icon: Cloud,
    accentGradient: "from-orange-600/20 via-red-500/10 to-transparent",
    skills: [
      { name: "Docker Containerization", level: 83 },
      { name: "Kubernetes Container Orchestration", level: 78 },
      { name: "Jenkins CI/CD Automation", level: 76 },
      { name: "NGINX Web Server & Reverse Proxy", level: 82 },
      { name: "CI/CD & GitHub Actions Automation", level: 81 },
      { name: "Git Version Control & Workflows", level: 88 },
    ],
  },
];

// Animation Variants for smooth Mobile Staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC<SkillsProps> = ({ isDarkMode = false }) => {
  return (
    <section
      id="skills"
      aria-label="Technical Skills and Expertise"
      className={`relative scroll-mt-0 pt-0 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? "bg-[#080808] text-white" : "bg-white text-slate-900"
      }`}
    >
      {/* Ambient Background Glow Spotlights */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[600px] bg-gradient-to-tr from-orange-500/15 via-amber-500/10 to-transparent blur-3xl rounded-full opacity-60" />

      <div className="container relative z-10 mx-auto max-w-6xl pt-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3 backdrop-blur-md">
            <Code2 size={14} className="text-orange-400" strokeWidth={2.5} />
            <span>Stack Overview</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            TECHNICAL{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-transparent">
              EXPERTISE
            </span>
          </h2>
          <p
            className={`mt-3 text-xs sm:text-sm font-medium max-w-xl mx-auto ${
              isDarkMode ? "text-neutral-400" : "text-slate-600"
            }`}
          >
            Production-proven skills in full-stack architecture, frontend design systems, and DevOps engineering
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIdx) => {
            const IconComponent = cat.icon;
            return (
              <motion.article
                key={cat.category}
                tabIndex={0}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: catIdx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative flex cursor-pointer select-none flex-col rounded-3xl border p-6 shadow-xl backdrop-blur-xl transition-all duration-300 touch-manipulation overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                  isDarkMode
                    ? "border-white/10 bg-neutral-900/50 hover:border-orange-500/40 hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.25)]"
                    : "border-slate-200/80 bg-slate-50/70 hover:border-orange-500/40 hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.2)] shadow-slate-200/50"
                }`}
              >
                {/* Ambient Hover Gradient Card Overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Category Header */}
                <div
                  className={`relative z-10 mb-5 flex items-center justify-between border-b pb-4 ${
                    isDarkMode ? "border-white/10" : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      whileTap={{ rotate: -15, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 350 }}
                      className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 shadow-inner"
                    >
                      <IconComponent 
                        size={20} 
                        className="text-orange-500" 
                        strokeWidth={2.5}
                      />
                    </motion.div>
                    <h3 className="text-base font-bold tracking-tight transition-colors duration-300 group-hover:text-orange-400">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                {/* Skill Bars List with Mobile Stagger Animation */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative z-10 flex flex-col gap-1"
                >
                  {cat.skills.map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                      <SkillBar
                        name={skill.name}
                        level={skill.level}
                        isDarkMode={isDarkMode}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;