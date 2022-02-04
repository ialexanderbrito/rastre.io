import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://agejhjpwmddgycuxdfss.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzkyNzE1MywiZXhwIjoxOTU5NTAzMTUzfQ.vz4FepWJmhZ8dt7NQR_5uJXPLYnH6UsdGchJNlxgm8Q';
const supabaseServKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzOTI3MTUzLCJleHAiOjE5NTk1MDMxNTN9.LRsCDoCxgMHgBhf5gZiTVQ4KsD-Vh5WqdaqoUTVHqiE';

export const supabase = createClient(
  supabaseUrl,
  supabaseServKey,
  supabaseAnonKey
);
