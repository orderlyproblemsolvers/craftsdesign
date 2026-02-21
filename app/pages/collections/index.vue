<template>
  <div class="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-32">
    <div class="max-w-360 mx-auto px-6 lg:px-12">
      
      <header class="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
        <div class="inline-flex items-center gap-3">
          <span class="w-8 h-px bg-accent"></span>
          <h1 class="text-accent text-sm font-bold uppercase tracking-widest">The Master Collection</h1>
          <span class="w-8 h-px bg-accent"></span>
        </div>
        <h2 class="text-5xl md:text-6xl font-serif text-primary dark:text-gray-100 leading-tight">
          Curated <span class="italic text-secondary">Elegance</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Explore our complete menagerie of hand-crafted estate sculptures, interactive garden art, and architectural centerpieces.
        </p>
      </header>

      <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-gray-200 dark:border-gray-800 pb-6">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
          Showing {{ filteredProducts.length }} Masterpieces
        </p>
        
        <div class="flex flex-wrap justify-center gap-2">
          <button 
            v-for="category in categories" 
            :key="category"
            class="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 border"
            :class="[
              activeCategory === category 
              ? 'bg-primary border-primary text-white shadow-lg' 
              : 'bg-transparent border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-accent'
            ]"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div v-if="pending" class="flex justify-center py-24">
        <UIcon name="i-lucide-loader-2" class="w-12 h-12 text-accent animate-spin" />
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        <transition-group name="fade">
          <ProductCard 
            v-for="product in filteredProducts" 
            :key="product.id" 
            :product="{
              ...product,
              image: product.image_url,
              price: formatPrice(product.price)
            }" 
          />
        </transition-group>
      </div>

      <div v-if="!pending && filteredProducts.length === 0" class="py-24 text-center text-gray-500">
        <UIcon name="i-lucide-leaf" class="w-12 h-12 mb-4 opacity-50 mx-auto" />
        <p class="text-lg">No sculptures found in this category.</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
defineOgImageComponent('CraftsRadial', {
  title: 'The Master Collection',
  description: 'Explore our complete menagerie of garden estate sculptures.'
})

const supabase = useSupabaseClient()
const activeCategory = ref('All')
const categories = ['All', 'Bronze & Metal', 'Stone & Concrete', 'Aquatic', 'Mega-Fauna', 'Interactive', 'Fibre-Glass']

// SERVER-SIDE FETCH
// useAsyncData runs on the server for the initial request
const { data: allProducts, pending } = await useAsyncData('products', async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
})

// Helper to format price for display
const formatPrice = (price: number | null) => {
  if (price === null || price === undefined) return 'Price on Request'
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(price)
}

// Computed property to filter the live data
const filteredProducts = computed(() => {
  if (!allProducts.value) return []
  if (activeCategory.value === 'All') {
    return allProducts.value
  }
  return allProducts.value.filter(product => product.category === activeCategory.value)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}
.fade-leave-active {
  position: absolute;
}
</style>