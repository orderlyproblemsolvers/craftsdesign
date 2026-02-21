<template>
  <div class="min-h-screen bg-white dark:bg-black pt-24 pb-32">
    
    <div v-if="pending" class="flex flex-col justify-center items-center py-40" aria-busy="true">
      <UIcon name="i-lucide-loader-2" class="w-12 h-12 text-accent animate-spin" />
    </div>

    <div v-else-if="!product" class="max-w-360 mx-auto px-6 lg:px-12 py-32 text-center flex flex-col items-center">
      <UIcon name="i-lucide-search-x" class="w-16 h-16 text-gray-400 mb-6" />
      <h1 class="text-4xl font-serif text-primary dark:text-white mb-4">Masterpiece Not Found</h1>
      <p class="text-gray-500 mb-8">The sculpture you are looking for may have been archived or moved.</p>
      <AppButton to="/collections" variant="outline" icon="i-lucide-arrow-left" iconPosition="left" rounded="full">
        Return to Collections
      </AppButton>
    </div>

    <article v-else class="max-w-360 mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-32">
        
        <div class="lg:sticky lg:top-32 flex flex-col gap-6">
          <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <NuxtLink to="/" class="hover:text-accent transition-colors">Home</NuxtLink>
            <span class="text-gray-300 dark:text-gray-600">/</span>
            <NuxtLink to="/collections" class="hover:text-accent transition-colors">Collections</NuxtLink>
            <span class="text-gray-300 dark:text-gray-600">/</span>
            <span class="text-primary dark:text-gray-200 font-medium truncate" aria-current="page">{{ product.name }}</span>
          </nav>

          <div class="relative w-full aspect-4/5 md:aspect-square lg:aspect-4/5 bg-gray-100 dark:bg-white/5 rounded-[2.5rem] overflow-hidden group shadow-2xl">
            <img 
              :src="product.image_url" 
              :alt="`${product.name} - ${product.category} Sculpture by Crafts Design`"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute top-6 left-6">
              <span class="px-4 py-1.5 bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-accent shadow-sm">
                {{ product.category }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col pt-8 lg:pt-16">
          <header class="space-y-4 mb-10">
            <h1 class="text-4xl md:text-5xl lg:text-7xl font-serif text-primary dark:text-white leading-[1.1]">
              {{ product.name }}
            </h1>
            <p class="text-3xl font-light text-accent dark:text-accent/90 mt-4">
              {{ formatPrice(product.price) }}
            </p>
          </header>

          <div class="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 mb-12 max-w-none">
            <p class="leading-relaxed whitespace-pre-line">{{ product.description }}</p>
          </div>

          <section class="grid grid-cols-2 gap-6 mb-12 p-8 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5">
            <div class="flex flex-col gap-1">
              <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Material</span>
              <span class="text-primary dark:text-white font-medium flex items-center gap-2">
                <UIcon name="i-lucide-layers" class="w-4 h-4 text-accent" />
                {{ product.tags?.[0] || 'Handcrafted' }}
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Environment</span>
              <span class="text-primary dark:text-white font-medium flex items-center gap-2">
                <UIcon name="i-lucide-sun-snow" class="w-4 h-4 text-accent" />
                Weatherproof
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Lead Time</span>
              <span class="text-primary dark:text-white font-medium flex items-center gap-2">
                <UIcon name="i-lucide-clock" class="w-4 h-4 text-accent" />
                2 - 6 Weeks
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Delivery</span>
              <span class="text-primary dark:text-white font-medium flex items-center gap-2">
                <UIcon name="i-lucide-truck" class="w-4 h-4 text-accent" />
                White Glove
              </span>
            </div>
          </section>

          <div class="flex flex-col sm:flex-row gap-4 mb-16">
            <AppButton 
              variant="solid" 
              size="lg" 
              rounded="full" 
              icon="i-lucide-message-circle" 
              class="flex-1 shadow-2xl shadow-accent/20"
              @click="handleWhatsAppInquiry"
            >
              Inquire via WhatsApp
            </AppButton>
          </div>

          <footer class="flex items-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <UIcon name="i-lucide-shield-check" class="w-5 h-5 text-gray-400" />
              <span>Lifetime Warranty</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <UIcon name="i-lucide-award" class="w-5 h-5 text-gray-400" />
              <span>Lead Artisan Certified</span>
            </div>
          </footer>
        </div>
      </div>

      <section v-if="suggestedProducts?.length" class="pt-24 border-t border-gray-100 dark:border-gray-900">
        <div class="flex items-end justify-between mb-12">
          <div class="space-y-2">
            <h3 class="text-accent text-sm font-bold uppercase tracking-widest">Similar Discoveries</h3>
            <h2 class="text-4xl font-serif text-primary dark:text-white">You may also <span class="italic text-secondary">admire</span></h2>
          </div>
          <NuxtLink to="/collections" class="hidden sm:flex items-center gap-2 text-primary dark:text-white font-medium hover:text-accent transition-colors">
            View All <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            v-for="suggested in suggestedProducts" 
            :key="suggested.id" 
            :product="{
              ...suggested,
              image: suggested.image_url,
              price: formatPrice(suggested.price)
            }" 
          />
        </div>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const supabase = useSupabaseClient()
const productId: any = route.params.id

// --- 1. Define Helper Functions First ---

/**
 * Formats numbers into Nigerian Naira (NGN) 
 *
 */
const formatPrice = (price: number | null) => {
  if (price === null) return 'Price on Request'
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(price)
}

const handleWhatsAppInquiry = () => {
  if (!product.value) return
  const phoneNumber = '2348136658893' // Your Abuja-based contact
  const message = `Hello! I am inquiring about the ${product.value.name} (${formatPrice(product.value.price)}). Could you tell me more about commissioning this piece?`
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
}

// --- 2. Fetch Data ---

// Fetch Main Product using your established Supabase setup
const { data: product, pending } = await useAsyncData(`product-${productId}`, async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', productId)
    .single()
  
  if (error) throw error
  return data
})

// Fetch Related Masterpieces
const { data: suggestedProducts } = await useAsyncData(`suggested-${productId}`, async () => {
  if (!product.value) return []
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('category', product.value.category)
    .neq('id', product.value.id)
    .limit(4)
  return data
})

// --- 3. SEO & Schema ORG Logic ---
// Now formatPrice is safely initialized before this runs
watchEffect(() => {
  if (product.value) {
    const title = `${product.value.name} | Crafts Design Masterpiece`
    const description = product.value.description.substring(0, 160)
    
    useSeoMeta({
      title,
      ogTitle: title,
      description,
      ogDescription: description,
      ogImage: product.value.image_url,
      twitterCard: 'summary_large_image',
    })

    useSchemaOrg([
      defineProduct({
        name: product.value.name,
        description: product.value.description,
        image: [product.value.image_url],
        offers: [
          { 
            price: product.value.price || 0, 
            priceCurrency: 'NGN',
            availability: 'https://schema.org/PreOrder'
          }
        ],
        category: product.value.category
      }),
      defineBreadcrumb([
        { name: 'Home', item: '/' },
        { name: 'Collections', item: '/collections' },
        { name: product.value.name, item: route.path }
      ])
    ])

    defineOgImageComponent('CraftsRadial', {
      title: product.value.name,
      description: `${product.value.category} Piece • ${formatPrice(product.value.price)}`
    })
  }
})
</script>