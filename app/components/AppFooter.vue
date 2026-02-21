<template>
  <footer class="relative bg-primary dark:bg-black text-gray-300 py-16 px-6 overflow-hidden border-t border-gray-200 dark:border-gray-800">
    
    <div class="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden z-0">
    </div>

    <div class="relative z-10 max-w-360 mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-12">
      
      <div class="max-w-sm space-y-6">
        <NuxtLink to="/" class="flex items-center gap-3 text-white group hover:opacity-90 transition-opacity">
          <img 
            src="/img/logo.png" 
            alt="Crafts Logo" 
            class="h-8 md:h-10 w-auto object-contain brightness-0 invert" 
          />
        </NuxtLink>
        
        <p class="text-gray-400 leading-relaxed text-sm">
          Elevating outdoor sanctuaries with timeless, hand-carved mastery. Designed for the discerning collector.
        </p>
        
        <div class="flex gap-3 pt-2">
          <a href="https://web.facebook.com/craftsdesignnigeria" class="p-2.5 rounded-full bg-white/5 hover:bg-accent text-white transition-colors flex items-center justify-center">
            <UIcon name="i-lucide-facebook" class="w-5 h-5" />
          </a>

        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 text-sm">
        
        <div class="flex flex-col gap-6">
          <h5 class="text-white font-bold uppercase tracking-widest text-xs">Shop</h5>
          <nav class="flex flex-col gap-4">
            <NuxtLink to="/collections" class="text-gray-400 hover:text-accent transition-colors">New Arrivals</NuxtLink>
            <NuxtLink to="/collections" class="text-gray-400 hover:text-accent transition-colors">Best Sellers</NuxtLink>
            <NuxtLink to="/collections" class="text-gray-400 hover:text-accent transition-colors">Fountains</NuxtLink>
            <NuxtLink to="/collections" class="text-gray-400 hover:text-accent transition-colors">Planters</NuxtLink>
          </nav>
        </div>
        
        <div class="flex flex-col gap-6">
          <h5 class="text-white font-bold uppercase tracking-widest text-xs">Support</h5>
          <nav class="flex flex-col gap-4">
            <NuxtLink to="/about" class="text-gray-400 hover:text-accent transition-colors">Contact Us</NuxtLink>
            <NuxtLink to="#" class="text-gray-400 hover:text-accent transition-colors">Returns & Refunds</NuxtLink>
          </nav>
        </div>

        <div class="flex flex-col gap-6 col-span-2 md:col-span-1">
          <h5 class="text-white font-bold uppercase tracking-widest text-xs">The Studio</h5>
          <div class="flex flex-col gap-4 text-gray-400">
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-map-pin" class="w-5 h-5 shrink-0 text-accent mt-0.5" />
              <span class="leading-relaxed">Abuja, Nigeria</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-phone" class="w-5 h-5 shrink-0 text-accent" />
              <span>+234-813-6658-893</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-mail" class="w-5 h-5 shrink-0 text-accent" />
              <span>craftsdesign@yahoo.com</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div class="relative z-10 max-w-360 mx-auto pt-8 mt-16 border-t border-white/10 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
      <p>© 2026 Crafts Design. All rights reserved.</p>
    </div>
    
  </footer>
</template>

<script setup lang="ts">
// No specific script logic required for this static layout
</script>