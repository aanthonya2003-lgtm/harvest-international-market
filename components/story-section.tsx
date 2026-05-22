"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function StorySection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      // Clip path wipe on image (left to right)
      gsap.fromTo(
        ".story-img-wrap",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".story-img-wrap",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.from(".story-text > *", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".story-text",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      // Parallax on image
      gsap.to(".story-img", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".story-img-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative py-28 lg:py-40 bg-[var(--color-bg)] overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="lg:col-span-6 lg:order-2">
            <div className="story-img-wrap relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1600&q=88"
                alt="Fresh tannour flatbread being pulled from a traditional brick oven"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="story-img object-cover scale-110"
              />
              {/* Floating credential card */}
              <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-[260px] bg-[var(--color-bg)]/95 backdrop-blur-xl border border-[var(--color-line)] p-5 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-9 h-9 grid place-items-center rounded-full bg-[var(--color-saffron)]/15 text-[var(--color-saffron)]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 1l2 4.5L15 6l-3.5 3.5L12 15l-4-2.5L4 15l.5-5.5L1 6l5-.5L8 1z" fill="currentColor"/>
                    </svg>
                  </span>
                  <p className="eyebrow text-[10px] text-[var(--color-saffron)]">
                    Zabihah Halal
                  </p>
                </div>
                <p className="display text-[1.25rem] leading-tight text-[var(--color-ink)]">
                  Daily-cut by our in-house butcher
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:order-1 story-text">
            <p className="eyebrow text-[var(--color-saffron)] mb-5">
              ⟢ Our Story
            </p>
            <h2 className="display text-[clamp(2.25rem,5vw,4.5rem)] mb-8">
              We shop the world,
              <br />
              <em className="display-italic text-[var(--color-saffron)]">
                so El Cajon doesn't have to.
              </em>
            </h2>
            <div className="space-y-5 text-[15px] lg:text-[16px] leading-relaxed text-[var(--color-ink-dim)] max-w-[540px]">
              <p>
                Harvest International is an authentic market and Mediterranean
                kitchen serving the greater San Diego area. Our buyers source
                the freshest local produce while importing pantry items from
                across the Middle East, Persia, Eastern Europe and Russia.
              </p>
              <p>
                Our El Cajon store specializes in Middle Eastern cuisine — from
                tannour bread pulled hot from our brick oven to halal cuts
                prepared daily. Our Balboa location in San Diego carries a
                tailored Persian and Eastern European selection.
              </p>
              <p>
                Whether you're shopping a single loaf, catering an entire
                wedding, or grabbing kabobs after work — we've curated every
                department to feel like home.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[var(--color-saffron)] text-[var(--color-saffron)] hover:bg-[var(--color-saffron)] hover:text-[var(--color-bg)] text-[13px] tracking-wide rounded-sm transition-colors"
              >
                Read Full Story
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden="true">
                  <path d="M1 4.5H11M11 4.5L7.5 1M11 4.5L7.5 8" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              </Link>
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[13px] tracking-wide text-[var(--color-ink)] link-underline"
              >
                Catering Inquiry →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
