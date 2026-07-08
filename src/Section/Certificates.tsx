import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateCard from "./CertificateCard";

// Asset imports
import c18 from "../assets/ethiopianblockchain blockchain.png"; 
import c1 from "../assets/afriblockchain.png";
import c2 from "../assets/comptions.png";
import c3 from "../assets/fundamentalsDevops.png";
import c4 from "../assets/hahblockchainn.png";
import c5 from "../assets/networking.png";
import c6 from "../assets/i participate the womens hackaton participation.png";
import c7 from "../assets/reactcourse form husica.png";
import c8 from "../assets/project3.png";
import c9 from "../assets/project4.png";
import c10 from "../assets/project5.png";
import c11 from "../assets/project6.png";
import c12 from "../assets/project7.png";
import c13 from "../assets/jebeya.png";
import c14 from "../assets/HCCDA-CLOUD Native Course.png";
import c15 from "../assets/HCIA-SECURITY V4.0 course.png";
import c16 from "../assets/HCIA-Storage v5.0 COURSE.png";
import c17 from "../assets/HCIP-BIG DATA developerV2.0 cours.png";
import c19 from "../assets/finalyearprojectfrom software departiment.png";
import c20 from "../assets/certificatefinalyearprojectfromalldepartementjit.png";

export interface CertData {
  img: string;
  title: string;
  category: string;
  description: string;
}

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertData | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const certificates: CertData[] = [
    { 
      img: c18, 
      title: "EBW Outstanding Volunteer", 
      category: "Web3 Infrastructure", 
      description: "Recognized for excellence in managing technical networking and exhibition booths during Ethiopia Blockchain Week 2025." 
    },
    { 
      img: c1, 
      title: "Africa Blockchain Champion", 
      category: "Web3 Elite", 
      description: "Mastery of decentralized ledgers and smart contract ecosystems as a recognized continental champion." 
    },
    { 
      img: c11, 
      title: "UI/UX Student of the Week", 
      category: "Nigerian Online Learning", 
      description: "Awarded for top-tier UI/UX design performance and fullstack engineering." 
    },
    { 
      img: c2, 
      title: "E Women's Competition", 
      category: "Competition Award", 
      description: "Awarded by the Cooperative Bank of Ethiopia for outstanding technical problem solving." 
    },
    { 
      img: c10, 
      title: "AI Specialist - 5M Coders", 
      category: "Artificial Intelligence", 
      description: "Certified under the 5 Million Coders initiative for enterprise-scale AI systems." 
    },
    { 
      img: c4, 
      title: "Hashgraph Blockchain Expert", 
      category: "Hedera Hashgraph", 
      description: "Expertise in Hashgraph implementations and consensus algorithms." 
    },
    { img: c16, title: "HCIA Storage V5.0", category: "Infrastructure", description: "Expertise in converged storage and enterprise data protection." },
    { img: c15, title: "HCIA Security V4.0", category: "Cybersecurity", description: "Mastery of network security protocols and threat mitigation." },
    { 
      img: c19, 
      title: "Final Year Project - Software Department", 
      category: "Academic Excellence", 
      description: "Outstanding final year project recognized by the Software Engineering Department for innovation and technical excellence." 
    },
    { 
      img: c20, 
      title: "Final Year Project - All Departments JIT", 
      category: "Academic Excellence", 
      description: "Exceptional final year project presentation awarded by all departments at JIT for comprehensive technical achievement." 
    },
    { img: c14, title: "HCCDA Cloud Native", category: "Cloud", description: "Specialization in containerization and cloud-native architecture." },
    { img: c17, title: "HCIP Big Data Dev", category: "Data Science", description: "Professional-level big data processing and Hadoop ecosystems." },
    { img: c3, title: "DevOps Fundamentals", category: "Development", description: "Implementation of CI/CD pipelines and infrastructure as code." },
    { img: c5, title: "Networking Essentials", category: "Networking", description: "Foundation in routing, switching, and digital communications." },
    { img: c7, title: "React Development", category: "Frontend", description: "Modern UI engineering using React hooks and global state management." },
    { img: c13, title: "Gebeya Talent", category: "Professional", description: "Verified elite technical talent for professional software engineering." },
    { img: c6, title: "Womens Hackathon", category: "Achievement", description: "Excellence in collaborative innovation and competitive coding." },
    { img: c8, title: "Advanced Project III", category: "Engineering", description: "High-scale system integration and complex logic design." },
    { img: c9, title: "Gebeya Talent Recognition", category: "Elite Talent", description: "Outstanding capstone project in the Safaricom Talent Cloud." },
    { img: c12, title: "Deployment Project VII", category: "Cloud", description: "Automated deployment strategies for global applications." },
  ];

  const duplicatedCerts = [...certificates, ...certificates];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="certificates" className="bg-[#0A0A0A] min-h-screen py-20 overflow-hidden relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mb-10 flex flex-col md:flex-row md:items-end justify-between">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Certifi<span className="text-orange-500">cations</span>
          </h2>
          <p className="text-zinc-500 mt-2 text-xs tracking-wider font-medium">
            Verified Excellence
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex gap-3 mt-6 md:mt-0">
          <button 
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white text-sm hover:bg-orange-500 hover:text-black transition-all active:scale-90"
          >
            ←
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white text-sm hover:bg-orange-500 hover:text-black transition-all active:scale-90"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider */}
      <div 
        className="relative flex overflow-x-auto no-scrollbar mx-8 md:mx-16 lg:mx-24"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <motion.div
          className="flex gap-5 px-4 md:px-8"
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, duration: 60, ease: "linear" } }}
        >
          {duplicatedCerts.map((cert, index) => (
            <CertificateCard key={index} {...cert} onClick={() => setSelectedCert(cert)} />
          ))}
        </motion.div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)} 
                className="absolute top-4 right-4 z-30 bg-orange-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold hover:bg-orange-600 transition-colors"
              >
                ✕
              </button>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 bg-zinc-800 flex items-center justify-center p-8">
                  <img 
                    src={selectedCert.img} 
                    className="max-h-[45vh] max-w-[85%] object-contain" 
                    alt={selectedCert.title} 
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-zinc-900/80">
                  <span className="text-orange-500 font-semibold text-[11px] uppercase tracking-wider mb-3 block">
                    Official Verified Achievement
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {selectedCert.title}
                  </h2>
                  <p className="text-zinc-400 text-base leading-relaxed mb-8">
                    {selectedCert.description}
                  </p>
                  <button 
                    onClick={() => setSelectedCert(null)} 
                    className="w-full py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-orange-500 transition-all"
                  >
                    Back to Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;