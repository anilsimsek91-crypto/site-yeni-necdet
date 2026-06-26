"use client";

import { useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  const [active, setActive] = useState<string>("Tümü");

  const filtered =
    active === "Tümü"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div className="bg-void">
      <div className="mx-auto max-w-editorial px-5 py-14 lg:px-8 lg:py-20">
        <header className="mb-12">
          <p className="eyebrow">Koleksiyon</p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-linen sm:text-6xl">
            Her parça, bir iz.
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
            Bu kategoride henüz parça yok.
          </p>
        )}
      </div>
    </div>
  );
}
