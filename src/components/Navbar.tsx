"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/80 backdrop-blur-xl border-b border-gold-500/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500 to-gold-300 flex items-center justify-center font-black text-navy-950 text-sm tracking-tight">
            JP
          </div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-gold-400 transition-colors">
            JP Trading Capital
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-gold-400 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-gold-500/20 transition-all hover:scale-105 active:scale-95"
          >
            Join Here
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur-xl border-t border-gold-500/10 px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-slate-300 hover:text-gold-400 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-semibold rounded-lg"
          >
            Join Here
          </a>
        </div>
      )}
    </nav>
  );
}
