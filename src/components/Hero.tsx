"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 hero-glow" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(201,168,76,0.04), transparent 40%)",
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl float"
        style={{ animationDelay: "-3s" }}
      />

      {/* Subtle animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/3 w-px h-32 bg-gradient-to-t from-transparent via-accent-blue/10 to-transparent" />
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-transparent via-gold-500/10 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-gold-500 pulse-dot" />
          <span className="text-gold-400 text-sm font-medium tracking-wide">
            Private Trading Community
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8">
          <span className="text-white">Join the private</span>
          <br />
          <span className="text-white">community where</span>
          <br />
          <span className="text-gradient-gold">traders grow.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Copy proven traders and automated bots. No experience required.
          Your funds never leave your own broker account.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#join"
            className="group relative px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Join Here</span>
            <div className="absolute inset-0 rounded-xl shimmer" />
          </a>
          <a
            href="#about"
            className="px-10 py-4 border border-slate-700 text-slate-300 font-medium text-lg rounded-xl hover:border-gold-500/30 hover:text-gold-400 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "500+", label: "Members" },
            { value: "24/7", label: "Algo Trading" },
            { value: "100%", label: "Your Control" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-gold-500/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
