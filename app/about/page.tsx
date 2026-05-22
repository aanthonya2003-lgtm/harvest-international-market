import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { StatsStrip } from "@/components/stat-counter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Our Story, Two Locations, Halal Promise",
  description:
    "Harvest International Market is a family-run authentic Middle Eastern market and Mediterranean kitchen with two San Diego locations: El Cajon (Middle Eastern focus) and Balboa (Persian / Eastern European focus).",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Sourced Directly",
    description:
      "Our buyers travel and import directly — strategic relationships with international producers mean shelves stocked with brands you actually grew up with.",
  },
  {
    title: "Halal Promise",
    description:
      "Every cut from our butcher counter is Zabihah-certified. The kitchen serves the same standards. There are no exceptions.",
  },
  {
    title: "Authentic, Not Adapted",
    description:
      "We don't water down our recipes or simplify our pantry for the supermarket palette. If it's in our store, it's how grandmother made it.",
  },
  {
    title: "Two Cuisines, One Family",
    description:
      "El Cajon focuses on Middle Eastern. Balboa focuses on Persian and Eastern European. One ownership, two specialty doors.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="⟢ About Harvest"
        title="We shop the world"
        italic="so San Diego doesn't have to."
        subtitle="An authentic international market and Mediterranean kitchen serving El Cajon and greater San Diego since our doors opened."
      />

      {/* Story */}
      <section className="relative py-16 lg:py-24 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1600&q=88"
                  alt="Brick oven tannour bread baking at Harvest International Market"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="eyebrow text-[var(--color-saffron)] mb-5">
                ⟢ Our Story
              </p>
              <h2 className="display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-7">
                An international market —
                <br />
                <em className="display-italic text-[var(--color-saffron)]">
                  for the people who built one.
                </em>
              </h2>
              <div className="space-y-5 text-[15px] lg:text-[16px] leading-relaxed text-[var(--color-ink-dim)] max-w-[540px]">
                <p>
                  Harvest International Market is an authentic international
                  market and Mediterranean kitchen serving the greater San Diego
                  area. We are dedicated to providing only the finest authentic
                  grocery items for our valued customers.
                </p>
                <p>
                  We shop the world for you every day. Our buyers not only
                  source the freshest local produce, but also import a variety
                  of products from around the world. We have developed strategic
                  relationships with international product companies allowing
                  our buyers to stock our shelves with Middle Eastern, Eastern
                  European, Persian and Russian authentic items that our
                  customers have grown accustomed to.
                </p>
                <p>
                  Each of our stores also features an authentic Mediterranean
                  kitchen serving fresh, homemade Middle Eastern favorites. Our
                  bakery specializes in fine pastries and breads traditional to
                  our customer base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Two locations */}
      <section className="relative py-20 lg:py-28 bg-[var(--color-bg-elev)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="text-center mb-14 lg:mb-20">
            <p className="eyebrow text-[var(--color-saffron)] mb-5">
              ⟢ Two San Diego Locations
            </p>
            <h2 className="display text-[clamp(2.25rem,5vw,4rem)] max-w-[820px] mx-auto">
              One family.
              <em className="display-italic text-[var(--color-saffron)]"> Two specialties.</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-8 lg:p-12 border border-[var(--color-saffron)]/30 bg-[var(--color-bg)] rounded-sm">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="eyebrow text-[10px] text-[var(--color-saffron)] mb-3">
                    Location 01 · Original
                  </p>
                  <h3 className="display text-[2.25rem] leading-tight">
                    El Cajon
                  </h3>
                </div>
                <span className="eyebrow text-[10px] text-[var(--color-ink-muted)] border border-[var(--color-line)] px-2 py-1 rounded-sm">
                  Middle Eastern
                </span>
              </div>
              <div className="space-y-4 mb-8">
                <Row label="Address" value={site.address.full} />
                <Row label="Phone" value={site.phone} href={`tel:${site.phoneRaw}`} />
                <Row label="Hours" value={`Daily · ${site.hours.daily}`} />
                <Row label="Cuisine" value="Middle Eastern · Iraqi" />
                <Row label="Kitchen" value="Full Mediterranean menu" />
              </div>
              <a
                href={site.maps.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 eyebrow text-[var(--color-saffron)] link-underline"
              >
                Open in Maps →
              </a>
            </div>

            <div className="p-8 lg:p-12 border border-[var(--color-line)] bg-[var(--color-bg)] rounded-sm">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="eyebrow text-[10px] text-[var(--color-saffron)] mb-3">
                    Location 02 · San Diego
                  </p>
                  <h3 className="display text-[2.25rem] leading-tight">
                    Balboa
                  </h3>
                </div>
                <span className="eyebrow text-[10px] text-[var(--color-ink-muted)] border border-[var(--color-line)] px-2 py-1 rounded-sm">
                  Persian / E. European
                </span>
              </div>
              <div className="space-y-4 mb-8">
                <Row label="Area" value="Balboa Ave, San Diego, CA" />
                <Row label="Cuisine" value="Persian · Eastern European" />
                <Row label="Bakery" value="Specialty Persian sweets" />
                <Row label="Pantry" value="Russian & Persian imports" />
                <Row label="Kitchen" value="Hot & cold mezze focus" />
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 eyebrow text-[var(--color-saffron)] link-underline"
              >
                Ask about hours →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 lg:py-28 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
            <div>
              <p className="eyebrow text-[var(--color-saffron)] mb-5">
                ⟢ How We Operate
              </p>
              <h2 className="display text-[clamp(2.25rem,5vw,4rem)] max-w-[600px]">
                The values
                <br />
                <em className="display-italic text-[var(--color-saffron)]">
                  behind every shelf.
                </em>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-20 lg:gap-y-16">
            {values.map((v, i) => (
              <div key={v.title}>
                <p className="eyebrow text-[10px] text-[var(--color-saffron)] mb-4">
                  {String(i + 1).padStart(2, "0")} · Principle
                </p>
                <h3 className="display text-[1.75rem] lg:text-[2.25rem] leading-tight mb-4">
                  {v.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[var(--color-ink-dim)] max-w-[480px]">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsMarquee />
    </>
  );
}

function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-baseline gap-4 py-3 border-b border-[var(--color-line)]/60">
      <p className="eyebrow text-[10px] text-[var(--color-ink-muted)] w-20 shrink-0">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="text-[14px] text-[var(--color-saffron)] hover:text-[var(--color-saffron-soft)] link-underline"
        >
          {value}
        </a>
      ) : (
        <p className="text-[14px] text-[var(--color-ink)]">{value}</p>
      )}
    </div>
  );
}
