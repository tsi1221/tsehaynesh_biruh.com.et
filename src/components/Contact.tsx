import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Phone, User, Mail, MessageSquare } from "lucide-react";

const BOT_TOKEN = "8659342430:AAF_l_fPFWyweoeYPgSiZvAJ4nNJdYYhv5w";
const CHAT_ID = "5143972027";

interface ContactProps {
  isDarkMode?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode = true }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "", 
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  /**
   * Sanitize input to prevent XSS attacks
   * Removes HTML tags and dangerous characters
   */
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .trim();
  };

  /**
   * Validate email format
   */
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  /**
   * Validate phone number (optional field)
   */
  const isValidPhone = (phone: string): boolean => {
    if (!phone) return true; // Optional field
    const phoneRegex = /^[\d\s\-+()]{7,15}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Real-time sanitization for message field
    if (name === "message") {
      const sanitized = sanitizeInput(value);
      setFormData({ ...formData, [name]: sanitized });
    } else {
      // For other fields, just trim and limit length
      const trimmedValue = value.trimStart().slice(0, 200);
      setFormData({ ...formData, [name]: trimmedValue });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sanitize all inputs before sending
    const sanitizedName = sanitizeInput(formData.fullName).slice(0, 100);
    const sanitizedEmail = sanitizeInput(formData.email).slice(0, 100);
    const sanitizedPhone = sanitizeInput(formData.phone).slice(0, 20);
    const sanitizedMessage = sanitizeInput(formData.message).slice(0, 2000);

    // Validate required fields
    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      setStatus("error");
      return;
    }

    // Validate email format
    if (!isValidEmail(sanitizedEmail)) {
      setStatus("error");
      return;
    }

    // Validate phone if provided
    if (sanitizedPhone && !isValidPhone(sanitizedPhone)) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const phoneText = sanitizedPhone ? `📞 Phone: ${sanitizedPhone}` : "📞 Phone: Not provided";
    
    const text = `
✨ NEW PORTFOLIO INQUIRY ✨

👤 Name: ${sanitizedName}
📧 Email: ${sanitizedEmail}
${phoneText}

💬 Message:
${sanitizedMessage}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text.slice(0, 4096), // Telegram message limit
        }),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  /**
   * Handle paste event to sanitize pasted content
   */
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text/plain');
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const sanitized = sanitizeInput(pastedText);
    
    setFormData({
      ...formData,
      [target.name]: sanitized.slice(0, target.name === "message" ? 2000 : 200)
    });
  };

  return (
    <section 
      id="contact" 
      className={`py-32 -mt-24 px-6 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#0A0A0A]" : "bg-gradient-to-b from-white via-white to-orange-50/30"
      }`}
    >
      {/* Background Ambient Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-colors duration-500 ${
        isDarkMode ? "bg-[#FF8C00]/5" : "bg-orange-100/60"
      }`} />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-black mb-4 tracking-tighter italic uppercase transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Let's <span className="text-[#FF8C00]">Talk.</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#FF8C00] mx-auto rounded-full shadow-[0_0_15px_#FF8C00]" />
          <p className={`mt-4 text-sm font-medium transition-colors duration-500 ${
            isDarkMode ? "text-gray-400" : "text-slate-600"
          }`}>
            Have a project in mind? Let's work together.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`text-center py-16 rounded-3xl transition-colors duration-500 ${
                isDarkMode 
                  ? "bg-white/[0.02] border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.05)]" 
                  : "bg-white border-2 border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)] shadow-lg"
              }`}
            >
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10">
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
              
              <h3 className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight transition-colors duration-500 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}>
                Message Sent Successfully
              </h3>
              <p className={`mb-8 text-base font-light transition-colors duration-500 ${
                isDarkMode ? "text-gray-400" : "text-slate-600"
              }`}>
                Thank you for reaching out! I'll get back to you as soon as possible.
              </p>
              
              <button
                onClick={() => setStatus("idle")}
                className="text-green-500 hover:text-green-600 transition-colors text-sm font-semibold uppercase tracking-widest border-b-2 border-transparent hover:border-green-500"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <User className={`absolute left-5 top-5 transition-all duration-300 group-focus-within:text-[#FF8C00] group-focus-within:scale-110 ${
                    isDarkMode ? "text-gray-500" : "text-slate-400"
                  }`} size={20} />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onPaste={handlePaste}
                    required
                    maxLength={100}
                    placeholder="Full Name"
                    autoComplete="name"
                    className={`w-full pl-12 p-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20 ${
                      isDarkMode 
                        ? "bg-white/5 border border-white/10 text-white placeholder:text-gray-600 hover:border-white/20 focus:border-[#FF8C00]/50" 
                        : "bg-white border-2 border-slate-300 text-slate-900 placeholder:text-slate-400 hover:border-slate-400 focus:border-[#FF8C00] shadow-sm"
                    }`}
                  />
                </div>

                <div className="relative group">
                  <Mail className={`absolute left-5 top-5 transition-all duration-300 group-focus-within:text-[#FF8C00] group-focus-within:scale-110 ${
                    isDarkMode ? "text-gray-500" : "text-slate-400"
                  }`} size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onPaste={handlePaste}
                    required
                    maxLength={100}
                    placeholder="Email Address"
                    autoComplete="email"
                    className={`w-full pl-12 p-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20 ${
                      isDarkMode 
                        ? "bg-white/5 border border-white/10 text-white placeholder:text-gray-600 hover:border-white/20 focus:border-[#FF8C00]/50" 
                        : "bg-white border-2 border-slate-300 text-slate-900 placeholder:text-slate-400 hover:border-slate-400 focus:border-[#FF8C00] shadow-sm"
                    }`}
                  />
                </div>
              </div>

              <div className="relative group">
                <Phone className={`absolute left-5 top-5 transition-all duration-300 group-focus-within:text-[#FF8C00] group-focus-within:scale-110 ${
                  isDarkMode ? "text-gray-500" : "text-slate-400"
                }`} size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onPaste={handlePaste}
                  maxLength={20}
                  placeholder="Phone Number (Optional)"
                  autoComplete="tel"
                  className={`w-full pl-12 p-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20 ${
                    isDarkMode 
                      ? "bg-white/5 border border-white/10 text-white placeholder:text-gray-600 hover:border-white/20 focus:border-[#FF8C00]/50" 
                      : "bg-white border-2 border-slate-300 text-slate-900 placeholder:text-slate-400 hover:border-slate-400 focus:border-[#FF8C00] shadow-sm"
                  }`}
                />
              </div>

              <div className="relative group">
                <MessageSquare className={`absolute left-5 top-5 transition-all duration-300 group-focus-within:text-[#FF8C00] group-focus-within:scale-110 ${
                  isDarkMode ? "text-gray-500" : "text-slate-400"
                }`} size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onPaste={handlePaste}
                  required
                  maxLength={2000}
                  rows={5}
                  placeholder="Your message..."
                  className={`w-full pl-12 p-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20 resize-none ${
                    isDarkMode 
                      ? "bg-white/5 border border-white/10 text-white placeholder:text-gray-600 hover:border-white/20 focus:border-[#FF8C00]/50" 
                      : "bg-white border-2 border-slate-300 text-slate-900 placeholder:text-slate-400 hover:border-slate-400 focus:border-[#FF8C00] shadow-sm"
                  }`}
                />
                <div className={`text-right mt-1 text-[10px] transition-colors duration-500 ${
                  isDarkMode ? "text-gray-600" : "text-slate-400"
                }`}>
                  {formData.message.length}/2000
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "sending"}
                className="w-full py-5 bg-gradient-to-r from-[#FF8C00] to-amber-500 text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-[#FF8C00]/30 hover:shadow-xl"
              >
                {status === "sending" ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span className="font-bold">Sending...</span>
                  </div>
                ) : (
                  <>
                    <Send size={20} className="transition-transform group-hover:translate-x-1" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center font-semibold mt-4 bg-red-500/10 py-3 px-6 rounded-xl"
                >
                  Please check your inputs and try again. Ensure all fields are valid.
                </motion.p>
              )}
            </form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;