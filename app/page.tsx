import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedSlider from "@/components/FeaturedSlider";
import ProductGrid from "@/components/ProductGrid";
import EditorialBlock from "@/components/EditorialBlock";
import Button from "@/components/Button";
import { getProducts } from "@/lib/products";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <Hero />

      {/* Sliding product cards */}
      <section className="bg-cream">
        <div className="mx-auto max-w-editorial px-5 py-16 lg:px-8 lg:py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Öne çıkan koleksiyon</p>
              <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-void sm:text-5xl">
                Bozkır geometrisinin sessiz lookbook'u.
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden whitespace-nowrap text-[0.7rem] uppercase tracking-widest text-bronze hover:text-bronze sm:block"
            >
              Tümünü gör →
            </Link>
          </div>

          <FeaturedSlider products={products} max={8} />
        </div>
      </section>

      {/* Editorial */}
      <EditorialBlock
        eyebrow="Malzeme konuşur"
        heading="Miras süs değil. Miras yapıdır."
        body="Her çizgi, her kenar, her iz bozkır kültürünün sessiz bir izidir — kostüm değil, hediyelik değil. Hafızayı geleceğe taşıyanlar için çağdaş bir form."
        image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Taş ve gölge tonlarında editoryal erkek giyim kompozisyonu"
        cta={{ label: "Hikâyemiz", href: "/about" }}
      />

      {/* Product preview grid */}
      <section className="bg-cream">
        <div className="mx-auto max-w-editorial px-5 py-16 lg:px-8 lg:py-24">
          <div className="mb-10">
            <p className="eyebrow">Seçki</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-void sm:text-5xl">
              Kadim izler. Modern duruş.
            </h2>
          </div>

          <ProductGrid products={products.slice(0, 3)} />

          <div className="mt-14 text-center">
            <Button href="/products" variant="outline">
              Tüm ürünleri keşfet
            </Button>
          </div>
        </div>
      </section>

      {/* Brand story teaser */}
      <EditorialBlock
        tone="stone"
        reverse
        eyebrow="İz sessizdir"
        heading="İz sessizdir. Hafıza değil."
        body="iZ Studio, kadim Türk görsel hafızasını modern premium giyime taşır — sade silüetler, eskitilmiş bronz ve en yalın çizgisine indirgenmiş semboller."
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Taş ve keten malzeme çalışması"
        cta={{ label: "Manifestoyu oku", href: "/about" }}
      />
    </>
  );
}
