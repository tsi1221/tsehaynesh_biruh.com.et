import { Suspense } from 'react';
import { motion } from 'framer-motion';

// --- Hooks ---
import { useTheme } from './hooks/useTheme';
import { useGithub } from './hooks/useGithub';

// --- Core Components ---
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import FloatingTech from './components/FloatingTech';

// --- Sections ---
import TypingTitle from './components/TypingTitle';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CVButton from './components/CVButton';
import Certificates from './Section/Certificates';
import Education from './components/Education';

// --- Loading Screen ---
const LoadingScreen = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-[#080808]">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full"
    />
  </div>
);

export default function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  useGithub('tsi1221');

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="relative min-h-screen bg-white dark:bg-[#080808] text-slate-900 dark:text-white transition-colors duration-500 selection:bg-orange-500/30 overflow-x-hidden">
        
        {/* Interaction Layers */}
        <CursorGlow />
        <Sidebar />
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main>
          {/* --- HERO SECTION --- */}
          <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-linear-to-b from-white dark:from-[#080808] to-orange-50 dark:to-[#0a0a0a]"
          >
            <FloatingTech />

            <div className="container mx-auto text-center z-10">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block px-5 py-2 mb-7 mt-14 border border-orange-500/30 rounded-full bg-orange-500/10 text-orange-500 text-[11px] font-black uppercase tracking-[0.3em] shadow-lg backdrop-blur-sm"
              >
                Available for New Opportunities
              </motion.div>

              {/* Hero Name */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight leading-none text-transparent bg-clip-text bg-linear-to-r from-white drop-shadow-xl"
              >
                TSEHAYNESH <span className="text-white dark:text-orange-500">BIRUH</span>
              </motion.h1>

              {/* Typing Animated Subtitle */}
              <TypingTitle />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-6 mb-12 font-medium leading-relaxed tracking-wide"
              >
                Crafting resilient <span className="font-semibold text-orange-500 dark:text-orange-400">MERN-stack</span> applications with a focus on{' '}
                <span className="font-semibold text-orange-500 dark:text-orange-400">DevSecOps</span> &{' '}
                <span className="font-semibold text-orange-500 dark:text-orange-400">Cloud Architecture</span>.<br />
                I build scalable, secure, and visually appealing systems that leave a lasting impression.
              </motion.p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(255, 130, 0, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-14 py-5 bg-orange-500 text-white rounded-3xl font-black text-sm uppercase tracking-widest shadow-xl shadow-orange-500/30 transition-all"
                >
                  View My Work
                </motion.a>
                <CVButton />
              </div>

              {/* Floating Glow */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.2 }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6 }}
                className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-400 rounded-full blur-3xl mix-blend-soft-light opacity-30"
              />
            </div>
          </section>

          {/* --- CONTENT SECTIONS --- */}
          <div className="relative z-10 bg-white dark:bg-[#080808]">
            <About />
            <Projects />
            <Skills />
            
            <Education/>  
            <Certificates /> {/* ✅ Properly renders when clicking Certificates in Navbar */}
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </Suspense>
  );
}
