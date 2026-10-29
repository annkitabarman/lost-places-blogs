export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type Source = {
  title: string;
  publisher: string;
  url: string;
};

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

  // Historical overview
  civilization: string;
  status: string;
  overview: string;
  history: string[];
  discovery: string;

  // Evidence and mysteries
  archaeologicalFindings: string[];
  mysteries: {
    title: string;
    description: string;
    evidence: string;
    status: "Unresolved" | "Partially understood" | "Popular myth";
  }[];

  // Supporting content
  timeline: TimelineEvent[];
  sources: Source[];
};

export const places: LostPlace[] = [
  {
    slug: "pompeii",
    name: "Pompeii",
    location: "Campania, Italy",
    period: "79 CE",
    category: "Buried city",
    description:
      "A Roman city preserved beneath the ash and volcanic debris of Mount Vesuvius.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    coordinates: { lat: 40.75, lng: 14.49 },

    civilization: "Ancient Rome",
    status: "Archaeological site",
    overview:
      "Pompeii was a Roman town near the Bay of Naples. The eruption of Mount Vesuvius in 79 CE buried much of the settlement, preserving buildings, objects, inscriptions, and traces of everyday life.",

    history: [
      "Pompeii developed over centuries under different cultural influences before becoming part of the Roman world.",
      "By the first century CE, it was a thriving settlement with homes, shops, public baths, temples, and civic buildings.",
      "In 79 CE, Mount Vesuvius erupted. Volcanic material buried the town and killed many inhabitants, preserving an extraordinary archaeological record.",
    ],

    discovery:
      "Systematic excavations began in the eighteenth century, after the site had been rediscovered during earlier digging in the area. Excavation and conservation continue today.",

    archaeologicalFindings: [
      "Buildings, streets, shops, and public spaces that reveal the layout of a Roman town.",
      "Wall paintings, inscriptions, pottery, and household objects that illuminate daily life.",
      "Human remains and casts that provide evidence of the eruption's effects on inhabitants.",
    ],

    mysteries: [
      {
        title: "The final hours of the inhabitants",
        description:
          "The eruption unfolded through multiple phases, and the experiences of people trapped in different parts of the town varied.",
        evidence:
          "Archaeological remains, volcanic deposits, human remains, and contemporary accounts help researchers reconstruct the disaster. Some individual stories and exact sequences remain uncertain.",
        status: "Partially understood",
      },
      {
        title: "The precise chronology of the eruption",
        description:
          "The traditional date is 24 August 79 CE, but archaeological evidence has prompted debate about whether the eruption occurred later in the year.",
        evidence:
          "Evidence includes an ancient written account, inscriptions, seasonal clues, and archaeological finds. The dating has been debated by researchers, so claims about a definitive alternative date should be treated cautiously.",
        status: "Partially understood",
      },
    ],

    timeline: [
      {
        year: "Before Roman rule",
        title: "Early settlement",
        description:
          "Pompeii develops through centuries of settlement and cultural exchange.",
      },
      {
        year: "1st century BCE",
        title: "Roman colony",
        description:
          "Pompeii becomes a Roman colony and continues to grow as a regional town.",
      },
      {
        year: "79 CE",
        title: "The eruption",
        description:
          "Mount Vesuvius erupts, burying Pompeii beneath volcanic material.",
      },
      {
        year: "18th century",
        title: "Excavations begin",
        description:
          "The buried town becomes the subject of organized archaeological exploration.",
      },
    ],

    sources: [
      {
        title: "Pompeii — Archaeological Park",
        publisher: "Parco Archeologico di Pompei",
        url: "https://pompeiisites.org/en/",
      },
      {
        title: "Pompeii",
        publisher: "Encyclopaedia Britannica",
        url: "https://www.britannica.com/place/Pompeii",
      },
    ],
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
