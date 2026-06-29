import Image from "next/image";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";

export type ProductCardProps = {
  title: string;
  slug: string;
  category: string;
  collection?: string;
  price?: number;
  image: string;
  variant?: "slider" | "grid";
  featured?: boolean;
  className?: string;
};

/**
 * Premium fashion ürün kartı. Köşelerde kazınmış hissinde ince Türk
 * geometrisi/tamga izleri taşır; bronz detay çok sınırlıdır.
 * variant="slider" yatay galeride, variant="grid" ürün ızgarasında kullanılır.
 */
export default function ProductCard({
  title,
  slug,
  category,
  collection,
  price,
  image,
  variant = "grid",
  featured = false,
  className,
}: ProductCardProps) {
  const isSlider = variant === "slider";

  return (
    <Link
      href={`/products/${slug}`}
      className={cn(
        "group relative block",
        isSlider && "snap-center",
        isSlider &&
          (featured
            ? "w-[82vw] sm:w-[420px] lg:w-[460px]"
            : "w-[72vw] sm:w-[340px] lg:w-[360px]"),
        className
      )}
    >
      {/* Görsel */}
      <div className="relative aspect-[3/4] overflow-hidden bg-parchment">
        <Image
          src={image}
          alt={title}
          fill
          sizes={isSlider ? "(max-width: 640px) 82vw, 440px" : "(max-width: 640px) 100vw, 360px"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/55 via-transparent to-transparent" />

        {/* Kazınmış köşe motifleri */}
        <CornerEtch className="left-3 top-3" />
        <CornerEtch className="right-3 top-3 rotate-90" />
        <CornerEtch className="bottom-3 left-3 -rotate-90" />
        <CornerEtch className="bottom-3 right-3 rotate-180" />

        {/* İnce çerçeve — hover'da hafif ısınır */}
        <div className="pointer-events-none absolute inset-0 border border-void/10 transition-colors duration-500 group-hover:border-bronze/40" />
      </div>

      {/* Metin */}
      <div className="flex items-end justify-between gap-4 pt-4">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-void/40">
            {collection ?? category}
          </p>
          <h3 className="mt-1.5 font-serif text-xl leading-tight text-void">
            {title}
          </h3>
          {price !== undefined && (
            <p className="mt-1.5 text-sm text-bronze">{formatPrice(price)}</p>
          )}
        </div>
        <span className="mb-1 whitespace-nowrap text-[0.65rem] uppercase tracking-[0.2em] text-void/30 transition-colors duration-300 group-hover:text-bronze">
          İncele →
        </span>
      </div>
    </Link>
  );
}

/** Köşeye kazınmış ince çizgisel tamga izi. */
function CornerEtch({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 28"
      className={cn(
        "pointer-events-none absolute z-10 h-5 w-5 text-bronze/50 transition-colors duration-500 group-hover:text-bronze",
        className
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
    >
      <path d="M2 10V2h8M2 2l7 7" />
    </svg>
  );
}
