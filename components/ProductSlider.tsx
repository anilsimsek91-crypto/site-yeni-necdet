import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

type ProductSliderProps = {
  products: Product[];
};

/**
 * Yatay, native-scroll ürün galerisi. Kütüphane yok — yalnızca CSS
 * scroll-snap. Mobilde doğal kaydırma, masaüstünde birden çok kart görünür;
 * ortadaki kart daha baskındır ve kartlar büyük ekranda hafifçe kesişir.
 */
export default function ProductSlider({ products }: ProductSliderProps) {
  const featuredIndex = Math.floor(products.length / 2);

  return (
    <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory items-end gap-6 overflow-x-auto px-5 pb-6 lg:-mx-8 lg:gap-8 lg:px-8">
      {products.map((product, i) => (
        <ProductCard
          key={product.slug}
          variant="slider"
          featured={i === featuredIndex}
          title={product.title}
          slug={product.slug}
          category={product.category}
          collection={product.collection}
          price={product.price}
          image={product.image}
          className="flex-shrink-0 lg:[&:not(:first-child)]:-ml-6"
        />
      ))}
    </div>
  );
}
