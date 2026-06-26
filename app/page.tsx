import Link from "next/link";
import Hero from "@/components/Hero";
import ProductSlider from "@/components/ProductSlider";
import ProductGrid from "@/components/ProductGrid";
import EditorialBlock from "@/components/EditorialBlock";
import Button from "@/components/Button";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Sliding product cards */}
      <section className="bg-void">
        <div className="mx-auto max-w-editorial px-5 py-16 lg:px-8 lg:py-24">
          <div className="mb-9 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Featured collection</p>
              <h2 className="mt-3 max-w-lg font-serif text-3xl leading-tight text-linen sm:text-4xl">
                A quiet lookbook of steppe geometry.
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden whitespace-nowrap text-[0.7rem] uppercase tracking-widest text-bronze hover:text-stone sm:block"
            >
              View all →
            </Link>
          </div>

          <ProductSlider products={products.slice(0, 6)} />
        </div>
      </section>

      {/* Editorial */}
      <EditorialBlock
        eyebrow="The material speaks"
        heading="Not heritage as decoration. Heritage as structure."
        body="Every line, border and mark is a quiet trace of steppe culture — never costume, never souvenir. A contemporary uniform for those who carry memory forward."
        image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Editorial menswear composition in stone and shadow"
        cta={{ label: "Our story", href: "/about" }}
      />

      {/* Product preview grid */}
      <section className="bg-void">
        <div className="mx-auto max-w-editorial px-5 py-16 lg:px-8 lg:py-24">
          <div className="mb-9">
            <p className="eyebrow">The collection</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-linen sm:text-4xl">
              Ancient marks. Modern presence.
            </h2>
          </div>

          <ProductGrid products={products.slice(0, 4)} />

          <div className="mt-12 text-center">
            <Button href="/products" variant="outline">
              Explore all products
            </Button>
          </div>
        </div>
      </section>

      {/* Brand story teaser */}
      <EditorialBlock
        tone="stone"
        reverse
        eyebrow="The mark is quiet"
        heading="The mark is quiet. The memory is not."
        body="Böri translates ancient Turkic visual memory into modern premium menswear — restrained silhouettes, weathered bronze, and symbols reduced to their truest line."
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Stone and linen material study"
        cta={{ label: "Read the manifesto", href: "/about" }}
      />
    </>
  );
}
