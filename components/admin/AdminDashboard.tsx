"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { saveProduct, deleteProduct } from "@/app/admin/actions";
import { cn } from "@/lib/utils";

export type AdminProduct = {
  id: string;
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
  sort_order: number;
};

const CATEGORIES = ["Tişört", "Hoodie", "Sweatshirt", "Aksesuar"];
const BUCKET = "product-images";

type FormState = {
  id?: string;
  title: string;
  slug: string;
  category: string;
  collection: string;
  price: string;
  image: string;
  colors: string;
  sizes: string;
  description: string;
  material: string;
  story: string;
  shopier_url: string;
  sort_order: string;
};

const emptyForm: FormState = {
  title: "",
  slug: "",
  category: "Tişört",
  collection: "",
  price: "",
  image: "",
  colors: "",
  sizes: "",
  description: "",
  material: "",
  story: "",
  shopier_url: "",
  sort_order: "0",
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const inputCls =
  "mt-1.5 w-full border border-void/20 bg-transparent px-3 py-2 text-sm text-void outline-none focus:border-bronze";

export default function AdminDashboard({
  initialProducts,
  userEmail,
}: {
  initialProducts: AdminProduct[];
  userEmail: string;
}) {
  const router = useRouter();
  const [products, setProducts] = useState<AdminProduct[]>(initialProducts);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const isEditing = Boolean(form.id);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function reload() {
    const supabase = createClient();
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });
    if (data) setProducts(data as AdminProduct[]);
  }

  async function handleUpload(file: File) {
    setUploading(true);
    setMessage(null);
    const supabase = createClient();
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `${slugify(form.slug || form.title || "urun")}-${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
      upsert: true,
    });
    if (error) {
      setMessage(`Görsel yüklenemedi: ${error.message}`);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    set("image", data.publicUrl);
    setUploading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const res = await saveProduct({
      id: form.id,
      title: form.title.trim(),
      slug: (form.slug || slugify(form.title)).trim(),
      category: form.category,
      collection: form.collection.trim(),
      price: Number(form.price) || 0,
      image: form.image.trim(),
      colors: splitList(form.colors),
      sizes: splitList(form.sizes),
      description: form.description.trim(),
      material: splitLines(form.material),
      story: form.story.trim(),
      shopier_url: form.shopier_url.trim() || null,
      sort_order: Number(form.sort_order) || 0,
    });

    setSaving(false);
    if (!res.ok) {
      setMessage(res.error ?? "Kaydedilemedi.");
      return;
    }
    setMessage(isEditing ? "Ürün güncellendi." : "Ürün eklendi.");
    setForm(emptyForm);
    await reload();
    router.refresh();
  }

  function startEdit(p: AdminProduct) {
    setForm({
      id: p.id,
      title: p.title,
      slug: p.slug,
      category: p.category,
      collection: p.collection,
      price: String(p.price),
      image: p.image,
      colors: p.colors.join(", "),
      sizes: p.sizes.join(", "),
      description: p.description,
      material: p.material.join("\n"),
      story: p.story,
      shopier_url: p.shopier_url ?? "",
      sort_order: String(p.sort_order ?? 0),
    });
    setMessage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id: string) {
    if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;
    const res = await deleteProduct(id);
    if (!res.ok) {
      setMessage(res.error ?? "Silinemedi.");
      return;
    }
    if (form.id === id) setForm(emptyForm);
    await reload();
    router.refresh();
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-editorial px-5 py-12 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow">Yönetim paneli</p>
          <h1 className="mt-2 font-serif text-3xl text-void">Ürünler</h1>
        </div>
        <div className="text-right">
          <p className="text-xs text-void/50">{userEmail}</p>
          <button
            onClick={handleLogout}
            className="mt-1 text-[0.7rem] uppercase tracking-widest text-bronze hover:text-void"
          >
            Çıkış yap
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr]">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="font-serif text-xl text-void">
            {isEditing ? "Ürünü düzenle" : "Yeni ürün ekle"}
          </h2>

          <Field label="Başlık">
            <input
              className={inputCls}
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              required
            />
          </Field>

          <Field label="Slug (boş bırakılırsa otomatik)">
            <input
              className={inputCls}
              value={form.slug}
              onChange={(e) => set("slug", e.target.value)}
              placeholder={slugify(form.title)}
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Kategori">
              <select
                className={inputCls}
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Fiyat (₺)">
              <input
                type="number"
                className={inputCls}
                value={form.price}
                onChange={(e) => set("price", e.target.value)}
                required
              />
            </Field>
          </div>

          <Field label="Koleksiyon">
            <input
              className={inputCls}
              value={form.collection}
              onChange={(e) => set("collection", e.target.value)}
            />
          </Field>

          <Field label="Görsel">
            <input
              type="file"
              accept="image/*"
              className="mt-1.5 block w-full text-xs text-void/70 file:mr-3 file:border file:border-void/20 file:bg-transparent file:px-3 file:py-1.5 file:text-xs file:text-void"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleUpload(f);
              }}
            />
            {uploading && (
              <p className="mt-2 text-xs text-void/50">Yükleniyor…</p>
            )}
            <input
              className={cn(inputCls, "mt-2")}
              value={form.image}
              onChange={(e) => set("image", e.target.value)}
              placeholder="veya görsel URL'i yapıştırın"
            />
            {form.image && (
              <div className="relative mt-3 aspect-[4/5] w-28 overflow-hidden border border-void/15">
                <Image src={form.image} alt="Önizleme" fill className="object-cover" />
              </div>
            )}
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Renkler (virgülle)">
              <input
                className={inputCls}
                value={form.colors}
                onChange={(e) => set("colors", e.target.value)}
                placeholder="Gece Siyahı, Kum"
              />
            </Field>
            <Field label="Bedenler (virgülle)">
              <input
                className={inputCls}
                value={form.sizes}
                onChange={(e) => set("sizes", e.target.value)}
                placeholder="S, M, L, XL"
              />
            </Field>
          </div>

          <Field label="Açıklama">
            <textarea
              className={inputCls}
              rows={2}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
            />
          </Field>

          <Field label="Malzeme (her satır bir madde)">
            <textarea
              className={inputCls}
              rows={3}
              value={form.material}
              onChange={(e) => set("material", e.target.value)}
              placeholder={"%100 pamuk\nOversize kalıp"}
            />
          </Field>

          <Field label="Hikâye / iz">
            <textarea
              className={inputCls}
              rows={2}
              value={form.story}
              onChange={(e) => set("story", e.target.value)}
            />
          </Field>

          <Field label="Shopier satın alma linki">
            <input
              className={inputCls}
              value={form.shopier_url}
              onChange={(e) => set("shopier_url", e.target.value)}
              placeholder="https://www.shopier.com/..."
            />
          </Field>

          <Field label="Sıra (küçük olan önce)">
            <input
              type="number"
              className={inputCls}
              value={form.sort_order}
              onChange={(e) => set("sort_order", e.target.value)}
            />
          </Field>

          {message && <p className="text-sm text-bronze">{message}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving || uploading}
              className="bg-void px-6 py-2.5 text-[0.7rem] uppercase tracking-widest text-cream hover:bg-iron disabled:opacity-50"
            >
              {saving ? "Kaydediliyor…" : isEditing ? "Güncelle" : "Ekle"}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={() => setForm(emptyForm)}
                className="border border-void/20 px-6 py-2.5 text-[0.7rem] uppercase tracking-widest text-void/70 hover:border-bronze"
              >
                Vazgeç
              </button>
            )}
          </div>
        </form>

        {/* List */}
        <div>
          <h2 className="mb-5 font-serif text-xl text-void">
            Mevcut ürünler ({products.length})
          </h2>
          <ul className="divide-y divide-void/10 border-y border-void/10">
            {products.map((p) => (
              <li key={p.id} className="flex items-center gap-4 py-3">
                <div className="relative h-16 w-12 flex-shrink-0 overflow-hidden border border-void/10 bg-parchment">
                  {p.image && (
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-void">{p.title}</p>
                  <p className="text-xs text-void/50">
                    {p.category} · ₺{p.price.toLocaleString("tr-TR")}
                    {p.shopier_url ? " · Shopier ✓" : " · link yok"}
                  </p>
                </div>
                <button
                  onClick={() => startEdit(p)}
                  className="text-[0.7rem] uppercase tracking-widest text-bronze hover:text-void"
                >
                  Düzenle
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-[0.7rem] uppercase tracking-widest text-void/40 hover:text-red-700"
                >
                  Sil
                </button>
              </li>
            ))}
            {products.length === 0 && (
              <li className="py-6 text-sm text-void/50">Henüz ürün yok.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      {children}
    </label>
  );
}

function splitList(s: string): string[] {
  return s.split(",").map((x) => x.trim()).filter(Boolean);
}
function splitLines(s: string): string[] {
  return s.split("\n").map((x) => x.trim()).filter(Boolean);
}
