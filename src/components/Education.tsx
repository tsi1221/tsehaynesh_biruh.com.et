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

const journeyData: JourneyItem[] = [
  {
    title: "B.S. in Software Engineering",
    location: "Jimma University | Ethiopia",
    date: "2021 – 2026",
    role: "Team Lead & Full-Stack Architect",
    description: "Comprehensive program focused on system architecture and database design. Led the 'Metina Hermata' Capstone project for CBTP , building a full-stack brokerage platform for real estate and automotive markets.",
    tags: ["System Design", "Database Management", "API Design"]
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

const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="bg-[#0A0A0A] py-24 px-6 md:px-12 text-white font-sans min-h-screen scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
            Academic <span className="text-[#FF8C00]">Journey</span>
          </h2>
          <div className="h-1.5 w-32 bg-[#FF8C00] mb-8 mx-auto md:mx-0 shadow-[0_0_15px_#FF8C00]"></div>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-light">
            An evolving timeline of technical mastery, from core engineering principles 
            to advanced cloud orchestration.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4">
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
              <div className="absolute -left-11.25 top-1.5 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#FF8C00] z-10 shadow-[0_0_10px_#FF8C00]"></div>

              {/* Date Badge */}
              <div className="mb-2">
                <span className="text-[10px] font-mono font-bold text-[#FF8C00] bg-[#FF8C00]/10 px-2 py-1 rounded border border-[#FF8C00]/30 tracking-widest uppercase">
                  {item.date}
                </span>
              </div>

              {/* Content Card */}
              <div className="group relative">
                <div className="flex flex-col mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#FF8C00] transition-colors duration-300">
                    {item.title}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="ml-3 text-sm opacity-40 hover:opacity-100 transition-opacity">
                        ↗
                      </a>
                    )}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-400 font-medium text-sm">{item.location}</span>
                    <span className="w-1 h-1 bg-[#FF8C00] rounded-full"></span>
                    <span className="text-[#FF8C00]/80 text-xs font-semibold tracking-wide uppercase">{item.role}</span>
                  </div>
                </div>

                <div className="bg-[#141414] p-6 rounded-xl border border-white/5 group-hover:border-[#FF8C00]/40 transition-all duration-500 backdrop-blur-sm shadow-xl">
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6 font-light">
                    {item.description}
                  </p>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-gray-300 rounded-full hover:bg-[#FF8C00] hover:text-black hover:border-[#FF8C00] transition-all cursor-default"
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