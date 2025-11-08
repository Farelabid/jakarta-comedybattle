import { createClient } from '@supabase/supabase-js'

// 1. Ambil variabel dengan cara Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 2. Cek apakah variabel berhasil dibaca
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL atau Anon Key tidak ditemukan. Pastikan file .env.local sudah benar dan server sudah di-restart.")
}

// 3. Buat client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)