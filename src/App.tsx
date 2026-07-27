import { Suspense, useState } from "react";
import { motion } from "framer-motion";

// --- Hooks ---
import { useGithub } from "./hooks/useGithub";

// --- Core Layout Components ---
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import FloatingTech from "./components/FloatingTech";
import CVButton from "./components/CVButton";

// --- Page Sections ---
import TypingTitle from "./components/TypingTitle";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./Section/Certificates";
import Contact from "./components/Contact";

const LoadingScreen = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      className="h-12 w-12 rounded-full border-4 border-orange-500 border-t-transparent"
    />
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize GitHub profile data integration
  useGithub("tsi1221");

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div
        className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${
          isDarkMode ? "bg-[#080808] text-white" : "bg-white text-slate-900"
        } selection:bg-orange-500/30`}
      >
        <CursorGlow />
        <Sidebar />
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main>
          {/* HERO SECTION */}
          <section
            id="home"
            className={`relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-12 xs:px-6 sm:px-12 md:px-20 md:pt-32 md:pb-16 lg:px-32 lg:py-0 ${
              isDarkMode
                ? "bg-[#080808]"
                : "bg-gradient-to-b from-white via-white to-orange-50/40"
            }`}
          >
            <div className="hidden xs:block">
              <FloatingTech />
            </div>

            <div className="container z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 text-left lg:grid-cols-12 lg:gap-20">
              <div className="order-1 mt-4 flex w-full items-center justify-center lg:order-2 lg:col-span-5 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative h-44 w-44 rounded-full p-[2px] transition-all duration-700 xs:h-52 xs:w-52 sm:h-64 sm:w-64 lg:h-80 lg:w-80 ${
                    isDarkMode
                      ? "bg-gradient-to-b from-neutral-700/60 to-neutral-900/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.4)]"
                      : "bg-gradient-to-b from-neutral-200 to-neutral-300/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-400/0 via-neutral-400/0 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100 ${
                      isDarkMode ? "to-white/5" : "to-neutral-400/10"
                    }`}
                  />

                  <div
                    className={`relative flex h-full w-full items-center justify-center rounded-full p-1 backdrop-blur-md ${
                      isDarkMode ? "bg-neutral-950/90" : "bg-white/90"
                    }`}
                  >
                    <div
                      className={`relative h-full w-full overflow-hidden rounded-full border ${
                        isDarkMode
                          ? "border-neutral-800 bg-neutral-900"
                          : "border-neutral-100 bg-neutral-50"
                      }`}
                    >
                      <img
                        src="/image.png"
                        alt="Tsehaynesh Biruh"
                        className="h-full w-full transform object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-[1.02]"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`mt-20 mb-2 text-2xl font-black tracking-tight leading-tight drop-shadow-sm xs:text-4xl sm:text-4xl sm:leading-none md:text-6xl lg:text-7xl ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  }`}
                >
                  TSEHAYNESH <span className="text-orange-500">BIRUH</span>
                </motion.h1>

                <div className="flex w-full justify-center lg:justify-start">
                  <TypingTitle />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className={`mt-4 mb-6 max-w-xl text-xs font-medium leading-relaxed xs:text-sm sm:text-base ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  I design and build modern{" "}
                  <span className={`font-semibold ${isDarkMode ? "text-orange-400" : "text-orange-500"}`}>
                    web
                  </span>{" "}
                  and{" "}
                  <span className={`font-semibold ${isDarkMode ? "text-orange-400" : "text-orange-500"}`}>
                    mobile applications
                  </span>{" "}
                  powered by scalable{" "}
                  <span className={`font-semibold ${isDarkMode ? "text-orange-400" : "text-orange-500"}`}>
                    backend systems
                  </span>
                  ,{" "}
                  <span className={`font-semibold ${isDarkMode ? "text-orange-400" : "text-orange-500"}`}>
                    cloud technologies
                  </span>
                  , and{" "}
                  <span className={`font-semibold ${isDarkMode ? "text-orange-400" : "text-orange-500"}`}>
                    DevOps
                  </span>
                  . I transform ideas into secure, high-performance digital products with clean architecture and intuitive user experiences.
                </motion.p>

                <div className="grid w-full grid-cols-1 gap-3.5 sm:flex sm:w-auto sm:items-center sm:gap-4">
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex h-[48px] w-full min-w-[180px] select-none items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 sm:w-auto"
                  >
                    <span className="absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">View My Work</span>
                    <svg
                      className="h-3.5 w-3.5 stroke-[3.5] transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="url(#arrow-gradient)"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                      <defs>
                        <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffedd5" />
                          <stop offset="100%" stopColor="#fef3c7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.a>

                  <div className="w-full sm:w-auto">
                    <CVButton />
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 0.15 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 6 }}
              className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-400 opacity-25 blur-3xl mix-blend-soft-light"
            />
          </section>

          {/* MAIN SCROLLABLE SECTIONS */}
          <div className={`relative z-10 ${isDarkMode ? "bg-[#080808]" : "bg-white"}`}>
            <About isDarkMode={isDarkMode} />
            <Projects isDarkMode={isDarkMode} />
            <Skills isDarkMode={isDarkMode} />
            <Education isDarkMode={isDarkMode} />
            <Certificates isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
          </div>
        </main>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </Suspense>
  );  
}