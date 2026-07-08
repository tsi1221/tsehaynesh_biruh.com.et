import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Code, Star, Github, Linkedin, Mail, Send, Instagram, Download, CheckCircle2, Loader2 } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

interface AboutProps {
  isDarkMode?: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode = true }) => {
  const [cvStatus, setCvStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const contacts = [
    { icon: Github, link: "https://github.com/tsi1221" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/tsehaynesh-biruh-8681852a4/" },
    { icon: Mail, link: "mailto:tsehayneshbiruh2@gmail.com" },
    { icon: Send, link: "https://t.me/ts_e_ha_y_nesh" },
    { icon: Instagram, link: "https://www.instagram.com/tsehayneshbiruh/" },
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    setCvStatus('loading');

    setTimeout(() => {
      const fileUrl = '/Tsi_CV.pdf';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'Tsehaynesh_Biruh_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setCvStatus('success');

      setTimeout(() => setCvStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <section 
      id="about" 
      className={`py-24 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#080808]" : "bg-gradient-to-b from-white via-white to-orange-50/20"
      }`}
    >
      {/* Background Ambient Glow */}
      <div className={`absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-colors duration-500 ${
        isDarkMode ? "bg-orange-500/3" : "bg-orange-100/50"
      }`} />
      
      {/* max-w-6xl with enhanced px spacing perfectly anchors deep margins layout framing */}
      <div className={`container mx-auto max-w-7xl px-8 md:px-20 lg:px-32 transition-colors duration-500 ${
        isDarkMode ? "border-slate-200/5" : "border-slate-200"
      }`}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group w-full"
          >
            <div className={`absolute -inset-4 border rounded-[3rem] translate-x-4 translate-y-4 -z-10 transition-colors duration-500 ${
              isDarkMode ? "border-orange-500/20" : "border-orange-300/50"
            }`} />
            <div className={`absolute -inset-4 border rounded-[3rem] -z-20 transition-colors duration-500 ${
              isDarkMode ? "border-white/10" : "border-slate-300"
            }`} />
            
            <div className={`relative aspect-4/5 overflow-hidden rounded-[2.5rem] shadow-2xl transition-colors duration-500 ${
              isDarkMode ? "bg-white/5" : "bg-slate-50"
            }`}>
              <img 
                src={profilePic} 
                alt="Tsehaynesh Biruh" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              {/* Floating Contact Icons */}
              <div className="absolute top-6 right-6 z-30 flex flex-col gap-3">
                {contacts.map((Item, i) => (
                  <motion.a
                    key={i}
                    href={Item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl backdrop-blur border shadow-lg hover:bg-orange-500 hover:text-white transition-all ${
                      isDarkMode 
                        ? "bg-black/70 border-white/20 text-white" 
                        : "bg-white/90 border-slate-200 text-slate-800"
                    }`}
                  >
                    <Item.icon size={18}/>
                  </motion.a>
                ))}
              </div>

              {/* Current Status Badge Layer */}
              <div className={`absolute bottom-4 left-6 right-6 z-20 p-2 md:p-4 backdrop-blur-xl border rounded-2xl text-center transition-colors duration-500 ${
                isDarkMode 
                  ? "bg-black/40 border-white/10" 
                  : "bg-white/80 border-slate-200 shadow-lg"
              }`}>
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}>
                  Current Status
                </p>
                <p className="text-orange-500 text-xs font-bold flex items-center justify-center gap-2">
                  <Briefcase size={12}/> Software Engineer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Text Copy Column with minimized section gaps */}
          <div className="space-y-4 w-full">

            {/* About Me Section block */}
            <div className="space-y-0.5">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 text-orange-500 font-extrabold uppercase tracking-wider"
              >
                <User size={14}/> <span className="text-xl md:text-2xl">About Me</span>
              </motion.div>

              <p className={`text-base md:text-md leading-relaxed font-medium transition-colors duration-500 ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}>
                I'm <span className="font-semibold">Tsehaynesh (Tsi)</span>, a software engineer from Ethiopia. I write clean, maintainable code and design with purpose to solve real problems, reduce effort, and speed up delivery. Using full-stack development and DevOps practices, I build scalable systems that help businesses digitize efficiently.
              </p>
            </div>

            {/* My Journey Section block */}
            <div className="space-y-0.5">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 text-orange-500 font-extrabold uppercase tracking-wider"
              >
                <Star size={14}/> <span className="text-xl md:text-2xl">My Journey</span>
              </motion.div>

              <p className={`text-base md:text-md leading-relaxed font-medium italic transition-colors duration-500 ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}>
                Curiosity led me into coding. I focus on high-quality, user-focused projects with clean architecture and strong performance. I continuously learn and improve while creating systems that simplify complexity and deliver meaningful results.
              </p>
            </div>

            {/* Beyond Code Section block */}
            <div className="space-y-0.5">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 text-orange-500 font-extrabold uppercase tracking-wider"
              >
                <Code size={14}/> <span className="text-xl md:text-2xl">Beyond Code</span>
              </motion.div>

              <p className={`text-base md:text-md leading-relaxed font-medium italic transition-colors duration-500 ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}>
                I enjoy <span className="font-semibold">exploring nature</span>, exchanging ideas with creative thinkers, and fostering meaningful communication. Participating in hackathons and collaborative projects helps turn bold ideas into practical solutions.
              </p>
            </div>

            {/* Action Group Interaction Stack */}
            <div className="flex flex-wrap gap-5 mt-4">
              
              {/* Dynamic Action Trigger: CV Download Component */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                disabled={cvStatus !== 'idle'}
                className={`
                  relative min-w-48 h-12 flex items-center justify-center gap-2.5 px-6 
                  rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group
                  border-2 
                  ${cvStatus === 'success' 
                    ? 'border-green-500/30 bg-green-500/5 text-green-400' 
                    : isDarkMode
                      ? 'border-white/10 hover:border-[#FF8C00] bg-transparent text-white'
                      : 'border-slate-300 hover:border-[#FF8C00] bg-transparent text-slate-800 hover:bg-orange-50/50'
                  }
                `}
              >
                <AnimatePresence mode="wait">
                  {cvStatus === 'idle' && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2 group-hover:text-[#FF8C00] transition-colors"
                    >
                      <span>Download CV</span>
                      <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                    </motion.div>
                  )}

                  {cvStatus === 'loading' && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-[#FF8C00]"
                    >
                      <span className="animate-pulse">Preparing</span>
                      <Loader2 size={16} className="animate-spin" />
                    </motion.div>
                  )}

                  {cvStatus === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span>Received</span>
                      <CheckCircle2 size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shine" />
              </motion.button>

              {/* Secondary Option Trigger: Contact Anchor link */}
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-5 h-12 border-2 border-orange-500 text-orange-500 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:bg-orange-500 hover:text-white transition-all hover:shadow-lg hover:shadow-orange-500/20"
              >
                <Send size={16}/> Hire Me
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;