"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Testimonial {
  quote: string;
  author: string;
  source: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I probably visit Harvest 4 to 5 times a week. Reasonable produce, halal butcher, all of the Middle Eastern, Mediterranean, Asian and Russian canned goods, spices, olives, cheeses. People there are super friendly. This is my favorite market in San Diego.",
    author: "Verified Reviewer",
    source: "TripAdvisor",
  },
  {
    quote:
      "We love Harvest International's selection of fresh breads, just like home!",
    author: "Manal M.",
    source: "El Cajon, CA",
  },
  {
    quote:
      "One of my favorite Middle Eastern Markets. I love their Arabic bread. Their Kabob is very delicious too. Good customer service. Private parking available.",
    author: "Rami H.",
    source: "Yelp",
  },
  {
    quote:
      "The produce looked better and cheaper than any regular supermarket in the area.",
    author: "Verified Customer",
    source: "Google Maps",
  },
  {
    quote:
      "Crafting the essence of Iraq's culinary heritage. Freshly baked bread tantalizes your taste buds like nowhere else on Earth.",
    author: "Verified Customer",
    source: "Press Mention",
  },
];

export function TestimonialsMarquee() {
  const trackA = useRef<HTMLDivElement>(null);
  const trackB = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!trackA.current || !trackB.current) return;

    // Two opposing rows
    const tweenA = gsap.to(trackA.current, {
      xPercent: -50,
      duration: 60,
      ease: "none",
      repeat: -1,
    });
    const tweenB = gsap.to(trackB.current, {
      xPercent: 50,
      duration: 70,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover
    const el = root.current;
    if (el) {
      const enter = () => {
        tweenA.timeScale(0.2);
        tweenB.timeScale(0.2);
      };
      const leave = () => {
        tweenA.timeScale(1);
        tweenB.timeScale(1);
      };
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      return () => {
        tweenA.kill();
        tweenB.kill();
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    }
  }, []);

  // Duplicate array for seamless loop
  const items = [...testimonials, ...testimonials];
  const itemsReverse = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section
      ref={root}
      className="relative py-28 lg:py-36 bg-[var(--color-bg-elev)] border-y border-[var(--color-line)] overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-14 lg:mb-20">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow text-[var(--color-saffron)] mb-5">
            ⟢ Customer Voices
          </p>
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[820px]">
            Twelve years of <em className="display-italic text-[var(--color-saffron)]">return visits.</em>
          </h2>
        </div>
      </div>

      {/* Row 1 — moves left */}
      <div className="relative overflow-hidden">
        <div ref={trackA} className="marquee gap-5 lg:gap-8 px-3">
          {items.map((t, i) => (
            <TestimonialCard key={`a-${i}`} t={t} />
          ))}
        </div>
        <FadeMask />
      </div>

      {/* Row 2 — moves right */}
      <div className="relative overflow-hidden mt-5 lg:mt-8">
        <div ref={trackB} className="marquee gap-5 lg:gap-8 px-3 -translate-x-1/2">
          {itemsReverse.map((t, i) => (
            <TestimonialCard key={`b-${i}`} t={t} variant="alt" />
          ))}
        </div>
        <FadeMask />
      </div>
    </section>
  );
}

function FadeMask() {
  return (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 lg:w-48 bg-gradient-to-r from-[var(--color-bg-elev)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 lg:w-48 bg-gradient-to-l from-[var(--color-bg-elev)] to-transparent z-10" />
    </>
  );
}

function TestimonialCard({
  t,
  variant,
}: {
  t: Testimonial;
  variant?: "alt";
}) {
  return (
    <figure
      className={`shrink-0 w-[340px] lg:w-[440px] p-7 lg:p-9 border ${
        variant === "alt"
          ? "border-[var(--color-line)] bg-[var(--color-bg)]/40"
          : "border-[var(--color-line)] bg-[var(--color-bg)]"
      } rounded-sm`}
    >
      <div className="text-[var(--color-saffron)] mb-4 text-3xl leading-none display">"</div>
      <blockquote className="text-[14px] lg:text-[15px] leading-relaxed text-[var(--color-ink-dim)]">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-[var(--color-line)] flex items-center justify-between">
        <p className="text-[13px] text-[var(--color-ink)] font-medium">{t.author}</p>
        <p className="eyebrow text-[10px] text-[var(--color-ink-muted)]">{t.source}</p>
      </figcaption>
    </figure>
  );
}
