import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { Github, LayoutGrid } from "lucide-react";
import ProjectCard from "./ProjectCard";

// Asset imports
import proj1 from "../assets/images/dashboradof.png";
import proj2 from "../assets/images/landingpageforBlood.png";
import proj3 from "../assets/images/image.png";
import proj4 from "../assets/images/lawcare wonkeru.png";
import final1 from "../assets/final1.png";
import final2 from "../assets/final2.png";
import final3 from "../assets/final3.png";
import final4 from "../assets/final4.png";
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

interface ProjectsProps {
  isDarkMode?: boolean;
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
    title: "EduTwin – AI-Powered Education Platform",
    desc: "Built the complete frontend architecture for an AI-powered educational platform featuring interactive learning, AR experiences, and a modern responsive interface designed for engaging digital education.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion", "Frontend"],
    img: [final1, final2, final3, final4],
    github: "https://github.com/tsi1221",
    demo: "https://edutwin-website.onrender.com",
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

const Projects: React.FC<ProjectsProps> = ({ isDarkMode = true }) => {
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
    <section 
      id="projects" 
      ref={ref} 
      className={`pt-12 md:pt-16 pb-20 md:pb-32 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode 
          ? "bg-[#080808]" 
          : "bg-gradient-to-b from-white via-orange-50/20 to-white"
      }`}
    >
      {/* Background Ambient Glow */}
      <div className={`absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-colors duration-500 ${
        isDarkMode ? "bg-orange-500/3" : "bg-orange-200/30"
      }`} />
      
      {/* Container tracking max width with balanced fluid side-margins */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
        
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
            <h2 className={`text-4xl md:text-6xl font-black tracking-tight leading-[0.95] transition-colors duration-500 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              SELECTED <br />
              <span className="text-orange-500">PROJECTS</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={`max-w-xs font-medium border-l-2 border-orange-500 pl-4 text-xs md:text-sm leading-relaxed transition-colors duration-500 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Engineering scalable, secure, and human-centered systems through
            modern architecture and refined interaction design.
          </motion.div>
        </motion.div>

        {/* Adaptive Grid Layout */}
        {loading ? (
          <SkeletonGrid isDarkMode={isDarkMode} />
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
          >
            {PROJECT_DATA.map((project, index) => (
              <ProjectCard key={index} {...project} isDarkMode={isDarkMode} />
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
            className={`inline-flex items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300 ${
              isDarkMode 
                ? "bg-white/5 text-white" 
                : "bg-slate-100 text-slate-800 hover:shadow-lg"
            }`}
          >
            <Github size={16} />
            Explore Full Repository
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SkeletonGrid: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = true }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
    {[1, 2, 3, 4].map((i) => (
      <div 
        key={i} 
        className={`animate-pulse h-72 rounded-2xl transition-colors duration-500 ${
          isDarkMode ? "bg-white/10" : "bg-slate-200"
        }`} 
      />
    ))}
  </div>
);

export default Projects;