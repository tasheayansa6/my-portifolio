import { Github, Linkedin, Mail, Heart, Terminal, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8 px-6 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-white/40">
              <span className="text-white/40">~/</span>
              <span className="text-white">teshale</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/40">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>using Next.js & Tailwind</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/tasheayansa6" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/tashe-ayansa-a3a54b372" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/tasheayansa/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:teshaleayansa6@gmail.com" className="text-white/40 hover:text-accent transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="mt-6 text-center font-mono text-xs text-white/20">
          © {new Date().getFullYear()} Teshale Ayansa
        </div>
      </div>
    </footer>
  );
}
