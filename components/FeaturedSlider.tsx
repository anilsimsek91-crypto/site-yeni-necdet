"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

type FeaturedSliderProps = {
  products: Product[];
  /** Maksimum kart sayısı. */
  max?: number;
  /** Otomatik kayma hızı (px/kare). */
  speed?: number;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Öne çıkan ürünler: her açılışta rastgele en fazla `max` ürün seçer ve
 * yatay olarak sabit hızda, sonsuz döngüyle otomatik kaydırır.
 * Kütüphane yok — native scroll + requestAnimationFrame. Hover/dokunuşta durur.
 */
export default function FeaturedSlider({
  products,
  max = 8,
  speed = 0.4,
}: FeaturedSliderProps) {
  // SSR ile tutarlı ilk render; mount sonrası rastgele seçim.
  const [items, setItems] = useState<Product[]>(() => products.slice(0, max));
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    setItems(shuffle(products).slice(0, max));
  }, [products, max]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const step = () => {
      if (!pausedRef.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed;
        // Liste iki kez render edildiği için yarıyı geçince başa sar (kesintisiz).
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [items, speed]);

  // Kesintisiz döngü için listeyi iki kez basıyoruz.
  const loop = [...items, ...items];

  return (
    <div
      ref={trackRef}
      className="no-scrollbar -mx-5 flex gap-6 overflow-x-auto px-5 pb-6 lg:-mx-8 lg:gap-8 lg:px-8"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
      onTouchEnd={() => (pausedRef.current = false)}
    >
      {loop.map((product, i) => (
        <ProductCard
          key={`${product.slug}-${i}`}
          variant="slider"
          title={product.title}
          slug={product.slug}
          category={product.category}
          collection={product.collection}
          price={product.price}
          image={product.image}
          className="flex-shrink-0"
        />
      ))}
    </div>
  );
}
