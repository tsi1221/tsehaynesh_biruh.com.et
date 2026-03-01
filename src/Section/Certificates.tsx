import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CertificateCard from "./CertificateCard";

// Assets
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
import heroImg from "../assets/ethiopianblockchain blockchain.png";

const Certificates: React.FC = () => {
  const headerRef = useRef(null);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ALL_CERTS = [
    { img: c1, title: "Africa Blockchain", cat: "Blockchain" },
    { img: c2, title: "Competitions Award", cat: "Excellence" },
    { img: c3, title: "DevOps Fundamentals", cat: "Infrastructure" },
    { img: c4, title: "HAH Blockchain", cat: "Web3" },
    { img: c5, title: "Networking Essentials", cat: "IT" },
    { img: c6, title: "Women's Hackathon", cat: "Achievement" },
    { img: c7, title: "React Course - Husica", cat: "Frontend" },
    { img: c8, title: "Advanced Project III", cat: "Development" },
    { img: c9, title: "Architecture Design IV", cat: "Design" },
    { img: c10, title: "System Analysis V", cat: "Engineering" },
    { img: c11, title: "Fullstack Project VI", cat: "Software" },
    { img: c12, title: "Deployment Project VII", cat: "Cloud" },
    { img: c13, title: "Gebeya Talent Program", cat: "Professional" },
  ];

  const LOOPED = [...ALL_CERTS, ...ALL_CERTS];

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div id="certificates" className="bg-[#0A0A0A] min-h-screen scroll-mt-20 overflow-hidden">
      
      {/* Hero Section - Reduced Height */}
      <header 
        ref={headerRef} 
        className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#050505]"
      >
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-full z-0">
          <img 
            src={heroImg} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 scale-105" 
          />
          {/* Obsidian Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
          {/* Amber Radial Glow */}
          <div className="absolute inset-0 z-15 bg-[radial-gradient(circle_at_50%_40%,rgba(255,140,0,0.1)_0%,transparent_60%)]" />
        </motion.div>

        <div className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-9xl font-black text-white mb-4 tracking-tighter italic uppercase">
              Certifi<span className="text-[#FF8C00] drop-shadow-[0_0_15px_rgba(255,140,0,0.5)]">cations</span>
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-2 bg-[#FF8C00] mb-8 rounded-full shadow-[0_0_20px_#FF8C00]" 
            />
            <p className="text-gray-400 text-sm md:text-lg font-mono tracking-[0.4em] uppercase">
              Verified Excellence <span className="text-[#FF8C00] mx-2">•</span> Technical Mastery
            </p>
          </motion.div>
        </div>
        
        {/* Horizontal Line Accent */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#FF8C00]/40 to-transparent z-30 shadow-[0_0_10px_#FF8C00]" />
      </header>

      {/* Infinite Horizontal Carousel */}
      <section className="py-24 bg-[#0A0A0A] overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
              Professional <span className="text-[#FF8C00]">Growth</span>
            </h2>
            <p className="text-gray-500 mt-3 font-light max-w-md">Continuous learning is the core of engineering. Hover to pause the stream.</p>
          </div>
          <div className="px-5 py-2 border border-[#FF8C00]/30 text-[#FF8C00] text-xs font-bold rounded-full tracking-[0.2em] bg-[#FF8C00]/5 uppercase">
            Live Credentials
          </div>
        </div>

        <div className="relative flex items-center">
          <motion.div
            className="flex gap-12 px-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 150 } }}
          >
            {LOOPED.map((cert, index) => (
              <div key={`${cert.title}-${index}`} className="scale-90 hover:scale-100 transition-transform duration-500">
                <CertificateCard 
                  img={cert.img} 
                  title={cert.title} 
                  category={cert.cat} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Footer Section */}
      <section className="py-32 px-6 bg-[#080808] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#FF8C00]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">
            Ready to build <span className="text-[#FF8C00]">Impact?</span>
          </h2>
          <p className="text-gray-400 mb-12 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Certifications are the foundation, but solving complex problems is where I thrive. 
            Let's discuss your next big project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button  
              onClick={() => handleScroll('contact')}
              className="bg-[#FF8C00] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,140,0,0.3)] active:scale-95"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => handleScroll('projects')}
              className="border border-white/20 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 hover:border-[#FF8C00] transition-all active:scale-95"
            >
              View Projects
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Certificates;