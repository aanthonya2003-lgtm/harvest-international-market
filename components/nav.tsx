"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOrderOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-line)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px] lg:h-[84px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Harvest International Market home">
              <Wordmark />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-[13px] tracking-wide link-underline transition-colors ${
                    pathname === l.href
                      ? "text-[var(--color-saffron)]"
                      : "text-[var(--color-ink)] hover:text-[var(--color-saffron-soft)]"
                  }`}
                >
                  {l.label}
                </Link>
              ))}

              {/* Order dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOrderOpen(true)}
                onMouseLeave={() => setOrderOpen(false)}
              >
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-saffron)] text-[var(--color-bg)] text-[13px] font-medium tracking-wide rounded-sm hover:bg-[var(--color-saffron-soft)] transition-colors"
                  aria-expanded={orderOpen}
                  aria-haspopup="true"
                >
                  Order Now
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {orderOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full pt-2 w-[220px]"
                    >
                      <div className="bg-[var(--color-bg-elev)] border border-[var(--color-line)] rounded-sm shadow-[var(--shadow-lift)] overflow-hidden">
                        <OrderLink href={site.ordering.doordash} label="DoorDash" />
                        <OrderLink href={site.ordering.ubereats} label="Uber Eats" />
                        <OrderLink href={site.ordering.grubhub} label="Grubhub" />
                        <Link
                          href="/order"
                          className="block px-5 py-3 text-[12px] eyebrow text-[var(--color-saffron)] border-t border-[var(--color-line)] hover:bg-[var(--color-bg-elev-2)] transition-colors"
                        >
                          All ordering options →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 grid place-items-center text-[var(--color-ink)]"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <div className="relative w-6 h-4">
                <span
                  className={`absolute left-0 top-0 w-full h-px bg-current transition-transform duration-300 ${
                    open ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-full h-px bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 w-full h-px bg-current transition-transform duration-300 ${
                    open ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[var(--color-bg)]"
          >
            <div className="flex flex-col h-full pt-[72px] px-6 pb-10">
              <nav className="flex-1 flex flex-col gap-1 pt-10" aria-label="Mobile">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={l.href}
                      className="display block py-4 text-[2.5rem] leading-none text-[var(--color-ink)] hover:text-[var(--color-saffron)] transition-colors border-b border-[var(--color-line)]"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="space-y-4"
              >
                <p className="eyebrow text-[var(--color-ink-muted)]">Order Direct</p>
                <div className="grid grid-cols-3 gap-2">
                  <MobileOrderBtn href={site.ordering.doordash} label="DoorDash" />
                  <MobileOrderBtn href={site.ordering.ubereats} label="Uber Eats" />
                  <MobileOrderBtn href={site.ordering.grubhub} label="Grubhub" />
                </div>
                <div className="pt-4 border-t border-[var(--color-line)]">
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="display text-[1.5rem] text-[var(--color-saffron)]"
                  >
                    {site.phone}
                  </a>
                  <p className="text-[13px] text-[var(--color-ink-dim)] mt-1">
                    {site.address.full}
                  </p>
                  <p className="text-[12px] text-[var(--color-ink-muted)] mt-1">
                    {site.hours.label}
                  </p>
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] eyebrow text-[var(--color-ink-muted)] hover:text-[var(--color-saffron)]"
                  >
                    Facebook
                  </a>
                  <span className="text-[var(--color-line)]">·</span>
                  <a
                    href={site.social.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] eyebrow text-[var(--color-ink-muted)] hover:text-[var(--color-saffron)]"
                  >
                    Yelp
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function OrderLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between px-5 py-3 text-[13px] text-[var(--color-ink)] hover:bg-[var(--color-bg-elev-2)] hover:text-[var(--color-saffron)] transition-colors"
    >
      <span>{label}</span>
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
        <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </a>
  );
}

function MobileOrderBtn({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center py-3 px-2 text-[11px] eyebrow border border-[var(--color-line)] hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)] transition-colors rounded-sm"
    >
      {label}
    </a>
  );
}

export function Wordmark() {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        className="text-[var(--color-saffron)]"
      >
        {/* Stylized harvest wreath */}
        <circle cx="17" cy="17" r="16" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <path
          d="M17 6 L17 28 M17 6 C14 9 12 12 12 17 C12 22 14 25 17 28 M17 6 C20 9 22 12 22 17 C22 22 20 25 17 28"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="17" cy="17" r="2" fill="currentColor" />
      </svg>
      <div className="leading-none">
        <div className="display text-[1.25rem] tracking-tight text-[var(--color-ink)]">
          Harvest
        </div>
        <div className="eyebrow text-[8px] text-[var(--color-saffron)] mt-0.5">
          International Market
        </div>
      </div>
    </div>
  );
}
