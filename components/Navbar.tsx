"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-[#121212]/70 backdrop-blur-xl border-white/[0.05] py-4 shadow-2xl shadow-black/50" 
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-2xl tracking-tighter hover:text-zinc-300 transition-colors">
          Raghav Kumar
        </Link>
        
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-sm tracking-wide font-medium text-zinc-400 hover:text-white transition-colors uppercase"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-zinc-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
