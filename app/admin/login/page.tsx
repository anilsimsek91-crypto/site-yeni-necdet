"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ADMIN_EMAIL, isSupabaseConfigured } from "@/lib/supabase/config";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!isSupabaseConfigured) {
      setError(
        "Supabase yapılandırılmamış. Lütfen .env.local içine anahtarları girin."
      );
      return;
    }
    if (username.trim().toLowerCase() !== "izstudio") {
      setError("Kullanıcı adı veya şifre hatalı.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password,
    });
    setLoading(false);

    if (authError) {
      setError("Kullanıcı adı veya şifre hatalı.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="bg-cream">
      <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-5 py-20">
        <p className="eyebrow">Yönetim</p>
        <h1 className="mt-3 font-serif text-4xl text-void">Giriş</h1>
        <p className="mt-3 text-sm text-void/60">
          iZ Studio yönetim paneline erişmek için giriş yapın.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="username" className="eyebrow">
              Kullanıcı adı
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full border border-void/20 bg-transparent px-4 py-3 text-sm text-void outline-none focus:border-bronze"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="eyebrow">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full border border-void/20 bg-transparent px-4 py-3 text-sm text-void outline-none focus:border-bronze"
              required
            />
          </div>

          {error && <p className="text-sm text-red-700">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-void px-7 py-3 text-[0.7rem] uppercase tracking-widest text-cream transition-colors hover:bg-iron disabled:opacity-50"
          >
            {loading ? "Giriş yapılıyor…" : "Giriş yap"}
          </button>
        </form>
      </div>
    </div>
  );
}
