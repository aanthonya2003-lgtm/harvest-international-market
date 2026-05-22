"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const platforms = [
  {
    name: "DoorDash",
    href: site.ordering.doordash,
    tag: "Fastest in El Cajon",
  },
  {
    name: "Uber Eats",
    href: site.ordering.ubereats,
    tag: "Most ordered: Beef Shawarma",
  },
  {
    name: "Grubhub",
    href: site.ordering.grubhub,
    tag: "Free delivery deals",
  },
];

export function OrderStrip() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".plat-row", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative py-28 lg:py-36 bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="text-center mb-14 lg:mb-16">
          <p className="eyebrow text-[var(--color-saffron)] mb-5">
            ⟢ Hot Kitchen, Delivered
          </p>
          <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[820px] mx-auto">
            Kabobs to your couch in
            <br />
            <em className="display-italic text-[var(--color-saffron)]">under 35 minutes.</em>
          </h2>
          <p className="text-[15px] text-[var(--color-ink-dim)] mt-6 max-w-[560px] mx-auto leading-relaxed">
            All three major platforms are live. Beef Shawarma Sandwich is the
            #1 most-liked item across every app.
          </p>
        </div>

        <div className="border-t border-[var(--color-line)]">
          {platforms.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="plat-row group grid grid-cols-[40px_1fr_auto] md:grid-cols-[60px_1fr_1fr_auto] items-center gap-4 md:gap-6 py-7 lg:py-9 border-b border-[var(--color-line)] hover:border-[var(--color-saffron)] transition-colors"
            >
              <span className="eyebrow text-[10px] text-[var(--color-ink-muted)]">
                0{i + 1}
              </span>
              <h3 className="display text-[1.75rem] lg:text-[2.5rem] leading-none text-[var(--color-ink)] group-hover:text-[var(--color-saffron)] transition-colors">
                {p.name}
              </h3>
              <p className="hidden md:block text-[13px] text-[var(--color-ink-dim)]">
                {p.tag}
              </p>
              <span className="inline-flex items-center gap-2 text-[12px] eyebrow text-[var(--color-saffron)]">
                <span className="hidden md:inline">Open</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11L11 3M11 3H5M11 3V9"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <p className="text-center mt-12 text-[13px] text-[var(--color-ink-muted)]">
          Prefer in-store? Call{" "}
          <a
            href={`tel:${site.phoneRaw}`}
            className="text-[var(--color-saffron)] hover:text-[var(--color-saffron-soft)] link-underline"
          >
            {site.phone}
          </a>{" "}
          for pickup orders.
        </p>
      </div>
    </section>
  );
}
