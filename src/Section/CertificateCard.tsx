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
      className="group relative w-80 md:w-105 h-137.5 shrink-0 rounded-[3.5rem] overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer shadow-2xl"
      whileHover={{ y: -15, scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background Image with Hover Effect */}
      <div className="absolute inset-0">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <span className="w-fit px-4 py-1.5 bg-orange-500 text-black text-[10px] font-black rounded-full uppercase mb-4 tracking-wider">
          {category}
        </span>
        <h3 className="text-3xl font-black text-white italic mb-3 uppercase tracking-tighter leading-none whitespace-normal">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 line-clamp-3 whitespace-normal">
          {description}
        </p>
        
        {/* Animated Bottom Bar */}
        <div className="mt-6 h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-700 rounded-full" />
      </div>
    </motion.div>
  );
};

export default CertificateCard;
