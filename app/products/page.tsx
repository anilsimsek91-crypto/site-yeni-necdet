import ProductsBrowser from "@/components/ProductsBrowser";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-editorial px-5 py-14 lg:px-8 lg:py-20">
        <header className="mb-12">
          <p className="eyebrow">Koleksiyon</p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-void sm:text-6xl">
            Her parça, bir iz.
          </h1>
        </header>

        <ProductsBrowser products={products} />
      </div>
    </div>
  );
}
