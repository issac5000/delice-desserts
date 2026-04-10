// Menu data extracted from physical menu images

export type MenuCategory =
  | "pancakes"
  | "gaufres"
  | "crepes"
  | "drinks"
  | "hot-drinks";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface DrinkSubCategory {
  title: string;
  note?: string;
  items: MenuItem[];
}

export interface FoodCategory {
  type: "food";
  slug: MenuCategory;
  title: string;
  subtitle?: string;
  note?: string;
  supplement?: string;
  items: MenuItem[];
}

export interface DrinkCategory {
  type: "drinks";
  slug: MenuCategory;
  title: string;
  subcategories: DrinkSubCategory[];
}

export type CategoryData = FoodCategory | DrinkCategory;

export const categories: { slug: MenuCategory; label: string; emoji: string }[] = [
  { slug: "pancakes", label: "Pancakes", emoji: "🥞" },
  { slug: "gaufres", label: "Gaufres", emoji: "🧇" },
  { slug: "crepes", label: "Crêpes", emoji: "🥞" },
  { slug: "drinks", label: "Drinks", emoji: "🧊" },
  { slug: "hot-drinks", label: "Hot Drinks", emoji: "☕" },
];

export const menuData: Record<MenuCategory, CategoryData> = {
  pancakes: {
    type: "food",
    slug: "pancakes",
    title: "Pancakes",
    note: "Merci de commander au comptoir",
    supplement: "Supplément : 1€ — Chantilly, Glace, Extra Toppings",
    items: [
      {
        name: "Bueno Lover",
        description:
          "Pancakes moelleux nappés de sauce Nutella et sauce Bueno avec morceaux de Kinder Bueno et copeaux de chocolat",
        price: 10.5,
      },
      {
        name: "Délice Belgian",
        description:
          "Pancakes moelleux nappés de sauce caramel, sauce spéculoos, parsemés de morceaux de biscuits croquants",
        price: 9.99,
      },
      {
        name: "Fruity",
        description:
          "Pancakes moelleux aux fruits frais, nappés de coulis de fraise. Servis avec de la chantilly et sirop d'érable",
        price: 9.99,
      },
      {
        name: "Ferrero Fusion",
        description:
          "Pancakes moelleux, sauce Nutella, morceaux de Ferrero Rocher et noisettes croustillantes",
        price: 10.5,
      },
      {
        name: "Classique",
        description:
          "Pancakes moelleux et dorés, beurre fondant, sirop d'érable, chantilly",
        price: 8.5,
      },
    ],
  },

  gaufres: {
    type: "food",
    slug: "gaufres",
    title: "Gaufres",
    note: "Merci de commander au comptoir",
    supplement: "Supplément : 1€ — Chantilly, Glace, Fruits, Sauces",
    items: [
      {
        name: "Bueno Lover",
        description:
          "Gaufre nappée de sauce Nutella et sauce Bueno, avec des morceaux de Kinder Bueno et copeaux de chocolat",
        price: 8.99,
      },
      {
        name: "Délice Belgian",
        description:
          "Gaufre nappée de sauce caramel et de sauce Spéculoos, parsemée de morceaux de biscuits croustillants",
        price: 8.9,
      },
      {
        name: "Ferrero",
        description:
          "Gaufre nappée de chocolat Nutella, parsemée de morceaux de Ferrero Rocher et noisettes croustillantes",
        price: 8.99,
      },
      {
        name: "Oreo Crunch",
        description:
          "Gaufre nappée de chocolat blanc, avec des morceaux croquants de biscuits Oreo et copeaux chocolat",
        price: 8.5,
      },
      {
        name: "Fraise",
        description:
          "Gaufre garnie de fraises fraîches, nappée de sauce Nutella et parsemée de copeaux de chocolat",
        price: 8.5,
      },
      {
        name: "Banana Berry",
        description:
          "Gaufre garnie de morceaux de banane et de fraises, nappée de sauce Nutella, et des copeaux de chocolat",
        price: 8.9,
      },
      {
        name: "Banana Bliss",
        description:
          "Gaufre garnie de banane, nappée de sauce Nutella et parsemée de copeaux de chocolat",
        price: 8.0,
      },
      {
        name: "Classique",
        description: "Au choix : Nutella, cassonade ou sirop d'érable",
        price: 5.5,
      },
    ],
  },

  crepes: {
    type: "food",
    slug: "crepes",
    title: "Crêpes",
    subtitle: "servies par 2 pièces",
    note: "Merci de commander au comptoir",
    supplement: "Supplément : 1€ — Chantilly, Glace, Fruits, Sauces",
    items: [
      {
        name: "Bueno Lover",
        description:
          "Crêpes nappées de sauce Nutella et sauce Bueno, avec des morceaux de Kinder Bueno et copeaux de chocolat",
        price: 8.99,
      },
      {
        name: "Délice Belgian",
        description:
          "Crêpes nappées de sauce caramel et de sauce Spéculoos, parsemées d'éclats de biscuits croustillants",
        price: 8.9,
      },
      {
        name: "Oreo Crunch",
        description:
          "Crêpes nappées de chocolat blanc, avec des morceaux croquants de biscuits Oreo et copeaux chocolat",
        price: 8.5,
      },
      {
        name: "Fraise",
        description:
          "Crêpes garnies de fraises fraîches, nappées de sauce Nutella et parsemées de copeaux de chocolat",
        price: 8.5,
      },
      {
        name: "Banana Berry",
        description:
          "Crêpes garnies de morceaux de banane et de fraises, copeaux de chocolat et nappées de Nutella",
        price: 8.9,
      },
      {
        name: "Banana Bliss",
        description:
          "Crêpes garnies de banane, nappées de chocolat et parsemées de copeaux de chocolat",
        price: 8.0,
      },
      {
        name: "Classique",
        description: "Au choix : Nutella, cassonade ou sirop d'érable",
        price: 5.0,
      },
    ],
  },

  drinks: {
    type: "drinks",
    slug: "drinks",
    title: "Drinks",
    subcategories: [
      {
        title: "Iced Coffee",
        items: [
          { name: "Iced Americano", description: "", price: 4.0 },
          { name: "Iced Latte", description: "", price: 4.5 },
          { name: "Caramel", description: "", price: 5.2 },
          { name: "Vanille", description: "", price: 5.2 },
          { name: "Bueno", description: "", price: 5.5 },
        ],
      },
      {
        title: "Iced Matcha",
        items: [
          { name: "Classique", description: "", price: 5.0 },
          { name: "Mangue Passion", description: "", price: 5.5 },
          { name: "Fraise", description: "", price: 5.5 },
          { name: "Vanille", description: "", price: 5.3 },
          { name: "Caramel", description: "", price: 5.3 },
          { name: "Pistache", description: "", price: 5.5 },
        ],
      },
      {
        title: "Milkshakes",
        items: [
          { name: "Bueno", description: "", price: 6.0 },
          { name: "Oreo", description: "", price: 5.5 },
          { name: "Snickers", description: "", price: 5.5 },
          { name: "Vanille", description: "", price: 5.0 },
          { name: "Chocolat", description: "", price: 5.0 },
          { name: "Banane", description: "", price: 5.0 },
          { name: "Fraise", description: "", price: 5.0 },
        ],
      },
      {
        title: "Smoothies",
        note: "Base : orange, banane",
        items: [
          { name: "Very Berry", description: "", price: 6.0 },
          { name: "Mangue Passion", description: "", price: 6.0 },
          { name: "Fraise", description: "", price: 6.0 },
          { name: "Tropical", description: "", price: 6.0 },
          { name: "Fraise Colada", description: "", price: 6.0 },
        ],
      },
      {
        title: "Mocktails",
        note: "Sans alcool",
        items: [
          { name: "Mojito Classique", description: "", price: 6.9 },
          { name: "Tropical Kiss", description: "", price: 6.9 },
          { name: "Mojito Fraise", description: "", price: 6.9 },
          { name: "Mojito Violette", description: "", price: 6.9 },
          { name: "Ginger Colada", description: "", price: 6.9 },
        ],
      },
      {
        title: "Iced Tea",
        note: "Fraise, Passion, Mangue",
        items: [{ name: "Iced Tea", description: "", price: 4.5 }],
      },
      {
        title: "Soft",
        items: [
          { name: "Eau", description: "", price: 1.5 },
          { name: "Eau Pétillante", description: "", price: 2.0 },
          { name: "Coca", description: "", price: 2.0 },
          { name: "Fanta", description: "", price: 2.0 },
          { name: "Tropico", description: "", price: 2.0 },
        ],
      },
    ],
  },

  "hot-drinks": {
    type: "drinks",
    slug: "hot-drinks",
    title: "Hot Drinks",
    subcategories: [
      {
        title: "Coffee",
        items: [
          { name: "Double Espresso", description: "", price: 2.5 },
          { name: "Americano", description: "", price: 3.5 },
          { name: "Cappuccino", description: "", price: 4.2 },
          { name: "Latte", description: "", price: 4.5 },
        ],
      },
      {
        title: "Tea",
        items: [
          { name: "Black", description: "", price: 3.0 },
          { name: "Camomille", description: "", price: 3.0 },
          { name: "Fruits Rouges", description: "", price: 3.0 },
          { name: "Thé Menthe Fraîche", description: "", price: 3.9 },
          { name: "Matcha", description: "", price: 4.5 },
        ],
      },
      {
        title: "Hot Chocolate",
        items: [
          { name: "Classique", description: "", price: 4.5 },
          { name: "Vanille", description: "", price: 4.7 },
          { name: "Caramel", description: "", price: 4.7 },
        ],
      },
    ],
  },
};
