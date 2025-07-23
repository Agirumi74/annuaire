import { createClient } from "@supabase/supabase-js";

// Get environment variables with fallbacks for development/build
const supabaseUrl = import.meta.env.SUPABASE_URL || 'https://demo.supabase.co';
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || 'demo_key';

// Validate configuration
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase configuration is missing. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);