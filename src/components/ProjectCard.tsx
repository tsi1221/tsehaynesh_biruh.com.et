import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  img: string[]; // Supports multiple images
  github?: string;
  demo?: string;
}

const ProjectCard = ({ title, desc, tech, img, github, demo }: ProjectCardProps) => {
  return (
   <motion.div
  initial={{ opacity: 0, y: 2 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -8, scale: 1.02 }}
  className="group relative rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col"
>
  {/* Image Carousel */}
  <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory p-4">
    {img.map((image, idx) => (
      <motion.img
        key={idx}
        src={image}
        alt={title}
        className="w-full min-w-[18rem] h-64 object-cover rounded-xl snap-center shrink-0 transition-all duration-700 ease-in-out scale-105"
        whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
        style={{ filter: "grayscale(0%)" }}
      />
    ))}
  </div>

      {/* Tech Badges */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
        {tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-black tracking-tight group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-orange-500 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-orange-500 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium mt-2 mb-4 line-clamp-3">
          {desc}
        </p>

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-between">
          <motion.button
            className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-orange-500 group-hover:gap-4 transition-all"
          >
            Explore Case Study
            <ArrowUpRight size={16} />
          </motion.button>
          <div className="h-px flex-1 bg-slate-100 dark:bg-white/5 ml-4 group-hover:bg-orange-500/30 transition-colors" />
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/20 rounded-3xl pointer-events-none transition-colors duration-500" />
    </motion.div>
  );
};

export default ProjectCard;