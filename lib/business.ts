export const business = {
  name: "UJALA Dry Clean",
  tagline: "Fresh Clothes. Expert Care.",
  phone: {
    display: "+91 94152 89581",
    raw: "+919415289581",
    href: "tel:+919415289581",
  },
  whatsapp: {
    display: "+91 94152 89581",
    raw: "919415289581",
    href: "https://wa.me/919415289581",
  },
  email: null,
  hours: {
    display: "9:00 AM – 9:00 PM",
    opens: "09:00",
    closes: "21:00",
  },
  address: {
    line1: "73, Old Sohbatiya Bagh",
    line2: "New Sohabatia Bagh, Sohabatiya Bagh",
    city: "Prayagraj",
    state: "Uttar Pradesh",
    postalCode: "211006",
    country: "India",
    full: "73, Old Sohbatiya Bagh, New Sohabatia Bagh, Sohabatiya Bagh, Prayagraj, Uttar Pradesh 211006",
  },
  maps: {
    href: "https://maps.app.goo.gl/xoMxjcvDZ9RVdBzn6?g_st=aw",
  },
  social: {
    instagram: null,
    facebook: null,
    youtube: null,
  },
} as const;

export type Business = typeof business;
