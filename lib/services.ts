export type ServiceCategory =
  | "laundry"
  | "dry-cleaning"
  | "ironing"
  | "premium-care"
  | "household";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  category: ServiceCategory;
};

export const services: Service[] = [
  {
    slug: "dry-cleaning",
    name: "Dry Cleaning",
    shortDescription: "Professional care for formal, delicate and special garments.",
    category: "dry-cleaning",
  },
  {
    slug: "wash-and-fold",
    name: "Wash & Fold",
    shortDescription: "Everyday laundry washed, dried and neatly folded.",
    category: "laundry",
  },
  {
    slug: "wash-and-iron",
    name: "Wash & Iron",
    shortDescription: "Complete washing followed by professional ironing.",
    category: "laundry",
  },
  {
    slug: "steam-ironing",
    name: "Steam Ironing",
    shortDescription: "Crisp garment finishing and wrinkle removal.",
    category: "ironing",
  },
  {
    slug: "stain-treatment",
    name: "Stain Treatment",
    shortDescription: "Focused treatment for stubborn garment stains.",
    category: "dry-cleaning",
  },
  {
    slug: "saree-ethnic-wear",
    name: "Saree & Ethnic Wear Care",
    shortDescription: "Careful cleaning for sarees, suits, lehengas and traditional wear.",
    category: "premium-care",
  },
  {
    slug: "suits-blazers",
    name: "Suits & Blazers",
    shortDescription: "Professional cleaning and finishing for formalwear.",
    category: "premium-care",
  },
  {
    slug: "winter-wear",
    name: "Jackets & Winter Wear",
    shortDescription: "Cleaning care for jackets, sweaters and other winter garments.",
    category: "premium-care",
  },
  {
    slug: "blankets-bedsheets",
    name: "Blankets & Bedsheets",
    shortDescription: "Laundry care for blankets, bedsheets, quilts and similar items.",
    category: "household",
  },
  {
    slug: "curtains",
    name: "Curtain Cleaning",
    shortDescription: "Cleaning care for household curtains and fabric furnishings.",
    category: "household",
  },
];
