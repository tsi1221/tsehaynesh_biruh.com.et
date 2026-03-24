import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateCard from "./CertificateCard";

// Asset imports (Ensure these paths match your project structure)
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
      description: "Official Verified Achievement: Recognized for excellence in managing technical networking and exhibition booths during Ethiopia Blockchain Week 2025, facilitating a seamless experience for over 1,000 global attendees." 
    },
    { 
      img: c1, 
      title: "Africa Blockchain Champion", 
      category: "Web3 Elite", 
      description: "Official Verified Achievement: Mastery of decentralized ledgers and smart contract ecosystems as a recognized continental champion." 
    },
    { 
      img: c11, 
      title: "UI/UX Student of the Week", 
      category: "Nigerian Online Learning", 
      description: "Official Verified Achievement: Awarded for top-tier UI/UX design performance and fullstack engineering in an elite Nigerian development program." 
    },
    { 
      img: c2, 
      title: "C Women's Competition", 
      category: "Competition Award", 
      description: "Awarded by the Cooperative Bank of Ethiopia for outstanding technical problem solving and innovation in the Women's Hackathon." 
    },
    { 
      img: c10, 
      title: "AI Specialist - 5M Coders", 
      category: "Artificial Intelligence", 
      description: "Official Verified Achievement: Certified under the 5 Million Coders initiative, specializing in enterprise-scale system analysis and AI-driven performance." 
    },
    { 
      img: c4, 
      title: "Hashgraph Blockchain Expert", 
      category: "Hedera Hashgraph", 
      description: "Official Verified Achievement: Expertise in Hashgraph implementations, consensus algorithms, and high-security private ledgers." 
    },
    { img: c16, title: "HCIA Storage V5.0", category: "Infrastructure", description: "Official Verified Achievement: Expertise in converged storage and enterprise data protection." },
    { img: c15, title: "HCIA Security V4.0", category: "Cybersecurity", description: "Official Verified Achievement: Mastery of network security protocols and threat mitigation." },
    { img: c14, title: "HCCDA Cloud Native", category: "Cloud", description: "Official Verified Achievement: Specialization in containerization and cloud-native architecture." },
    { img: c17, title: "HCIP Big Data Dev", category: "Data Science", description: "Official Verified Achievement: Professional-level big data processing and Hadoop ecosystems." },
    { img: c3, title: "DevOps Fundamentals", category: "Development", description: "Official Verified Achievement: Implementation of CI/CD pipelines and infrastructure as code." },
    { img: c5, title: "Networking Essentials", category: "Networking", description: "Official Verified Achievement: Foundation in routing, switching, and digital communications." },
    { img: c7, title: "React Development", category: "Frontend", description: "Official Verified Achievement: Modern UI engineering using React hooks and global state management." },
    { img: c13, title: "Gebeya Talent", category: "Professional", description: "Official Verified Achievement: Verified elite technical talent for professional software engineering." },
    { img: c6, title: "Womens Hackathon", category: "Achievement", description: "Official Verified Achievement: Excellence in collaborative innovation and competitive coding." },
    { img: c8, title: "Advanced Project III", category: "Engineering", description: "Official Verified Achievement: High-scale system integration and complex logic design." },
    { img: c9, title: "Gebeya Talent Recognition for 6 week", category: "Elite Talent", description: "Official Verified Achievement: Recognized for co-creating an outstanding capstone project in the Safaricom Talent Cloud—ProLogix: Product and Logistics Management System—following an intensive 6-week elite developer program." },
    { img: c12, title: "Deployment Project VII", category: "Cloud", description: "Official Verified Achievement: Automated deployment strategies for global applications." },
    // { img: c17, title: "Cloud Security V2.0", category: "Cybersecurity", description: "Official Verified Achievement: Advanced cloud security auditing and risk management." }
  ];

  const duplicatedCerts = [...certificates, ...certificates];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="certificates" className="bg-[#0A0A0A] min-h-screen py-32 overflow-hidden relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-6xl md:text-9xl font-black text-white uppercase italic leading-none">
            Certifi<span className="text-orange-500">cations</span>
          </h2>
          <p className="text-zinc-500 mt-8 uppercase tracking-widest text-sm font-bold">
            Verified Excellence • <span className="text-orange-500">19 Professional Achievements</span>
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex gap-4 mt-8 md:mt-0">
          <button 
            onClick={() => scroll("left")}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:text-black transition-all active:scale-90"
          >
            ←
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:text-black transition-all active:scale-90"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider */}
      <div 
        className="relative flex overflow-x-auto no-scrollbar"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <motion.div
          className="flex gap-8 px-6 md:px-[5%]"
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, duration: 65, ease: "linear" } }}
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
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }} animate={{ scale: 1 }}
              className="relative max-w-5xl w-full bg-zinc-950 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedCert(null)} className="absolute top-8 right-8 z-30 bg-orange-500 text-black p-4 rounded-full font-bold">✕</button>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-3/5 bg-black flex items-center justify-center p-10">
                  <img src={selectedCert.img} className="max-h-[60vh] object-contain" alt="Certificate" />
                </div>
                <div className="lg:w-2/5 p-12 flex flex-col justify-center bg-zinc-900/50">
                  <span className="text-orange-500 font-black tracking-widest text-xs uppercase mb-4 block">Official Verified Achievement</span>
                  <h2 className="text-4xl font-black text-white mb-6 uppercase italic leading-tight">{selectedCert.title}</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-10">{selectedCert.description}</p>
                  <button onClick={() => setSelectedCert(null)} className="w-full py-5 bg-white text-black font-black rounded-2xl hover:bg-orange-500 transition-all uppercase italic">Back to Gallery</button>
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
