import { redirect } from "next/navigation";
import AdminDashboard, { type AdminProduct } from "@/components/admin/AdminDashboard";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!isSupabaseConfigured) {
    return (
      <div className="mx-auto max-w-editorial px-5 py-20">
        <p className="eyebrow">Yönetim</p>
        <h1 className="mt-3 font-serif text-3xl text-void">
          Supabase yapılandırılmamış
        </h1>
        <p className="mt-4 max-w-md text-sm text-void/60">
          Admin panelini kullanmak için <code>.env.local</code> dosyasına
          Supabase anahtarlarını girin ve sunucuyu yeniden başlatın.
        </p>
      </div>
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data } = await supabase
    .from("products")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const products = (data ?? []) as AdminProduct[];

  return <AdminDashboard initialProducts={products} userEmail={user.email ?? ""} />;
}
