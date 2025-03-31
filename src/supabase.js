import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rqtwjlmdpvngkaqbovkk.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdHdqbG1kcHZuZ2thcWJvdmtrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNDM1NDU3OSwiZXhwIjoyMDQ5OTMwNTc5fQ.91YHHyp4jfKR_Xdfh--vb87EAsFM2ZkkKKsCUEMPtz0'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
