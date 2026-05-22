import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { MenuTabs } from "@/components/menu-tabs";
import { OrderStrip } from "@/components/order-strip";

export const metadata: Metadata = {
  title: "Menu — Kitchen & Departments",
  description:
    "Full menu of Harvest International Kitchen: shawarma, kabobs, lamb shank, falafel, salads, dips, and brick-oven breads. Plus a guide to every grocery department.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="⟢ Kitchen & Departments"
        title="The menu."
        italic="The market."
        subtitle="Browse our Mediterranean kitchen — fresh shawarma, kabobs, lamb shank and house-made salads. Then explore the six grocery departments waiting inside."
      />
      <MenuTabs />
      <OrderStrip />
    </>
  );
}
