"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const items = [
  "Zabihah Halal Certified",
  "Brick Oven Tannour Bread",
  "Daily-Cut Butcher",
  "Two San Diego Locations",
  "Catering Across SD County",
  "World-Sourced Produce",
  "Fresh Mediterranean Kitchen",
  "Open 7 Days · 7AM – 10PM",
];

export function TrustMarquee() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!track.current) return;
    const tween = gsap.to(track.current, {
      xPercent: -50,
      duration: 45,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  const all = [...items, ...items, ...items];

  return (
    <section
      className="relative py-6 border-y border-[var(--color-line)] bg-[var(--color-bg)] overflow-hidden"
      aria-label="Trust signals"
    >
      <div ref={track} className="marquee gap-12 will-change-transform">
        {all.map((t, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="eyebrow text-[11px] text-[var(--color-ink-dim)] whitespace-nowrap">
              ⟢ {t}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
