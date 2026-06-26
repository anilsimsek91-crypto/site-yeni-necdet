export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
};

export const collections: Collection[] = [
  {
    slug: "kipcak-kokleri",
    name: "Kıpçak Kökleri",
    tagline: "Bozkır geometrisi, yeniden çizildi.",
    description:
      "Kıpçak süslemesinden alınan formlar, en sessiz çizgisine indirgendi.",
  },
  {
    slug: "gokturk-mirasi",
    name: "Göktürk Mirası",
    tagline: "İz sessizdir. Hafıza değil.",
    description: "Runik yapı, sade ve modern silüetlere çevrildi.",
  },
  {
    slug: "hun-cagi",
    name: "Hun Çağı",
    tagline: "Hafızadan kazındı. Bugün için kuruldu.",
    description: "Bronz, taş ve gölge — erken bozkırın ağırlığı.",
  },
];
