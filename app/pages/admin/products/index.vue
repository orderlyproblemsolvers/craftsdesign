<template>
  <div class="space-y-8 relative">
    
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="toast.show" :class="[
        'fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 text-white rounded-xl shadow-2xl',
        toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'
      ]">
        <UIcon :name="toast.type === 'error' ? 'i-lucide-alert-circle' : 'i-lucide-check-circle'" class="w-6 h-6" />
        <span class="font-medium">{{ toast.message }}</span>
      </div>
    </transition>

    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-serif font-bold text-primary dark:text-white mb-2">Masterpieces</h1>
        <p class="text-gray-500 dark:text-gray-400">View and manage your current inventory.</p>
      </div>
      <NuxtLink 
        to="/admin" 
        class="inline-flex items-center gap-2 px-6 py-2.5 bg-primary dark:bg-white text-white dark:text-primary font-medium rounded-lg hover:opacity-90 transition-opacity shadow-md"
      >
        <UIcon name="i-lucide-plus" class="w-5 h-5" />
        Add New
      </NuxtLink>
    </div>

    <div class="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
      
      <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/2 flex items-center justify-between">
        <div class="relative w-full max-w-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <UIcon name="i-lucide-search" class="w-4 h-4" />
          </div>
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search sculptures..." 
            class="w-full pl-10 pr-4 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-400 text-sm" 
          />
        </div>
        <span class="hidden sm:inline-block px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-full">
          {{ filteredProducts.length }} Items
        </span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse min-w-200">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-800 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-50/30 dark:bg-white/1">
              <th class="px-6 py-4 font-medium">Sculpture</th>
              <th class="px-6 py-4 font-medium">Category</th>
              <th class="px-6 py-4 font-medium">Price</th>
              <th class="px-6 py-4 font-medium">Date Added</th>
              <th class="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          
          <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
            <tr v-if="pending">
              <td colspan="5" class="px-6 py-12 text-center">
                <UIcon name="i-lucide-loader-2" class="w-8 h-8 text-accent animate-spin mx-auto" />
              </td>
            </tr>

            <tr v-else-if="filteredProducts.length === 0">
              <td colspan="5" class="px-6 py-16 text-center">
                <div class="size-16 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <UIcon name="i-lucide-box" class="w-8 h-8 text-gray-400" />
                </div>
                <p class="text-primary dark:text-white font-medium text-lg">No masterpieces found</p>
                <p class="text-gray-500 text-sm mt-1">Adjust your search or add a new product.</p>
              </td>
            </tr>

            <tr 
              v-for="product in filteredProducts" 
              :key="product.id"
              class="hover:bg-gray-50/50 dark:hover:bg-white/2 transition-colors group"
            >
              <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                  <div class="shrink-0 size-12 rounded-lg bg-gray-100 dark:bg-white/5 overflow-hidden border border-gray-200 dark:border-gray-800">
                    <img :src="product.image_url" :alt="product.name" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p class="font-serif font-semibold text-primary dark:text-gray-200 line-clamp-1">{{ product.name }}</p>
                    <p class="text-xs text-gray-500 line-clamp-1 truncate max-w-50">{{ product.description }}</p>
                  </div>
                </div>
              </td>
              
              <td class="px-6 py-4">
                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {{ product.category }}
                </span>
              </td>
              
              <td class="px-6 py-4">
                <span class="font-medium text-primary dark:text-gray-200 whitespace-nowrap">
                  {{ formatPrice(product.price) }}
                </span>
              </td>
              
              <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {{ new Date(product.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) }}
              </td>
              
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <NuxtLink 
                    :to="`/admin/products/${product.id}`"
                    class="p-2 text-gray-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors inline-flex"
                    title="Edit"
                  >
                    <UIcon name="i-lucide-edit-3" class="w-4 h-4" />
                  </NuxtLink>
                  <button 
                    @click="handleDelete(product.id, product.name)"
                    class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <UIcon name="i-lucide-trash-2" class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ 
  layout: 'admin',
})

const supabase = useSupabaseClient()
const searchQuery = ref('')

// Toast State
const toast = ref({ show: false, message: '', type: 'success' })
const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  toast.value = { show: true, message, type }
  setTimeout(() => toast.value.show = false, 4000)
}

// Fetch Products
const { data: products, pending, refresh } = await useAsyncData('admin-products-list', async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    showToast('Failed to load products.', 'error')
    return []
  }
  return data || []
})

const filteredProducts = computed(() => {
  if (!products.value) return []
  if (!searchQuery.value) return products.value
  
  const query = searchQuery.value.toLowerCase()
  return products.value.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query)
  )
})

const formatPrice = (price: number | null) => {
  if (price === null || price === undefined) return 'On Request'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price)
}

const handleDelete = async (id: string, name: string) => {
  if (!confirm(`Are you absolutely sure you want to delete "${name}"? This cannot be undone.`)) return

  try {
    const { error } = await supabase.from('products').delete().eq('id', id)
    if (error) throw error
    
    showToast(`"${name}" was deleted successfully.`)
    await refresh()
  } catch (error: any) {
    console.error('Error deleting product:', error)
    showToast('Failed to delete the masterpiece.', 'error')
  }
}
</script>