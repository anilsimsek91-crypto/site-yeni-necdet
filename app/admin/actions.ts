"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export type ProductInput = {
  id?: string;
  title: string;
  slug: string;
  category: string;
  collection: string;
  price: number;
  image: string;
  colors: string[];
  sizes: string[];
  description: string;
  material: string[];
  story: string;
  shopier_url: string | null;
  sort_order?: number;
};

async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Yetkisiz.");
  return supabase;
}

export async function saveProduct(input: ProductInput) {
  const supabase = await requireUser();

  const payload = {
    title: input.title,
    slug: input.slug,
    category: input.category,
    collection: input.collection,
    price: input.price,
    image: input.image,
    colors: input.colors,
    sizes: input.sizes,
    description: input.description,
    material: input.material,
    story: input.story,
    shopier_url: input.shopier_url,
    sort_order: input.sort_order ?? 0,
  };

  const query = input.id
    ? supabase.from("products").update(payload).eq("id", input.id)
    : supabase.from("products").insert(payload);

  const { error } = await query;
  if (error) return { ok: false, error: error.message };

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath(`/products/${input.slug}`);
  revalidatePath("/admin");
  return { ok: true };
}

export async function deleteProduct(id: string) {
  const supabase = await requireUser();
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) return { ok: false, error: error.message };

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath("/admin");
  return { ok: true };
}
