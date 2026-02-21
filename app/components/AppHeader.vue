<template>
  <div>
    <header class="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-black/90 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div class="max-w-360 mx-auto px-6 lg:px-12 py-4 flex items-center justify-between gap-8">
        
        <NuxtLink to="/" class="flex items-center gap-3 text-primary dark:text-white group hover:opacity-90 transition-opacity z-10 shrink-0">
          <img 
            src="/img/logo.png" 
            alt="Crafts Logo" 
            class="h-8 md:h-10 w-auto object-contain dark:bg-white" 
          />
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-10">
          <NuxtLink v-for="link in links" :key="link.name" :to="link.to" class="text-sm font-medium hover:text-accent transition-colors">
            {{ link.name }}
          </NuxtLink>
        </nav>

        <div class="flex items-center justify-end gap-3 md:gap-6 flex-1 lg:flex-none">
          
          <button 
            @click="toggleSearch"
            class="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-primary dark:text-white"
            aria-label="Search Collections"
          >
            <UIcon :name="isSearchOpen ? 'i-lucide-x' : 'i-lucide-search'" class="w-5 h-5" />
          </button>

          <div class="hidden md:flex flex-col text-right border-r border-gray-200 dark:border-gray-800 pr-6">
            <a href="tel:+2348136658893" class="text-sm font-bold text-primary dark:text-white hover:text-accent transition-colors whitespace-nowrap">
              +234-813-6658-893
            </a>
            <a href="mailto:craftsdesign@yahoo.com" class="text-xs text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
              craftsdesign@yahoo.com
            </a>
          </div>
          
          <button 
            @click="isCartOpen = true"
            class="relative p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-primary dark:text-white flex items-center justify-center"
          >
            <UIcon name="i-lucide-shopping-bag" class="w-5 h-5" />
            <Transition
              enter-active-class="transition duration-300 ease-out transform"
              enter-from-class="scale-0 opacity-0"
              enter-to-class="scale-100 opacity-100"
            >
              <span v-if="cart.length > 0" class="absolute -top-1 -right-1 size-5 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
                {{ cart.length }}
              </span>
            </Transition>
          </button>

          <button 
            @click="isMobileMenuOpen = true" 
            class="md:hidden p-2 text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
          >
            <UIcon name="i-lucide-menu" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="-translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
      >
        <div v-if="isSearchOpen" class="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden z-50">
          <div class="max-w-360 mx-auto px-6 lg:px-12 py-10">
            <div class="relative flex items-center mb-8">
              <UIcon 
                :name="isSearching ? 'i-lucide-loader-2' : 'i-lucide-search'" 
                class="absolute left-4 w-6 h-6 text-gray-400" 
                :class="{ 'animate-spin': isSearching }"
              />
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Search masterpieces, materials, or details..." 
                class="w-full pl-14 pr-6 py-5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-3xl focus:ring-2 focus:ring-accent outline-none transition-all text-2xl font-serif"
                ref="searchInput"
              />
            </div>

            <div v-if="searchResults.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NuxtLink 
                v-for="result in searchResults" 
                :key="result.id" 
                :to="`/collections/${result.id}`"
                @click="closeSearch"
                class="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent hover:border-gray-200 dark:border-gray-800 transition-all group"
              >
                <div class="size-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/10 shrink-0 shadow-sm border border-gray-100 dark:border-gray-800">
                  <img :src="result.image_url" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-serif font-bold text-primary dark:text-white text-lg group-hover:text-accent transition-colors truncate">{{ result.name }}</h4>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-accent/10 text-accent rounded-md font-bold shrink-0">{{ result.category }}</span>
                    <span class="text-xs text-gray-400 truncate">— {{ result.description }}</span>
                  </div>
                </div>
              </NuxtLink>
            </div>
            
            <div v-else-if="searchQuery.length > 2 && !isSearching" class="py-16 text-center text-gray-400">
              <UIcon name="i-lucide-frown" class="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p class="text-lg">No matches found for "{{ searchQuery }}"</p>
              <p class="text-sm mt-1">Check your spelling or try a different keyword.</p>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <Transition name="fade">
      <div v-if="isCartOpen || isMobileMenuOpen" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" @click="closeAll" />
    </Transition>

    <Transition
      enter-active-class="transition ease-in-out duration-500 transform"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in-out duration-400 transform"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div v-if="isCartOpen" class="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white dark:bg-black shadow-2xl flex flex-col border-l border-gray-200 dark:border-gray-800">
        <div class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 shrink-0">
          <div>
            <div class="flex items-center gap-3">
              <h2 class="text-2xl font-serif font-bold text-primary dark:text-white">Your Selection</h2>
              <button v-if="cart.length > 0" @click="clearCart" class="text-[10px] uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors underline">Clear All</button>
            </div>
            <p class="text-xs text-gray-500 mt-1">Review your favorites before inquiring.</p>
          </div>
          <button @click="isCartOpen = false" class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"><UIcon name="i-lucide-x" class="w-6 h-6" /></button>
        </div>

        <div class="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          <div v-if="cart.length === 0" class="h-full flex flex-col items-center justify-center text-center text-gray-400">
            <UIcon name="i-lucide-heart" class="w-12 h-12 mb-4 opacity-20" />
            <p class="font-medium">Your selection is empty.</p>
            <NuxtLink to="/collections" @click="isCartOpen = false" class="mt-6 text-accent font-medium hover:underline">Browse Masterpieces</NuxtLink>
          </div>

          <div v-for="item in cart" :key="item.id" class="flex gap-4 group">
            <div class="size-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5 shrink-0 border border-gray-200 dark:border-gray-800">
              <img :src="item.image_url || item.image" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1 min-w-0 py-1">
              <div class="flex justify-between items-start">
                <h4 class="font-serif font-bold text-primary dark:text-white truncate pr-2">{{ item.name }}</h4>
                <button @click="removeFromCart(item.id)" class="text-gray-400 hover:text-red-500 transition-colors p-1"><UIcon name="i-lucide-trash-2" class="w-4 h-4" /></button>
              </div>
              <p class="text-sm text-accent font-medium mt-1">{{ item.price || 'Price on Request' }}</p>
              <p class="text-[10px] uppercase tracking-wider text-gray-400 mt-2">{{ item.category }}</p>
            </div>
          </div>
        </div>

        <div v-if="cart.length > 0" class="p-6 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-gray-800 shrink-0">
          <button @click="handleBulkInquiry" class="w-full py-4 bg-accent text-white rounded-full font-bold shadow-xl shadow-accent/20 flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all">
            <UIcon name="i-lucide-message-circle" class="w-5 h-5" />
            Inquire for {{ cart.length }} {{ cart.length > 1 ? 'Items' : 'Item' }}
          </button>
        </div>
      </div>
    </Transition>

    <Transition
      enter-active-class="transition ease-in-out duration-300 transform"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in-out duration-300 transform"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-y-0 right-0 z-60 w-full max-w-sm bg-white dark:bg-black shadow-2xl flex flex-col border-l border-gray-200 dark:border-gray-800">
        <div class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 shrink-0">
          <h2 class="text-xl font-serif font-bold text-primary dark:text-white">Menu</h2>
          <button @click="isMobileMenuOpen = false" class="p-2 -mr-2 text-gray-500 hover:text-primary rounded-full transition-colors flex items-center justify-center"><UIcon name="i-lucide-x" class="w-6 h-6" /></button>
        </div>
        
        <nav class="flex flex-col p-6 gap-6 mb-auto overflow-y-auto">
          <NuxtLink v-for="link in links" :key="link.name" :to="link.to" class="text-lg font-medium text-primary dark:text-white hover:text-accent transition-colors block" @click="isMobileMenuOpen = false">{{ link.name }}</NuxtLink>
        </nav>

        <div class="p-6 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-5 shrink-0">
          <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Get in Touch</h3>
          <a href="tel:+2348136658893" class="flex items-center gap-3 text-primary dark:text-white hover:text-accent transition-colors font-medium"><UIcon name="i-lucide-phone" class="w-5 h-5" /> +234-813-6658-893</a>
          <a href="mailto:craftsdesign@yahoo.com" class="flex items-center gap-3 text-primary dark:text-white hover:text-accent transition-colors font-medium"><UIcon name="i-lucide-mail" class="w-5 h-5" /> craftsdesign@yahoo.com</a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const isMobileMenuOpen = ref(false)
const isCartOpen = ref(false)
const isSearchOpen = ref(false)
const isSearching = ref(false)
const searchQuery = ref('')
const searchResults = ref<any[]>([])
const searchInput = ref<HTMLInputElement | null>(null)

const supabase = useSupabaseClient()
const { cart, removeFromCart, clearCart } = useCart()

const links = [
  { name: 'Collections', to: '/collections' },
  { name: 'About Us', to: '/about' },
]

// 1. Spell-tolerant fuzzy search logic
const performSearch = useDebounceFn(async (query: string) => {
  if (query.length < 2) {
    searchResults.value = []
    isSearching.value = false
    return
  }

  isSearching.value = true
  
  // Call the custom Postgres function via RPC
  const { data, error } = await supabase.rpc('search_products', {
    search_query: query
  })

  if (error) {
    console.error('Fuzzy search error:', error)
  } else {
    searchResults.value = data || []
  }
  
  isSearching.value = false
}, 300)

watch(searchQuery, (newVal) => performSearch(newVal))

// 2. Control Handlers
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
  if (isSearchOpen.value) {
    isCartOpen.value = false
    isMobileMenuOpen.value = false
    nextTick(() => searchInput.value?.focus())
  }
}

const closeSearch = () => {
  isSearchOpen.value = false
  searchQuery.value = ''
  searchResults.value = []
}

const closeAll = () => {
  isCartOpen.value = false
  isMobileMenuOpen.value = false
}

const handleBulkInquiry = () => {
  const phoneNumber = '2348136658893' 
  const itemsHeader = `Hello Crafts team! I've curated a selection of masterpieces I am interested in:\n\n`
  const itemsList = cart.value.map((item, index) => `${index + 1}. ${item.name} (${item.price || 'Price on Request'})`).join('\n')
  const message = encodeURIComponent(itemsHeader + itemsList + `\n\nCould you please provide more details?`)
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.2); border-radius: 10px; }
</style>