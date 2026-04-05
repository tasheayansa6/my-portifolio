"use client";

import Link from "next/link";
import MobileNav from "@/components/ui/MobileNav";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Work", path: "#work" },
  { name: "Contact", path: "#contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 text-white bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center pr-16">
        {/* Logo */}
        <a href="#home">
          <h1 className="text-2xl font-semibold">
            Teshale<span className="text-accent">.</span>
          </h1>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-sm font-medium capitalize text-white/70 hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold bg-accent text-[#0a0a0f] px-5 py-2 rounded-full hover:bg-accent/80 transition-colors duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
