import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Indica se as credenciais do Supabase já foram configuradas no `.env`.
 * Enquanto não estiverem (Fase 5), `supabase` fica `null` e a UI deve
 * tratar isso graciosamente (ex.: blog/admin mostram aviso de "em breve").
 */
export const isSupabaseConfigured: boolean = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url, anonKey)
  : null;
