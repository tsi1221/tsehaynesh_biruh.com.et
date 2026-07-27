import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success";

interface CVButtonProps {
  isDarkMode?: boolean;
}

const CVButton: React.FC<CVButtonProps> = ({ isDarkMode = false }) => {
  const [status, setStatus] = useState<Status>("idle");

  const handleDownload = async () => {
    if (status !== "idle") return;

    setStatus("loading");

    // Micro-delay for smooth layout transition state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const link = document.createElement("a");
    link.href = "/TsehayneshBiruh.pdf";
    link.download = "Tsehaynesh_Biruh_Resumee.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setStatus("success");

    setTimeout(() => {
      setStatus("idle");
    }, 2500);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={status !== "idle"}
      className={`group relative flex w-full xs:w-auto items-center justify-center gap-3.5 rounded-xl border-2 px-6 py-3.5 text-xs font-black uppercase tracking-widest shadow-lg backdrop-blur-md transition-all duration-300 disabled:cursor-not-allowed sm:px-8 sm:py-3.5 ${
        isDarkMode
          ? "border-white bg-white text-black hover:bg-gray-100 hover:shadow-white/30 hover:shadow-2xl"
          : "border-black bg-black text-white hover:bg-gray-900 hover:shadow-black/30 hover:shadow-2xl"
      }`}
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-2"
          >
            <span>Download CV</span>
            <Download size={14} className="stroke-[3] group-hover:translate-y-0.5 group-hover:scale-110 transition-all duration-300" />
          </motion.div>
        )}

        {status === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className={`flex items-center gap-2 ${isDarkMode ? "text-orange-600" : "text-orange-400"}`}
          >
            <span>Preparing</span>
            <Loader2 size={14} className="animate-spin stroke-[3]" />
          </motion.div>
        )}

        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className={`flex items-center gap-2 ${isDarkMode ? "text-green-600" : "text-green-400"}`}
          >
            <span>Downloaded</span>
            <CheckCircle2 size={14} className="stroke-[3]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CVButton;