"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0D1F12]/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-base">🛒</div>
          <span className="font-display font-black text-white text-xl">
            Go<span className="text-orange-500">Eat</span>
            <span className="text-[10px] bg-green-500 text-[#0D1F12] font-bold px-1.5 py-0.5 rounded ml-1 align-middle">AI</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Features","How it works","Pricing"].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g,"-")}`}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors">{item}</a>
          ))}
        </div>
        <a href="#waitlist"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5">
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
