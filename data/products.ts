export type Product = {
  title: string;
  slug: string;
  category: "Tişört" | "Hoodie" | "Sweatshirt" | "Aksesuar";
  collection: string;
  price: number;
  image: string;
  colors: string[];
  sizes: string[];
  description: string;
  material: string[];
  story: string;
  motif?: string;
};

export const products: Product[] = [
  {
    title: "Kıpçak Kurt Tişört",
    slug: "kipcak-kurt-tisort",
    category: "Tişört",
    collection: "Kıpçak Kökleri",
    price: 1250,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80",
    colors: ["Gece Siyahı", "Kum", "Keten"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Bozkır geometrisi ve tamga formlarından ilham alan premium pamuklu tişört.",
    material: [
      "%100 taraklı pamuk",
      "Premium serigrafi baskı",
      "Oversize kalıp",
      "Sınırlı üretim",
    ],
    story:
      "Kurt çizilmez, sezdirilir. Tek bir tamga çizgisi, kadim yol gösterme fikrini modern bir silüete taşır.",
    motif: "tamga",
  },
  {
    title: "Göktürk Runik Hoodie",
    slug: "gokturk-runik-hoodie",
    category: "Hoodie",
    collection: "Göktürk Mirası",
    price: 2450,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=80",
    colors: ["Gece Siyahı", "Antrasit"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Sade runik yapı taşıyan ağır gramajlı kapüşonlu sweatshirt.",
    material: [
      "430 gsm fırçalı pamuk",
      "Ton sür ton nakış",
      "Rahat kalıp",
      "Sınırlı üretim",
    ],
    story:
      "Orhun harfleri mimariye indirgendi. Sessizce taşınır, yakından okunur.",
    motif: "runik",
  },
  {
    title: "Hun Bronz Sweatshirt",
    slug: "hun-bronz-sweatshirt",
    category: "Sweatshirt",
    collection: "Hun Çağı",
    price: 1890,
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80",
    colors: ["Antrasit", "Taş"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Taş tonlarında, etek ucunda eskitilmiş bronz iz taşıyan sweatshirt.",
    material: [
      "380 gsm iç havlı pamuk",
      "Bronz pigment baskı",
      "Boxy kalıp",
      "Sınırlı üretim",
    ],
    story:
      "Bronz burada parlamaz; eskir — tıpkı bozkırın erken çağ metal işçiliği gibi.",
    motif: "geometri",
  },
  {
    title: "Bozkır Geometri Tişört",
    slug: "bozkir-geometri-tisort",
    category: "Tişört",
    collection: "Kıpçak Kökleri",
    price: 1150,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
    colors: ["Keten", "Gece Siyahı"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Keten tonunda, tek bir bozkır geometrisi çizgisi taşıyan tişört.",
    material: [
      "%100 taraklı pamuk",
      "İnce çizgi serigrafi",
      "Regular kalıp",
      "Sınırlı üretim",
    ],
    story: "Miras süs değil, yapıdır.",
    motif: "geometri",
  },
  {
    title: "Tamga İzi Sweatshirt",
    slug: "tamga-izi-sweatshirt",
    category: "Sweatshirt",
    collection: "Göktürk Mirası",
    price: 1790,
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=80",
    colors: ["Gece Siyahı", "Antrasit", "Kum"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Tek ve özenli bir tamga iziyle dengelenen sade sweatshirt.",
    material: [
      "360 gsm pamuk",
      "Kabartma tamga detayı",
      "Rahat kalıp",
      "Sınırlı üretim",
    ],
    story: "Tek iz, tek yerde. Hiçbir şey onunla yarışmaz.",
    motif: "tamga",
  },
  {
    title: "Bozkır Deri Şapka",
    slug: "bozkir-deri-sapka",
    category: "Aksesuar",
    collection: "Hun Çağı",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80",
    colors: ["Antrasit", "Bronz"],
    sizes: ["Tek Beden"],
    description: "Sessiz bir bronz kuş gözü detayı taşıyan yapılı şapka.",
    material: [
      "Pamuk dimi",
      "Deri ayar kayışı",
      "Bronz aksesuar",
      "Sınırlı üretim",
    ],
    story: "Önce malzeme konuşur, sonra sembol.",
    motif: "geometri",
  },
  {
    title: "Orhun Çizgi Hoodie",
    slug: "orhun-cizgi-hoodie",
    category: "Hoodie",
    collection: "Göktürk Mirası",
    price: 2350,
    image:
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=1000&q=80",
    colors: ["Gece Siyahı", "Taş"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Kol boyunca inen tek bir dikey runik çizgi taşıyan minimal hoodie.",
    material: [
      "420 gsm fırçalı pamuk",
      "Ton sür ton baskı",
      "Oversize kalıp",
      "Sınırlı üretim",
    ],
    story: "Slogan değil, bir çizgi. Hafıza yüzeyin altında kalır.",
    motif: "runik",
  },
  {
    title: "Bronz Kartal Tişört",
    slug: "bronz-kartal-tisort",
    category: "Tişört",
    collection: "Hun Çağı",
    price: 1290,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80",
    colors: ["Gece Siyahı", "Kum"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Tek bir eskitilmiş bronz darbeyle soyutlanmış kartal formu.",
    material: [
      "%100 taraklı pamuk",
      "Bronz pigment baskı",
      "Oversize kalıp",
      "Sınırlı üretim",
    ],
    story: "Kartal bilinçli olarak soyut — kostüme kaçmayan bir sembolizm.",
    motif: "tamga",
  },
];

export const categories = [
  "Tümü",
  "Tişört",
  "Hoodie",
  "Sweatshirt",
  "Aksesuar",
] as const;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.slug !== product.slug && p.collection === product.collection)
    .concat(products.filter((p) => p.collection !== product.collection))
    .filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)
    .slice(0, limit);
}
