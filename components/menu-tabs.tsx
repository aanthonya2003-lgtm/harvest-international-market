"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { kitchenMenu, groceryDepartments } from "@/lib/menu";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Tab = "kitchen" | "market";

export function MenuTabs() {
  const [tab, setTab] = useState<Tab>("kitchen");
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, [tab]);

  return (
    <section ref={root} className="relative py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-12 lg:mb-16 border-b border-[var(--color-line)]">
          <TabButton active={tab === "kitchen"} onClick={() => setTab("kitchen")}>
            Kitchen Menu
          </TabButton>
          <TabButton active={tab === "market"} onClick={() => setTab("market")}>
            Market Departments
          </TabButton>
        </div>

        <AnimatePresence mode="wait">
          {tab === "kitchen" ? (
            <motion.div
              key="kitchen"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <KitchenContent />
            </motion.div>
          ) : (
            <motion.div
              key="market"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <MarketContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="relative px-5 lg:px-7 py-4 text-[13px] tracking-wide transition-colors"
    >
      <span
        className={`relative z-10 ${
          active ? "text-[var(--color-saffron)]" : "text-[var(--color-ink-muted)]"
        }`}
      >
        {children}
      </span>
      {active && (
        <motion.span
          layoutId="tab-indicator"
          className="absolute -bottom-px left-0 right-0 h-[2px] bg-[var(--color-saffron)]"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  );
}

function KitchenContent() {
  return (
    <div className="space-y-20 lg:space-y-28">
      {kitchenMenu.map((section) => (
        <div key={section.id} id={section.id} className="scroll-mt-24">
          <div className="flex items-end justify-between gap-6 mb-10 lg:mb-12 pb-5 border-b border-[var(--color-line)]">
            <div>
              <p className="eyebrow text-[var(--color-saffron)] mb-3">
                ⟢ {section.subtitle}
              </p>
              <h2 className="display text-[clamp(2rem,4vw,3.5rem)] leading-none">
                {section.title}
              </h2>
            </div>
            <p className="hidden md:block eyebrow text-[10px] text-[var(--color-ink-muted)]">
              {section.items.length} items
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-1 lg:gap-y-2">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="group flex items-baseline justify-between gap-5 py-5 border-b border-[var(--color-line)]/60 hover:bg-[var(--color-bg-elev)]/40 transition-colors px-3 -mx-3"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-[15px] lg:text-[16px] font-medium text-[var(--color-ink)]">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="eyebrow text-[9px] text-[var(--color-pomegranate-soft)] border border-[var(--color-pomegranate)]/40 px-1.5 py-0.5 rounded-sm">
                        Top Seller
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-[13px] leading-relaxed text-[var(--color-ink-dim)] max-w-[420px]">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className="price text-[15px] text-[var(--color-saffron)] shrink-0">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-16 p-8 lg:p-10 border border-[var(--color-line)] rounded-sm bg-[var(--color-bg-elev)]/40">
        <p className="eyebrow text-[var(--color-saffron)] mb-3">⟢ Disclaimer</p>
        <p className="text-[13px] leading-relaxed text-[var(--color-ink-dim)] max-w-[680px]">
          Prices match active third-party delivery menus and are subject to
          change. In-store pricing may vary. Daily kitchen specials available —
          call the kitchen for what's hot today.
        </p>
      </div>
    </div>
  );
}

function MarketContent() {
  return (
    <div className="space-y-20 lg:space-y-32">
      {groceryDepartments.map((d, i) => (
        <div
          key={d.id}
          id={d.id}
          className={`scroll-mt-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
            i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="lg:col-span-6 relative aspect-[5/4] overflow-hidden rounded-sm">
            <Image
              src={d.image}
              alt={d.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6">
            <p className="eyebrow text-[var(--color-saffron)] mb-4">
              ⟢ Department {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-6">
              {d.title}
            </h2>
            <p className="text-[15px] lg:text-[16px] leading-relaxed text-[var(--color-ink-dim)] mb-8 max-w-[520px]">
              {d.description}
            </p>
            <ul className="space-y-2.5 mb-10">
              {d.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 text-[14px] text-[var(--color-ink)]"
                >
                  <span className="block w-1.5 h-1.5 rounded-full bg-[var(--color-saffron)]" />
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[13px] eyebrow text-[var(--color-saffron)] link-underline"
            >
              Ask about this department →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
