import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, CheckCircle2, Loader2 } from 'lucide-react';

const CVButton = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleDownload = () => {
    setStatus('loading');
    
    // Slight delay to simulate the "generating/preparing" process
    setTimeout(() => {
      // Path to your file in the public folder
      const fileUrl = '/Modern Minimalist CV Resume-2.pdf';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'Tsehaynesh_Biruh_CV.pdf'; // User sees this as the saved name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setStatus('success');
      
      // Reset back to idle after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleDownload}
      disabled={status !== 'idle'}
      className={`
        relative min-w-55 h-14 flex items-center justify-center gap-3 px-8 
        rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group
        border-2 
        ${status === 'success' 
          ? 'border-green-500/30 bg-green-500/5' 
          : 'border-white/10 hover:border-[#FF8C00] bg-white/2'}
      `}
    >
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 text-white group-hover:text-[#FF8C00] transition-colors"
          >
            <span>Download CV</span>
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </motion.div>
        )}

        {status === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 text-[#FF8C00]"
          >
            <span className="animate-pulse">Preparing</span>
            <Loader2 size={18} className="animate-spin" />
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-green-400"
          >
            <span>Received</span>
            <CheckCircle2 size={18} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Shine Effect on Hover */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent via-white/5 to-transparent group-hover:animate-shine" />
    </motion.button>
  );
};

export default CVButton;