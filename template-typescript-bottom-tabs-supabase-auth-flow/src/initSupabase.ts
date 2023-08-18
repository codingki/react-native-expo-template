import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { SUPERBASE_URL, SUPERBASE_KEY } from "@env";

const superbaseUrl = SUPERBASE_URL
const superbaseKey = SUPERBASE_KEY

// Better put your these secret keys in .env file
export const supabase = createClient(superbaseUrl, superbaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
