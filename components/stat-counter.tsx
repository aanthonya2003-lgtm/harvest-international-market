"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub?: string;
}

const stats: Stat[] = [
  { value: 8, label: "Departments", sub: "Under one roof" },
  { value: 365, label: "Days Open", sub: "7AM – 10PM Daily" },
  { value: 100, suffix: "%", label: "Halal", sub: "Zabihah Certified" },
  { value: 3, label: "Delivery Apps", sub: "DoorDash · UberEats · Grubhub" },
];

export function StatsStrip() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const target = Number(el.dataset.value || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString();
          },
        });
      });

      gsap.from(".stat-line", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative py-20 lg:py-28 border-y border-[var(--color-line)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="stat-line">
              <div className="flex items-baseline gap-1 mb-3">
                {s.prefix && (
                  <span className="display text-[2rem] text-[var(--color-saffron)]">
                    {s.prefix}
                  </span>
                )}
                <span
                  className="stat-num display text-[clamp(3rem,7vw,5.5rem)] leading-none text-[var(--color-saffron)]"
                  data-value={s.value}
                >
                  0
                </span>
                {s.suffix && (
                  <span className="display text-[2rem] text-[var(--color-saffron)]">
                    {s.suffix}
                  </span>
                )}
              </div>
              <p className="text-[13px] font-medium text-[var(--color-ink)] mb-1">
                {s.label}
              </p>
              {s.sub && (
                <p className="eyebrow text-[10px] text-[var(--color-ink-muted)]">
                  {s.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
