import { motion } from 'framer-motion';
import { 
  Code2, Terminal, Cloud, Database, 
  Layers, Cpu, ShieldCheck, Globe 
} from 'lucide-react';

const icons = [
  { Icon: Code2, x: "15%", y: "20%", size: 40, delay: 0 },
  { Icon: Terminal, x: "85%", y: "15%", size: 30, delay: 2 },
  { Icon: Cloud, x: "70%", y: "70%", size: 50, delay: 1 },
  { Icon: Database, x: "10%", y: "80%", size: 35, delay: 3 },
  { Icon: Cpu, x: "25%", y: "60%", size: 25, delay: 1.5 },
  { Icon: ShieldCheck, x: "80%", y: "40%", size: 45, delay: 0.5 },
  { Icon: Globe, x: "40%", y: "10%", size: 30, delay: 2.5 },
  { Icon: Layers, x: "50%", y: "85%", size: 35, delay: 4 },
];

const FloatingTech = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 dark:opacity-30">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-orange-500/50 dark:text-orange-400/30"
          style={{ 
            left: item.x, 
            top: item.y 
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon size={item.size} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTech;