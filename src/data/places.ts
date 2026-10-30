export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  sortYear: number;
  type:
    | "settlement"
    | "disaster"
    | "abandonment"
    | "rediscovery"
    | "excavation";
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
  themeSlug: Theme["slug"];
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
    themeSlug: "buried-worlds",
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
        sortYear: -600,
        title: "Early settlement",
        description:
          "Pompeii develops through centuries of settlement and cultural exchange.",
        type: "settlement",
      },
      {
        year: "1st century BCE",
        sortYear: -80,
        title: "Roman colony",
        description:
          "Pompeii becomes a Roman colony and continues to grow as a regional town.",
        type: "settlement",
      },
      {
        year: "79 CE",
        sortYear: 79,
        title: "The eruption",
        description:
          "Mount Vesuvius erupts, burying Pompeii beneath volcanic material.",
        type: "disaster",
      },
      {
        year: "18th century",
        sortYear: 1748,
        title: "Excavations begin",
        description:
          "The buried town becomes the subject of organized archaeological exploration.",
        type: "excavation",
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

  {
    slug: "petra",
    name: "Petra",
    location: "Ma'an, Jordan",
    period: "4th century BCE – 2nd century CE",
    category: "Rock-cut city",
    themeSlug: "buried-worlds",
    description:
      "A Nabataean city carved into rose-red sandstone cliffs, shaped by trade, engineering, and the desert.",
    image:
      "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 30.3285, lng: 35.4444 },

    civilization: "Nabataean Kingdom",
    status: "Archaeological site",
    overview:
      "Petra was a major centre of the Nabataean Kingdom, whose wealth grew through trade routes connecting Arabia, Egypt, and the Mediterranean. Its monumental tombs, temples, and water-management systems were carved into sandstone and built across a dramatic desert landscape.",

    history: [
      "The Nabataeans established Petra as an important settlement and trading centre, taking advantage of its position along regional caravan routes.",
      "During the late Hellenistic and early Roman periods, Petra developed monumental architecture, sophisticated water systems, and a distinctive urban landscape.",
      "Rome annexed the Nabataean Kingdom in 106 CE. Petra continued to be inhabited, although its regional importance changed over subsequent centuries.",
    ],

    discovery:
      "Petra remained known to local communities. In 1812, Swiss traveller Johann Ludwig Burckhardt brought it to wider European attention after visiting the site.",

    archaeologicalFindings: [
      "Monumental rock-cut tombs and facades, including the famous Treasury.",
      "Remains of temples, streets, domestic buildings, and civic structures.",
      "Water channels, cisterns, dams, and reservoirs demonstrating sophisticated water management.",
    ],

    mysteries: [
      {
        title: "The purpose of the Treasury",
        description:
          "Despite its name, the Treasury was not necessarily a treasury. Its original function and the identity of the person commemorated remain subjects of archaeological study.",
        evidence:
          "Its architectural form and archaeological context are consistent with a monumental Nabataean tomb. Interpretations of its original use draw on architectural and historical evidence.",
        status: "Partially understood",
      },
      {
        title: "The changing importance of Petra",
        description:
          "Petra's regional prominence declined over time, but the process was gradual rather than a single unexplained disappearance.",
        evidence:
          "Historical records, changing trade networks, earthquake damage, and archaeological evidence help researchers understand the city's transformation.",
        status: "Partially understood",
      },
    ],

    timeline: [
      {
        year: "4th century BCE onward",
        sortYear: -400,
        title: "Nabataean settlement",
        description:
          "Petra develops as an important centre of Nabataean settlement and trade.",
        type: "settlement",
      },
      {
        year: "1st century BCE – 1st century CE",
        sortYear: 1,
        title: "Monumental expansion",
        description:
          "Major tombs, religious structures, and water systems shape the city.",
        type: "settlement",
      },
      {
        year: "106 CE",
        sortYear: 106,
        title: "Roman annexation",
        description:
          "Rome annexes the Nabataean Kingdom and incorporates Petra into its provincial system.",
        type: "settlement",
      },
      {
        year: "1812",
        sortYear: 1812,
        title: "European rediscovery",
        description:
          "Johann Ludwig Burckhardt visits Petra and brings it to wider European attention.",
        type: "rediscovery",
      },
    ],

    sources: [
      {
        title: "Petra",
        publisher: "UNESCO World Heritage Centre",
        url: "https://whc.unesco.org/en/list/326/",
      },
      {
        title: "Petra: The Rose-Red City",
        publisher: "The Metropolitan Museum of Art",
        url: "https://www.metmuseum.org/",
      },
    ],
  },

  {
    slug: "mohenjo-daro",
    name: "Mohenjo-daro",
    location: "Sindh, Pakistan",
    period: "c. 2600–1900 BCE",
    category: "Ancient urban settlement",
    themeSlug: "vanished-civilizations",
    description:
      "One of the greatest urban centres of the Indus Valley Civilization, known for its planned streets, drainage systems, and monumental architecture.",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 27.3294, lng: 68.1386 },

    civilization: "Indus Valley Civilization",
    status: "Archaeological site",
    overview:
      "Mohenjo-daro was one of the principal cities of the Indus Valley Civilization. At its height, it featured carefully planned streets, standardized fired-brick construction, drainage infrastructure, and extensive craft production. Despite decades of archaeological research, its political organization, language, and many aspects of its social structure remain uncertain.",

    history: [
      "Mohenjo-daro emerged during the Mature Harappan phase of the Indus Valley Civilization, a Bronze Age civilization that extended across parts of present-day Pakistan and northwestern India.",
      "The city developed a planned urban layout, with residential neighbourhoods, public structures, wells, and an extensive drainage network.",
      "Around 1900 BCE, many major Indus urban centres underwent significant transformation. Mohenjo-daro experienced changes in settlement patterns and urban life as the wider civilization entered a period of decentralization.",
    ],

    discovery:
      "The site was brought to archaeological attention in the 1920s. Excavations led by archaeologists including R. D. Banerji and later John Marshall revealed the scale and sophistication of the ancient city.",

    archaeologicalFindings: [
      "The Great Bath, a large brick-built structure often interpreted as having a possible ritual or ceremonial function.",
      "An extensive network of streets, wells, drains, and bathing facilities.",
      "Seals, pottery, ornaments, tools, and figurines that provide evidence of trade, craft production, and daily life.",
      "Standardized weights and measures that suggest shared systems of administration and exchange.",
    ],

    mysteries: [
      {
        title: "The undeciphered Indus script",
        description:
          "Hundreds of inscriptions have been discovered on seals, tablets, and other objects, but the writing system has not been conclusively deciphered.",
        evidence:
          "The inscriptions are generally short and appear alongside distinctive symbols on archaeological objects. The lack of a confirmed bilingual inscription makes decipherment difficult.",
        status: "Unresolved",
      },
      {
        title: "The political organization of the city",
        description:
          "The Indus cities display remarkable urban planning, but the precise political institutions and systems of authority behind them remain uncertain.",
        evidence:
          "Standardized construction, weights, seals, and urban infrastructure suggest coordination across settlements, but no universally accepted interpretation of the governing system exists.",
        status: "Unresolved",
      },
    ],

    timeline: [
      {
        year: "c. 2600 BCE",
        sortYear: -2600,
        title: "Urban expansion",
        description:
          "Mohenjo-daro develops into a major centre of the Mature Harappan civilization.",
        type: "settlement",
      },
      {
        year: "c. 2500–2000 BCE",
        sortYear: -2250,
        title: "Urban flourishing",
        description:
          "The city develops its distinctive streets, drainage systems, public structures, and craft industries.",
        type: "settlement",
      },
      {
        year: "c. 1900 BCE",
        sortYear: -1900,
        title: "Urban transformation",
        description:
          "Major Indus cities undergo significant changes as the Mature Harappan urban system declines.",
        type: "abandonment",
      },
      {
        year: "1920s CE",
        sortYear: 1920,
        title: "Archaeological excavations",
        description:
          "Excavations reveal the scale and sophistication of the ancient settlement.",
        type: "excavation",
      },
    ],

    sources: [
      {
        title: "Archaeological Ruins at Moenjodaro",
        publisher: "UNESCO World Heritage Centre",
        url: "https://whc.unesco.org/en/list/138/",
      },
      {
        title: "The Indus Civilization",
        publisher: "Harappa",
        url: "https://www.harappa.com/",
      },
    ],
  },

  {
    slug: "great-zimbabwe",
    name: "Great Zimbabwe",
    location: "Masvingo Province, Zimbabwe",
    period: "11th–15th centuries CE",
    category: "Medieval stone city",
    themeSlug: "vanished-civilizations",
    description:
      "A monumental stone-built city that became a centre of political power and trade in medieval southern Africa.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: -20.2675, lng: 30.9338 },

    civilization: "Kingdom of Zimbabwe",
    status: "Archaeological site",
    overview:
      "Great Zimbabwe was a major urban and political centre in southern Africa between the 11th and 15th centuries. Its extensive dry-stone walls, enclosures, and towers demonstrate sophisticated construction and the wealth of a society connected to regional and long-distance trade networks.",

    history: [
      "The settlement developed during the early second millennium CE among communities in the Zimbabwe Plateau, where agriculture, cattle keeping, and gold production supported increasingly complex societies.",
      "Great Zimbabwe grew into a major centre of political authority and exchange. Its inhabitants participated in trade networks connecting the interior of southern Africa with the Swahili coast and the wider Indian Ocean world.",
      "By the 15th century, the city had lost much of its former prominence. Population and political power shifted to other centres in the region, including successor states associated with the Mutapa and Torwa traditions.",
    ],

    discovery:
      "The ruins were known to local African communities long before European colonial-era expeditions and archaeological investigations. Modern archaeological work has established the site's African origins and its connection to the region's medieval societies.",

    archaeologicalFindings: [
      "Extensive dry-stone walls constructed without mortar, including the Great Enclosure.",
      "The Hill Complex, with structures built on and around a granite hill.",
      "The Conical Tower and other monumental architectural features.",
      "Imported glass beads, ceramics, and other objects that demonstrate participation in long-distance trade.",
      "Soapstone bird sculptures associated with the site's political and religious symbolism.",
    ],

    mysteries: [
      {
        title: "The meaning of the Zimbabwe Birds",
        description:
          "The soapstone bird sculptures are among the site's most recognizable objects. Their precise symbolic meanings and roles in political or spiritual life are not fully established.",
        evidence:
          "Several carved birds were recovered from the archaeological site. Their placement and artistic features provide clues, but interpretations of their symbolism remain debated.",
        status: "Partially understood",
      },
      {
        title: "The city's political organization",
        description:
          "Great Zimbabwe was clearly a major centre of authority, but the precise organization of its leadership, institutions, and relationship with surrounding settlements remains an area of research.",
        evidence:
          "Architecture, settlement patterns, material culture, and trade evidence help researchers investigate its social and political structure.",
        status: "Partially understood",
      },
    ],

    timeline: [
      {
        year: "11th century CE",
        sortYear: 1000,
        title: "Settlement growth",
        description:
          "Communities in the region develop increasingly substantial settlements and stone architecture.",
        type: "settlement",
      },
      {
        year: "13th–14th centuries CE",
        sortYear: 1250,
        title: "Urban flourishing",
        description:
          "Great Zimbabwe becomes a major political and trading centre in southern Africa.",
        type: "settlement",
      },
      {
        year: "15th century CE",
        sortYear: 1400,
        title: "Shift in regional power",
        description:
          "Great Zimbabwe loses prominence as political and economic activity shifts to other regional centres.",
        type: "abandonment",
      },
      {
        year: "20th century",
        sortYear: 1900,
        title: "Archaeological research",
        description:
          "Archaeological work establishes the site's African origins and its historical significance.",
        type: "excavation",
      },
    ],

    sources: [
      {
        title: "Great Zimbabwe National Monument",
        publisher: "UNESCO World Heritage Centre",
        url: "https://whc.unesco.org/en/list/364/",
      },
      {
        title: "Great Zimbabwe",
        publisher: "British Museum",
        url: "https://www.britishmuseum.org/",
      },
    ],
  },

  {
    slug: "angkor",
    name: "Angkor",
    location: "Siem Reap, Cambodia",
    period: "9th–15th centuries CE",
    category: "Temple city",
    themeSlug: "reclaimed-by-nature",
    description:
      "The vast urban and religious landscape of the Khmer Empire, containing monumental temples, reservoirs, canals, and settlements.",
    image:
      "https://images.unsplash.com/photo-1600134629519-3a9b3a3c6c9e?auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 13.4125, lng: 103.867 },

    civilization: "Khmer Empire",
    status: "Archaeological and religious site",
    overview:
      "Angkor was the political and religious centre of the Khmer Empire. Its monumental temples and extensive hydraulic infrastructure formed part of a vast urban landscape that supported a large population. The archaeological complex includes Angkor Wat, Angkor Thom, and numerous other temples and settlements.",

    history: [
      "Angkor developed as the centre of the Khmer Empire from the ninth century CE. Successive rulers constructed temples and expanded the urban landscape.",
      "The city became known for monumental architecture and extensive water-management infrastructure, including reservoirs, canals, and embankments.",
      "From the fourteenth and fifteenth centuries, political and economic changes contributed to the gradual transformation of Angkor's role as an imperial centre. Religious activity continued at important temples.",
    ],

    discovery:
      "Angkor was never completely unknown or abandoned by local communities. European visitors documented the temples in the nineteenth century, while systematic archaeological and conservation work expanded during the colonial and postcolonial periods.",

    archaeologicalFindings: [
      "Angkor Wat, a monumental temple complex originally dedicated to Vishnu.",
      "Angkor Thom and the Bayon, known for monumental gates and carved stone faces.",
      "The extensive network of reservoirs, canals, embankments, and water-management structures.",
      "Archaeological evidence of residential areas, roads, and settlements surrounding major temples.",
    ],

    mysteries: [
      {
        title: "The transformation of Angkor's urban landscape",
        description:
          "The processes that reshaped Angkor's population and political importance involved multiple environmental, economic, and political factors.",
        evidence:
          "Archaeological surveys, inscriptions, climate records, and evidence of changes to water infrastructure help researchers investigate these transformations.",
        status: "Partially understood",
      },
      {
        title: "The role of the hydraulic system",
        description:
          "The relationship between Angkor's water infrastructure, agricultural production, urban life, and political authority remains an important subject of research.",
        evidence:
          "Reservoirs, canals, embankments, and sediment records provide evidence of a complex system that changed over time.",
        status: "Partially understood",
      },
    ],

    timeline: [
      {
        year: "802 CE",
        sortYear: 802,
        title: "Khmer imperial foundation",
        description:
          "Jayavarman II establishes the foundations of the Khmer imperial state.",
        type: "settlement",
      },
      {
        year: "12th century CE",
        sortYear: 1150,
        title: "Monumental expansion",
        description:
          "Major temple complexes, including Angkor Wat, transform the landscape.",
        type: "settlement",
      },
      {
        year: "Late 12th–early 13th century",
        sortYear: 1200,
        title: "Angkor Thom",
        description:
          "Jayavarman VII oversees major construction projects, including the Bayon.",
        type: "settlement",
      },
      {
        year: "14th–15th centuries CE",
        sortYear: 1400,
        title: "Political transformation",
        description:
          "Angkor's role as the primary imperial centre changes amid political and environmental pressures.",
        type: "abandonment",
      },
      {
        year: "19th century",
        sortYear: 1860,
        title: "European documentation",
        description:
          "European accounts bring wider international attention to the temples.",
        type: "rediscovery",
      },
    ],

    sources: [
      {
        title: "Angkor",
        publisher: "UNESCO World Heritage Centre",
        url: "https://whc.unesco.org/en/list/668/",
      },
      {
        title: "Angkor and the Khmer Empire",
        publisher: "APSARA National Authority",
        url: "https://apsaraauthority.gov.kh/",
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
