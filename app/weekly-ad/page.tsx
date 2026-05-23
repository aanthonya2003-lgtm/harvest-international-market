import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { WeeklyCountdown } from "@/components/weekly-countdown";
import { officialPhotos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Weekly Ad — Specials & Deals",
  description:
    "This week's specials at Harvest International Market in El Cajon. Halal cuts, fresh produce, brick-oven breads, bakery, kitchen deals and imported grocery — updated weekly.",
  alternates: { canonical: "/weekly-ad" },
};

interface Deal {
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  alt: string;
  note: string;
}

// Six evergreen weekly highlights. Pricing where shown is verified against
// active third-party menus; in-store pricing may vary and is confirmed at
// the counter. Weekly rotation announced on Facebook (facebook.com/harvestinmkt).
const deals: Deal[] = [
  {
    category: "Fresh Produce",
    title: "Fresh Produce Deals",
    subtitle: "New arrivals daily",
    badge: "Daily Fresh",
    image: officialPhotos.produce,
    alt: "Bell peppers, cucumbers, squash and herbs in the Harvest produce section",
    note: "Persian cucumbers, fresh dates, pomegranates and seasonal imports — ask in-store for today's case-priced specials.",
  },
  {
    category: "Halal Butcher",
    title: "Halal Meat Special",
    subtitle: "Zabihah-certified · cut daily",
    badge: "Member Favorite",
    image: officialPhotos.halalMeats,
    alt: "Halal beef steaks on the grill at Harvest International",
    note: "Lamb, beef, chicken and goat cut to your specs by the butcher counter. Market pricing — ask for today's special cut.",
  },
  {
    category: "Brick Oven",
    title: "Brick Oven Bread",
    subtitle: "Freshly pulled every morning",
    badge: "Pulled Today",
    image: officialPhotos.brickOvenBreads,
    alt: "Flatbread baking inside the Harvest brick oven with visible flame",
    note: "Authentic tannour and Iraqi flatbreads — pulled hot throughout the day. Stop by before noon for the freshest pull.",
  },
  {
    category: "Bakery & Sweets",
    title: "Bakery Special",
    subtitle: "Baklava and sweets, made in-house",
    badge: "Gift-Ready",
    image: officialPhotos.bakery,
    alt: "Trays of pistachio baklava at the Harvest bakery",
    note: "Hand-rolled baklava, ma'amoul and qatayef baked fresh. Pre-order whole trays for holidays and events — $17.99 base.",
  },
  {
    category: "Mediterranean Kitchen",
    title: "Kitchen Deal — Beef Shawarma",
    subtitle: "Sandwich · $8.99",
    badge: "Top Seller",
    image: officialPhotos.kitchen,
    alt: "Beef shawarma sandwich wrapped in pita with onions and tomato",
    note: "The #1 most-liked item across DoorDash, Uber Eats and Grubhub. Hot, fresh, and ready in under 20 minutes for pickup.",
  },
  {
    category: "Authentic Grocery",
    title: "Grocery Import",
    subtitle: "New Mediterranean selections weekly",
    badge: "New Arrivals",
    image: officialPhotos.authenticGrocery,
    alt: "Aisles of imported basmati rice and pantry brands at Harvest",
    note: "New shipments of Middle Eastern, Persian, Russian and Eastern European pantry imports land weekly. Ask staff about this week's arrivals.",
  },
];

export default function WeeklyAdPage() {
  return (
    <>
      <PageHero
        eyebrow="⟢ This Week at Harvest"
        title="Fresh deals."
        italic="Updated every Monday."
        subtitle="Six evergreen highlights from every department. Pricing on weekly specials is confirmed in-store — and the latest rotating ad lives on our Facebook page."
      />

      {/* Deals grid — featured FIRST so visitors see real content immediately */}
      <section className="relative py-12 lg:py-16 bg-[var(--color-bg)]">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/60 via-transparent to-transparent" />
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
                  <p className="text-[12.5px] leading-relaxed text-[var(--color-ink-muted)] pt-4 border-t border-[var(--color-line)]">
                    {d.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Pricing disclaimer */}
          <p className="mt-10 text-center text-[12.5px] leading-relaxed text-[var(--color-ink-muted)] max-w-[640px] mx-auto">
            Pricing confirmed in-store. Check Facebook for the latest weekly ad:{" "}
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-saffron)] hover:text-[var(--color-saffron-soft)] link-underline"
            >
              facebook.com/harvestinmkt
            </a>
          </p>
        </div>
      </section>

      {/* Countdown sits BELOW the deals so visitors see content first,
          then learn when the next refresh drops. */}
      <WeeklyCountdown />

      {/* Final CTA */}
      <section className="relative py-16 lg:py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="p-8 lg:p-10 border border-[var(--color-line)] rounded-sm bg-[var(--color-bg-elev)]/40 text-center">
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
