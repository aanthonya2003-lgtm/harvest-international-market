"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import SplitType from "split-type";
import { Magnetic } from "./magnetic-button";
import { site } from "@/lib/site";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);
  const bgImg = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      // 1. Split headline by chars + words
      const split = new SplitType(headline.current!, {
        types: "lines,words,chars",
        lineClass: "split-line",
      });

      gsap.set(split.chars, { yPercent: 110, opacity: 0 });
      gsap.set(".hero-sub-line", { yPercent: 100, opacity: 0 });
      gsap.set(".hero-cta", { y: 24, opacity: 0 });
      gsap.set(".hero-meta", { y: 16, opacity: 0 });
      gsap.set(overlay.current, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({ delay: 0.15 });

      // 4. Clip-path wipe on overlay element (saffron bar)
      tl.to(overlay.current, {
        scaleX: 1,
        duration: 1.0,
        ease: "expo.out",
      }, 0);

      tl.to(overlay.current, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.9,
        ease: "expo.inOut",
      }, 0.7);

      // 1. Character reveal on headline
      tl.to(split.chars, {
        yPercent: 0,
        opacity: 1,
        duration: 1.0,
        ease: "expo.out",
        stagger: { each: 0.018, from: "start" },
      }, 0.5);

      // 3. Stagger fade-up on subheadline + ctas
      tl.to(".hero-sub-line", {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
      }, 0.9);

      tl.to(".hero-cta", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.1,
      }, 1.1);

      tl.to(".hero-meta", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
      }, 1.3);

      // 2. Ken Burns on background (scale 1.08 → 1.0 over 8s)
      gsap.fromTo(
        bgImg.current,
        { scale: 1.08 },
        { scale: 1.0, duration: 8, ease: "power1.out" }
      );

      // Floating spice particles
      gsap.to(".spice-mote", {
        y: -22,
        x: "random(-6, 6)",
        opacity: 0.6,
        duration: 4,
        ease: "sine.inOut",
        stagger: { each: 0.4, repeat: -1, yoyo: true },
        repeat: -1,
        yoyo: true,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100dvh] w-full overflow-hidden hero-radial"
    >
      {/* Background image with Ken Burns */}
      <div ref={bgImg} className="absolute inset-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=2400&q=90"
          alt="Vibrant Middle Eastern market display with fresh spices, dates, and produce"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/85 via-[var(--color-bg)]/65 to-[var(--color-bg)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/80 via-transparent to-transparent" />
      </div>

      {/* Spice motes (floating particles) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="spice-mote absolute w-1 h-1 rounded-full bg-[var(--color-saffron)] opacity-0"
            style={{
              left: `${(i * 8.33 + 6) % 100}%`,
              top: `${30 + ((i * 17) % 50)}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-[140px] lg:pt-[160px] pb-20 min-h-[100dvh] flex flex-col justify-center">
        <div className="max-w-[920px]">
          {/* Eyebrow */}
          <div className="hero-meta flex items-center gap-3 mb-8">
            <span className="block w-12 h-px bg-[var(--color-saffron)]" />
            <p className="eyebrow text-[var(--color-saffron)]">
              El Cajon, California · Est. San Diego County
            </p>
          </div>

          {/* Saffron wipe overlay */}
          <div className="relative inline-block">
            <div
              ref={overlay}
              className="absolute inset-0 bg-[var(--color-saffron)] z-10"
              aria-hidden="true"
            />
            <h1
              ref={headline}
              className="display text-[clamp(2.75rem,8vw,7rem)] text-[var(--color-ink)]"
            >
              We Shop the World <em className="display-italic text-[var(--color-saffron)]">for you</em> Every Day.
            </h1>
          </div>

          {/* Subheadline */}
          <div className="mt-8 max-w-[640px] overflow-hidden">
            <p className="hero-sub-line text-[17px] lg:text-[19px] leading-relaxed text-[var(--color-ink-dim)]">
              Authentic Middle Eastern groceries, daily-cut halal butcher,
              brick-oven Iraqi breads and a full Mediterranean kitchen — all
              under one roof on East Main Street.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Magnetic>
              <Link
                href="/order"
                className="hero-cta group inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-saffron)] text-[var(--color-bg)] text-[14px] font-medium tracking-wide rounded-sm hover:bg-[var(--color-saffron-soft)] transition-colors"
              >
                Order Kitchen Delivery
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
            </Magnetic>

            <Link
              href="/menu"
              className="hero-cta link-underline inline-flex items-center gap-2 px-2 py-4 text-[14px] tracking-wide text-[var(--color-ink)]"
            >
              Explore Departments
            </Link>
          </div>

          {/* Quick meta */}
          <div className="hero-meta mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[720px]">
            <Meta label="Hours" value={site.hours.daily} />
            <Meta label="Phone" value={site.phone} href={`tel:${site.phoneRaw}`} />
            <Meta label="Halal" value="Zabihah Certified" />
            <Meta label="Delivery" value="3 Platforms Live" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-ink-muted)] hero-meta">
        <span className="eyebrow text-[10px]">Scroll</span>
        <span className="block w-px h-10 bg-gradient-to-b from-[var(--color-saffron)] to-transparent" />
      </div>
    </section>
  );
}

function Meta({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <p className="eyebrow text-[10px] text-[var(--color-ink-muted)] mb-1.5">
        {label}
      </p>
      <p className="text-[13px] text-[var(--color-ink)] price">{value}</p>
    </>
  );
  if (href) {
    return (
      <a href={href} className="block hover:text-[var(--color-saffron)] transition-colors">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}
