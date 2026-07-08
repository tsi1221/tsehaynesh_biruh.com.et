import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { Github, LayoutGrid } from "lucide-react";
import ProjectCard from "./ProjectCard";

// Asset imports
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isInView && !loading) {
      controls.start("visible");
    }
  }, [isInView, controls, loading]);

  return (
    <section id="projects" ref={ref} className="pt-12 md:pt-16 pb-20 md:pb-32 bg-white dark:bg-[#080808] relative overflow-hidden">
      {/* Container tracking max width with balanced fluid side-margins */}
      <div className="container mx-auto max-w-7xl border-x border-slate-200 dark:border-white/10 px-4 sm:px-8 md:px-16 lg:px-24">
        
        {/* Header Block Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-5"
        >
          <motion.div variants={fadeUp} className="space-y-2">
            <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.3em]">
              <LayoutGrid size={13} />
              Portfolio
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
              SELECTED <br />
              <span className="text-orange-500">PROJECTS</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="text-slate-500 dark:text-slate-400 max-w-xs font-medium border-l-2 border-orange-500 pl-4 text-xs md:text-sm leading-relaxed"
          >
            Engineering scalable, secure, and human-centered systems through
            modern architecture and refined interaction design.
          </motion.div>
        </motion.div>

        {/* Adaptive Grid Layout */}
        {loading ? (
          <SkeletonGrid />
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
          >
            {PROJECT_DATA.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        )}

        {/* Main Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-20 text-center"
        >
          <a
            href="https://github.com/tsi1221"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 bg-slate-100 dark:bg-white/5 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <Github size={16} />
            Explore Full Repository
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SkeletonGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="animate-pulse bg-slate-200 dark:bg-white/10 h-72 rounded-2xl" />
    ))}
  </div>
);

export default Projects;