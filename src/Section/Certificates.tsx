import React, { useRef, useState } from "react";
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
import c14 from "../assets/HCCDA-CLOUD Native Course.png";
import c15 from "../assets/HCIA-SECURITY V4.0 course.png";
import c16 from "../assets/HCIA-Storage v5.0 COURSE.png";
import c17 from "../assets/HCIP-BIG DATA developerV2.0 cours.png";

import heroImg from "../assets/ethiopianblockchain blockchain.png";

const Certificates: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const certificates = [
    { img: c1, title: "Africa Blockchain", category: "Blockchain" },
    { img: c2, title: "Competitions Award", category: "Excellence" },
    { img: c16, title: "HCIA Storage V5.0 Course", category: "Storage" },
    { img: c3, title: "DevOps Fundamentals", category: "Infrastructure" },
    { img: c4, title: "HAH Blockchain", category: "Web3" },
    { img: c5, title: "Networking Essentials", category: "IT" },
    { img: c6, title: "Women's Hackathon", category: "Achievement" },
    { img: c7, title: "React Course - Husica", category: "Frontend" },
    { img: c15, title: "HCIA Security V4.0 Course", category: "Cybersecurity" },
    { img: c8, title: "Advanced Project III", category: "Development" },
    { img: c9, title: "Architecture Design IV", category: "Design" },
    { img: c10, title: "System Analysis V", category: "Engineering" },
    { img: c14, title: "HCCDA Cloud Native Course", category: "Cloud Native" },
    { img: c11, title: "Fullstack Project VI", category: "Software" },
    { img: c12, title: "Deployment Project VII", category: "Cloud" },
    { img: c13, title: "Gebeya Talent Program", category: "Professional" },
    { img: c17, title: "HCIP Big Data Developer V2.0 Course", category: "Big Data" },
  ];

  // Duplicate for infinite scroll
  const LOOPED = [...certificates, ...certificates];

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div id="certificates" className="bg-[#0A0A0A] min-h-screen scroll-mt-20 overflow-hidden">
      {/* HERO SECTION */}
      <header
        ref={headerRef}
        className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#050505]"
      >
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-full">
          <img
            src={heroImg}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-9xl font-black text-white uppercase italic">
            Certifi
            <span className="text-[#FF8C00]">cations</span>
          </h1>
          <p className="text-gray-400 mt-4 uppercase tracking-widest">
            Verified Excellence • Technical Mastery
          </p>
        </div>
      </header>

      {/* CERTIFICATE CAROUSEL */}
      <section className="py-24 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-20 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-black text-white uppercase">
              Professional <span className="text-[#FF8C00]">Growth</span> <br />
              I have taken <span className="text-[#FF8C00]">18</span> certificates
            </h2>
            <p className="text-gray-500 mt-3">
              Continuous learning is the core of engineering.
            </p>
          </div>
        </div>

        <div className="relative flex items-center overflow-hidden">
          <motion.div
            className="flex gap-12 px-5"
            animate={{ x: isPaused ? "0%" : ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {LOOPED.map((cert, index) => (
              <div
                key={`${cert.title}-${index}`}
                className="scale-90 hover:scale-100 transition-transform"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <CertificateCard
                  img={cert.img}
                  title={cert.title}
                  category={cert.category}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 bg-[#080808] text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Ready to build <span className="text-[#FF8C00]">Impact?</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Certifications are the foundation, but solving complex problems is where I thrive.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => handleScroll("contact")}
            className="bg-[#FF8C00] text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Get In Touch
          </button>

          <button
            onClick={() => handleScroll("projects")}
            className="border border-white/20 text-white px-10 py-4 rounded-full hover:bg-white/10"
          >
            View Projects
          </button>
        </div>
      </section>
    </div>
  );
};

export default Certificates;