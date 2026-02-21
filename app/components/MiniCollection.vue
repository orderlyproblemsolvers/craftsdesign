<template>
  <section class="flex flex-col flex-1 max-w-360 mx-auto w-full px-6 lg:px-12 py-16 lg:py-24 bg-white/80 dark:bg-black/90">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
      <div class="max-w-2xl">
        <h3 class="text-accent text-sm font-bold uppercase tracking-wider mb-2">The Menagerie</h3>
        <h2 class="text-4xl md:text-5xl font-serif text-primary dark:text-gray-100 leading-tight">
          Life-Size <span class="italic text-secondary">Animal Sculptures</span>
        </h2>
      </div>
      
      <div class="flex flex-wrap gap-3">
        <NuxtLink 
          v-for="filter in ['All', 'Bronze', 'Stone', 'Prehistoric']" 
          :key="filter"
          to="/collections"
          class="px-5 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 hover:border-accent transition-colors text-gray-600 dark:text-gray-300"
        >
          {{ filter }}
        </NuxtLink>
      </div>
    </div>

    <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="n in 4" :key="n" class="aspect-4/5 bg-gray-100 dark:bg-white/5 animate-pulse rounded-4xl"></div>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="{
          ...product,
          image: product.image_url,
          price: formatNaira(product.price)
        }" 
      />
    </div>

    <div class="flex justify-center mt-16">
      <NuxtLink 
        to="/collections" 
        class="inline-flex items-center gap-2 text-primary dark:text-white font-medium hover:text-accent transition-all group"
      >
        <span class="border-b border-primary dark:border-white group-hover:border-accent pb-1">View Full Menagerie</span>
        <UIcon name="i-lucide-arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </NuxtLink>
    </div>

  </section>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

// Fetch only the top 8 animal sculptures for the featured section
const { data: products, pending } = await useAsyncData('featured-animals', async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    // Assuming you want to prioritize animals or just show the latest 8 items
    .limit(8)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
})

// Currency Formatter for Naira
const formatNaira = (price: number | null) => {
  if (price === null) return 'Price on Request'
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(price).replace('NGN', '₦') // Clean up NGN string to symbol
}
</script>