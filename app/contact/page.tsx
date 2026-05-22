import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Visit, Call, or Send a Message",
  description:
    "Visit Harvest International Market at 733 E Main St, El Cajon, CA 92020. Open daily 7AM–10PM. Call (619) 442-0413 or send a message via our contact form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="⟢ Contact Harvest"
        title="Stop by, call us,"
        italic="or send a note."
        subtitle="We're on East Main Street, open daily from 7 in the morning until 10 at night. Pick the channel that works best."
      />

      <section className="relative py-16 lg:py-24 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Info column */}
            <div className="lg:col-span-5 space-y-10">
              <ContactBlock
                label="Phone"
                primary={site.phone}
                href={`tel:${site.phoneRaw}`}
                note="Direct line to the store. Best for pickup orders, weekly ad questions, and catering."
              />
              <ContactBlock
                label="Visit"
                primary={`${site.address.line1}\n${site.address.city}, ${site.address.state} ${site.address.zip}`}
                href={site.maps.href}
                note="Private customer parking lot on site. Open daily."
              />
              <ContactBlock
                label="Hours"
                primary={`${site.hours.days}\n${site.hours.daily}`}
                note="Same hours every day of the week, holidays included unless announced."
              />
              <ContactBlock
                label="Order Delivery"
                primary="DoorDash · Uber Eats · Grubhub"
                href="/order"
                note="All three platforms are live. Pick your favorite."
              />

              <div className="pt-8 border-t border-[var(--color-line)] space-y-3">
                <p className="eyebrow text-[10px] text-[var(--color-ink-muted)]">
                  Follow Along
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[var(--color-ink)] hover:text-[var(--color-saffron)] link-underline"
                  >
                    Facebook →
                  </a>
                  <a
                    href={site.social.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[var(--color-ink)] hover:text-[var(--color-saffron)] link-underline"
                  >
                    Yelp →
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--color-saffron)] mb-5">
                ⟢ Send a Message
              </p>
              <h2 className="display text-[clamp(2rem,4vw,3.25rem)] leading-tight mb-8">
                Tell us
                <em className="display-italic text-[var(--color-saffron)]">
                  {" "}
                  what you need.
                </em>
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map embed full width */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-20">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-sm border border-[var(--color-line)]">
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
          </div>
        </div>
      </section>
    </>
  );
}

function ContactBlock({
  label,
  primary,
  href,
  note,
}: {
  label: string;
  primary: string;
  href?: string;
  note?: string;
}) {
  return (
    <div>
      <p className="eyebrow text-[10px] text-[var(--color-ink-muted)] mb-3">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="display text-[1.75rem] lg:text-[2.25rem] leading-tight text-[var(--color-ink)] hover:text-[var(--color-saffron)] transition-colors whitespace-pre-line block"
        >
          {primary}
        </a>
      ) : (
        <p className="display text-[1.75rem] lg:text-[2.25rem] leading-tight text-[var(--color-ink)] whitespace-pre-line">
          {primary}
        </p>
      )}
      {note && (
        <p className="text-[13px] leading-relaxed text-[var(--color-ink-dim)] mt-3 max-w-[400px]">
          {note}
        </p>
      )}
    </div>
  );
}
