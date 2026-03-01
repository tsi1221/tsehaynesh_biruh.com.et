import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Box } from 'lucide-react'; // Using 'Box' as a placeholder for Docker if custom SVG isn't used

const Sidebar = () => {
  const socialLinks = [
    { 
      Icon: Github, 
      href: 'https://github.com/tsi1221', 
      label: 'GitHub'
    },
    { 
      Icon: Linkedin, 
      href: 'https://www.linkedin.com/in/tsehaynesh-biruh-8681852a4/', 
      label: 'LinkedIn'
    },
    { 
      Icon: Send, 
      href: 'https://t.me/ts_e_ha_y_nesh', 
      label: 'Telegram'
    },
    {
      Icon: Box, // Lucide doesn't have Docker; Box is a common dev-tool fallback
      href: 'https://hub.docker.com/u/tbiruh1221', 
      label: 'Docker Hub'
    },
    { 
      Icon: Mail, 
      href: 'mailto:tsehayneshbiruh2@gmail.com', 
      label: 'Email'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed left-8 bottom-0 z-50 hidden xl:flex flex-col items-center gap-8"
    >
      <div className="flex flex-col gap-7">
        {socialLinks.map(({ Icon, href, label }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ 
              y: -5, 
              scale: 1.2,
              color: "#FF8C00",
              filter: "drop-shadow(0 0 8px rgba(255, 140, 0, 0.6))"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-500 hover:text-[#FF8C00] transition-all duration-300 ease-in-out"
          >
            <Icon size={20} strokeWidth={1.5} />
          </motion.a>
        ))}
      </div>

      {/* The Glowing Vertical Line */}
      <div className="relative flex flex-col items-center">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "140px" }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="w-[1.5px] bg-linear-to-t from-transparent via-[#FF8C00] to-[#FF8C00] shadow-[0_0_10px_#FF8C00]"
        />
        {/* Small end-cap dot for extra detail */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="w-1 h-1 bg-[#FF8C00] rounded-full absolute -top-1 shadow-[0_0_8px_#FF8C00]"
        />
      </div>
    </motion.div>
  );
};

export default Sidebar;