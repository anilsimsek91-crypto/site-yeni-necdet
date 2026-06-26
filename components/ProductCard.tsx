import Image from "next/image";
import Link from "next/link";
import MotifFrame from "./MotifFrame";
import { cn, formatPrice } from "@/lib/utils";

export type ProductCardProps = {
  title: string;
  slug: string;
  category: string;
  collection?: string;
  price?: number;
  image: string;
  variant?: "slider" | "grid";
  className?: string;
};

/**
 * Product card used by both the homepage slider (variant="slider") and the
 * products grid (variant="grid"). The grid variant is intentionally cleaner.
 */
export default function ProductCard({
  title,
  slug,
  category,
  collection,
  price,
  image,
  variant = "grid",
  className,
}: ProductCardProps) {
  const isSlider = variant === "slider";

  return (
    <Link
      href={`/products/${slug}`}
      className={cn(
        "group block",
        isSlider && "w-[75vw] flex-shrink-0 snap-center sm:w-[340px]",
        className
      )}
    >
      <MotifFrame
        variant={isSlider ? "border" : "corner"}
        className={cn(
          "overflow-hidden bg-dark transition-colors duration-300",
          isSlider && "border-bronze/30 group-hover:border-bronze/70"
        )}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 75vw, 340px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
        </div>

        <div className="flex items-end justify-between gap-3 px-4 py-4">
          <div>
            <p className="eyebrow">{collection ?? category}</p>
            <h3 className="mt-1 font-serif text-lg leading-tight text-linen">
              {title}
            </h3>
            {price !== undefined && (
              <p className="mt-1 text-sm text-stone">{formatPrice(price)}</p>
            )}
          </div>
          <span className="whitespace-nowrap text-[0.7rem] uppercase tracking-widest text-bronze opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Explore →
          </span>
        </div>
      </MotifFrame>
    </Link>
  );
}
