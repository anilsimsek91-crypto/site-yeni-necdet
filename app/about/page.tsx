import type { Metadata } from "next";
import Image from "next/image";
import EditorialBlock from "@/components/EditorialBlock";
import Button from "@/components/Button";
import { TamgaMark } from "@/components/MotifFrame";

export const metadata: Metadata = {
  title: "Hakkımızda — iZ Studio",
  description:
    "Kadim Türk görsel hafızasını modern premium erkek giyime taşıyoruz.",
};

const philosophy = [
  {
    title: "Malzeme",
    body: "Ağır gramajlı pamuk, eskitilmiş bronz, taş ve keten tonları. Malzeme, semboldan önce seçilir.",
  },
  {
    title: "İz",
    body: "Tamga ve runik formlar tek bir çizgiye indirgenir — bir kez konur, süs için tekrarlanmaz.",
  },
  {
    title: "Üretim",
    body: "Sınırlı üretim, özenli kalıplar, ölçülü bitişler. Gürültülü miras değil, sessiz lüks.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* Manifesto hero */}
      <section className="relative overflow-hidden border-b border-void/15">
        <TamgaMark className="pointer-events-none absolute -right-16 top-0 h-[520px] w-[520px] text-bronze opacity-[0.05]" />
        <div className="relative mx-auto max-w-editorial px-5 py-20 lg:px-8 lg:py-32">
          <p className="eyebrow">Manifesto</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-void sm:text-6xl lg:text-7xl">
            Kadim görsel hafıza, modern premium giyime taşındı.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-void/60">
            iZ Studio tarihi kostüm gibi ödünç almaz. Bozkırı — geometrisini,
            izlerini, malzemesini — çağdaş giyimin altındaki yapı olarak görür.
          </p>
        </div>
      </section>

      {/* Origin story editorial */}
      <EditorialBlock
        eyebrow="Köken"
        heading="Hafızadan kazındı. Bugün için kuruldu."
        body="iZ Studio için ‘iz’ açık arazide yol gösteren kadim bir işarettir. Onu slogan olarak değil, bir tasarım dili olarak taşırız: sade, kararlı, kalıcı."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Alçak ışık altında açık bozkır manzarası"
      />

      {/* Philosophy */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-editorial px-5 py-16 lg:px-8 lg:py-24">
          <p className="eyebrow">Üretim felsefesi</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-void sm:text-5xl">
            Sessizce tutulan üç ilke.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {philosophy.map((item) => (
              <div key={item.title} className="border-t border-bronze/30 pt-6">
                <h3 className="font-serif text-xl text-void">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-void/60">
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
          alt="Karanlık sinematik malzeme çalışması — taş ve metal"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <p className="max-w-2xl font-serif text-3xl leading-snug text-[#f5efe0] sm:text-5xl">
            İz sessizdir. Hafıza değil.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="mx-auto max-w-editorial px-5 py-20 text-center lg:px-8">
          <h2 className="font-serif text-4xl text-void sm:text-5xl">
            Bozkırdan doğdu, geleceğe taşındı.
          </h2>
          <div className="mt-9">
            <Button href="/products">Koleksiyonu keşfet</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
