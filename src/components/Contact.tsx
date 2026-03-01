import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Phone, User, Mail, MessageSquare } from "lucide-react";

const BOT_TOKEN = "8659342430:AAF_l_fPFWyweoeYPgSiZvAJ4nNJdYYhv5w";
const CHAT_ID = "5143972027";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "", 
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const phoneText = formData.phone ? `📞 Phone: ${formData.phone}` : "📞 Phone: Not provided";
    
    const text = `
✨ NEW PORTFOLIO INQUIRY ✨

👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
${phoneText}

💬 Message:
${formData.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#FF8C00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter italic uppercase">
            Let's <span className="text-[#FF8C00]">Talk.</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#FF8C00] mx-auto rounded-full shadow-[0_0_15px_#FF8C00]" />
        </motion.div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 bg-white/2 border border-green-500/30 rounded-3xl shadow-[0_0_30px_rgba(34,197,94,0.05)]"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10">
                <CheckCircle2 size={32} className="text-green-400" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                Message Sent Successfully
              </h3>
              <p className="text-gray-400 mb-8 text-base font-light">
                Thank you. I'll get back to you soon.
              </p>
              
              <button
                onClick={() => setStatus("idle")}
                className="text-green-400/80 hover:text-green-400 transition-colors text-sm font-medium uppercase tracking-widest border-b border-transparent hover:border-green-400"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative group">
                  <User className="absolute left-4 top-4 text-gray-500 group-focus-within:text-[#FF8C00] transition-colors" size={20} />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full pl-12 p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-[#FF8C00]/50 focus:outline-none transition-all placeholder:text-gray-600"
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-4 top-4 text-gray-500 group-focus-within:text-[#FF8C00] transition-colors" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full pl-12 p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-[#FF8C00]/50 focus:outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="relative group">
                <Phone className="absolute left-4 top-4 text-gray-500 group-focus-within:text-[#FF8C00] transition-colors" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (Optional)"
                  className="w-full pl-12 p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-[#FF8C00]/50 focus:outline-none transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 text-gray-500 group-focus-within:text-[#FF8C00] transition-colors" size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full pl-12 p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-[#FF8C00]/50 focus:outline-none transition-all resize-none placeholder:text-gray-600"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "sending"}
                className="w-full py-5 bg-[#FF8C00] text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50 transition-all shadow-lg hover:shadow-[#FF8C00]/20"
              >
                {status === "sending" ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Processing...
                  </div>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === "error" && (
                <p className="text-red-500 text-center font-medium mt-4">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;