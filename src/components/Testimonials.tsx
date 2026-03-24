"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Alex M.",
    role: "Copy Trading Member",
    text: "I was skeptical at first, but the results speak for themselves. The copy trading setup was easy, and I've been seeing consistent returns without spending hours staring at charts.",
    avatar: "AM",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Community Member",
    text: "The coaching sessions alone are worth it. I went from knowing nothing about trading to passing my first prop firm challenge in under three months. The community support is incredible.",
    avatar: "SK",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Algo Trading Member",
    text: "What I love most is that my money stays in my own account. The algo bots run 24/7 and the risk management is strict. I finally feel confident in my trading setup.",
    avatar: "MR",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Copy Trading Member",
    text: "The transparency here is unmatched. Every trader is vetted, every strategy is explained. I've tried other communities before — this one actually delivers on its promises.",
    avatar: "DL",
    rating: 5,
  },
  {
    name: "Emma T.",
    role: "Community Member",
    text: "As a complete beginner, I was worried I'd be lost. But the live streams and market insights made everything click. The team genuinely cares about your success.",
    avatar: "ET",
    rating: 5,
  },
  {
    name: "James W.",
    role: "Algo Trading Member",
    text: "Set it and forget it — that's exactly what the algo trading delivers. The returns have been steady and I appreciate how the risk management framework keeps everything in check.",
    avatar: "JW",
    rating: 5,
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="rgb(201,168,76)"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 section-glow" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 fade-up">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">
            Hear It From{" "}
            <span className="text-gradient-gold">Our Members</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up glass-card rounded-2xl p-7 transition-all duration-500 hover:border-gold-500/20"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <StarRating />
              <p className="text-slate-300 leading-relaxed mt-4 mb-6 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500/30 to-gold-500/10 flex items-center justify-center text-gold-400 text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
