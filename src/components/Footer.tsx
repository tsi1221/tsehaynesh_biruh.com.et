import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Send, 
  ArrowUp, 
  MapPin,
  Phone,
  Clock,
  Instagram
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      href: 'https://github.com/tsi1221' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      href: 'https://www.linkedin.com/in/tsehaynesh-biruh-8681852a4/' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={20} />, 
      href: 'https://www.instagram.com/tsehayneshbiruh' 
    },
    { 
      name: 'Telegram', 
      icon: <Send size={20} />, 
      href: 'https://t.me/ts_e_ha_y_nesh' 
    }
  ];

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative bg-white dark:bg-[#0A0A0A] pt-24 pb-12 border-t border-slate-200 dark:border-white/5 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FF8C00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          
          {/* Column 1: Identity */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tighter uppercase italic">
              Tsehaynesh <span className="text-[#FF8C00]">Biruh</span>
            </h3>
            <p className="text-slate-500 dark:text-gray-400 max-w-sm font-medium leading-relaxed">
              Software Engineering student focused on building high-performance 
              applications and intuitive user experiences.
            </p>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
              <MapPin size={18} className="text-[#FF8C00]" />
              Addis Ababa, Ethiopia
            </div>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF8C00]">Connect Directly</h4>
            <div className="space-y-4">
              <a 
                href="mailto:tsehayneshbiruh2@gmail.com" 
                className="flex items-center gap-4 group text-slate-600 dark:text-gray-300 hover:text-[#FF8C00] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#FF8C00]/10 transition-all">
                  <Mail size={18} />
                </div>
                <span className="font-bold text-sm tracking-tight">tsehayneshbiruh2@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/tsehaynesh-biruh-8681852a4/" 
                target="_blank"
                className="flex items-center gap-4 group text-slate-600 dark:text-gray-300 hover:text-[#FF8C00] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#FF8C00]/10 transition-all">
                  <Linkedin size={18} />
                </div>
                <span className="font-bold text-sm tracking-tight">in/tsehaynesh-biruh-8681852a4</span>
              </a>

              <a 
                href="tel:+251928505904" 
                className="flex items-center gap-4 group text-slate-600 dark:text-gray-300 hover:text-[#FF8C00] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#FF8C00]/10 transition-all">
                  <Phone size={18} />
                </div>
                <span className="font-bold text-sm tracking-tight">+251 928 505 904</span>
              </a>
            </div>
          </div>

          {/* Column 3: Social Icons */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Social Networks</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: '#FF8C00', color: '#000' }}
                  className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-gray-300 transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.2em] text-[#FF8C00] pt-6"
            >
              Back to top 
              <span className="w-10 h-10 rounded-full border border-[#FF8C00]/30 flex items-center justify-center group-hover:bg-[#FF8C00] group-hover:text-black transition-all">
                <ArrowUp size={16} />
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Navigation Row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 py-10 border-t border-slate-100 dark:border-white/5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400 hover:text-[#FF8C00] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8C00] transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-400 dark:text-gray-600 tracking-[0.3em] uppercase">
            © {currentYear} Tsehaynesh Biruh. All rights reserved.
          </p>
          <div className="flex items-center gap-3 px-4 py-2 bg-green-500/5 rounded-full border border-green-500/10">
            <Clock size={14} className="text-green-500" />
            <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em]">Available Any Time</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;