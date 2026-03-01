import React from "react";
import { motion } from "framer-motion";

interface CertificateProps {
  img: string;
  title?: string;
  category?: string;
}

const CertificateCard: React.FC<CertificateProps> = ({ img, title, category }) => {
  return (
    <motion.div
      className="group relative w-72 md:w-80 h-100 shrink-0 rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-100 dark:border-white/5 cursor-pointer"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Layer */}
      <div className="absolute inset-0">
        <img 
          src={img} 
          alt="Certificate" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0F3952] via-[#0F3952]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
      </div>

      {/* Content Layer */}
      <div className="absolute bottom-0 left-0 p-6 w-full text-white">
        <span className="inline-block px-3 py-1 bg-orange-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest mb-3">
          {category || "Certification"}
        </span>
        <h3 className="text-lg font-bold leading-tight group-hover:text-orange-400 transition-colors">
          {title || "Professional Achievement"}
        </h3>
        <div className="mt-4 h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-500 rounded-full" />
      </div>
    </motion.div>
  );
};

export default CertificateCard;