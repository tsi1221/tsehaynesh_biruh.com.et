import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { Github, LayoutGrid } from "lucide-react";
import ProjectCard from "./ProjectCard";

import proj1 from "../assets/images/dashboradof.png";
import proj2 from "../assets/images/landingpageforBlood.png";
import proj3 from "../assets/images/image.png";
import proj4 from "../assets/images/lawcare wonkeru.png";
import proj5 from "../assets/images/portifolio.png";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  img: string[]; // changed to array
  github: string;
  demo?: string;
}

const PROJECT_DATA: Project[] = [
  {
    title: "Fitihaber Ethiopia – LegalTech Platform",
    desc: "Microservices-based LawTech ecosystem with secure document exchange, real-time communication, and multilingual support",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.IO", "Docker", "Kubernetes"],
    img: [proj4],
    github: "https://github.com/tsi1221",
  },
  {
    title: "MERN DevSecOps Application",
    desc: "Security-first full-stack platform with automated CI/CD pipelines, RBAC authentication, containerized deployments, and vulnerability scanning.",
    tech: ["MongoDB", "Express", "React", "Node", "Docker", "GitHub Actions"],
    img: [proj1],
    github: "https://github.com/tsi1221",
  },
  {
    title: "Blood Bank Management System",
    desc: "The Blood Bank Management System is a web-based application designed to streamline the process of blood donation and distribution. Developed using React, this system serves as a vital tool for hospitals, blood banks, and donors, facilitating efficient management of blood resources.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    img: [proj2, proj3], // two images
    github: "https://github.com/tsi1221",
  },
  {
    title: "Interactive Developer Portfolio",
    desc: "Performance-optimized portfolio featuring smooth animations, modular architecture, and responsive design.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    img: [proj5],
    github: "https://github.com/tsi1221",
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-6 bg-white dark:bg-[#080808] relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.4em]">
              <LayoutGrid size={14} />
              Portfolio
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
              SELECTED <br />
              <span className="text-orange-500">PROJECTS</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="text-slate-500 dark:text-slate-400 max-w-sm font-medium border-l-2 border-orange-500 pl-6"
          >
            Engineering scalable, secure, and human-centered systems through
            modern architecture and refined interaction design.
          </motion.div>
        </motion.div>

        {/* Animated Counters */}
      

        {/* Projects Grid */}
        {loading ? (
          <SkeletonGrid />
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {PROJECT_DATA.map((project, index) => (
              <motion.div key={index} variants={fadeUp}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="mt-32 text-center"
        >
          <a
            href="https://github.com/tsi1221"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 bg-slate-100 dark:bg-white/5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 hover:bg-orange-500 hover:text-white transition-all duration-500"
          >
            <Github size={20} />
            Explore Full Repository
          </a>
        </motion.div>
      </div>

      {/* Decorative Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

// Animated Counter Component

// Skeleton Loader
const SkeletonGrid = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="animate-pulse bg-slate-200 dark:bg-white/10 h-72 rounded-2xl"
      />
    ))}
  </div>
);

export default Projects;