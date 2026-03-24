"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    title: "Copy Trading — Algo & Professional Traders",
    description:
      "Automatically mirror the trades of our vetted professional traders and high-performance algorithms. No screen time required.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    accent: "from-gold-500/20 to-gold-500/5",
    borderAccent: "group-hover:border-gold-500/30",
  },
  {
    title: "Market Insights & Prop Firm Guidance",
    description:
      "Receive real-time market insights from our expert traders to help you pass prop firm challenges or grow your own trading capital with confidence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    accent: "from-accent-blue/20 to-accent-blue/5",
    borderAccent: "group-hover:border-accent-blue/30",
  },
  {
    title: "Coaching Sessions & Live Streams",
    description:
      "Learn directly from experienced traders through live coaching sessions and interactive live streams. Whether you're a beginner or sharpening your edge, there's always something to gain.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    accent: "from-accent-cyan/20 to-accent-cyan/5",
    borderAccent: "group-hover:border-accent-cyan/30",
  },
  {
    title: "Fully Automated Algo Trading",
    description:
      "Our algorithms work around the clock, generating returns while you sleep. Set it up once and let the technology do the heavy lifting.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    accent: "from-gold-500/20 to-gold-500/5",
    borderAccent: "group-hover:border-gold-500/30",
  },
  {
    title: "Always in Control of Your Own Money",
    description:
      "Your funds remain in your own broker account at all times. We never hold or manage your capital directly — you stay 100% in control.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    accent: "from-emerald-400/20 to-emerald-400/5",
    borderAccent: "group-hover:border-emerald-400/30",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".fade-up");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 fade-up">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">
            Everything You Need to
            <br />
            <span className="text-gradient-gold">Trade Smarter</span>
          </h2>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {features.slice(0, 3).map((feature, i) => (
            <div
              key={i}
              className={`fade-up group glass-card rounded-2xl p-7 transition-all duration-500 border border-transparent ${feature.borderAccent}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center text-gold-400 mb-5`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 wider cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.slice(3).map((feature, i) => (
            <div
              key={i}
              className={`fade-up group glass-card rounded-2xl p-7 transition-all duration-500 border border-transparent ${feature.borderAccent}`}
              style={{ transitionDelay: `${(i + 3) * 100}ms` }}
            >
              <div className="flex gap-5 items-start">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center text-gold-400 shrink-0`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
