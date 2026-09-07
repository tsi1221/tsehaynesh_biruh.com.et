import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiGithub,
} from "react-icons/si";

interface SkillsProps {
  isDarkMode?: boolean;
}

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5",
  },
  {
    name: "Jenkins",
    icon: SiJenkins,
    color: "#D24939",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
  },
];

const Skills: React.FC<SkillsProps> = ({ isDarkMode = false }) => {
  return (
    <section
      id="skills"
      className={`px-4 py-16 sm:px-8 md:px-16 ${
        isDarkMode
          ? "bg-[#080808] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            Skills
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Technical{" "}
            <span className="text-orange-500">Stack</span>
          </h2>

          <p
            className={`mx-auto mt-3 max-w-xl text-sm ${
              isDarkMode ? "text-neutral-500" : "text-slate-500"
            }`}
          >
            Technologies and tools I use to build modern, scalable
            applications.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.03,
                }}
                className={`group flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-200 ${
                  isDarkMode
                    ? "hover:bg-white/[0.05]"
                    : "hover:bg-slate-50"
                }`}
              >
                <Icon
                  size={22}
                  style={{ color: skill.color }}
                  className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                />

                <span
                  className={`text-sm font-medium ${
                    isDarkMode
                      ? "text-neutral-300 group-hover:text-white"
                      : "text-slate-700 group-hover:text-slate-950"
                  }`}
                >
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;