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
            <div className="flex items-center gap-4 pt-2">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 grid place-items-center border border-[var(--color-line)] rounded-full hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)] transition-colors"
                aria-label="Facebook"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={site.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 grid place-items-center border border-[var(--color-line)] rounded-full hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)] transition-colors"
                aria-label="Yelp"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.16 12.594l-4.995 1.433c-1.027.295-1.951-.736-1.512-1.692l2.193-4.766a1.04 1.04 0 0 1 1.262-.541 7.5 7.5 0 0 1 3.74 2.71c.299.392.49.81.578 1.215.075.336.04.755-.34 1.06-.265.212-.66.39-.926.581zm-9.84 9.04l.265-5.211c.054-1.067 1.367-1.554 2.103-.779l3.673 3.87a1.04 1.04 0 0 1 .087 1.366 7.5 7.5 0 0 1-3.829 2.597c-.483.142-.945.183-1.358.123-.34-.049-.732-.224-.905-.652-.118-.296-.073-.733-.036-1.064zm-3.32-2.45l-4.995-1.433c-.49-.14-.882-.435-1.144-.83-.21-.32-.34-.741-.27-1.158a7.5 7.5 0 0 1 1.94-4.122c.318-.34.75-.481 1.218-.41a1.04 1.04 0 0 1 .835.95l.265 5.21c.054 1.067-1.211 1.96-2.07.79l1.221 1.003zM6.94 4.486l3.673-3.87a1.04 1.04 0 0 1 1.366-.087 7.5 7.5 0 0 1 2.598 3.829c.142.483.183.945.123 1.358-.05.34-.224.732-.652.905a1.04 1.04 0 0 1-1.064-.036l-4.211-2.586c-.901-.554-.708-1.957.167-2.513z"/>
                </svg>
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
