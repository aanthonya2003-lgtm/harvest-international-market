import type { Metadata, Viewport } from "next";
import { cormorant, inter, dmMono } from "@/lib/fonts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/lib/site";
import { getLocalBusinessSchema, getRestaurantSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Harvest International Market | Middle Eastern Grocery & Halal Kitchen — El Cajon, CA",
    template: "%s · Harvest International Market",
  },
  description: site.description,
  keywords: [
    "Middle Eastern market El Cajon",
    "halal butcher El Cajon",
    "Mediterranean kitchen El Cajon",
    "Iraqi bakery San Diego",
    "shawarma El Cajon",
    "kabob El Cajon",
    "international grocery San Diego",
    "halal meat San Diego",
    "Persian groceries San Diego",
    "Arabic bread El Cajon",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title:
      "Harvest International Market | Middle Eastern Grocery & Halal Kitchen — El Cajon",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Harvest International Market — El Cajon",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1208",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getRestaurantSchema()),
          }}
        />
      </head>
      <body className="grain">
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
