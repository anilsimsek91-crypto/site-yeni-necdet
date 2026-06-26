import type { Metadata } from "next";
import Image from "next/image";
import EditorialBlock from "@/components/EditorialBlock";
import Button from "@/components/Button";
import { TamgaMark } from "@/components/MotifFrame";

export const metadata: Metadata = {
  title: "About — Böri",
  description:
    "Ancient Turkic visual memory translated into modern premium menswear.",
};

const philosophy = [
  {
    title: "Material",
    body: "Heavyweight cotton, weathered bronze, stone and linen tones. The material is chosen before the symbol.",
  },
  {
    title: "Mark",
    body: "Tamga and runic forms reduced to a single line — placed once, never repeated for decoration.",
  },
  {
    title: "Make",
    body: "Limited production, considered fits, finished with restraint. Quiet luxury over loud heritage.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-void">
      {/* Manifesto hero */}
      <section className="relative overflow-hidden border-b border-iron/60">
        <TamgaMark className="pointer-events-none absolute -right-16 top-0 h-[520px] w-[520px] text-bronze opacity-[0.05]" />
        <div className="relative mx-auto max-w-editorial px-5 py-20 lg:px-8 lg:py-32">
          <p className="eyebrow">The manifesto</p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-linen sm:text-5xl lg:text-6xl">
            Ancient Turkic visual memory, translated into modern premium
            menswear.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-linen/60">
            Böri does not borrow history as costume. It treats the steppe — its
            geometry, its marks, its materials — as structure beneath
            contemporary clothing.
          </p>
        </div>
      </section>

      {/* Origin story editorial */}
      <EditorialBlock
        eyebrow="Origin"
        heading="Carved from memory. Built for today."
        body="The name Böri carries an old idea of the wolf — guidance across open land. We carry it forward not as a slogan, but as a way of designing: spare, deliberate, enduring."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Open steppe landscape under low light"
      />

      {/* Philosophy */}
      <section className="bg-dark">
        <div className="mx-auto max-w-editorial px-5 py-16 lg:px-8 lg:py-24">
          <p className="eyebrow">Production philosophy</p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-linen sm:text-4xl">
            Three principles, quietly held.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {philosophy.map((item) => (
              <div key={item.title} className="border-t border-bronze/30 pt-6">
                <h3 className="font-serif text-xl text-linen">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-linen/60">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large editorial image block */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504194104404-433180773017?auto=format&fit=crop&w=1600&q=80"
          alt="Dark cinematic material study — stone and metal"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-void/50" />
        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <p className="max-w-2xl font-serif text-2xl leading-snug text-linen sm:text-4xl">
            The mark is quiet. The memory is not.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-void">
        <div className="mx-auto max-w-editorial px-5 py-20 text-center lg:px-8">
          <h2 className="font-serif text-3xl text-linen sm:text-4xl">
            Rooted in the steppe. Worn by the future.
          </h2>
          <div className="mt-9">
            <Button href="/products">Explore the collection</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
