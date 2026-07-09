"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: 'home', path: '#home' },
  { name: 'about', path: '#about' },
  { name: 'work', path: '#work' },
  { name: 'contact', path: '#contact' },
];

const MobileNav = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <button className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </button>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
          <span className="sr-only">Open menu</span>
        </button>
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        <div className="text-2xl font-bold mb-8">
          Teshale<span className="text-accent">.</span>
        </div>

        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              href={link.path}
              key={index}
              className="text-lg capitalize transition-all duration-300 hover:text-accent text-foreground"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-accent text-black px-3 py-2 rounded-full text-center hover:bg-accent/80 transition-colors mt-4 font-semibold"
          >
            Hire me
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
