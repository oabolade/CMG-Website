import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

export function getSupabaseClient() {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log("Initializing Supabase client...");
  console.log("URL:", supabaseUrl);
  console.log("Key exists:", !!supabaseAnonKey);

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase environment variables are missing");
    console.error("URL:", supabaseUrl);
    console.error("Key:", supabaseAnonKey);
    return null;
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  console.log("Supabase client created successfully");
  return supabaseInstance;
}
