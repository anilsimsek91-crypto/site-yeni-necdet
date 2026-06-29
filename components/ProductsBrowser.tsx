"use client";

import { useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import { categories, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductsBrowserProps = {
  products: Product[];
};

export default function ProductsBrowser({ products }: ProductsBrowserProps) {
  const [active, setActive] = useState<string>("Tümü");

  const filtered =
    active === "Tümü"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      {/* Statik filtreler */}
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
                ? "border-bronze bg-bronze/15 text-void"
                : "border-void/20 text-void/60 hover:border-bronze/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <p className="py-20 text-center text-sm text-void/50">
          Bu kategoride henüz parça yok.
        </p>
      )}
    </>
  );
}
