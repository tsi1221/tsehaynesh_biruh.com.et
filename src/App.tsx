import { Suspense } from 'react';
import { motion } from 'framer-motion';

// --- Hooks ---
import { useTheme } from './hooks/useTheme';
import { useGithub } from './hooks/useGithub';

// --- Core Layout Components ---
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import FloatingTech from './components/FloatingTech';
import CVButton from './components/CVButton';

// --- Page Sections ---
import TypingTitle from './components/TypingTitle';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './Section/Certificates';
import Contact from './components/Contact';

/**
 * Premium, minimal loading state spinner.
 */
const LoadingScreen = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-[#080808]">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      className="h-12 w-12 rounded-full border-4 border-orange-500 border-t-transparent"
    />
  </div>
);

export default function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  // Initialize GitHub profile data integration
  useGithub('tsi1221');

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="relative min-h-screen bg-white text-slate-900 selection:bg-orange-500/30 dark:bg-[#080808] dark:text-white overflow-x-hidden transition-colors duration-500">
        
        {/* Ambient & Navigation Interaction Layers */}
        <CursorGlow />
        <Sidebar />
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main>
          {/* ================= HERO SECTION ================= */}
          <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-orange-50/40 px-4 xs:px-6 sm:px-12 md:px-20 lg:px-32 pt-24 pb-12 md:pt-32 md:pb-16 lg:py-0 dark:from-[#080808] dark:via-[#080808] dark:to-[#090909]"
          >
            {/* Hidden on ultra-small mobile displays to clean up the workspace area */}
            <div className="hidden xs:block">
              <FloatingTech />
            </div>

            <div className="container z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 text-left lg:grid-cols-12 lg:gap-20">
              
              {/* Top Column on Mobile / Right Column on Desktop: Visual Frame */}
              <div className="order-1 flex w-full items-center justify-center lg:col-span-5 lg:order-2 mt-4 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-44 w-44 xs:h-52 xs:w-52 sm:h-64 sm:w-64 lg:h-80 lg:w-80 p-[2px] rounded-full bg-gradient-to-b from-neutral-200 to-neutral-300/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-700 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] dark:from-neutral-700/60 dark:to-neutral-900/10 dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.4)]"
                >
                  {/* Modern Ambient Glow Backdrop */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-400/0 via-neutral-400/0 to-neutral-400/10 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100 dark:to-white/5" />

                  {/* Glassmorphism Outer Frame Ring */}
                  <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white/90 p-1 backdrop-blur-md dark:bg-neutral-950/90">
                    {/* Inner Image Mask Container */}
                    <div className="relative h-full w-full overflow-hidden rounded-full border border-neutral-100 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
                      <img
                        src="/image.png"
                        alt="Tsehaynesh Biruh"
                        className="h-full w-full object-cover object-center transition-all duration-700 ease-out transform group-hover:scale-105 group-hover:contrast-[1.02]"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Column on Mobile / Left Column on Desktop: Content Stack */}
              <div className="order-2 flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7 lg:order-1">
                
                {/* Ultra-minimal Availability Status Badge */}
               <motion.div
  initial={{ opacity: 0, y: -15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="inline-flex items-center justify-center text-center rounded-full border border-emerald-500/20 bg-emerald-500/5 mt-10 sm:mt-14 lg:mt-20 px-3 sm:px-4 py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-600 dark:text-emerald-400 shadow-sm backdrop-blur-sm select-none"
>
  <span className="flex items-center gap-1.5">
    {/* Micro green pulse dot to enhance the "Available" context visually */}
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
    </span>
    Available for New Opportunities
  </span>
</motion.div>


                {/* Main Identity Header */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mt-4 mb-2 text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-none text-slate-950 dark:text-white drop-shadow-sm"
                >
                  TSEHAYNESH <span className="text-orange-500">BIRUH</span>
                </motion.h1>

                {/* Subtitle Typography (Animated Stack) */}
                <div className="w-full flex justify-center lg:justify-start">
                  <TypingTitle />
                </div>

                {/* Executive Professional Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mt-4 mb-6 max-w-xl text-xs xs:text-sm sm:text-base font-medium leading-relaxed text-slate-500 dark:text-slate-400"
                >
                  I design and build modern{' '}
                  <span className="font-semibold text-orange-500 dark:text-orange-400">web</span> and{' '}
                  <span className="font-semibold text-orange-500 dark:text-orange-400">mobile applications</span> powered by scalable{' '}
                  <span className="font-semibold text-orange-500 dark:text-orange-400">backend systems</span>,{' '}
                  <span className="font-semibold text-orange-500 dark:text-orange-400">cloud technologies</span>, and{' '}
                  <span className="font-semibold text-orange-500 dark:text-orange-400">DevOps</span>. I transform ideas into secure, high-performance digital products with clean architecture and intuitive user experiences.
                </motion.p>

                {/* Primary CTA Buttons */}
                <div className="grid w-full grid-cols-1 gap-3.5 sm:flex sm:w-auto sm:items-center sm:gap-4">
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group relative flex h-[48px] w-full min-w-[180px] items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-orange-500/15 select-none transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 sm:w-auto"
                  >
                    <span className="absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10">View My Work</span>

                  <svg
        className="h-3.5 w-3.5 stroke-[3.5] transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          stroke="url(#arrow-gradient)"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
        />
        {/* Custom definitions to inject a smooth orange-to-amber color scale directly into the vector path */}
        <defs>
          <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffedd5" /> {/* Light orange tint */}
            <stop offset="100%" stopColor="#fef3c7" /> {/* Light amber tint */}
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

            {/* Ambient Background Decorative Accent */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 0.15 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6 }}
              className="absolute -bottom-32 -left-32 h-96 w-96 pointer-events-none rounded-full bg-orange-400 opacity-25 blur-3xl mix-blend-soft-light"
            />
          </section>

          {/* ================= MAIN SCROLLABLE CONTENT ================= */}
          <div className="relative z-10 bg-white dark:bg-[#080808]">
            <About />
            <Projects />
            <Skills />
            <Education />
            <Certificates />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </Suspense>
  );
}