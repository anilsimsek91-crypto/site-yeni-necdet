export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
};

export const collections: Collection[] = [
  {
    slug: "kipcak-origins",
    name: "Kıpçak Origins",
    tagline: "Steppe geometry, redrawn.",
    description:
      "Forms traced from Kıpçak ornament, reduced to their quietest line.",
  },
  {
    slug: "gokturk-legacy",
    name: "Göktürk Legacy",
    tagline: "The mark is quiet. The memory is not.",
    description:
      "Runic structure translated into restrained, modern silhouettes.",
  },
  {
    slug: "hun-dynasty",
    name: "Hun Dynasty",
    tagline: "Carved from memory. Built for today.",
    description: "Bronze, stone and shadow — the weight of the early steppe.",
  },
];
