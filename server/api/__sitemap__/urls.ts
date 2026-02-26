import { serverSupabaseClient } from '#supabase/server'

// 1. Define the shape of your data based on your products table
interface SitemapProduct {
  name: string
  created_at: string
}

export default defineEventHandler(async (event) => {
  // Initialize the Supabase client for the server
  const client = await serverSupabaseClient(event)

  // 2. Fetch data from your 'products' table
  // We only need the name for the URL, and created_at for the sitemap timestamp
  const { data, error } = await client
    .from('products') 
    .select('name, created_at')

  if (error) {
    console.error('Error fetching sitemap products:', error)
    return []
  }

  // 3. Cast the data to your interface so TS knows 'name' exists
  const products = data as unknown as SitemapProduct[]

  if (!products || products.length === 0) return []

  // 4. Map to sitemap format
  return products.map((p) => {
    return {
      // CRITICAL: Encode the name so spaces and special characters don't break the XML validation
      loc: `/collections/${encodeURIComponent(p.name)}`,
      
      // Fallback to current date if created_at is null in your DB
      lastmod: p.created_at || new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8 // 0.8 is great for product pages (1.0 is usually for the homepage)
    }
  })
})