import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { StatsStrip } from "@/components/stat-counter";
import { StorySection } from "@/components/story-section";
import { OrderStrip } from "@/components/order-strip";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { CateringTeaser } from "@/components/catering-teaser";
import { MapSection } from "@/components/map-section";
import { TrustMarquee } from "@/components/trust-marquee";

export const metadata: Metadata = {
  title:
    "Harvest International Market | Middle Eastern Grocery & Halal Kitchen — El Cajon, CA",
  description:
    "El Cajon's authentic Middle Eastern market: fresh produce, Zabihah halal butcher, brick-oven Iraqi breads, kabobs, shawarma, falafel and full-service catering. Order delivery on DoorDash, Uber Eats, Grubhub.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <CategoryGrid />
      <StatsStrip />
      <StorySection />
      <OrderStrip />
      <TestimonialsMarquee />
      <CateringTeaser />
      <MapSection />
    </>
  );
}
