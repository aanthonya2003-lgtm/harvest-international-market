import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { WeeklyCountdown } from "@/components/weekly-countdown";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Weekly Ad — Specials & Deals",
  description:
    "This week's specials at Harvest International Market in El Cajon. Halal cuts, fresh produce, dairy, pantry and bakery deals updated weekly.",
  alternates: { canonical: "/weekly-ad" },
};

const deals = [
  {
    category: "Halal Butcher",
    title: "Lamb Shoulder",
    subtitle: "Bone-in, cut to order",
    badge: "Member Favorite",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=85",
    alt: "Bone-in lamb shoulder cut by butcher",
    note: "Ask the counter for cut preferences.",
  },
  {
    category: "Fresh Produce",
    title: "Persian Cucumbers",
    subtitle: "Crisp · imported",
    badge: "By the Case",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=85",
    alt: "Display of Persian cucumbers and fresh produce",
    note: "Case discounts available.",
  },
  {
    category: "Kitchen",
    title: "Family Kabob Pack",
    subtitle: "Beef + chicken combo",
    badge: "Hot Special",
    image:
      "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?auto=format&fit=crop&w=1200&q=85",
    alt: "Family-size kabob plate with rice and grilled vegetables",
    note: "Ready in under 20 minutes.",
  },
  {
    category: "Bakery",
    title: "House Baklava Tray",
    subtitle: "Hand-rolled · phyllo & pistachio",
    badge: "Gift-Ready",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=85",
    alt: "Hand-rolled baklava and Middle Eastern pastries",
    note: "Pre-order whole trays for events.",
  },
  {
    category: "Grocery",
    title: "Imported Olive Oils",
    subtitle: "Lebanese · Greek · Tunisian",
    badge: "New Arrivals",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85",
    alt: "Bottles of imported Mediterranean olive oils on shelf",
    note: "Tasting at the deli counter weekends.",
  },
  {
    category: "Deli",
    title: "Cheese & Olive Bar",
    subtitle: "Self-serve · imported selections",
    badge: "Daily Fresh",
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1200&q=85",
    alt: "Mediterranean cheese and olive bar with imports",
    note: "Restocked daily by the deli team.",
  },
];

export default function WeeklyAdPage() {
  return (
    <>
      <PageHero
        eyebrow="⟢ This Week at Harvest"
        title="Fresh deals."
        italic="Updated every Monday."
        subtitle="Pricing on weekly specials is confirmed in-store. Stop by, call the counter, or check back here for the latest highlights."
      />

      <WeeklyCountdown />

      {/* Deals grid */}
      <section className="relative py-16 lg:py-24 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {deals.map((d, i) => (
              <article
                key={d.title}
                className="group relative bg-[var(--color-bg-elev)] border border-[var(--color-line)] hover:border-[var(--color-saffron)] rounded-sm overflow-hidden transition-colors"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 eyebrow text-[10px] text-[var(--color-bg)] bg-[var(--color-saffron)] px-2 py-1 rounded-sm">
                    {d.badge}
                  </span>
                  <span className="absolute top-4 right-4 eyebrow text-[9px] text-[var(--color-saffron)] border border-[var(--color-saffron)]/40 bg-[var(--color-bg)]/70 backdrop-blur px-2 py-1 rounded-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6 lg:p-7">
                  <p className="eyebrow text-[10px] text-[var(--color-ink-muted)] mb-2">
                    {d.category}
                  </p>
                  <h3 className="display text-[1.75rem] leading-tight mb-2">
                    {d.title}
                  </h3>
                  <p className="text-[13px] text-[var(--color-ink-dim)] mb-5">
                    {d.subtitle}
                  </p>
                  <p className="text-[12px] text-[var(--color-ink-muted)] pt-4 border-t border-[var(--color-line)]">
                    {d.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 p-8 lg:p-10 border border-[var(--color-line)] rounded-sm bg-[var(--color-bg-elev)]/40 text-center">
            <p className="eyebrow text-[var(--color-saffron)] mb-3">
              ⟢ Want pricing for a specific item?
            </p>
            <h3 className="display text-[1.85rem] leading-tight mb-5">
              Call the counter — it changes daily.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--color-saffron)] text-[var(--color-bg)] text-[13px] font-medium tracking-wide rounded-sm hover:bg-[var(--color-saffron-soft)] transition-colors"
              >
                Call {site.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[var(--color-line)] text-[13px] hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)] transition-colors rounded-sm"
              >
                Send a Question →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
