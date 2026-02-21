<template>
  <div class="group flex flex-col gap-4 h-full">
    
    <div class="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-white/5">
      
      <NuxtLink 
        :to="`/collections/${product.id}`" 
        class="absolute inset-0 z-0"
        :aria-label="`View details for ${product.name}`"
      >
        <div 
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
          :style="{ backgroundImage: `url(${product.image_url || product.image})` }"
        ></div>
      </NuxtLink>
      
      <button 
        @click.stop.prevent="addToCart(product)"
        class="absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-lg border border-white/20"
        :class="[
          isInCart(product.id) 
            ? 'bg-accent text-white opacity-100 scale-110' 
            : 'bg-white/80 dark:bg-black/40 text-primary dark:text-white opacity-0 group-hover:opacity-100'
        ]"
      >
        <UIcon 
          :name="isInCart(product.id) ? 'i-lucide-heart' : 'i-lucide-heart'" 
          class="w-5 h-5 transition-transform"
          :class="{ 'fill-current': isInCart(product.id) }" 
        />
      </button>

      <div class="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2 pr-4 pointer-events-none">
        <UBadge 
          v-for="tag in product.tags" 
          :key="tag" 
          color="white" 
          variant="solid" 
          class="bg-white/90 dark:bg-black/80 backdrop-blur text-[10px] uppercase tracking-wider text-primary dark:text-gray-200 pointer-events-auto"
        >
          {{ tag }}
        </UBadge>
      </div>
    </div>

    <div class="space-y-1 flex flex-col flex-1">
      <div class="flex justify-between items-start gap-3">
        <NuxtLink :to="`/collections/${product.id}`" class="group-hover:text-accent transition-colors line-clamp-1">
          <h3 class="text-lg font-serif font-semibold text-primary dark:text-gray-100">
            {{ product.name }}
          </h3>
        </NuxtLink>
        
        <p class="text-lg font-medium text-primary dark:text-gray-100 shrink-0">
          {{ product.price }}
        </p>
      </div>
      
      <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3 flex-1">
        {{ product.description }}
      </p>
      
      <div class="pt-2 mt-auto">
        <AppButton 
          variant="soft" 
          block 
          icon="i-lucide-message-circle" 
          iconPosition="left"
          @click="handleWhatsAppInquiry"
        >
          Inquire via WhatsApp
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

// Use the global cart logic
const { addToCart, isInCart } = useCart()

// Individual WhatsApp Inquiry (for just this card)
const handleWhatsAppInquiry = () => {
  const phoneNumber = '2348136658893' 
  const message = `Hello Crafts team! I'm inquiring about the ${props.product.name} (${props.product.price || 'Price on Request'}). Is this masterpiece currently available for commission?`
  
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
}
</script>