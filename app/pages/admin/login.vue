<template>
  <div class="min-h-screen bg-gray-50 dark:bg-black flex flex-col justify-center items-center p-6 selection:bg-accent selection:text-white">
    
    <div class="mb-8 text-center flex flex-col items-center">
      <div class="size-12 bg-primary dark:bg-white rounded-xl flex items-center justify-center mb-4">
        <UIcon name="i-lucide-lock" class="w-6 h-6 text-white dark:text-primary" />
      </div>
      <h1 class="text-2xl font-serif font-bold text-primary dark:text-white">Crafts Admin</h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Sign in to manage your masterpiece collection.</p>
    </div>

    <div class="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-8">
      <form @submit.prevent="handleLogin" class="space-y-6">
        
        <div class="space-y-1.5">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email Address</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <UIcon name="i-lucide-mail" class="w-4 h-4" />
            </div>
            <input 
              v-model="email" 
              type="email" 
              placeholder="admin@crafts.com" 
              required
              :disabled="isLoading"
              class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-500 disabled:opacity-50" 
            />
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <UIcon name="i-lucide-key" class="w-4 h-4" />
            </div>
            <input 
              v-model="password" 
              type="password" 
              placeholder="••••••••" 
              required
              :disabled="isLoading"
              class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-500 disabled:opacity-50" 
            />
          </div>
        </div>

        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
        >
          <p v-if="errorMessage" class="text-sm text-red-500 font-medium text-center">
            {{ errorMessage }}
          </p>
        </transition>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="w-full flex items-center justify-center gap-2 py-3 bg-primary dark:bg-white text-white dark:text-primary font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 shadow-md"
        >
          <UIcon v-if="isLoading" name="i-lucide-loader-2" class="w-5 h-5 animate-spin" />
          {{ isLoading ? 'Authenticating...' : 'Sign In' }}
        </button>

      </form>
    </div>
    
    <NuxtLink to="/" class="mt-8 text-sm text-gray-500 hover:text-primary dark:hover:text-white transition-colors flex items-center gap-2">
      <UIcon name="i-lucide-arrow-left" class="w-4 h-4" />
      Return to Public Site
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Explicitly tell Nuxt not to use the default or admin layouts for the login page
definePageMeta({
  layout: false,
})

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error

    // On successful login, Nuxt's Supabase module automatically detects the session
    // Redirect the user to the dashboard
    navigateTo('/admin')

  } catch (error: any) {
    errorMessage.value = error.message || 'Invalid login credentials.'
  } finally {
    isLoading.value = false
  }
}
</script>