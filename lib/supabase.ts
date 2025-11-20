import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hkihjnzhmtxldkyedcci.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhraWhqbnpobXR4bGRreWVkY2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0MzUwNzAsImV4cCI6MjA3NzAxMTA3MH0.7cWzajTXBEwma-sGW4acpTh13_S7NFUR0HWhNS8gKgw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  global: {
    headers: {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
  },
});

export function getSupabaseClient() {
  return supabase;
}
