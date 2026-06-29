import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import {
  SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL,
} from "./config";

/** Sunucu tarafı Supabase istemcisi (cookie tabanlı oturum). */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Server Component içinden çağrıldığında yok sayılır; oturum
          // middleware tarafından yenilenir.
        }
      },
    },
  });
}

/**
 * Service-role istemcisi — yalnızca sunucu tarafında, yetkili admin
 * mutasyonlarında kullanılır. RLS'i bypass eder, asla istemciye sızdırılmaz.
 */
export function createAdminClient() {
  return createSupabaseClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
