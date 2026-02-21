<template>
  <section class="relative w-full h-[85vh] min-h-150 flex items-center justify-center overflow-hidden bg-primary-950">
    <div class="absolute inset-0 z-0">
      <div 
        class="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105 ease-in-out transform-gpu" 
        :style="{ backgroundImage: `url(${image})` }"
        role="img"
        aria-label="Hero background image showing garden luxury"
      ></div>
      <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
      <div class="space-y-4">
        <span class="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-white mb-4">
          {{ subtitle }}
        </span>
        
        <h2 class="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-none drop-shadow-sm" v-html="title"></h2>
        
        <p class="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          {{ description }}
        </p>
      </div>
      
      <div class="pt-8 flex justify-center">
        <AppButton 
          :to="ctaLink"
          size="lg" 
          rounded="full" 
          variant="white-outline" 
          icon="i-lucide-arrow-right" 
          animated
          class="shadow-lg shadow-black/20"
        >
          {{ ctaText }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Using defineProps with defaults for reusability across different pages if needed
defineProps({
  image: { 
    type: String, 
    default: '/img/cd-hippo.jpg' 
  },
  subtitle: { 
    type: String, 
    default: 'Est. 2026 Collection' 
  },
  title: { 
    type: String, 
    default: 'Timeless Art <br/> <span class="italic font-light opacity-90">for Your Garden</span>' 
  },
  description: { 
    type: String, 
    default: 'Hand-carved mastery for the discerning collector. Elevate your outdoor sanctuary with pieces that whisper elegance.' 
  },
  ctaText: {
    type: String,
    default: 'Explore Collection'
  },
  ctaLink: {
    type: String,
    default: '/collections'
  }
})
</script>