import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  img: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({ title, desc, tech, img, github, demo }: ProjectCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="group relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Carousel / Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full">
          {img.map((image, idx) => (
            <div key={idx} className="min-w-full h-full snap-center shrink-0">
              <img
                src={image}
                alt={`${title} - ${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        {/* Tech Badges - Floating on Image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-black/70 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider rounded-md border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl md:text-2xl font-black tracking-tight group-hover:text-orange-500 transition-colors">
            {title}
          </h3>
          <div className="flex gap-3 shrink-0">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-orange-500">
                <Github size={20} />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-orange-500">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-3 mb-6 line-clamp-3">
          {desc}
        </p>

        {/* Footer Action */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-500 group-hover:gap-4 transition-all">
            View Details
            <ArrowUpRight size={16} />
          </button>
          <div className="h-px flex-1 bg-slate-100 dark:bg-white/10 ml-4 group-hover:bg-orange-500/30 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;