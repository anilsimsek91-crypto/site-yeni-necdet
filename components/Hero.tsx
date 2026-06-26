import Image from "next/image";
import Button from "./Button";
import { TamgaMark } from "./MotifFrame";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-iron/60 bg-void">
      <div className="steppe-texture absolute inset-0 opacity-60" aria-hidden="true" />
      <TamgaMark
        className="pointer-events-none absolute -left-10 top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 text-bronze opacity-[0.04] lg:block"
      />

      <div className="relative mx-auto grid max-w-editorial gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-28">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Kadim iz · Modern duruş</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-linen sm:text-6xl lg:text-7xl">
            Bozkırdan doğdu,
            <br />
            geleceğe taşındı.
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-linen/60">
            Kadim Türk sembolleri ve bozkır geometrisinden ilham alan, sade ve
            rafine erkek giyim.
          </p>
          <div className="mt-10">
            <Button href="/products">Koleksiyonu Keşfet</Button>
          </div>
        </div>

        {/* Campaign image */}
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden border border-bronze/25 sm:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?auto=format&fit=crop&w=1200&q=80"
              alt="iZ Studio premium erkek giyim kampanyası — karanlık bozkır atmosferi"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
