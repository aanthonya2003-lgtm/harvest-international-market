"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Category {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  accent: string;
}

const categories: Category[] = [
  {
    title: "Fresh Produce",
    description:
      "World-sourced fruits and vegetables — fresher and cheaper than any supermarket in El Cajon.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=85",
    alt: "Vibrant fresh produce market display with peppers, tomatoes and herbs",
    href: "/menu#produce",
    accent: "saffron",
  },
  {
    title: "Halal Butcher",
    description:
      "Zabihah-certified daily cuts of lamb, beef, chicken and goat from our in-house butcher counter.",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=85",
    alt: "Halal butcher counter with fresh cuts of meat displayed",
    href: "/menu#meats",
    accent: "pomegranate",
  },
  {
    title: "Mediterranean Kitchen",
    description:
      "Kabobs, shawarma, falafel, lamb shank and chicken tikka — cooked fresh every day.",
    image:
      "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?auto=format&fit=crop&w=1200&q=85",
    alt: "Kabob and shawarma platter with rice and grilled vegetables",
    href: "/menu#kitchen",
    accent: "saffron",
  },
  {
    title: "Brick Oven Breads",
    description:
      "Authentic tannour and Iraqi flatbreads pulled hot from our in-house brick oven.",
    image:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=1200&q=85",
    alt: "Traditional Arabic flatbread fresh from a brick oven",
    href: "/menu#breads",
    accent: "saffron",
  },
  {
    title: "Authentic Grocery",
    description:
      "Middle Eastern, Persian, Eastern European and Russian pantry staples you won't find elsewhere.",
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1200&q=85",
    alt: "Middle Eastern grocery shelves stocked with spices, olives, and imports",
    href: "/menu#grocery",
    accent: "sage",
  },
  {
    title: "Bakery & Sweets",
    description:
      "Hand-rolled baklava, ma'amoul, qatayef and traditional Mediterranean pastries baked daily.",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=85",
    alt: "Display of baklava and Middle Eastern pastries",
    href: "/menu#bakery",
    accent: "pomegranate",
  },
  {
    title: "Service Deli",
    description:
      "Cold salads, imported cheeses, cured meats and a self-serve hummus and olive bar.",
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1200&q=85",
    alt: "Mediterranean deli with cheeses, olives and salads",
    href: "/menu#deli",
    accent: "sage",
  },
  {
    title: "Full-Service Catering",
    description:
      "Wedding, corporate and event catering with set-up and delivery across San Diego.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
    alt: "Catering platter with Middle Eastern foods arranged elegantly",
    href: "/catering",
    accent: "saffron",
  },
];

export function CategoryGrid() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(".cg-eyebrow", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".cg-eyebrow",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".cg-title", {
        y: 30,
        opacity: 0,
        duration: 1.0,
        ease: "expo.out",
        delay: 0.05,
        scrollTrigger: {
          trigger: ".cg-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Card clip-path reveal
      gsap.utils.toArray<HTMLElement>(".cat-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            clipPath: "inset(0 0 100% 0)",
            y: 30,
            opacity: 0,
          },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            opacity: 1,
            duration: 1.0,
            delay: (i % 4) * 0.08,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="departments"
      className="relative py-28 lg:py-40 bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <p className="cg-eyebrow eyebrow text-[var(--color-saffron)] mb-5">
              ⟢ Eight Departments · One Roof
            </p>
            <h2 className="cg-title display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[640px]">
              From the spice souk
              <br />
              <em className="display-italic text-[var(--color-saffron)]">
                to your kitchen.
              </em>
            </h2>
          </div>
          <p className="cg-eyebrow text-[15px] text-[var(--color-ink-dim)] max-w-sm leading-relaxed">
            Every department under our roof is staffed by specialists who source
            directly — no middlemen, no mystery brands, just authentic product
            you can trust.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.title} cat={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  return (
    <Link href={cat.href} className="cat-card group block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--color-bg-elev)]"
      >
        <Image
          src={cat.image}
          alt={cat.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/30 to-transparent" />
        <div className="absolute inset-0 ring-0 ring-[var(--color-saffron)] group-hover:ring-1 ring-inset transition-all duration-300" />

        <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6">
          <div className="flex items-start justify-between">
            <span className="eyebrow text-[10px] text-[var(--color-saffron)]/80">
              {String(index + 1).padStart(2, "0")}
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-saffron)] transition-colors group-hover:rotate-[-45deg] duration-500"
              aria-hidden="true"
            >
              <path
                d="M3 11L11 3M11 3H5M11 3V9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="square"
              />
            </svg>
          </div>

          <div>
            <h3 className="display text-[1.5rem] lg:text-[1.85rem] leading-[1.05] text-[var(--color-ink)] mb-2">
              {cat.title}
            </h3>
            <p className="text-[12.5px] leading-relaxed text-[var(--color-ink-dim)] line-clamp-3 max-w-[260px]">
              {cat.description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
