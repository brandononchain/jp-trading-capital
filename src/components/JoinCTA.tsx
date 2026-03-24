"use client";

import { useEffect, useRef, useState } from "react";

export default function JoinCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [spotsLeft, setSpotsLeft] = useState(23);
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 47,
    seconds: 33,
  });

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Random spot decrease for urgency
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setSpotsLeft((prev) => (prev > 5 ? prev - 1 : prev));
      },
      Math.random() * 30000 + 20000
    );
    return () => clearTimeout(timeout);
  }, [spotsLeft]);

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

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section id="join" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/8 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="fade-up glass-card rounded-3xl p-10 sm:p-14 text-center gold-glow border border-gold-500/15">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 pulse-dot" />
            <span className="text-red-400 text-sm font-semibold">
              Limited Availability
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Ready to Start{" "}
            <span className="text-gradient-gold">Growing?</span>
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Join JP Trading Capital and start copying proven traders today.
            Limited spots available to maintain our quality standards.
          </p>

          {/* Countdown timer */}
          <div className="mb-10">
            <p className="text-slate-500 text-sm mb-4 uppercase tracking-wider font-medium">
              Next intake closes in
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="counter-digit">
                <div className="text-2xl sm:text-3xl font-bold text-gold-400">
                  {pad(timeLeft.hours)}
                </div>
                <div className="text-xs text-slate-500 mt-1">Hours</div>
              </div>
              <span className="text-gold-500/40 text-2xl font-light">:</span>
              <div className="counter-digit">
                <div className="text-2xl sm:text-3xl font-bold text-gold-400">
                  {pad(timeLeft.minutes)}
                </div>
                <div className="text-xs text-slate-500 mt-1">Minutes</div>
              </div>
              <span className="text-gold-500/40 text-2xl font-light">:</span>
              <div className="counter-digit">
                <div className="text-2xl sm:text-3xl font-bold text-gold-400">
                  {pad(timeLeft.seconds)}
                </div>
                <div className="text-xs text-slate-500 mt-1">Seconds</div>
              </div>
            </div>
          </div>

          {/* Spots counter */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {["JP", "AK", "TR", "MS"].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500/40 to-gold-500/20 border-2 border-navy-900 flex items-center justify-center text-xs font-bold text-gold-300"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-slate-300 text-sm">
              Only{" "}
              <span className="text-gold-400 font-bold">{spotsLeft} spots</span>{" "}
              remaining
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>See How Many Spots Are Still Available</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 rounded-2xl shimmer" />
          </a>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Your money, your account</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>100% in your control</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Set up in minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
