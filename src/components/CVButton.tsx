import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success";

const CVButton = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleDownload = async () => {
    if (status !== "idle") return;

    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const link = document.createElement("a");
    link.href = "/Tsehaynesh_Biruh_Resumee.pdf";
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
      className="flex items-center justify-center gap-3 px-8 h-14 rounded-xl border border-white/20 bg-black/30 text-white font-bold uppercase tracking-widest"
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            Download CV
            <Download size={18} />
          </motion.div>
        )}

        {status === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            Preparing
            <Loader2 size={18} className="animate-spin" />
          </motion.div>
        )}

        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-green-400"
          >
            Downloaded
            <CheckCircle2 size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CVButton;
