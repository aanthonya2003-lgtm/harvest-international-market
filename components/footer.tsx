import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Wordmark } from "./nav";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-line)] bg-[var(--color-bg)] mt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Wordmark />
            <p className="text-[14px] leading-relaxed text-[var(--color-ink-dim)] max-w-sm">
              {site.tagline}. Authentic Middle Eastern groceries, halal butcher, brick-oven breads
              and a full Mediterranean kitchen in the heart of El Cajon.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook — brand blue badge for instant recognition */}
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 pl-1.5 pr-4 h-10 border border-[var(--color-line)] rounded-full hover:border-[#1877F2]/60 transition-colors"
                aria-label="Follow Harvest on Facebook"
              >
                <span className="w-7 h-7 grid place-items-center rounded-full bg-[#1877F2] group-hover:bg-[#0E5FCB] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M13.5 21v-7.5h2.5l.375-3h-2.875V8.625c0-.875.25-1.5 1.5-1.5h1.625V4.5c-.25 0-1.25-.125-2.375-.125-2.375 0-4 1.5-4 4.125V10.5H8v3h2.25V21h3.25z"/>
                  </svg>
                </span>
                <span className="eyebrow text-[10px] text-[var(--color-ink-dim)] group-hover:text-[var(--color-ink)] transition-colors">
                  Facebook
                </span>
              </a>

              {/* Yelp — brand red badge with white burst + wordmark for guaranteed recognition */}
              <a
                href={site.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 pl-1.5 pr-4 h-10 border border-[var(--color-line)] rounded-full hover:border-[#D32323]/60 transition-colors"
                aria-label="Read Harvest reviews on Yelp"
              >
                <span className="w-7 h-7 grid place-items-center rounded-full bg-[#D32323] group-hover:bg-[#A91515] transition-colors">
                  <span className="text-white font-bold text-[9px] tracking-tight leading-none lowercase">
                    yelp
                  </span>
                </span>
                <span className="eyebrow text-[10px] text-[var(--color-ink-dim)] group-hover:text-[var(--color-ink)] transition-colors">
                  Yelp
                </span>
              </a>
            </div>
          </div>

          {/* Visit */}
          <div className="lg:col-span-3 space-y-4">
            <p className="eyebrow text-[var(--color-ink-muted)]">Visit El Cajon</p>
            <div className="space-y-2 text-[14px] text-[var(--color-ink)]">
              <a
                href={site.maps.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[var(--color-saffron)] transition-colors"
              >
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="block price text-[15px] text-[var(--color-saffron)] hover:text-[var(--color-saffron-soft)] transition-colors"
              >
                {site.phone}
              </a>
              <p className="text-[13px] text-[var(--color-ink-dim)] pt-2">
                Open Daily<br />
                {site.hours.daily}
              </p>
            </div>
          </div>

          {/* Browse */}
          <div className="lg:col-span-2 space-y-4">
            <p className="eyebrow text-[var(--color-ink-muted)]">Browse</p>
            <ul className="space-y-2.5 text-[14px]">
              {navLinks.slice(1).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[var(--color-ink-dim)] hover:text-[var(--color-saffron)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div className="lg:col-span-3 space-y-4">
            <p className="eyebrow text-[var(--color-ink-muted)]">Order Delivery</p>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a
                  href={site.ordering.doordash}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-ink-dim)] hover:text-[var(--color-saffron)] transition-colors"
                >
                  DoorDash →
                </a>
              </li>
              <li>
                <a
                  href={site.ordering.ubereats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-ink-dim)] hover:text-[var(--color-saffron)] transition-colors"
                >
                  Uber Eats →
                </a>
              </li>
              <li>
                <a
                  href={site.ordering.grubhub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-ink-dim)] hover:text-[var(--color-saffron)] transition-colors"
                >
                  Grubhub →
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/catering"
                  className="text-[var(--color-saffron)] hover:text-[var(--color-saffron-soft)] transition-colors"
                >
                  Catering Inquiry →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-[var(--color-line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-[var(--color-ink-muted)]">
            © {new Date().getFullYear()} Harvest International Market. All rights reserved.
          </p>
          <p className="text-[11px] eyebrow text-[var(--color-ink-muted)]">
            Two San Diego Locations · El Cajon · Balboa
          </p>
        </div>
      </div>
    </footer>
  );
}
