"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, italic, subtitle }: PageHeroProps) {
  const root = useRef<HTMLDivElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!root.current || !headline.current) return;
    const ctx = gsap.context(() => {
      const split = new SplitType(headline.current!, {
        types: "words,chars",
      });
      gsap.set(split.chars, { yPercent: 110, opacity: 0 });
      gsap.set(".ph-eyebrow", { opacity: 0, y: 10 });
      gsap.set(".ph-sub", { opacity: 0, y: 12 });

      const tl = gsap.timeline({ delay: 0.1 });
      tl.to(".ph-eyebrow", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "expo.out",
      })
        .to(
          split.chars,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.012,
            ease: "expo.out",
          },
          "-=0.4"
        )
        .to(
          ".ph-sub",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "expo.out",
          },
          "-=0.4"
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative pt-[180px] lg:pt-[220px] pb-16 lg:pb-24 hero-radial overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-6 ph-eyebrow">
          <span className="block w-12 h-px bg-[var(--color-saffron)]" />
          <p className="eyebrow text-[var(--color-saffron)]">{eyebrow}</p>
        </div>
        <h1
          ref={headline}
          className="display text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] max-w-[1100px]"
        >
          {title}
          {italic && (
            <>
              {" "}
              <em className="display-italic text-[var(--color-saffron)]">
                {italic}
              </em>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="ph-sub mt-7 max-w-[640px] text-[17px] lg:text-[18px] leading-relaxed text-[var(--color-ink-dim)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
