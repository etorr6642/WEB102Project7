import {createClient} from '@supabase/supabase-js'

const URL = 'https://icpwzushbmdmrnvofqpw.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljcHd6dXNoYm1kbXJudm9mcXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NzU1MzAsImV4cCI6MjA2OTI1MTUzMH0.Xs9rxm5dnQRrc5MJS7dAR85hop5SDsHKtyCPBPNNus4'

export const supabase = createClient(URL, API_KEY)