"use client";

import { useEffect, useRef } from "react";

export default function About() {
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

  const criteria = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      text: "Use a consistent, rule-based strategy",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      text: "Have a proven track record of profitability",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "Operate within our strict risk management framework",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual card */}
          <div className="fade-up">
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 gold-glow">
                {/* Decorative chart visual */}
                <div className="relative h-64 flex items-end justify-center gap-3 overflow-hidden">
                  {[40, 55, 35, 70, 50, 85, 65, 90, 75, 95, 80, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md transition-all duration-700"
                        style={{
                          height: `${h}%`,
                          background: `linear-gradient(to top, rgba(201,168,76,${0.2 + i * 0.05}), rgba(201,168,76,${0.05 + i * 0.02}))`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    )
                  )}
                  {/* Growth line overlay */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points="0,80 10,70 20,75 30,55 40,60 50,40 60,45 70,30 80,35 90,20 100,15"
                      fill="none"
                      stroke="rgba(201,168,76,0.6)"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gold-500/10 pt-6">
                  <div>
                    <div className="text-sm text-slate-500">Copy Trading Returns</div>
                    <div className="text-2xl font-bold text-gold-400">Growing Steadily</div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold bg-emerald-400/10 px-3 py-1.5 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Consistent
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 flex items-center gap-2 float">
                <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(52,211,153)" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white">Verified Traders</span>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="fade-up">
              <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6 tracking-tight">
                What is JP Trading Capital?
              </h2>
            </div>

            <div className="space-y-5 text-slate-400 leading-relaxed fade-up">
              <p>
                At JP Trading Capital, our mission is to make the benefits of
                trading accessible to everyone — without requiring years of study
                or prior experience.
              </p>
              <p>
                Trading can be highly profitable. But the reality is simple:{" "}
                <span className="text-white font-medium">
                  over 90% of people who attempt to trade on their own end up
                  losing money.
                </span>{" "}
                So instead of doing it all yourself, why not copy proven traders?
              </p>
              <p>
                With copy trading, you connect your personal broker account to
                the accounts of our carefully selected traders and automated
                trading bots. Every trade they execute is automatically mirrored
                on your account —{" "}
                <span className="text-gold-400 font-medium">
                  even while you sleep.
                </span>
              </p>
            </div>

            <div className="mt-10 fade-up">
              <p className="text-slate-300 font-medium mb-6">
                We leverage our deep market expertise to select traders and bots
                that:
              </p>
              <div className="space-y-4">
                {criteria.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 glass-card rounded-xl px-5 py-4 transition-all duration-300"
                  >
                    <div className="text-gold-400 shrink-0">{item.icon}</div>
                    <span className="text-slate-200 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-lg text-slate-300 fade-up">
              This way, you can tap into the power of professional trading in
              just one click —{" "}
              <span className="text-gold-400 font-semibold">
                even with zero experience.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
