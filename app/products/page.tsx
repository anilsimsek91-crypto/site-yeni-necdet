"use client";

import { useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

/** Map the plural filter labels to the singular category on each product. */
const filterMap: Record<string, string | null> = {
  All: null,
  "T-Shirts": "T-Shirt",
  Hoodies: "Hoodie",
  Sweatshirts: "Sweatshirt",
  Accessories: "Accessory",
};

export default function ProductsPage() {
  const [active, setActive] = useState<string>("All");

  const category = filterMap[active];
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="bg-void">
      <div className="mx-auto max-w-editorial px-5 py-14 lg:px-8 lg:py-20">
        <header className="mb-10">
          <p className="eyebrow">The collection</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-linen sm:text-5xl">
            Every piece, one memory.
          </h1>
        </header>

        {/* Static filters */}
        <div className="no-scrollbar -mx-5 mb-10 flex gap-3 overflow-x-auto px-5 lg:mx-0 lg:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={cn(
                "whitespace-nowrap border px-5 py-2 text-[0.7rem] uppercase tracking-widest transition-colors",
                active === cat
                  ? "border-bronze bg-bronze/15 text-linen"
                  : "border-iron text-linen/60 hover:border-bronze/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <ProductGrid products={filtered} />
        ) : (
          <p className="py-20 text-center text-sm text-linen/50">
            No pieces in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
