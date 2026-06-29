import { createClient } from "./supabase/server";
import { isSupabaseConfigured } from "./supabase/config";
import {
  products as seedProducts,
  type Product,
} from "@/data/products";

export type { Product };

/** Supabase satırını uygulama Product tipine çevirir. */
function mapRow(row: Record<string, unknown>): Product {
  return {
    title: String(row.title ?? ""),
    slug: String(row.slug ?? ""),
    category: (row.category as Product["category"]) ?? "Tişört",
    collection: String(row.collection ?? ""),
    price: Number(row.price ?? 0),
    image: String(row.image ?? ""),
    colors: (row.colors as string[]) ?? [],
    sizes: (row.sizes as string[]) ?? [],
    description: String(row.description ?? ""),
    material: (row.material as string[]) ?? [],
    story: String(row.story ?? ""),
    motif: (row.motif as string) ?? undefined,
    shopierUrl: (row.shopier_url as string) ?? undefined,
  };
}

export async function getProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured) return seedProducts;

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error || !data) return seedProducts;
  return data.map(mapRow);
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  if (!isSupabaseConfigured) {
    return seedProducts.find((p) => p.slug === slug);
  }

  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  return data ? mapRow(data) : undefined;
}

export async function getRelatedProducts(
  product: Product,
  limit = 3
): Promise<Product[]> {
  const all = await getProducts();
  return all
    .filter((p) => p.slug !== product.slug && p.collection === product.collection)
    .concat(all.filter((p) => p.collection !== product.collection))
    .filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)
    .filter((p) => p.slug !== product.slug)
    .slice(0, limit);
}
