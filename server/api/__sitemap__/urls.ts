export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  // Fetch just the required fields from Supabase to keep it fast
  const products: any = await $fetch(`${config.public.supabase.url}/rest/v1/products?select=id,updated_at`, {
    headers: {
      apikey: config.public.supabase.key,
      Authorization: `Bearer ${config.public.supabase.key}`
    }
  })

  // Map the Supabase data to the sitemap format
  return products.map((product: any) => ({
    // Update this path if your route is different (e.g., '/products/' instead of '/collections/')
    loc: `/collections/${product.id}`, 
    lastmod: product.updated_at || new Date().toISOString()
  }))
})