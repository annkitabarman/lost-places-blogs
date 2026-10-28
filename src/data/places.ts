export type LostPlace = {
  slug: string;
  name: string;
  location: string;
  period: string;
  category: string;
  description: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export const places: LostPlace[] = [
  {
    slug: "pompeii",
    name: "Pompeii",
    location: "Campania, Italy",
    period: "79 CE",
    category: "Buried city",
    description: "A Roman city preserved beneath the ash of Mount Vesuvius.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    coordinates: { lat: 40.75, lng: 14.49 },
  },
  {
    slug: "mohenjo-daro",
    name: "Mohenjo-daro",
    location: "Sindh, Pakistan",
    period: "c. 2500 BCE",
    category: "Ancient civilization",
    description:
      "An ancient Indus Valley city whose decline remains incompletely understood.",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=80",
    coordinates: { lat: 27.33, lng: 68.14 },
  },
  {
    slug: "great-zimbabwe",
    name: "Great Zimbabwe",
    location: "Masvingo, Zimbabwe",
    period: "c. 1100–1500 CE",
    category: "Lost kingdom",
    description:
      "Monumental stone walls remain as traces of a once-flourishing civilization.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",
    coordinates: { lat: -20.27, lng: 30.93 },
  },
];

export type Theme = {
  slug: string;
  number: string;
  title: string;
  description: string;
  symbol: string;
};

export const themes: Theme[] = [
  {
    slug: "buried-worlds",
    number: "01",
    title: "Buried Worlds",
    description: "Cities swallowed by ash, sand, and the passing of time.",
    symbol: "✳",
  },
  {
    slug: "reclaimed-by-nature",
    number: "02",
    title: "Reclaimed by Nature",
    description: "Places where forests and wilderness outlasted civilization.",
    symbol: "❋",
  },
  {
    slug: "vanished-civilizations",
    number: "03",
    title: "Vanished Civilizations",
    description:
      "The rise, decline, and unanswered questions of lost societies.",
    symbol: "⌘",
  },
];
