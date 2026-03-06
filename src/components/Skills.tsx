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
      { name: "Shadcn UI Components", level: 80 },
      { name: "Web Accessibility", level: 80 },
      { name: "Material UI", level: 88 },
      { name: "HTML5 & CSS3", level: 82 },
      { name: "Responsive Design & Ant Design", level: 92 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: <Terminal className="text-orange-500" />,
    skills: [
      { name: "NestJS", level: 88 },
      { name: "Node.js / Express", level: 92 },
      { name: "REST full API", level: 90 },
      { name: "MongoDB / PostgreSQL", level: 88 },
      { name: "Prisma ORM", level: 85 },
      { name: "Swagger / OpenAPI", level: 85 },
      { name: "Supabase", level: 55 },
      { name: "Blockchain (Solidity)", level: 25 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="text-orange-500" />,
    skills: [
      { name: "AWS Services", level: 82 },
      { name: "Docker & Kubernetes", level: 78 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Linux / Nginx", level: 88 },
      { name: "Git & GitHub", level: 90 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#0F3952]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter -mt-8 italic text-[#0F3952] dark:text-white uppercase">
              Technical <span className="text-orange-500">Stack.</span>
            </h2>
            <div className="w-24 mt-2 h-2 bg-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
            <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg max-w-xl font-light leading-relaxed">
              A comprehensive breakdown of my technical proficiency and the
              architecture I use to build scalable digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 -mt-16">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-[#111] rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-2xl shadow-black/2 hover:border-orange-500/20 transition-all duration-500 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-[#0F3952]/5 dark:bg-white/5 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-black text-[#0F3952] dark:text-white tracking-tight italic uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-2">
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