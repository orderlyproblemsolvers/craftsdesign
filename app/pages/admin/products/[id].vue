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
        'fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 text-white rounded-xl shadow-xl',
        toast.type === 'error' ? 'bg-red-500' : 'bg-emerald-500'
      ]">
        <UIcon :name="toast.type === 'error' ? 'i-lucide-alert-circle' : 'i-lucide-check-circle'" class="w-6 h-6" />
        <span class="font-medium">{{ toast.message }}</span>
      </div>
    </transition>

    <div class="flex items-center gap-4">
      <NuxtLink to="/admin/products" class="p-2.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors shadow-sm">
        <UIcon name="i-lucide-arrow-left" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </NuxtLink>
      <div>
        <h1 class="text-3xl font-serif font-bold text-primary dark:text-white mb-1">Edit Masterpiece</h1>
        <p class="text-gray-500 dark:text-gray-400">Update the details for your inventory.</p>
      </div>
    </div>

    <ClientOnly>
      <div class="w-full"> 
        
        <div v-if="isLoadingData" class="flex flex-col justify-center items-center py-32 space-y-4">
          <UIcon name="i-lucide-loader-2" class="w-10 h-10 text-accent animate-spin" />
          <p class="text-gray-500 font-medium">Retrieving masterpiece data...</p>
        </div>

        <div v-else class="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden max-w-4xl">
          <div class="p-6 md:p-8">
            <form class="space-y-8" @submit.prevent="onUpdateProduct">
              
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Sculpture Image <span class="text-red-500">*</span>
                </label>
                
                <div 
                  @dragover.prevent="isDragging = true"
                  @dragleave.prevent="isDragging = false"
                  @drop.prevent="handleDrop"
                  @click="triggerFileInput"
                  :class="[
                    'relative w-full h-72 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center overflow-hidden transition-all cursor-pointer group',
                    isDragging ? 'border-accent bg-accent/5' : 'border-gray-300 dark:border-gray-700 hover:border-accent hover:bg-gray-50 dark:hover:bg-white/5',
                    imagePreview ? 'border-transparent' : ''
                  ]"
                >
                  <input type="file" ref="fileInput" accept="image/jpeg, image/png, image/webp" class="hidden" @change="handleFileSelect" />

                  <div v-if="imagePreview" class="absolute inset-0 w-full h-full">
                    <img :src="imagePreview" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <p class="text-white font-medium flex items-center gap-2">
                        <UIcon name="i-lucide-refresh-cw" class="w-5 h-5" /> Replace Image
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div class="space-y-1.5">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Sculpture Name <span class="text-red-500">*</span></label>
                  <input v-model="productState.name" type="text" required class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white" />
                </div>
                
                <div class="space-y-1.5">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Price (USD)</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <UIcon name="i-lucide-dollar-sign" class="w-4 h-4" />
                    </div>
                    <input v-model="productState.price" type="number" class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white" />
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Category <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <select v-model="productState.category" required class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white appearance-none cursor-pointer">
                      <option v-for="cat in categories" :key="cat" :value="cat" class="bg-white dark:bg-gray-900">{{ cat }}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                      <UIcon name="i-lucide-chevron-down" class="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Comma-separated Tags</label>
                  <input v-model="productState.tagsInput" type="text" class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white" />
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Description <span class="text-red-500">*</span></label>
                <textarea v-model="productState.description" rows="4" required class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white resize-y"></textarea>
              </div>

              <div class="flex flex-col sm:flex-row justify-end pt-6 border-t border-gray-100 dark:border-gray-800 gap-4">
                <NuxtLink to="/admin/products" class="inline-flex justify-center items-center gap-2 px-8 py-3 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-all">
                  Cancel
                </NuxtLink>
                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="inline-flex justify-center items-center gap-2 px-8 py-3 bg-accent hover:bg-opacity-90 text-white font-medium rounded-lg transition-all shadow-md shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <UIcon v-if="isSubmitting" name="i-lucide-loader-2" class="w-5 h-5 animate-spin" />
                  <UIcon v-else name="i-lucide-save" class="w-5 h-5" />
                  {{ isSubmitting ? 'Saving Changes...' : 'Save Masterpiece' }}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div> <template #fallback>
        <div class="flex flex-col justify-center items-center py-32 space-y-4">
          <UIcon name="i-lucide-loader-2" class="w-10 h-10 text-accent animate-spin" />
          <p class="text-gray-500 font-medium">Initializing editor...</p>
        </div>
      </template>
    </ClientOnly>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

definePageMeta({ layout: 'admin'})

const route = useRoute()
const router = useRouter()
// Force productId to be a string safely
const productId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id

const supabase = useSupabaseClient()
const config = useRuntimeConfig()
const cloudName = config.public.CLOUDINARY_CLOUD_NAME
const uploadPreset = config.public.CLOUDINARY_UPLOAD_PRESET

const categories = ['Bronze & Metal', 'Stone & Concrete', 'Aquatic', 'Mega-Fauna', 'Interactive']

// Toast State
const toast = ref({ show: false, message: '', type: 'success' })
const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  toast.value = { show: true, message, type }
  setTimeout(() => toast.value.show = false, 4000)
}

// Form State
const isLoadingData = ref(true)
const isDragging = ref(false)
const isSubmitting = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const imagePreview = ref<string | null>(null)
const existingImageUrl = ref<string>('')

const productState = reactive({
  name: '',
  price: null as number | null,
  category: categories[0],
  tagsInput: '',
  description: ''
})

// Fetch Data safely inside onMounted (Browser only)
onMounted(async () => {
  if (!productId) {
    showToast('Invalid product ID.', 'error')
    router.push('/admin/products')
    return
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
      .single()
    
    if (error) throw error
    if (!data) throw new Error('Product not found in database.')

    // Safely populate state
    productState.name = data.name
    productState.price = data.price
    productState.category = data.category
    productState.description = data.description
    productState.tagsInput = data.tags && Array.isArray(data.tags) ? data.tags.join(', ') : ''
    existingImageUrl.value = data.image_url
    imagePreview.value = data.image_url

  } catch (err: any) {
    console.error('Error fetching product:', err)
    showToast('Unable to load product. It may have been deleted.', 'error')
    setTimeout(() => {
      router.push('/admin/products')
    }, 2000)
  } finally {
    isLoadingData.value = false
  }
})

// Drag & Drop Handlers
const triggerFileInput = () => fileInput.value?.click()

const processFile = (file: File) => {
  if (!file.type.startsWith('image/')) {
    showToast('Please upload a valid image file (JPG, PNG, WEBP).', 'error')
    return
  }
  selectedFile.value = file
  imagePreview.value = URL.createObjectURL(file)
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.length) processFile(target.files[0])
}

const handleDrop = (event: DragEvent) => {
  isDragging.value = false
  if (event.dataTransfer?.files?.length) processFile(event.dataTransfer.files[0])
}

// Submit Update
const onUpdateProduct = async () => {
  isSubmitting.value = true
  let finalImageUrl = existingImageUrl.value

  try {
    // 1. Upload new image to Cloudinary if a new one was selected
    if (selectedFile.value) {
      const formData = new FormData()
      formData.append('file', selectedFile.value)
      formData.append('upload_preset', uploadPreset)

      const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
      })
      
      if (!cloudRes.ok) throw new Error('Failed to upload image to Cloudinary')
      const cloudData = await cloudRes.json()
      finalImageUrl = cloudData.secure_url
    }

    // 2. Format Payload
    const tagsArray = productState.tagsInput.split(',').map(tag => tag.trim()).filter(Boolean)
    const payload = {
      name: productState.name,
      price: productState.price === null || productState.price === '' ? null : Number(productState.price),
      category: productState.category,
      description: productState.description,
      image_url: finalImageUrl,
      tags: tagsArray
    }

    // 3. Update Supabase
    const { error: updateError } = await supabase.from('products').update(payload).eq('id', productId)
    if (updateError) throw updateError

    showToast('Masterpiece updated successfully!')

  } catch (err: any) {
    console.error('Error updating product:', err)
    showToast(err.message || 'Failed to update the product.', 'error')
  } finally {
    isSubmitting.value = false
  }
}
</script>