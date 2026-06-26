import Image from "next/image";
import Button from "./Button";
import { cn } from "@/lib/utils";

type EditorialBlockProps = {
  eyebrow?: string;
  heading: string;
  body?: string;
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
  /** On desktop, place the image on the left (default) or right. */
  reverse?: boolean;
  tone?: "dark" | "stone";
};

export default function EditorialBlock({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
  cta,
  reverse = false,
  tone = "dark",
}: EditorialBlockProps) {
  return (
    <section
      className={cn(
        tone === "stone" ? "bg-stone text-void" : "bg-dark text-linen"
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-editorial items-center gap-8 px-5 py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24",
          reverse && "lg:[direction:rtl]"
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-bronze/25 lg:[direction:ltr]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="lg:[direction:ltr]">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2
            className={cn(
              "mt-4 font-serif text-3xl leading-tight sm:text-4xl",
              tone === "stone" ? "text-void" : "text-linen"
            )}
          >
            {heading}
          </h2>
          {body && (
            <p
              className={cn(
                "mt-5 max-w-md text-base leading-relaxed",
                tone === "stone" ? "text-void/70" : "text-linen/60"
              )}
            >
              {body}
            </p>
          )}
          {cta && (
            <div className="mt-8">
              <Button href={cta.href} variant={tone === "stone" ? "solid" : "outline"}>
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
