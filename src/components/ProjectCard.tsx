import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, X, ZoomIn } from "lucide-react";

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  img: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({ title, desc, tech, img, github, demo }: ProjectCardProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    if (img.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => {
        const availableIndices = img.map((_, i) => i).filter((i) => i !== prevIndex);
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        return availableIndices[randomIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [img]);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0d0d0d] transition-all duration-500 flex flex-col h-full hover:shadow-xl hover:shadow-orange-500/[0.02]"
      >
        {/* 1. Full-bleed Image Container (Removed p-4 and added aspect-video to fill completely) */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-50 dark:bg-neutral-900/40 border-b border-slate-100 dark:border-white/5">
          <div 
            onClick={() => setSelectedImg(img[currentImgIndex])}
            className="relative w-full h-full cursor-zoom-in group/img"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImgIndex}
                src={img[currentImgIndex]}
                alt={`${title} frame preview`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                // Swapped max-w/contain for w-full h-full object-cover to fulfill entire layout block
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Hover overlay indicator */}
            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
              <ZoomIn className="text-white drop-shadow-md transform scale-95 group-hover/img:scale-100 transition-transform duration-300" size={20} />
            </div>
          </div>

          {/* Floating Technology Stack Badges (Adjusted spacing for a full-bleed framework) */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
            {tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-black/75 dark:bg-neutral-900/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider rounded border border-white/10 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Informational Text Framework Block */}
        <div className="p-5 sm:p-6 flex flex-col grow">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-lg sm:text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
              {title}
            </h3>
            
            <div className="flex gap-2.5 shrink-0 pt-0.5">
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-1.5 text-slate-400 dark:text-neutral-500 hover:text-orange-500 dark:hover:text-orange-400 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                >
                  <Github size={18} />
                </a>
              )}
              {demo && (
                <a 
                  href={demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-1.5 text-slate-400 dark:text-neutral-500 hover:text-orange-500 dark:hover:text-orange-400 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          <p className="text-slate-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mt-2 mb-5 line-clamp-2 sm:line-clamp-3">
            {desc}
          </p>

          {/* Action Details Trigger Footer Anchor */}
          <div className="mt-auto pt-2 flex items-center justify-between">
            <button className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-orange-500 dark:text-orange-400 group-hover:gap-3 transition-all duration-300">
              View Details
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <div className="h-px flex-1 bg-slate-100 dark:bg-white/5 ml-4 group-hover:bg-orange-500/20 transition-colors duration-300" />
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal Overlay for Expanded Single Image Previews */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            >
              <img
                src={selectedImg}
                alt="Expanded Project Display Preview"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
