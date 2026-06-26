import { cn } from "@/lib/utils";

type MotifFrameProps = {
  children: React.ReactNode;
  variant?: "corner" | "border" | "background";
  intensity?: "low" | "medium";
  className?: string;
};

/**
 * Subtle Turkic-inspired framing. Motifs are drawn with thin SVG line marks
 * and CSS borders only — never clipart, never louder than the content.
 */
export default function MotifFrame({
  children,
  variant = "corner",
  intensity = "low",
  className,
}: MotifFrameProps) {
  const stroke = intensity === "low" ? "opacity-30" : "opacity-60";

  return (
    <div
      className={cn(
        "relative",
        variant === "border" && "border border-bronze/25",
        className
      )}
    >
      {variant === "background" && (
        <TamgaMark
          className={cn(
            "pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-bronze",
            intensity === "low" ? "opacity-[0.06]" : "opacity-[0.12]"
          )}
        />
      )}

      {(variant === "corner" || variant === "border") && (
        <>
          <CornerMark className={cn("left-2 top-2", stroke)} />
          <CornerMark className={cn("right-2 top-2 rotate-90", stroke)} />
          <CornerMark className={cn("bottom-2 left-2 -rotate-90", stroke)} />
          <CornerMark className={cn("bottom-2 right-2 rotate-180", stroke)} />
        </>
      )}

      {children}
    </div>
  );
}

function CornerMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn(
        "pointer-events-none absolute z-10 h-4 w-4 text-bronze",
        className
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M1 8V1h7M1 1l6 6" />
    </svg>
  );
}

/** Abstract tamga-like mark for low-opacity backgrounds. */
export function TamgaMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M60 6v108M30 36h60M40 72h40M60 6 30 36M60 6l30 30M30 36l10 36M90 36 80 72" />
    </svg>
  );
}
