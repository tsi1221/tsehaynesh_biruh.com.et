import { motion } from 'framer-motion';
import { User, Briefcase, Code, Star, Github, Linkedin, Mail, Send, Instagram, Download, Send as SendIcon } from 'lucide-react';
import profilePic from '../assets/profile.jpg'; 

const About = () => {

  const contacts = [
    { icon: Github, link: "https://github.com/tsi1221" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/tsehaynesh-biruh-8681852a4/" },
    { icon: Mail, link: "mailto:tsehayneshbiruh2@gmail.com" },
    { icon: Send, link: "https://t.me/ts_e_ha_y_nesh" },
    { icon: Instagram, link: "https://www.instagram.com/tsehayneshbiruh/" },
  ];

  // Smooth scroll to contact
  const scrollToContact = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if(contactSection){
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section id="about" className="py-36 px-6 bg-white dark:bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 border border-orange-500/20 rounded-[3rem] translate-x-4 translate-y-4 -z-10" />
            <div className="absolute -inset-4 border border-slate-200 dark:border-white/10 rounded-[3rem] -z-20" />
            
            <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-white/5 shadow-2xl">
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
                    className="p-3 rounded-xl bg-white/90 dark:bg-black/70 backdrop-blur border border-white/20 shadow-lg hover:bg-orange-500 hover:text-white transition-all"
                  >
                    <Item.icon size={18}/>
                  </motion.a>
                ))}
              </div>

              {/* Current Status */}
              <div className="absolute bottom-6 left-6 right-6 z-20 p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl text-center">
                <p className="text-white text-xs font-black uppercase tracking-[0.2em] mb-1">
                  Current Status
                </p>
                <p className="text-orange-400 text-sm font-bold flex items-center justify-center gap-2">
                  <Briefcase size={14}/> Software Engineer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="space-y-8">

            {/* About Me */}
            <div className="space-y-3">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-orange-500 font-extrabold text-lg uppercase tracking-wider"
              >
                <User size={16}/> <span className="text-2xl md:text-3xl">About Me</span>
              </motion.div>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                I’m <span className="font-semibold">Tsi</span>, a software engineer from Ethiopia. I write clean, maintainable code and design with purpose to solve real problems, reduce effort, and speed up delivery. Using full-stack development and DevOps practices, I build scalable systems that help businesses digitize efficiently.
              </p>
            </div>

            {/* My Journey */}
            <div className="space-y-3">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-orange-500 font-extrabold text-lg uppercase tracking-wider"
              >
                <Star size={16}/> <span className="text-2xl md:text-3xl">My Journey</span>
              </motion.div>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic">
                Curiosity led me into coding. I focus on high-quality, user-focused projects with clean architecture and strong performance. I continuously learn and improve while creating systems that simplify complexity and deliver meaningful results.
              </p>
            </div>

            {/* Beyond Code */}
            <div className="space-y-3">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-orange-500 font-extrabold text-lg uppercase tracking-wider"
              >
                <Code size={16}/> <span className="text-2xl md:text-3xl">Beyond Code</span>
              </motion.div>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic">
                I enjoy <span className="font-semibold">exploring nature</span>, exchanging ideas with creative thinkers, and fostering meaningful communication. Participating in hackathons and collaborative projects helps turn bold ideas into practical solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 mt-6">
              <a 
                href="/Tsi_CV.pdf" 
                download 
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-600 transition-all"
              >
                <Download size={18}/> Download CV
              </a>

              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 rounded-xl font-semibold shadow-lg hover:bg-orange-500 hover:text-white transition-all"
              >
                <SendIcon size={18}/> Hire Me
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;