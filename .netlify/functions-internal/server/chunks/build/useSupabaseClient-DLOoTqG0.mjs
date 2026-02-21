import { o as useNuxtApp } from './server.mjs';

const useSupabaseClient = () => {
  return useNuxtApp().$supabase.client;
};

export { useSupabaseClient as u };
//# sourceMappingURL=useSupabaseClient-DLOoTqG0.mjs.map
