import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order Online — Delivery & Pickup",
  description:
    "Order Harvest International Kitchen for delivery on DoorDash, Uber Eats and Grubhub. Or call to pick up shawarma, kabobs and lamb shank at our El Cajon location.",
  alternates: { canonical: "/order" },
};

const platforms = [
  {
    name: "DoorDash",
    href: site.ordering.doordash,
    tagline: "Fastest delivery zone in El Cajon",
    badge: "Most reviews",
    notes: [
      "50+ ratings, 3.9★",
      "DashPass eligible",
      "Same-day delivery",
    ],
  },
  {
    name: "Uber Eats",
    href: site.ordering.ubereats,
    tagline: "Most-liked: Beef Shawarma Sandwich",
    badge: "Uber One eligible",
    notes: [
      "Open until 11:50 PM most nights",
      "$0 delivery for Uber One",
      "85%+ customer satisfaction",
    ],
  },
  {
    name: "Grubhub",
    href: site.ordering.grubhub,
    tagline: "Look for free delivery deals",
    badge: "Promo eligible",
    notes: [
      "Grubhub+ free delivery",
      "Group order ready",
      "Reorder favorites",
    ],
  },
];

export default function OrderPage() {
  return (
    <>
      <PageHero
        eyebrow="⟢ Order Online"
        title="Three platforms."
        italic="One kitchen."
        subtitle="Every major delivery app is live. Pick the one with your favorite perks — or call us to pick up directly from the counter."
      />

      <section className="relative py-16 lg:py-24 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-5">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-7 lg:p-9 border border-[var(--color-line)] hover:border-[var(--color-saffron)] rounded-sm bg-[var(--color-bg-elev)] transition-all hover:-translate-y-1 duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="eyebrow text-[10px] text-[var(--color-pomegranate-soft)] border border-[var(--color-pomegranate)]/40 px-2 py-1 rounded-sm">
                    {p.badge}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-saffron)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    aria-hidden="true"
                  >
                    <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
                <h2 className="display text-[2.25rem] leading-none mb-3">
                  {p.name}
                </h2>
                <p className="text-[13.5px] text-[var(--color-ink-dim)] mb-7">
                  {p.tagline}
                </p>
                <ul className="space-y-2 pt-5 border-t border-[var(--color-line)]">
                  {p.notes.map((n) => (
                    <li
                      key={n}
                      className="flex items-center gap-2 text-[12.5px] text-[var(--color-ink)]"
                    >
                      <span className="block w-1 h-1 rounded-full bg-[var(--color-saffron)]" />
                      {n}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>

          {/* In-store pickup */}
          <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center p-8 lg:p-14 border border-[var(--color-saffron)]/30 rounded-sm bg-[var(--color-bg-elev)]/40">
            <div>
              <p className="eyebrow text-[var(--color-saffron)] mb-5">
                ⟢ In-Store Pickup
              </p>
              <h2 className="display text-[clamp(2rem,4vw,3.25rem)] leading-tight mb-5">
                Skip the apps.
                <br />
                <em className="display-italic text-[var(--color-saffron)]">
                  Pick up direct.
                </em>
              </h2>
              <p className="text-[15px] leading-relaxed text-[var(--color-ink-dim)] mb-7">
                Call the kitchen to place a pickup order. We'll have it hot
                and ready when you arrive — typically within 15–20 minutes.
                Private parking on site.
              </p>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-saffron)] text-[var(--color-bg)] text-[13px] font-medium tracking-wide rounded-sm hover:bg-[var(--color-saffron-soft)] transition-colors"
              >
                Call {site.phone}
              </a>
            </div>
            <div className="space-y-4">
              <PickupRow label="Address" value={site.address.full} />
              <PickupRow label="Hours" value={`${site.hours.days} · ${site.hours.daily}`} />
              <PickupRow
                label="Lead Time"
                value="15–20 minutes for most items"
              />
              <PickupRow
                label="Parking"
                value="Private lot · Free customer parking"
              />
              <div className="pt-4 mt-4 border-t border-[var(--color-line)]">
                <Link
                  href="/menu"
                  className="eyebrow text-[var(--color-saffron)] link-underline"
                >
                  View full menu →
                </Link>
              </div>
            </div>
          </div>

          {/* Catering callout */}
          <div className="mt-10 text-center p-8 border border-[var(--color-line)] rounded-sm">
            <p className="text-[14px] text-[var(--color-ink-dim)] mb-2">
              Ordering for a large group?
            </p>
            <Link
              href="/catering"
              className="display text-[1.5rem] text-[var(--color-saffron)] link-underline"
            >
              See our catering packages →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PickupRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-4 py-3 border-b border-[var(--color-line)]/60">
      <p className="eyebrow text-[10px] text-[var(--color-ink-muted)] w-20 shrink-0">
        {label}
      </p>
      <p className="text-[14px] text-[var(--color-ink)]">{value}</p>
    </div>
  );
}
