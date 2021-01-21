import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('supabaseUrl', 'supabaseKey', {
	localStorage: AsyncStorage as any,
});
