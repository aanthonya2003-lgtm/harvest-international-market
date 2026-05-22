"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function MapSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".map-card", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".map-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-28 lg:py-32 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Info */}
          <div className="map-card lg:col-span-5 flex flex-col justify-between p-8 lg:p-12 border border-[var(--color-line)] rounded-sm bg-[var(--color-bg-elev)]">
            <div>
              <p className="eyebrow text-[var(--color-saffron)] mb-5">
                ⟢ Visit El Cajon
              </p>
              <h2 className="display text-[clamp(2rem,4vw,3.5rem)] mb-8 leading-[1.05]">
                Find us on
                <br />
                <em className="display-italic text-[var(--color-saffron)]">
                  East Main Street.
                </em>
              </h2>

              <div className="space-y-6">
                <Field
                  label="Address"
                  value={`${site.address.line1}\n${site.address.city}, ${site.address.state} ${site.address.zip}`}
                  href={site.maps.href}
                />
                <Field
                  label="Phone"
                  value={site.phone}
                  href={`tel:${site.phoneRaw}`}
                  saffron
                />
                <Field
                  label="Hours"
                  value={`${site.hours.days}\n${site.hours.daily}`}
                />
                <Field
                  label="Parking"
                  value="Private lot · Free customer parking"
                />
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--color-line)]">
              <p className="eyebrow text-[10px] text-[var(--color-ink-muted)] mb-3">
                Second Location
              </p>
              <p className="display text-[1.25rem] text-[var(--color-ink)]">
                {site.balboa.name}
              </p>
              <p className="text-[13px] text-[var(--color-ink-dim)] mt-1">
                {site.balboa.city} · {site.balboa.focus} specialties
              </p>
            </div>
          </div>

          {/* Map embed */}
          <div className="map-card lg:col-span-7 relative aspect-[4/3] lg:aspect-auto min-h-[420px] overflow-hidden rounded-sm border border-[var(--color-line)]">
            <iframe
              title="Map of Harvest International Market, 733 E Main St, El Cajon, CA"
              src="https://www.google.com/maps?q=733+E+Main+St,+El+Cajon,+CA+92020&output=embed"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{
                filter: "invert(0.92) hue-rotate(180deg) saturate(0.7) brightness(0.9)",
              }}
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-[var(--color-bg)] border border-[var(--color-line)] rounded-sm pointer-events-none">
              <p className="eyebrow text-[10px] text-[var(--color-saffron)]">
                ◉ El Cajon, CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  href,
  saffron,
}: {
  label: string;
  value: string;
  href?: string;
  saffron?: boolean;
}) {
  const valueContent = (
    <p
      className={`text-[15px] leading-relaxed whitespace-pre-line ${
        saffron
          ? "price text-[1.05rem] text-[var(--color-saffron)]"
          : "text-[var(--color-ink)]"
      }`}
    >
      {value}
    </p>
  );

  return (
    <div>
      <p className="eyebrow text-[10px] text-[var(--color-ink-muted)] mb-2">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="block hover:text-[var(--color-saffron)] transition-colors"
        >
          {valueContent}
        </a>
      ) : (
        valueContent
      )}
    </div>
  );
}
