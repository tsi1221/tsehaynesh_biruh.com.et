import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success";

const CVButton = () => {
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={status !== "idle"}
      className="group relative flex w-full xs:w-auto items-center justify-center gap-3.5 rounded-xl border-1 border-white bg-black/20 px-6 py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/10 disabled:cursor-not-allowed sm:px-8 sm:py-3.5 dark:border-white dark:bg-black/40 dark:hover:bg-white/10"
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
            <Download size={14} className="stroke-[3]" />
          </motion.div>
        )}

        {status === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-2 text-orange-400"
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
            className="flex items-center gap-2 text-green-400"
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