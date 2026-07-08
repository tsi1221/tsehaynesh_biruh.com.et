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

interface FooterProps {
  isDarkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode = true }) => {
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
    <footer className={`relative pt-24 pb-12 overflow-hidden transition-colors duration-500 ${
      isDarkMode 
        ? "bg-[#0A0A0A] border-t border-white/5" 
        : "bg-gradient-to-b from-white to-slate-50 border-t-2 border-slate-200"
    }`}>
      {/* Background Decorative Glow */}
      <div className={`absolute -bottom-24 -left-24 w-96 h-96 blur-[120px] rounded-full pointer-events-none transition-colors duration-500 ${
        isDarkMode ? "bg-[#FF8C00]/5" : "bg-orange-100/50"
      }`} />
      
      {/* Additional glow for light mode */}
      {!isDarkMode && (
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-50 blur-[120px] rounded-full pointer-events-none" />
      )}

      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          
          {/* Column 1: Identity */}
          <div className="space-y-6">
            <h3 className={`text-3xl font-black tracking-tighter uppercase italic transition-colors duration-500 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              Tsehaynesh <span className="text-[#FF8C00]">Biruh</span>
            </h3>
            <p className={`max-w-sm font-medium leading-relaxed transition-colors duration-500 ${
              isDarkMode ? "text-gray-400" : "text-slate-600"
            }`}>
              Software Engineer focused on building high-performance 
              applications and intuitive user experiences.
            </p>
            <div className={`flex items-center gap-3 text-sm font-bold transition-colors duration-500 ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}>
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
                className={`flex items-center gap-4 group transition-colors ${
                  isDarkMode 
                    ? "text-gray-300 hover:text-[#FF8C00]" 
                    : "text-slate-700 hover:text-[#FF8C00]"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-[#FF8C00]/10 transition-all ${
                  isDarkMode ? "bg-white/5" : "bg-slate-100 shadow-sm"
                }`}>
                  <Mail size={18} />
                </div>
                <span className="font-bold text-sm tracking-tight">tsehayneshbiruh2@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/tsehaynesh-biruh-8681852a4/" 
                target="_blank"
                className={`flex items-center gap-4 group transition-colors ${
                  isDarkMode 
                    ? "text-gray-300 hover:text-[#FF8C00]" 
                    : "text-slate-700 hover:text-[#FF8C00]"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-[#FF8C00]/10 transition-all ${
                  isDarkMode ? "bg-white/5" : "bg-slate-100 shadow-sm"
                }`}>
                  <Linkedin size={18} />
                </div>
                <span className="font-bold text-sm tracking-tight">in/tsehaynesh-biruh-8681852a4</span>
              </a>

              <a 
                href="tel:+251928505904" 
                className={`flex items-center gap-4 group transition-colors ${
                  isDarkMode 
                    ? "text-gray-300 hover:text-[#FF8C00]" 
                    : "text-slate-700 hover:text-[#FF8C00]"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-[#FF8C00]/10 transition-all ${
                  isDarkMode ? "bg-white/5" : "bg-slate-100 shadow-sm"
                }`}>
                  <Phone size={18} />
                </div>
                <span className="font-bold text-sm tracking-tight">+251 928 505 904</span>
              </a>
            </div>
          </div>

          {/* Column 3: Social Icons */}
          <div className="space-y-6">
            <h4 className={`text-xs font-black uppercase tracking-[0.3em] transition-colors duration-500 ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}>
              Social Networks
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: '#FF8C00', color: '#000' }}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    isDarkMode 
                      ? "bg-white/5 text-gray-300" 
                      : "bg-slate-100 text-slate-600 hover:shadow-md"
                  }`}
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
              <span className={`w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-[#FF8C00] group-hover:text-black transition-all ${
                isDarkMode ? "border-[#FF8C00]/30" : "border-[#FF8C00]/50"
              }`}>
                <ArrowUp size={16} />
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Navigation Row */}
        <div className={`flex flex-wrap justify-center gap-x-8 gap-y-4 py-10 border-t transition-colors duration-500 ${
          isDarkMode ? "border-white/5" : "border-slate-200"
        }`}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] hover:text-[#FF8C00] transition-colors relative group ${
                isDarkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8C00] transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={`pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-6 transition-colors duration-500 ${
          isDarkMode ? "border-white/5" : "border-slate-200"
        }`}>
          <p className={`text-[10px] font-black tracking-[0.3em] uppercase transition-colors duration-500 ${
            isDarkMode ? "text-gray-600" : "text-slate-400"
          }`}>
            © {currentYear} Tsehaynesh Biruh. All rights reserved.
          </p>
          <div className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-colors duration-500 ${
            isDarkMode 
              ? "bg-green-500/5 border-green-500/10" 
              : "bg-green-50 border-green-200"
          }`}>
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