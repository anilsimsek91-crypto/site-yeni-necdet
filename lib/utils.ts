/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a number as Turkish Lira, e.g. 1250 -> "₺1.250". */
export function formatPrice(value: number): string {
  return `₺${value.toLocaleString("tr-TR")}`;
}
