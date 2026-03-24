import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { Github, LayoutGrid } from "lucide-react";
import ProjectCard from "./ProjectCard";

// Asset imports (keep these as you had them)
import proj1 from "../assets/images/dashboradof.png";
import proj2 from "../assets/images/landingpageforBlood.png";
import proj3 from "../assets/images/image.png";
import proj4 from "../assets/images/lawcare wonkeru.png";
import proj5 from "../assets/images/portifolio.png";
import proj6 from "../assets/TsahaLabs.png";
import proj7 from "../assets/Tsehalab.png";
import proj8 from "../assets/womenempowerment.png";
import proj9 from "../assets/womensempowercampanywebsite.png";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  img: string[];
  github: string;
  demo?: string;
}

const PROJECT_DATA: Project[] = [
  {
    title: "Fitihaber Ethiopia – LegalTech",
    desc: "Microservices-based LawTech ecosystem with secure document exchange and multilingual support.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    img: [proj4],
    github: "https://github.com/tsi1221",
  },
  {
    title: "MERN DevSecOps App",
    desc: "Security-first platform with automated CI/CD pipelines and containerized deployments.",
    tech: ["MongoDB", "Express", "React", "Docker"],
    img: [proj1],
    github: "https://github.com/tsi1221",
  },
  {
    title: "Blood Bank Management",
    desc: "Streamlined blood donation system for hospitals and donors to manage availability.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    img: [proj2, proj3],
    github: "https://github.com/tsi1221",
  },
  {
    title: "Interactive Portfolio",
    desc: "Performance-optimized developer portfolio with modern UI animations and responsive design.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    img: [proj5],
    github: "https://github.com/tsi1221",
  },
  {
    title: "TsehaLabs – Tech Platform",
    desc: "Innovation platform focused on research and software development initiatives.",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    img: [proj7, proj6],
    github: "https://github.com/tsi1221",
  },
  {
    title: "Women Empowerment Digital",
    desc: "Platforms focused on empowering women through career growth and mentorship.",
    tech: ["React", "Vite", "Tailwind"],
    img: [proj8, proj9],
    github: "https://github.com/tsi1221",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  
  // Use a smaller "amount" (0.1) so it triggers easier on small mobile screens
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isInView && !loading) {
      controls.start("visible");
    }
  }, [isInView, controls, loading]);

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 px-4 md:px-6 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.3em]">
              <LayoutGrid size={14} />
              Portfolio
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9]">
              SELECTED <br />
              <span className="text-orange-500">PROJECTS</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="text-slate-500 dark:text-slate-400 max-w-sm font-medium border-l-2 border-orange-500 pl-6 text-sm md:text-base"
          >
            Engineering scalable, secure, and human-centered systems through
            modern architecture and refined interaction design.
          </motion.div>
        </motion.div>

        {/* Grid Logic */}
        {loading ? (
          <SkeletonGrid />
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {PROJECT_DATA.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 text-center"
        >
          <a
            href="https://github.com/tsi1221"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 md:px-12 md:py-6 bg-slate-100 dark:bg-white/5 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <Github size={18} />
            Explore Full Repository
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SkeletonGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="animate-pulse bg-slate-200 dark:bg-white/10 h-80 rounded-3xl" />
    ))}
  </div>
);

export default Projects;
