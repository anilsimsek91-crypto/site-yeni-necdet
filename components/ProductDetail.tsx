"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import MotifFrame from "./MotifFrame";
import { cn, formatPrice } from "@/lib/utils";
import type { Product } from "@/data/products";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      {/* Image — first on mobile, left on desktop */}
      <MotifFrame variant="corner" className="self-start">
        <div className="relative aspect-[4/5] overflow-hidden border border-bronze/25 bg-dark">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </MotifFrame>

      {/* Info — sticky on desktop */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow">{product.collection}</p>
        <h1 className="mt-3 font-serif text-3xl leading-tight text-linen sm:text-4xl">
          {product.title}
        </h1>
        <p className="mt-4 text-xl text-stone">{formatPrice(product.price)}</p>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-linen/60">
          {product.description}
        </p>

        {/* Colors */}
        <fieldset className="mt-8">
          <legend className="eyebrow">Color — {color}</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {product.colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                aria-pressed={color === c}
                className={cn(
                  "border px-4 py-2 text-xs uppercase tracking-widest transition-colors",
                  color === c
                    ? "border-bronze bg-bronze/15 text-linen"
                    : "border-iron text-linen/60 hover:border-bronze/50"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Sizes */}
        <fieldset className="mt-7">
          <legend className="eyebrow">Size — {size}</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={cn(
                  "min-w-[3rem] border px-4 py-2 text-xs uppercase tracking-widest transition-colors",
                  size === s
                    ? "border-bronze bg-bronze/15 text-linen"
                    : "border-iron text-linen/60 hover:border-bronze/50"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-9">
          <Button className="w-full sm:w-auto">Add to cart</Button>
        </div>

        {/* Material details */}
        <div className="mt-12 border-t border-iron/60 pt-8">
          <h2 className="eyebrow">Material & make</h2>
          <ul className="mt-4 space-y-2 text-sm text-linen/60">
            {product.material.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-bronze">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Story */}
        <div className="mt-8 border-t border-iron/60 pt-8">
          <h2 className="eyebrow">The mark</h2>
          <p className="mt-4 max-w-md font-serif text-lg leading-relaxed text-linen/80">
            {product.story}
          </p>
        </div>
      </div>
    </div>
  );
}
