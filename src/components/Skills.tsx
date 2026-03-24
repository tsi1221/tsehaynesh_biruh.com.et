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
    icon: <Code2 className="text-orange-500" />,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 85 },
      { name: "Figma UI/UX", level: 90 },
      { name: "Web Accessibility", level: 80 },
      { name: "Responsive Design", level: 92 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: <Terminal className="text-orange-500" />,
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
    icon: <Cloud className="text-orange-500" />,
    skills: [
      { name: "AWS Services", level: 82 },
      { name: "Docker & Kubernetes", level: 78 },
      { name: "CI/CD (Jenkins / GH Actions)", level: 85 },
      { name: "Terraform & Ansible", level: 75 },
      { name: "Helm & Kubeflow", level: 70 },
      { name: "Nginx & Cloud Provisioning", level: 88 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 md:px-6 bg-white dark:bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 -left-20 w-72 md:w-96 h-72 md:h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-72 md:w-96 h-72 md:h-96 bg-[#0F3952]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic text-[#0F3952] dark:text-white uppercase">
              Technical <span className="text-orange-500">Stack.</span>
            </h2>
            <div className="w-16 md:w-24 mt-4 h-2 bg-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
            <p className="text-gray-500 dark:text-gray-400 mt-6 text-base md:text-lg max-w-2xl font-light leading-relaxed">
              A comprehensive breakdown of my proficiency in building scalable 
              applications and maintaining robust cloud infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 bg-white dark:bg-[#111] rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-xl hover:border-orange-500/20 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#0F3952]/5 dark:bg-white/5 flex items-center justify-center shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-lg font-black text-[#0F3952] dark:text-white tracking-tight italic uppercase leading-none">
                  {category.title}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
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
