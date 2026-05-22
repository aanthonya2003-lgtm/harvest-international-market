import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CateringForm } from "@/components/catering-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catering — San Diego County",
  description:
    "Full-service Mediterranean catering across San Diego. Kabob platters, shawarma trays, hummus, salads, fresh tannour bread, baklava. Set-up and delivery available.",
  alternates: { canonical: "/catering" },
};

const packages = [
  {
    title: "Trio Tray",
    price: "$35.00",
    serves: "Serves 4–5",
    items: [
      "3 Beef Kabobs",
      "3 Chicken Tikka",
      "1 lb Beef Shawarma",
      "Tomatoes, grilled onions, rice",
      "Freshly baked tannour bread",
    ],
  },
  {
    title: "Combination Tray",
    price: "$45.00",
    serves: "Serves 6–8",
    items: [
      "5 Beef Kabobs",
      "5 Chicken Tikka",
      "1 lb Beef Shawarma",
      "1 lb Mixed Pickles",
      "Rice, tomato, onion, tannour",
    ],
  },
  {
    title: "Couple's Plate",
    price: "$29.99",
    serves: "Serves 2–3",
    items: [
      "3 Beef Kabobs",
      "3 Chicken Kabobs",
      "Beef + Chicken Shawarma",
      "Over basmati rice",
    ],
  },
  {
    title: "Family of Four",
    price: "$69.99",
    serves: "Serves 4–6",
    items: [
      "4 Beef + 4 Chicken Kabobs",
      "3 Chicken Tikka",
      "½ lb Beef + ½ lb Chicken Shawarma",
      "1 lb Mixed Pickles",
      "Rice, tomato, onion, tannour",
    ],
  },
  {
    title: "Gathering of Eight",
    price: "$129.99",
    serves: "Serves 8–10",
    items: [
      "8 Beef + 8 Chicken Kabobs",
      "5 Chicken Tikka",
      "1 lb Beef + 1 lb Chicken Shawarma",
      "1 lb Chicken Cream Chops",
      "2 lb Mixed Pickles",
      "Rice, tomato, onion, tannour",
    ],
    featured: true,
  },
  {
    title: "Custom Event",
    price: "Quote",
    serves: "20–300+ guests",
    items: [
      "Wedding & corporate menus",
      "Hot food + cold mezze stations",
      "Full set-up & breakdown",
      "Delivery county-wide",
      "Halal-certified throughout",
    ],
  },
];

export default function CateringPage() {
  return (
    <>
      <PageHero
        eyebrow="⟢ Full-Service Catering"
        title="From two-person dinners"
        italic="to two-hundred-person weddings."
        subtitle="Custom-tailored Mediterranean menus from every department in our store. Set-up and delivery available throughout San Diego County."
      />

      {/* Packages */}
      <section className="relative py-16 lg:py-24 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {packages.map((p) => (
              <article
                key={p.title}
                className={`relative p-7 lg:p-9 rounded-sm border transition-colors ${
                  p.featured
                    ? "border-[var(--color-saffron)] bg-[var(--color-saffron)]/[0.05]"
                    : "border-[var(--color-line)] hover:border-[var(--color-saffron)]"
                }`}
              >
                {p.featured && (
                  <span className="absolute top-5 right-5 eyebrow text-[9px] text-[var(--color-bg)] bg-[var(--color-saffron)] px-2 py-1 rounded-sm">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="display text-[1.85rem] leading-none mb-2 text-[var(--color-ink)]">
                    {p.title}
                  </h3>
                  <p className="eyebrow text-[10px] text-[var(--color-ink-muted)]">
                    {p.serves}
                  </p>
                </div>
                <p className="price display text-[3rem] text-[var(--color-saffron)] leading-none mb-7">
                  {p.price}
                </p>
                <ul className="space-y-2.5 pt-6 border-t border-[var(--color-line)]">
                  {p.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[13px] text-[var(--color-ink-dim)]"
                    >
                      <span className="block w-1 h-1 rounded-full bg-[var(--color-saffron)] mt-2 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Event spread image */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=2400&q=88"
              alt="Catering spread featuring kabobs, rice, salads and Middle Eastern dishes"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="relative py-20 lg:py-28 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[var(--color-saffron)] mb-5">
                ⟢ Request a Quote
              </p>
              <h2 className="display text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-7">
                Tell us about
                <br />
                <em className="display-italic text-[var(--color-saffron)]">
                  your event.
                </em>
              </h2>
              <p className="text-[15px] leading-relaxed text-[var(--color-ink-dim)] mb-8">
                Share a few details and our catering team will respond within
                24 hours with menu options, pricing and logistics. For urgent
                events under 72 hours, please call us directly.
              </p>
              <div className="space-y-4 pt-6 border-t border-[var(--color-line)]">
                <Detail label="Direct line" value={site.phone} href={`tel:${site.phoneRaw}`} />
                <Detail label="Service area" value="All of San Diego County" />
                <Detail label="Lead time" value="3+ days preferred · rush available" />
                <Detail label="Halal" value="100% Zabihah certified" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <CateringForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <p className="eyebrow text-[10px] text-[var(--color-ink-muted)] w-24 shrink-0">
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
