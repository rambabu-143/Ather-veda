export type IconName = "paw" | "bowl" | "arch" | "leaf";

export type Program = {
  slug: string;
  title: string;
  subtitle: string;
  icon: IconName;
  quote: string;
  summary: string;
  whatWeDo: string[];
  stat: { value: string; label: string };
};

export const programs: Program[] = [
  {
    slug: "animal-welfare",
    title: "Animal Welfare",
    subtitle: "Gaushalas & Dog Shelters",
    icon: "paw",
    quote:
      "To establish, support, maintain, and manage shelters, gaushalas, and medical clinics for the protection, treatment, and welfare of stray, abandoned, or distressed animals, and to promote compassion towards all living creatures.",
    summary:
      "Every gaushala we run takes in cattle that would otherwise be left to fend for themselves along roadsides and open lots, alongside a dedicated shelter and clinic for stray and injured dogs. Animals arrive sick, hurt, or simply old and unwanted. They leave fed, treated, and, wherever possible, never uprooted again.",
    whatWeDo: [
      "Round-the-clock feeding, water, and shaded housing for resident cattle",
      "An on-site veterinary clinic for treatment of strays and shelter animals",
      "Rescue response for injured or abandoned animals reported by the public",
      "A dedicated dog shelter with vaccination and sterilization support",
    ],
    stat: { value: "[ ]", label: "animals currently in our care" },
  },
  {
    slug: "poverty-relief",
    title: "Relief of Poverty & Medical Aid",
    subtitle: "Free Food & Medical Aid",
    icon: "bowl",
    quote:
      "To provide free food, nutrition, clothing, emergency shelter, and free medical aid, healthcare camps, and medicines to the poor, underprivileged, and economically weaker sections of society.",
    summary:
      "For families who cannot reliably plan their next meal or afford a doctor's visit, we run free kitchens, distribute clothing and emergency shelter materials, and bring medical camps directly to the communities that need them. No paperwork, no distinction of caste or creed, just help that arrives on time.",
    whatWeDo: [
      "Free daily meals and nutrition support for underprivileged families",
      "Clothing and emergency shelter distribution during hardship and disaster",
      "Free healthcare camps staffed by visiting doctors and volunteers",
      "Distribution of essential medicines to those who cannot afford them",
    ],
    stat: { value: "[ ]", label: "meals served to date" },
  },
  {
    slug: "heritage",
    title: "Heritage & Public Welfare",
    subtitle: "Temple Maintenance & Restoration",
    icon: "arch",
    quote:
      "To preserve, restore, and maintain ancient monuments, historical structures, and places of public worship of cultural, architectural, or archaeological importance, and to establish, build, manage public rest-houses or halls attached to them for the community's benefit without distinction of caste or creed.",
    summary:
      "Temples and monuments that generations have gathered around are often the first thing to fall into disrepair once no single family can afford their upkeep. We take on their restoration and ongoing maintenance, and build rest-houses and community halls alongside them, open to everyone who comes to pray, rest, or simply be part of the community.",
    whatWeDo: [
      "Structural restoration of ancient temples and monuments",
      "Ongoing maintenance so restored sites don't fall back into disrepair",
      "Public rest-houses and community halls built alongside heritage sites",
      "Open access for the community, without distinction of caste or creed",
    ],
    stat: { value: "[ ]", label: "heritage sites under our care" },
  },
  {
    slug: "sustainability",
    title: "Environmental Sustainability",
    subtitle: "Biogas, Manures & Organic Waste Management",
    icon: "leaf",
    quote:
      "To manufacture, process, produce, distribute, and promote compressed bio-gas (CBG), organic manures, vermicompost, bio-fertilizers, and other eco-friendly, value-added, sustainable products derived from bovine waste, dung, and urine collected from the shelters/gaushalas managed by the Company; and to utilize the entire revenue and financial surplus generated from such activities exclusively for the maintenance of the shelters, care of the animals, and the furtherance of the charitable objectives of the Company.",
    summary:
      "Nothing from our gaushalas goes to waste. Dung and urine collected from the shelters are processed into compressed bio-gas, organic manure, vermicompost, and bio-fertilizers, and every rupee of surplus this generates is put straight back into feeding and treating the animals it came from.",
    whatWeDo: [
      "Compressed bio-gas (CBG) production from shelter cattle waste",
      "Organic manure and vermicompost processing for local farmers",
      "Bio-fertilizer distribution to reduce chemical fertilizer dependence",
      "100% of surplus revenue reinvested into shelter care and operations",
    ],
    stat: { value: "[ ]", label: "tonnes of waste converted yearly" },
  },
];

export const siteStats = [
  { value: "[ ]", label: "Animals sheltered" },
  { value: "[ ]", label: "Meals served" },
  { value: "[ ]", label: "Heritage sites restored" },
  { value: "[ ]", label: "Families aided" },
];

export const dedication = {
  names: ["Late Sh. Bankey Bihari Gaur", "Late Smt. Chanda Gaur"],
  line: "The AetherVeda Foundation is established in eternal memory of Late Sh. Bankey Bihari Gaur and Late Smt. Chanda Gaur, and to fulfill their philanthropic vision.",
};
