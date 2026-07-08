import React from "react";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import { Code2, Terminal, Cloud } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Code2 className="text-orange-500" size={18} />,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 85 },
      { name: "Figma UI/UX", level: 90 },
      { name: "Responsive Design", level: 92 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: <Terminal className="text-orange-500" size={18} />,
    skills: [
      { name: "Node.js / NestJS", level: 92 },
      { name: "MongoDB / PostgreSQL", level: 88 },
      { name: "Prisma / Swagger", level: 85 },
      { name: "Bash & Terminal Navigation", level: 82 },
      { name: "Git Workflows & AI Assistants", level: 90 },
      { name: "Linux Administration", level: 88 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="text-orange-500" size={18} />,
    skills: [
      { name: "AWS Services", level: 65 },
      { name: "Docker & Kubernetes", level: 78 },
      { name: "CI/CD (Jenkins / GH Actions)", level: 81 },
      { name: "Terraform & Ansible", level: 75 },
      { name: "Helm & Kubeflow", level: 70 },
      { name: "Nginx and Linux", level: 82 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden select-none"
    >
      {/* Decorative Ambient Background Blurs */}
      <div className="absolute top-0 -left-20 w-72 md:w-96 h-72 md:h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-72 md:w-96 h-72 md:h-96 bg-[#0F3952]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Structural Wrapper Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Section Header Framework */}
        <div className="flex flex-col items-center -mt-17 text-center mb-10 sm:mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F3952] dark:text-white uppercase leading-tight">
              Technical <span className="text-orange-500 font-extrabold">Stack.</span>
            </h2>
            <div className="w-10 sm:w-12 h-1 bg-orange-500 mt-2.5 -mb-1 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.25)]" />
            <p className="text-slate-400 dark:text-neutral-500 mt-3 text-xs sm:text-sm max-w-lg font-normal leading-relaxed">
              A comprehensive breakdown of my proficiency in building scalable 
              applications and maintaining robust cloud infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Responsive Categories Alignment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 -mt-5 lg:grid-cols-3 gap-5 sm:gap-6 items-start w-full">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full flex flex-col p-4 sm:p-5 bg-slate-50/40 dark:bg-[#111]/40 backdrop-blur-xs rounded-xl border border-slate-100 dark:border-white/5 shadow-xs hover:border-orange-500/10 hover:bg-white dark:hover:bg-[#111] transition-all duration-300"
            >
              {/* Category Sub-Header */}
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <div className="w-8.5 h-8.5 rounded-lg bg-[#0F3952]/5 dark:bg-white/5 flex items-center justify-center shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#0F3952] dark:text-white tracking-tight uppercase leading-none">
                  {category.title}
                </h3>
              </div>

              {/* Dynamic Skill Bars Nested Array */}
              <div className="flex flex-col gap-0.5 w-full grow">
                {category.skills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
