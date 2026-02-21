import { serverSupabaseClient } from '#supabase/server'
import { defineEventHandler } from 'h3'

// 1. Define the shape of the record we are selecting from the DB
interface SitemapProduct {
  id: string | number;
  updated_at: string; // ISO string from Postgres
}

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  // 2. Pass the interface to the .select() call or the .from() call
  const { data, error } = await client
    .from('products')
    .select('id, updated_at')
    .returns<SitemapProduct[]>()

  if (error) {
    console.error('Sitemap generation error:', error)
    return []
  }

  // 3. Map with full type safety
  return data?.map((p: SitemapProduct) => ({
    loc: `/collections/${p.id}`,
    lastmod: p.updated_at,
    changefreq: 'monthly',
    priority: 0.8
  })) || []
})