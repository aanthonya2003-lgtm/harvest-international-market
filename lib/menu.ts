export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  popular?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const kitchenMenu: MenuSection[] = [
  {
    id: "sandwiches",
    title: "Sandwiches",
    subtitle: "Wrapped fresh in our tannour bread",
    items: [
      {
        name: "Beef Shawarma Sandwich",
        description:
          "Slow-roasted beef shawarma, pickles, tahini, tomato — wrapped in tannour.",
        price: "$8.99",
        popular: true,
      },
      {
        name: "Chicken Shawarma Sandwich",
        description: "Marinated chicken shawarma, garlic, pickles, tomato.",
        price: "$8.99",
        popular: true,
      },
      {
        name: "Falafel Sandwich",
        description: "Crisp falafel, tahini, fresh herbs, pickled vegetables.",
        price: "$8.99",
        popular: true,
      },
      {
        name: "Beef Kabob Sandwich",
        description: "Grilled beef kabob, grilled onion, tomato, tannour wrap.",
        price: "$8.99",
      },
    ],
  },
  {
    id: "plates",
    title: "Kitchen Plates",
    subtitle: "Served with basmati rice, salad & tahini",
    items: [
      {
        name: "Beef Shawarma Plate",
        description: "Tender beef shawarma over rice, fresh salad, tahini sauce.",
        price: "$19.99",
      },
      {
        name: "Chicken Shawarma Plate",
        description: "Marinated chicken shawarma over rice with salad and tahini.",
        price: "$18.99",
      },
      {
        name: "Beef Kabob Plate",
        description: "Two skewers of seasoned ground beef, grilled to order.",
        price: "$12.99",
      },
      {
        name: "Chicken Kabob Plate",
        description: "Two skewers of marinated chicken kabob, charcoal-grilled.",
        price: "$12.99",
      },
      {
        name: "Kabob Combo Plate",
        description: "Beef + chicken kabob combo with rice, salad, tahini.",
        price: "$14.99",
        popular: true,
      },
      {
        name: "Lamb Shank Plate",
        description: "Slow-braised lamb shank over basmati rice, traditional spices.",
        price: "$15.99",
      },
      {
        name: "Falafel Plate",
        description: "Six house-made falafel with hummus, salad and pita.",
        price: "$12.99",
      },
      {
        name: "Beef Tikka (Each)",
        description: "Marinated beef tikka skewers — order by the piece.",
        price: "$9.99",
      },
    ],
  },
  {
    id: "salads-dips",
    title: "Cold Salads & Dips",
    subtitle: "House-made daily · 24 oz containers available",
    items: [
      {
        name: "Hummus",
        description: "Classic creamy chickpea, tahini, lemon, garlic.",
        price: "$9.99",
      },
      {
        name: "Baba Ganoush",
        description: "Smoky fire-roasted eggplant with tahini and lemon.",
        price: "$9.99",
      },
      {
        name: "Tabbouli",
        description: "Parsley, mint, bulgur, tomato, lemon vinaigrette.",
        price: "$9.99",
      },
      {
        name: "Iraqi Salad",
        description: "Cucumber, tomato, onion, parsley, sumac, lemon.",
        price: "$9.99",
      },
      {
        name: "Fattoush Salad",
        description: "Crisp greens, tomato, cucumber, toasted pita, pomegranate molasses.",
        price: "$9.99",
      },
      {
        name: "Eggplant Salad",
        description: "Roasted eggplant salad with garlic and tahini.",
        price: "$9.99",
      },
      {
        name: "Beet Salad",
        description: "Roasted beets, lemon, olive oil, fresh herbs.",
        price: "$9.99",
      },
    ],
  },
  {
    id: "bakery",
    title: "From the Brick Oven",
    subtitle: "Baked fresh daily",
    items: [
      {
        name: "Tannour Bread",
        description: "Homemade, hand-stretched and baked in our brick oven.",
        price: "$2.00",
      },
      {
        name: "Baklava (Tray)",
        description: "Layered phyllo, walnut, pistachio, rose-water syrup.",
        price: "$17.99",
      },
    ],
  },
];

import { officialPhotos } from "./photos";

export interface GroceryDept {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
}

// Department imagery sourced directly from the client's official photography
// at harvestinternationalmarket.com — every image is the actual store, not stock.
export const groceryDepartments: GroceryDept[] = [
  {
    id: "produce",
    title: "Fresh Produce",
    description:
      "World-sourced fruits and vegetables. Imported staples like Persian cucumbers, fresh dates, pomegranate, sumac, fresh herbs and seasonal Middle Eastern specialties.",
    image: officialPhotos.produce,
    alt: "Bell peppers, cucumbers and squash in the Harvest produce section",
    highlights: [
      "Persian cucumbers",
      "Fresh dates & figs",
      "Pomegranates",
      "Seasonal imports",
    ],
  },
  {
    id: "meats",
    title: "Halal Butcher",
    description:
      "Zabihah-certified halal butcher shop. Lamb, beef, chicken and goat cut to order daily by our in-house butcher team.",
    image: officialPhotos.halalMeats,
    alt: "Halal beef steaks grilling over open flame",
    highlights: [
      "Zabihah certified",
      "Cut daily",
      "Lamb · Beef · Chicken · Goat",
      "Special orders welcome",
    ],
  },
  {
    id: "grocery",
    title: "Authentic Grocery",
    description:
      "Pantry imports from across the Middle East, Persia, Eastern Europe and Russia. Brands you actually grew up with — not the supermarket substitutes.",
    image: officialPhotos.authenticGrocery,
    alt: "Aisles of imported basmati rice and pantry brands at Harvest International",
    highlights: [
      "Middle Eastern brands",
      "Persian imports",
      "Russian & Eastern European",
      "Spices, olives, preserves",
    ],
  },
  {
    id: "breads",
    title: "Brick Oven Breads",
    description:
      "Our in-house brick oven produces fresh tannour and traditional Iraqi flatbreads throughout the day. Watch them come out hot.",
    image: officialPhotos.brickOvenBreads,
    alt: "Flatbreads baking in the Harvest brick oven with visible flame",
    highlights: [
      "Tannour bread",
      "Iraqi flatbread",
      "Pulled hot daily",
      "Hand-stretched",
    ],
  },
  {
    id: "bakery-dept",
    title: "Bakery & Sweets",
    description:
      "Baklava, ma'amoul, qatayef, knafeh and traditional Mediterranean pastries. Hand-rolled by bakers who learned from their grandmothers.",
    image: officialPhotos.bakery,
    alt: "Trays of fresh pistachio baklava at the Harvest bakery counter",
    highlights: [
      "House-made baklava",
      "Hand-rolled pastries",
      "Custom holiday trays",
      "Whole-tray pricing",
    ],
  },
  {
    id: "deli",
    title: "Service Deli",
    description:
      "Cold case loaded with house salads, imported cheeses, cured meats, olives, and a self-serve hummus and dip bar.",
    image: officialPhotos.serviceDeli,
    alt: "Fresh house-made tabbouli salad at the Harvest deli counter",
    highlights: [
      "Self-serve olive bar",
      "Imported cheeses",
      "Cured meats",
      "House-made salads",
    ],
  },
];
