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

export interface GroceryDept {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
}

export const groceryDepartments: GroceryDept[] = [
  {
    id: "produce",
    title: "Fresh Produce",
    description:
      "World-sourced fruits and vegetables. Imported staples like Persian cucumbers, fresh dates, pomegranate, sumac, fresh herbs and seasonal Middle Eastern specialties.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=85",
    alt: "Fresh produce display with peppers, tomatoes and herbs",
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
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1600&q=85",
    alt: "Halal butcher counter with fresh cuts of meat",
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
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1600&q=85",
    alt: "Shelves stocked with international pantry imports",
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
    image:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=1600&q=85",
    alt: "Traditional Arabic flatbread baking in a brick oven",
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
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1600&q=85",
    alt: "Display of baklava and Middle Eastern pastries",
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
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1600&q=85",
    alt: "Mediterranean deli case with cheeses, olives and salads",
    highlights: [
      "Self-serve olive bar",
      "Imported cheeses",
      "Cured meats",
      "House-made salads",
    ],
  },
];
