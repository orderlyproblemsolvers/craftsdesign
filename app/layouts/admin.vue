<template>
  <div class="h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 flex flex-col lg:flex-row font-sans text-gray-900 dark:text-gray-100">
    
    <header class="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-30 shadow-sm shrink-0">
      <div class="flex items-center gap-3">
        <div class="size-9 bg-primary dark:bg-white rounded-xl flex items-center justify-center shadow-sm">
          <UIcon name="i-lucide-shield-check" class="w-5 h-5 text-white dark:text-primary" />
        </div>
        <h2 class="text-lg font-serif font-bold text-primary dark:text-white">Admin</h2>
      </div>
      
      <button 
        @click="isSidebarOpen = true" 
        class="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 active:scale-95 transition-all"
      >
        <UIcon name="i-lucide-menu" class="w-6 h-6" />
      </button>
    </header>

    <transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isSidebarOpen" 
        @click="isSidebarOpen = false" 
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
      ></div>
    </transition>

    <aside 
      :class="[
        'fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex flex-col transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:h-screen lg:shrink-0',
        isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
      ]"
    >
      <div class="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between shrink-0">
        <NuxtLink to="/admin" class="flex items-center gap-3">
          <div class="size-8 bg-primary dark:bg-white rounded-lg flex items-center justify-center">
            <UIcon name="i-lucide-lock" class="w-4 h-4 text-white dark:text-primary" />
          </div>
          <div>
            <h2 class="text-lg font-serif font-bold text-primary dark:text-white leading-none">Crafts Design</h2>
            <p class="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Admin</p>
          </div>
        </NuxtLink>
        <button 
          @click="isSidebarOpen = false" 
          class="lg:hidden p-2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <UIcon name="i-lucide-x" class="w-6 h-6" />
        </button>
      </div>
      
      <nav class="flex-1 p-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.to"
          :to="item.to" 
          @click="isSidebarOpen = false"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group" 
          active-class="bg-primary text-white shadow-lg shadow-primary/20 dark:bg-white dark:text-black"
          :class="[ $route.path === item.to ? '' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white' ]"
        >
          <UIcon :name="item.icon" class="w-5 h-5 shrink-0" />
          <span class="font-medium">{{ item.label }}</span>
        </NuxtLink>

        <div class="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
          <NuxtLink 
            to="/" 
            target="_blank" 
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
          >
            <UIcon name="i-lucide-external-link" class="w-5 h-5" />
            <span class="text-sm font-medium">View Live Site</span>
          </NuxtLink>
        </div>
      </nav>
      
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/2 shrink-0">
        <button 
          @click="handleSignOut"
          :disabled="isSigningOut"
          class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400 transition-all font-semibold disabled:opacity-50"
        >
          <UIcon v-if="isSigningOut" name="i-lucide-loader-2" class="w-5 h-5 animate-spin" />
          <UIcon v-else name="i-lucide-log-out" class="w-5 h-5" />
          {{ isSigningOut ? 'Signing Out...' : 'Sign Out' }}
        </button>
      </div>
    </aside>

    <main class="flex-1 overflow-y-auto relative flex flex-col">
      <div class="p-5 md:p-8 lg:p-12 max-w-400 w-full mx-auto">
        <slot />
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const supabase = useSupabaseClient()
const isSidebarOpen = ref(false)
const isSigningOut = ref(false)

const navItems = [
  { label: 'Dashboard', to: '/admin', icon: 'i-lucide-layout-dashboard' },
  { label: 'Masterpieces', to: '/admin/products', icon: 'i-lucide-box' },
]

watch(() => route.fullPath, () => {
  isSidebarOpen.value = false
})

const handleSignOut = async () => {
  if (isSigningOut.value) return
  isSigningOut.value = true
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    navigateTo('/admin/login')
  } catch (error) {
    console.error('Error signing out:', error)
  } finally {
    isSigningOut.value = false
  }
}
</script>

<style scoped>
/* Ensure sub-navigation area has its own scrollbar if needed */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.2);
  border-radius: 10px;
}
</style>