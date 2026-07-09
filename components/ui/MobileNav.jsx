"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: 'home', path: '#home' },
  { name: 'about', path: '#about' },
  { name: 'work', path: '#work' },
  { name: 'contact', path: '#contact' },
];

const MobileNav = () => {
  const pathname = usePathname();
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
      {/* Trigger button */}
      <SheetTrigger asChild>
        <button className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
          <span className="sr-only">Open menu</span>
        </button>
      </SheetTrigger>

      {/* Drawer content */}
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        {/* Logo */}
        <div className="text-2xl font-bold mb-8">
          Teshale<span className="text-accent">.</span>
        </div>

        {/* Links and Hire Me button */}
        <div className="flex flex-col gap-4">
          {links.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link
                href={link.path}
                key={index}
                className={`text-lg capitalize transition-all duration-300 hover:text-accent ${
                  isActive ? 'text-accent font-semibold' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="bg-accent text-white px-3 py-2 rounded-full text-center hover:bg-accent/80 transition-colors mt-4"
          >
            Hire me
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
