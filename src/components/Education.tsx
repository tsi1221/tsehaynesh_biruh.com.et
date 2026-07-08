import React from "react";
import { motion } from "framer-motion";

interface JourneyItem {
  title: string;
  location: string;
  date: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
}

interface EducationProps {
  isDarkMode?: boolean;
}

const journeyData: JourneyItem[] = [
  {
    title: "B.S. in Software Engineering",
    location: "Jimma University | Ethiopia",
    date: "2021 – 2026",
    role: "Team Lead, Full-Stack Architect & Frontend Developer",
    description:
      "Completed a comprehensive Software Engineering program with a strong foundation in system architecture, database design, and software development. Led the 'Metina Hermata' CBTP capstone project, building a full-stack brokerage platform for real estate and automotive markets. For my final-year project, developed the frontend of EduTwin, an AI-powered educational platform, creating responsive and interactive user interfaces with modern web technologies.",
    tags: [
      "React",
      "Frontend Development",
      "Full-Stack Development",
      "System Design",
      "Database Management",
      "API Design"
    ]
  },
  {
    title: "INSA",
    location: "Full-Stack Developer Intern",
    date: "6 Month Internship",
    role: "Full-Stack Intern",
    description: "Bridged the gap between frontend aesthetics and backend logic. Built scalable web applications using the MERN stack, optimized database queries, and integrated REST APIs.",
    tags: ["Node.js", "Express", "MongoDB", "React.js", "REST APIs"]
  },
  {
    title: "DevOps & Cloud Fellowship",
    location: "Nigerian Women Techsters (NWT)",
    date: "Professional Training",
    role: "DevOps Fellow",
    link: "https://www.linkedin.com/company/nigerianwomentechsters/",
    description: "Mastered the DevOps full stack including CI/CD automation, Docker, Kubernetes, and cloud deployment. Developed soft skills aligned with global engineering standards.",
    tags: ["CI/CD", "Docker", "Kubernetes", "Cloud", "Soft Skills"]
  },
  {
    title: "Frontend Developer",
    location: "Debo Engineering",
    date: "4 Month Tenure",
    role: "Frontend Specialist",
    description: "Developed responsive, user-centric web interfaces using React and TypeScript. Collaborated with backend teams to integrate complex APIs and ensure a seamless user experience.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "UI/UX"]
  },
  {
    title: "DevOps Engineering Student",
    location: "Intensive Technical Track",
    date: "6 Month Program",
    role: "DevOps Specialist",
    description: "Deep dive into container orchestration and infrastructure-as-code. Automated deployment workflows and optimized high-availability server environments.",
    tags: ["IaC", "Automation", "Monitoring", "Linux"]
  },
  {
    title: "INSA Summer Camp",
    location: "DevOps & Backend Specialist",
    date: "3 Month Intensive",
    role: "DevOps & Backend Trainee",
    description: "Engineered secure backend systems and explored national-level security protocols with automated deployment and defensive programming.",
    tags: ["Secure Backend", "Network Defense", "DevSecOps"]
  }
];

const Education: React.FC<EducationProps> = ({ isDarkMode = true }) => {
  return (
    <section 
      id="education" 
      className={`py-24 px-6 md:px-12 font-sans min-h-screen scroll-mt-20 overflow-hidden transition-colors duration-500 ${
        isDarkMode 
          ? "bg-[#0A0A0A] text-white" 
          : "bg-gradient-to-b from-white via-white to-orange-50/20 text-slate-900"
      }`}
    >
      {/* Background Ambient Glow */}
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-colors duration-500 ${
        isDarkMode ? "bg-orange-500/3" : "bg-orange-100/50"
      }`} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className={`text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase italic transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Academic <span className="text-[#FF8C00]">Journey</span>
          </h2>
          <div className="h-1.5 w-32 bg-[#FF8C00] mb-8 mx-auto md:mx-0 shadow-[0_0_15px_#FF8C00]"></div>
          <p className={`text-lg max-w-2xl leading-relaxed font-light transition-colors duration-500 ${
            isDarkMode ? "text-gray-400" : "text-slate-600"
          }`}>
            An evolving timeline of technical mastery, from core engineering principles 
            to advanced cloud orchestration.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className={`relative border-l ml-4 transition-colors duration-500 ${
          isDarkMode ? "border-white/10" : "border-slate-300"
        }`}>
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 ml-10 relative"
            >
              {/* Glowing Node */}
              <div className={`absolute -left-11.25 top-1.5 w-4 h-4 rounded-full border-2 border-[#FF8C00] z-10 shadow-[0_0_10px_#FF8C00] transition-colors duration-500 ${
                isDarkMode ? "bg-[#0A0A0A]" : "bg-white"
              }`}></div>

              {/* Date Badge */}
              <div className="mb-2">
                <span className="text-[7px] font-mono font-bold text-[#FF8C00] bg-[#FF8C00]/10 px-2 py-1 rounded border border-[#FF8C00]/30 tracking-widest uppercase">
                  {item.date}
                </span>
              </div>

              {/* Content Card */}
              <div className="group relative">
                <div className="flex flex-col mb-4">
                  <h3 className={`text-2xl md:text-3xl font-bold group-hover:text-[#FF8C00] transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {item.title}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="ml-3 text-sm opacity-40 hover:opacity-100 transition-opacity">
                        ↗
                      </a>
                    )}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`font-medium text-sm transition-colors duration-500 ${
                      isDarkMode ? "text-gray-400" : "text-slate-600"
                    }`}>{item.location}</span>
                    <span className="w-1 h-1 bg-[#FF8C00] rounded-full"></span>
                    <span className="text-[#FF8C00]/80 text-xs font-semibold tracking-wide uppercase">{item.role}</span>
                  </div>
                </div>

                <div className={`p-6 rounded-xl border transition-all duration-500 backdrop-blur-sm shadow-xl ${
                  isDarkMode 
                    ? "bg-[#141414] border-white/5 group-hover:border-[#FF8C00]/40" 
                    : "bg-white border-slate-200 group-hover:border-[#FF8C00]/40 shadow-lg"
                }`}>
                  <p className={`leading-relaxed text-sm md:text-base mb-6 font-light transition-colors duration-500 ${
                    isDarkMode ? "text-gray-400" : "text-slate-600"
                  }`}>
                    {item.description}
                  </p>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border rounded-full hover:bg-[#FF8C00] hover:text-black hover:border-[#FF8C00] transition-all cursor-default ${
                          isDarkMode 
                            ? "bg-white/5 border-white/10 text-gray-300" 
                            : "bg-slate-50 border-slate-200 text-slate-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;