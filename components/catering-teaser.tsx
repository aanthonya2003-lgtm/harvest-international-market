"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const packages = [
  {
    title: "Couple's Feast",
    price: "$29.99",
    serves: "Serves 2–3",
    detail:
      "Beef + chicken kabobs, beef & chicken shawarma over basmati rice.",
  },
  {
    title: "Family of Four",
    price: "$69.99",
    serves: "Serves 4–6",
    detail:
      "4 beef + 4 chicken kabobs, 3 chicken tikka, shawarma, rice & tannour bread.",
  },
  {
    title: "Gathering of Eight",
    price: "$129.99",
    serves: "Serves 8–10",
    detail:
      "8 beef + 8 chicken kabobs, tikka, shawarma, cream chops & 2 lb pickles.",
  },
];

export function CateringTeaser() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".cat-pkg", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-bg-elev)]"
    >
      {/* BG photo at low opacity */}
      <div className="absolute inset-0 opacity-[0.12]">
        <Image
          src="https://harvestinternationalmarket.com/wp-content/uploads/2015/06/Catering_New.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-elev)] via-transparent to-[var(--color-bg-elev)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <div>
            <p className="eyebrow text-[var(--color-saffron)] mb-5">
              ⟢ Full-Service Catering
            </p>
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[700px]">
              Set up & delivery
              <br />
              <em className="display-italic text-[var(--color-saffron)]">
                across San Diego.
              </em>
            </h2>
          </div>
          <p className="text-[15px] text-[var(--color-ink-dim)] max-w-sm leading-relaxed">
            From two-person dinners to two-hundred-person weddings — every
            package is custom-tailored from the items in our store. Set-up and
            delivery available.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {packages.map((p) => (
            <div
              key={p.title}
              className="cat-pkg group relative p-7 lg:p-9 bg-[var(--color-bg)] border border-[var(--color-line)] hover:border-[var(--color-saffron)] rounded-sm transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="display text-[1.6rem] leading-tight text-[var(--color-ink)]">
                  {p.title}
                </h3>
                <p className="eyebrow text-[10px] text-[var(--color-ink-muted)]">
                  {p.serves}
                </p>
              </div>
              <p className="price display text-[2.5rem] text-[var(--color-saffron)] leading-none mb-5">
                {p.price}
              </p>
              <p className="text-[13.5px] leading-relaxed text-[var(--color-ink-dim)]">
                {p.detail}
              </p>
              <span className="block w-0 group-hover:w-full h-px bg-[var(--color-saffron)] mt-7 transition-[width] duration-700 ease-out" />
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 lg:p-8 border border-[var(--color-line)] rounded-sm bg-[var(--color-bg)]/40">
          <div>
            <p className="text-[14px] text-[var(--color-ink-dim)]">
              Need something larger? Corporate, wedding, or community event?
            </p>
          </div>
          <Link
            href="/catering"
            className="shrink-0 inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--color-saffron)] text-[var(--color-bg)] text-[13px] font-medium tracking-wide rounded-sm hover:bg-[var(--color-saffron-soft)] transition-colors"
          >
            Request Catering Quote
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
