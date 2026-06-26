import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Bulunamadı — iZ Studio" };
  return {
    title: `${product.title} — iZ Studio`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="bg-void">
      <div className="mx-auto max-w-editorial px-5 py-14 lg:px-8 lg:py-20">
        <ProductDetail product={product} />

        {/* Related products */}
        <section className="mt-24 border-t border-iron/60 pt-14">
          <h2 className="mb-9 font-serif text-3xl text-linen sm:text-4xl">
            Koleksiyona devam et
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard
                key={p.slug}
                variant="grid"
                title={p.title}
                slug={p.slug}
                category={p.category}
                collection={p.collection}
                price={p.price}
                image={p.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
