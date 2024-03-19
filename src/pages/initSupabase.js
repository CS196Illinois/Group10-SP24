import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;
// Better put your these secret keys in .env file
console.log(supabaseUrl);
export const supabase = createClient(supabaseUrl, supabaseKey, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});