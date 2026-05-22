import { site } from "./site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["FoodEstablishment", "GroceryStore"],
    "@id": `${site.url}#business`,
    name: site.name,
    alternateName: "Harvest International Market & Kitchen",
    description: site.description,
    url: site.url,
    telephone: site.phone,
    image: `${site.url}/opengraph-image`,
    priceRange: "$$",
    servesCuisine: [
      "Middle Eastern",
      "Mediterranean",
      "Iraqi",
      "Persian",
      "Halal",
    ],
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.7948,
      longitude: -116.9421,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    hasMenu: `${site.url}/menu`,
    acceptsReservations: false,
    sameAs: [
      site.social.facebook,
      site.social.yelp,
      site.ordering.doordash,
      site.ordering.ubereats,
      site.ordering.grubhub,
    ],
  };
}

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}#restaurant`,
    name: "Harvest International Kitchen",
    description:
      "Authentic Mediterranean kitchen serving fresh kabobs, shawarma, falafel, lamb shank and Iraqi specialties — all halal-certified.",
    url: `${site.url}/menu`,
    telephone: site.phone,
    image: `${site.url}/opengraph-image`,
    priceRange: "$$",
    servesCuisine: ["Middle Eastern", "Mediterranean", "Iraqi", "Halal"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    hasMenu: `${site.url}/menu`,
    acceptsReservations: false,
  };
}
