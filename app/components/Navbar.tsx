"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#d4af37]/20 bg-[#0a192f]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        {/* Logo & Brand - UKURAN DIPERBESAR */}
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Tuka Logo" width={45} height={45} className="object-contain shadow-lg" />
          <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-[#f9e2af] uppercase">
            TUKA
          </span>
        </Link>

        {/* Desktop Menu - UKURAN FONT DIPERBESAR */}
        <div className="hidden items-center gap-10 md:flex">
          <Link href="/about" className="text-sm font-medium uppercase tracking-[0.15em] text-[#f9e2af]/80 hover:text-[#d4af37] transition-all">About</Link>
          <Link href="/projects" className="text-sm font-medium uppercase tracking-[0.15em] text-[#f9e2af]/80 hover:text-[#d4af37] transition-all">Project</Link>
          <Link href="/offer" className="group flex items-center gap-3 rounded-full border-2 border-[#d4af37]/40 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a192f] transition-all">
            Build Your Website
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Sandwich Button (Mobile Only) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <div className={`h-0.5 w-7 bg-[#d4af37] transition-all ${isOpen ? "translate-y-2 rotate-45" : ""}`}></div>
          <div className={`h-0.5 w-7 bg-[#d4af37] transition-all ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`h-0.5 w-7 bg-[#d4af37] transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="flex flex-col border-t border-[#d4af37]/10 bg-[#0a192f] p-6 md:hidden">
          <Link href="/about" onClick={() => setIsOpen(false)} className="py-4 text-base uppercase tracking-widest text-[#f9e2af]">About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="py-4 text-base uppercase tracking-widest text-[#f9e2af]">Project</Link>
          <Link href="/offer" onClick={() => setIsOpen(false)} className="mt-4 rounded-lg bg-[#d4af37] py-4 text-center text-sm font-bold uppercase tracking-widest text-[#0a192f]">Build Your Website</Link>
        </div>
      )}
    </nav>
  );
}