import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

type ProductSliderProps = {
  products: Product[];
};

/**
 * Horizontal, native-scroll product gallery. No animation library — just
 * CSS scroll-snap and overflow. Cards swipe naturally on mobile and show
 * several at once on desktop.
 */
export default function ProductSlider({ products }: ProductSliderProps) {
  return (
    <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:-mx-8 lg:px-8">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          variant="slider"
          title={product.title}
          slug={product.slug}
          category={product.category}
          collection={product.collection}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
