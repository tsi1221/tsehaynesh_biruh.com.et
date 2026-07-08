import React from "react";
import { motion } from "framer-motion";

interface CertificateProps {
  img: string;
  title: string;
  category: string;
  description: string;
  onClick: () => void;
}

const CertificateCard: React.FC<CertificateProps> = ({ img, title, category, description, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="group relative w-64 md:w-72 h-96 shrink-0 rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer shadow-2xl"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background Image with Hover Effect */}
      <div className="absolute inset-0">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="w-fit px-3 py-1 bg-orange-500 text-black text-[9px] font-bold rounded-full uppercase mb-3 tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white uppercase mb-2 tracking-tight leading-tight whitespace-normal">
          {title}
        </h3>
        <p className="text-zinc-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 line-clamp-3 whitespace-normal">
          {description}
        </p>
        
        {/* Animated Bottom Bar */}
        <div className="mt-4 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-700 rounded-full" />
      </div>
    </motion.div>
  );
};

export default CertificateCard;