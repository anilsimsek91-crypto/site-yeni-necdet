export type Product = {
  title: string;
  slug: string;
  category: "T-Shirt" | "Hoodie" | "Sweatshirt" | "Accessory";
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
    title: "Kıpçak Wolf T-Shirt",
    slug: "kipcak-wolf-t-shirt",
    category: "T-Shirt",
    collection: "Kıpçak Origins",
    price: 1250,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80",
    colors: ["Void Black", "Sand", "Linen"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A premium cotton tee inspired by steppe geometry and tamga forms.",
    material: [
      "100% combed cotton",
      "Premium screen print",
      "Oversized fit",
      "Limited production",
    ],
    story:
      "The wolf is not drawn. It is implied — a single tamga line carrying an old idea of guidance into a modern silhouette.",
    motif: "tamga",
  },
  {
    title: "Göktürk Runic Hoodie",
    slug: "gokturk-runic-hoodie",
    category: "Hoodie",
    collection: "Göktürk Legacy",
    price: 2450,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=80",
    colors: ["Void Black", "Iron"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Heavyweight hoodie marked with restrained runic structure.",
    material: [
      "430 gsm brushed cotton",
      "Tonal embroidery",
      "Relaxed fit",
      "Limited production",
    ],
    story:
      "Orhun letters reduced to architecture. Worn quietly, read closely.",
    motif: "runic",
  },
  {
    title: "Hun Bronze Sweatshirt",
    slug: "hun-bronze-sweatshirt",
    category: "Sweatshirt",
    collection: "Hun Dynasty",
    price: 1890,
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80",
    colors: ["Iron", "Stone"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Stone-toned sweatshirt with a weathered bronze mark at the hem.",
    material: [
      "380 gsm loopback cotton",
      "Bronze pigment print",
      "Boxy fit",
      "Limited production",
    ],
    story:
      "Bronze does not shine here. It weathers — like the metalwork of the early steppe.",
    motif: "geometry",
  },
  {
    title: "Bozkır Geometry Tee",
    slug: "bozkir-geometry-tee",
    category: "T-Shirt",
    collection: "Kıpçak Origins",
    price: 1150,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
    colors: ["Linen", "Void Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A linen-toned tee carrying a single line of steppe geometry.",
    material: [
      "100% combed cotton",
      "Fine-line screen print",
      "Regular fit",
      "Limited production",
    ],
    story: "Heritage as structure, not decoration.",
    motif: "geometry",
  },
  {
    title: "Tamga Mark Sweatshirt",
    slug: "tamga-mark-sweatshirt",
    category: "Sweatshirt",
    collection: "Göktürk Legacy",
    price: 1790,
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=80",
    colors: ["Void Black", "Iron", "Sand"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Clean sweatshirt anchored by a small, deliberate tamga mark.",
    material: [
      "360 gsm cotton",
      "Embossed tamga detail",
      "Relaxed fit",
      "Limited production",
    ],
    story: "One mark. Placed once. Nothing else competes for attention.",
    motif: "tamga",
  },
  {
    title: "Steppe Leather Cap",
    slug: "steppe-leather-cap",
    category: "Accessory",
    collection: "Hun Dynasty",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80",
    colors: ["Iron", "Bronze"],
    sizes: ["One Size"],
    description: "Structured cap with a quiet bronze eyelet detail.",
    material: [
      "Cotton twill",
      "Leather strap",
      "Bronze hardware",
      "Limited production",
    ],
    story: "The material speaks before the symbol does.",
    motif: "geometry",
  },
  {
    title: "Orhun Line Hoodie",
    slug: "orhun-line-hoodie",
    category: "Hoodie",
    collection: "Göktürk Legacy",
    price: 2350,
    image:
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=1000&q=80",
    colors: ["Void Black", "Stone"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Minimal hoodie with a single vertical runic line down the sleeve.",
    material: [
      "420 gsm brushed cotton",
      "Tonal print",
      "Oversized fit",
      "Limited production",
    ],
    story: "A line, not a slogan. The memory stays under the surface.",
    motif: "runic",
  },
  {
    title: "Bronze Eagle Tee",
    slug: "bronze-eagle-tee",
    category: "T-Shirt",
    collection: "Hun Dynasty",
    price: 1290,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80",
    colors: ["Void Black", "Sand"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Abstract eagle form rendered as a single weathered bronze stroke.",
    material: [
      "100% combed cotton",
      "Bronze pigment print",
      "Oversized fit",
      "Limited production",
    ],
    story: "The eagle is abstract on purpose — symbolism without costume.",
    motif: "tamga",
  },
];

export const categories = [
  "All",
  "T-Shirts",
  "Hoodies",
  "Sweatshirts",
  "Accessories",
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
