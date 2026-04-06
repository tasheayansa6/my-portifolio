"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Download, Github, Linkedin, Mail, Mail as MailIcon,
  Phone, MapPin, Instagram, GraduationCap, Code2,
  Briefcase, Globe, Award, ExternalLink, X,
} from "lucide-react";
import {
  FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaCode, FaGitAlt, FaGithub, FaLock,
} from "react-icons/fa";
import {
  SiCplusplus, SiTypescript, SiTailwindcss, SiExpress, SiMongodb,
  SiMysql, SiPostgresql, SiDjango, SiFastapi, SiNextdotjs, SiC, SiFlask, SiSqlite,
} from "react-icons/si";
import { HiLightningBolt } from "react-icons/hi";

// ─── Stack Icon ───────────────────────────────────────────────
function StackIcon({ name, size = 16 }) {
  const p = { className: "text-white", size };
  const icons = {
    "c++": <SiCplusplus {...p} />, c: <SiC {...p} />, python: <FaPython {...p} />,
    javascript: <FaJsSquare {...p} />, typescript: <SiTypescript {...p} />,
    html5: <FaHtml5 {...p} />, css3: <FaCss3Alt {...p} />, react: <FaReact {...p} />,
    "next.js": <SiNextdotjs {...p} />, "tailwind css": <SiTailwindcss {...p} />,
    nodejs: <FaNodeJs {...p} />, expressjs: <SiExpress {...p} />,
    fastapi: <HiLightningBolt {...p} />, django: <SiDjango {...p} />, flask: <SiFlask {...p} />,
    postgresql: <SiPostgresql {...p} />, mysql: <SiMysql {...p} />, sqlite: <SiSqlite {...p} />,
    mongodb: <SiMongodb {...p} />, cryptography: <FaLock {...p} />,
    git: <FaGitAlt {...p} />, github: <FaGithub {...p} />,
  };
  return icons[name.toLowerCase()] || <FaCode {...p} />;
}

// ─── Data ─────────────────────────────────────────────────────
const skills = {
  languages: [{ name: "Python" }, { name: "C" }, { name: "C++" }, { name: "JavaScript" }, { name: "TypeScript" }],
  frontend: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
  backend: [{ name: "NodeJS" }, { name: "ExpressJS" }, { name: "FastAPI" }, { name: "Django" }, { name: "Flask" }],
  database: [{ name: "MongoDB" }, { name: "MySQL" }, { name: "SQLite" }, { name: "PostgreSQL" }],
  security: [{ name: "Cryptography" }],
  devops: [{ name: "Git" }, { name: "GitHub" }],
};

const experiences = [
  { title: "Cryptography Developer", company: "INSA, Ethiopia", period: "June 30 - August 30", description: "Designed and implemented a Post-Quantum Key Encapsulation Mechanism (KEM) in C, focusing on secure key generation, encapsulation, and decapsulation aligned with modern cryptographic standards." },
  { title: "Full Stack Developer", company: "CoinPulse & Personal Projects", period: "February 2026", description: "Built CoinPulse — a real-time cryptocurrency tracking app with live price updates and market analytics using Next.js." },
  { title: "Web Based Diabetes Prediction", company: "Personal Project", period: "March 12 - Present", description: "Built a web-based diabetes prediction system using Machine Learning (Flask backend) with a responsive frontend built with HTML, Tailwind CSS, and JavaScript." },
];

const projects = [
  { id: 1, title: "Post-Quantum KEM Implementation", category: "Cryptography", description: "Implementation of Post-Quantum Key Encapsulation Mechanism using C language, resistant to quantum computer attacks.", details: "Designed and implemented a Post-Quantum Key Encapsulation Mechanism (KEM) in C, focusing on secure key generation, encapsulation, and decapsulation aligned with modern cryptographic standards. Follows NIST post-quantum cryptography guidelines.", tech: ["C", "OpenSSL", "Cryptography", "Post-Quantum"], github: "https://github.com/tasheayansa6/Post-Quantum-KEM-Implementation" },
  { id: 2, title: "Web Based Diabetes Prediction", category: "AI & ML", description: "Web-based diabetes prediction system powered by Machine Learning with a responsive frontend.", details: "Built a web-based diabetes prediction system using a Machine Learning model served via a Flask backend. The frontend is built with HTML, Tailwind CSS, and JavaScript, providing a clean and responsive interface for users to input health data and receive predictions.", tech: ["Python", "Flask", "JavaScript", "Tailwind CSS", "HTML5", "ML"], github: "https://github.com/tasheayansa6/diabetes-prediction-system" },
  { id: 3, title: "AI Resume Analyzer", category: "AI & Web", description: "AI-powered resume analysis web app that extracts key information, evaluates skills, and provides intelligent feedback.", details: "Developed an AI-powered resume analysis web application that extracts key information from uploaded resumes, evaluates skills against job descriptions, and provides intelligent, actionable feedback.", tech: ["React", "Tailwind CSS", "JavaScript", "AI"], github: "https://github.com/tasheayansa6/ai-resume-analyzer" },
  { id: 4, title: "CoinPulse", category: "Full Stack", description: "Real-time cryptocurrency tracking app with live price updates and market analytics.", details: "Built CoinPulse — a real-time cryptocurrency tracking application featuring live price updates, market analytics, and interactive charts. Developed with Next.js for fast server-side rendering and a clean, responsive UI.", tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"], github: "https://github.com/tasheayansa6/coinpulse" },
  { id: 5, title: "Portfolio Website", category: "Frontend", description: "Responsive developer portfolio built with Next.js, Tailwind CSS, and Framer Motion animations.", details: "Designed and developed this responsive portfolio website using Next.js 15, Tailwind CSS, and Framer Motion. Features smooth animations, dark theme, and fully responsive layout.", tech: ["Next.js", "Tailwind CSS", "Framer Motion"], github: "https://github.com/tasheayansa6/my-portifolio" },
];

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "teshaleayansa6@gmail.com", link: "mailto:teshaleayansa6@gmail.com" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "tashe-ayansa", link: "https://www.linkedin.com/in/tashe-ayansa-a3a54b372" },
  { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "tasheayansa6", link: "https://github.com/tasheayansa6" },
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", value: "@tasheayansa", link: "https://www.instagram.com/tasheayansa/" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+251 926 637 774", link: "tel:+251926637774" },
  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Dire Dawa, Ethiopia" },
];

// ─── Main Page ────────────────────────────────────────────────
export default function Page() {
  const [text, setText] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const fullText = "Software Engineer";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let t;
    const type = () => {
      if (!isDeleting && index <= fullText.length) {
        setText(fullText.slice(0, index++));
        t = setTimeout(type, 80);
      } else if (!isDeleting && index > fullText.length) {
        t = setTimeout(() => { isDeleting = true; type(); }, 4000);
      } else if (isDeleting && index > 0) {
        setText(fullText.slice(0, --index));
        t = setTimeout(type, 50);
      } else {
        isDeleting = false;
        t = setTimeout(type, 1000);
      }
    };
    type();
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-12 xl:px-20 pt-10">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-mono text-accent text-sm">$ whoami</motion.div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-white/80 to-accent bg-clip-text text-transparent">Teshale Ayansa</span>
              </h1>
              <div className="font-mono text-xl text-white/50 h-8">{text}<span className="animate-pulse text-accent">_</span></div>
            </div>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">Building modern, secure, and scalable web applications. Passionate about clean code, cybersecurity, and solving complex problems.</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="/Teshale_Ayansa_CV.pdf" download className="flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/80 transition-colors">
                <Download className="w-4 h-4" /> Download CV
              </a>
              <a href="https://github.com/tasheayansa6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-accent transition-all">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/tashe-ayansa-a3a54b372" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-accent transition-all">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-white/40 font-mono">
              <MailIcon className="w-4 h-4" />
              <a href="mailto:teshaleayansa6@gmail.com" className="hover:text-accent transition-colors">teshaleayansa6@gmail.com</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex-shrink-0 relative pb-14">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-dashed border-accent/40"
              />
              {/* Photo */}
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent to-white/20 p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image src="/port/tashe.jpg" alt="Teshale Ayansa" fill className="object-cover" quality={100} priority />
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full whitespace-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-sm text-white font-medium">Open to work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative z-10 py-24 px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="font-mono text-accent text-sm mb-2">$ cat about.txt</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-white/20" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <GraduationCap className="w-8 h-8 text-accent mb-4" />, title: "Education", content: (<div className="space-y-2 text-white/50"><p className="font-semibold text-white">BSc in Computer Science</p><p className="text-sm">Haramaya University</p><p className="font-mono text-accent text-sm">2023 - Present</p></div>) },
              { icon: <Briefcase className="w-8 h-8 text-accent mb-4" />, title: "Current Role", content: (<div className="space-y-2 text-white/50"><p className="font-semibold text-white">Computer Science Student</p><p className="text-sm">Haramaya University</p><p className="text-sm">AI Trainer & Full Stack Developer</p><p className="text-sm">Post-Quantum Cryptography Researcher</p><p className="text-sm font-mono text-accent mt-3">2024 - Present</p></div>) },
              { icon: <Globe className="w-8 h-8 text-accent mb-4" />, title: "Languages", content: (<div className="space-y-3 text-white/50"><div className="flex justify-between"><span>English</span><span className="text-accent">Proficient</span></div><div className="flex justify-between"><span>Oromo</span><span className="text-accent">Native</span></div><div className="flex justify-between"><span>Amharic</span><span className="text-accent">Conversational</span></div></div>) },
            ].map(({ icon, title, content }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-colors">
                {icon}<h3 className="text-xl font-semibold mb-3">{title}</h3>{content}
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="flex items-center gap-3 mb-8"><Code2 className="w-6 h-6 text-accent" /><h3 className="text-2xl font-bold">Tech Stack</h3></div>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, techs], idx) => (
                <motion.div key={category} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-colors">
                  <h4 className="font-mono text-sm text-accent mb-4 uppercase tracking-wider">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map(({ name }) => (
                      <div key={name} className="group flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-accent/50 transition-all cursor-default">
                        <StackIcon name={name} /><span className="text-sm text-white/70 group-hover:text-white transition-colors">{name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-8"><Briefcase className="w-6 h-6 text-accent" /><h3 className="text-2xl font-bold">Experience</h3></div>
            <div className="space-y-4">
              {experiences.map(({ title, company, period, description }, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div><h4 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">{title}</h4><p className="text-white/50 text-sm">{company}</p></div>
                    <div className="flex items-center gap-2">
                      {period.toLowerCase().includes("present") && <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-mono border border-accent/30 rounded-full">Current</span>}
                      <span className="font-mono text-sm text-white/40 whitespace-nowrap">{period}</span>
                    </div>
                  </div>
                  <p className="text-white/50 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="work" className="relative z-10 py-24 px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="font-mono text-accent text-sm mb-2">$ ls projects/</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-white/20" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} onClick={() => setSelectedProject(project)} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-accent/50 transition-colors">
                <div className="h-2 bg-gradient-to-r from-accent to-white/20" />
                <div className="p-6 space-y-4">
                  <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/30 px-2 py-1 rounded-full">{project.category}</span>
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors line-clamp-2">{project.title}</h3>
                  <p className="text-white/50 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, idx) => <span key={idx} className="font-mono text-xs px-2 py-1 bg-accent/10 text-accent border border-accent/30 rounded">{tech}</span>)}
                    {project.tech.length > 3 && <span className="font-mono text-xs px-2 py-1 bg-white/5 text-white/40 border border-white/10 rounded">+{project.tech.length - 3}</span>}
                  </div>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm text-white/40 hover:text-accent transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.2 }} onClick={(e) => e.stopPropagation()} className="bg-[#0a0a0f] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto">
                <div className="sticky top-0 bg-[#0a0a0f] border-b border-white/10 p-6 flex justify-between items-start z-10">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2">{selectedProject.tech.map((tech, idx) => <span key={idx} className="font-mono text-xs px-2 py-1 bg-accent/10 text-accent border border-accent/30 rounded">{tech}</span>)}</div>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-white/10 rounded-lg transition-colors border border-white/10 ml-4 flex-shrink-0"><X className="w-5 h-5" /></button>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="font-mono text-accent text-sm mb-3 uppercase tracking-wider">Overview</h3>
                    <p className="text-white/60 leading-relaxed">{selectedProject.details}</p>
                  </div>
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/80 transition-colors">
                      <Github className="w-4 h-4" /> View Code
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative z-10 py-24 px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="font-mono text-accent text-sm mb-2">$ contact --info</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-white/20" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {contactInfo.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-accent group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-sm text-white/40 mb-1">{item.label}</p>
                    {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors break-words">{item.value}</a> : <p className="text-white break-words">{item.value}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 text-center">
            <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">Open to collaboration, freelance opportunities, and interesting projects. Feel free to reach out via any platform above.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
