import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabaseServKey = process.env.REACT_APP_SUPABASE_SERV_KEY;

export const supabase = createClient(
  supabaseUrl,
  supabaseServKey,
  supabaseAnonKey
);
