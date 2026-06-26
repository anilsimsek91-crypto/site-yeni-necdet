import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          variant="grid"
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
