<template>
  <div class="space-y-10">
    
    <div>
      <h1 class="text-3xl font-serif font-bold text-primary dark:text-white mb-2">Dashboard</h1>
      <p class="text-gray-500 dark:text-gray-400">Manage your collections and audience.</p>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="notification" class="fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-xl shadow-2xl">
        <UIcon name="i-lucide-check-circle" class="w-6 h-6" />
        <span class="font-medium">{{ notification }}</span>
      </div>
    </transition>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
      
      <div class="xl:col-span-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        
        <div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/2">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-plus-circle" class="w-5 h-5 text-accent" />
            <h3 class="font-bold text-primary dark:text-white">Add New Masterpiece</h3>
          </div>
        </div>

        <div class="p-6 md:p-8 flex-1">
          <form class="space-y-8" @submit.prevent="onSubmitProduct">
            
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
                  'relative w-full h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center overflow-hidden transition-all cursor-pointer group',
                  isDragging ? 'border-accent bg-accent/5' : 'border-gray-300 dark:border-gray-700 hover:border-accent hover:bg-gray-50 dark:hover:bg-white/5',
                  imagePreview ? 'border-transparent' : ''
                ]"
              >
                <input 
                  type="file" 
                  ref="fileInput" 
                  accept="image/jpeg, image/png, image/webp" 
                  class="hidden" 
                  @change="handleFileSelect" 
                />

                <div v-if="imagePreview" class="absolute inset-0 w-full h-full">
                  <img :src="imagePreview" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <p class="text-white font-medium flex items-center gap-2">
                      <UIcon name="i-lucide-refresh-cw" class="w-5 h-5" /> Change Image
                    </p>
                  </div>
                </div>

                <div v-else class="text-center px-4 pointer-events-none">
                  <div class="size-16 mx-auto rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-gray-400 group-hover:text-accent">
                    <UIcon name="i-lucide-upload-cloud" class="w-8 h-8" />
                  </div>
                  <p class="text-primary dark:text-white font-medium mb-1">Click to upload or drag and drop</p>
                  <p class="text-xs text-gray-500">SVG, PNG, JPG or WEBP (Max 5MB)</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div class="space-y-1.5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Sculpture Name <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="productState.name" 
                  type="text" 
                  placeholder="e.g. Graceful Bronze Deer" 
                  required
                  class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-400" 
                />
              </div>
              
              <div class="space-y-1.5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Price (USD)
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <p class="w-4 h-4 self-center" >₦</p>
                  </div>
                  <input 
                    v-model="productState.price" 
                    type="number" 
                    placeholder="Optional" 
                    class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-400" 
                  />
                </div>
                <p class="text-xs text-gray-500 mt-1">Leave blank for 'Price on Request'</p>
              </div>

              <div class="space-y-1.5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Category <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <select 
                    v-model="productState.category" 
                    required
                    class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white appearance-none cursor-pointer"
                  >
                    <option v-for="cat in categories" :key="cat" :value="cat" class="bg-white dark:bg-gray-900">{{ cat }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <UIcon name="i-lucide-chevron-down" class="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Comma-separated Tags
                </label>
                <input 
                  v-model="productState.tagsInput" 
                  type="text" 
                  placeholder="Bronze, Life-Size" 
                  class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-400" 
                />
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Description <span class="text-red-500">*</span>
              </label>
              <textarea 
                v-model="productState.description" 
                rows="4" 
                placeholder="Describe the masterpiece..." 
                required
                class="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-primary dark:text-white placeholder:text-gray-400 resize-y"
              ></textarea>
            </div>

            <div class="flex justify-end pt-4 border-t border-gray-100 dark:border-gray-800">
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-opacity-90 text-white font-medium rounded-lg transition-all shadow-md shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <UIcon v-if="isSubmitting" name="i-lucide-loader-2" class="w-5 h-5 animate-spin" />
                <UIcon v-else name="i-lucide-save" class="w-5 h-5" />
                {{ isSubmitting ? 'Uploading & Saving...' : 'Save Product' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm flex flex-col h-200 overflow-hidden">
        
        <div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/2 flex items-center justify-between shrink-0">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-users" class="w-5 h-5 text-accent" />
            <h3 class="font-bold text-primary dark:text-white">Recent Signups</h3>
          </div>
          <span class="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-full">
            {{ subscribers ? subscribers.length : 0 }} Total
          </span>
        </div>

        <div class="p-6 overflow-y-auto flex-1 custom-scrollbar">
          <div v-if="pendingSubscribers" class="flex justify-center items-center h-40">
            <UIcon name="i-lucide-loader-2" class="w-8 h-8 text-accent animate-spin" />
          </div>

          <div v-else-if="!subscribers || subscribers.length === 0" class="text-center py-16 flex flex-col items-center">
            <div class="size-16 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-4">
              <UIcon name="i-lucide-mail-open" class="w-8 h-8 text-gray-400" />
            </div>
            <p class="text-primary dark:text-white font-medium">No subscribers yet</p>
            <p class="text-sm text-gray-500 mt-1">Your mailing list signups will appear here.</p>
          </div>
          
          <div v-else class="space-y-3">
            <div 
              v-for="sub in subscribers" 
              :key="sub.id" 
              class="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800 hover:border-accent/30 transition-colors"
            >
              <div class="flex items-center gap-4 min-w-0">
                <div class="shrink-0 size-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <UIcon name="i-lucide-mail" class="w-4 h-4" />
                </div>
                <div class="min-w-0">
                  <p class="text-sm font-medium text-primary dark:text-gray-200 truncate">{{ sub.email }}</p>
                  <p class="text-xs text-gray-500 mt-0.5">{{ new Date(sub.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

definePageMeta({ 
    layout: 'admin',
})

// --- Configuration ---
const config = useRuntimeConfig()
const supabase = useSupabaseClient()
const cloudName = config.public.CLOUDINARY_CLOUD_NAME
const uploadPreset = config.public.CLOUDINARY_UPLOAD_PRESET

// --- State ---
const categories = ['Bronze & Metal', 'Stone & Concrete', 'Aquatic', 'Mega-Fauna', 'Interactive']
const isDragging = ref(false)
const isSubmitting = ref(false)
const notification = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const imagePreview = ref<string | null>(null)

const productState = reactive({
  name: '',
  price: null as number | null,
  category: categories[0],
  tagsInput: '',
  description: ''
})

// --- Supabase Data Fetching (Server Routes under the hood) ---
const { data: subscribers, pending: pendingSubscribers } = await useAsyncData('subscribers', async () => {
  const { data, error } = await supabase
    .from('subscribers')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) console.error('Error fetching subscribers:', error)
  return data || []
})

// --- Drag & Drop Image Logic ---
const triggerFileInput = () => fileInput.value?.click()

const processFile = (file: File) => {
  if (!file.type.startsWith('image/')) {
    alert('Please upload an image file.')
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

// --- Submit Logic (Cloudinary + Supabase) ---
const onSubmitProduct = async () => {
  if (!selectedFile.value) {
    alert('Please select an image for the masterpiece.')
    return
  }

  isSubmitting.value = true
  let uploadedImageUrl = ''

  try {
    // 1. Upload to Cloudinary
    const formData = new FormData()
    formData.append('file', selectedFile.value)
    formData.append('upload_preset', uploadPreset)

    const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData
    })
    
    if (!cloudRes.ok) throw new Error('Failed to upload image to Cloudinary')
    const cloudData = await cloudRes.json()
    uploadedImageUrl = cloudData.secure_url

    // 2. Format Payload for Supabase
    const tagsArray = productState.tagsInput.split(',').map(tag => tag.trim()).filter(Boolean)
    
    const payload = {
      name: productState.name,
      price: productState.price === '' ? null : productState.price,
      category: productState.category,
      description: productState.description,
      image_url: uploadedImageUrl,
      tags: tagsArray
    }

    // 3. Insert into Supabase
    const { error } = await supabase.from('products').insert(payload)
    if (error) throw error

    // 4. Success Reset & Notify
    showNotification('Masterpiece saved successfully!')
    resetForm()

  } catch (error: any) {
    console.error('Error saving product:', error)
    alert('An error occurred while saving. Check the console.')
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  productState.name = ''
  productState.price = null
  productState.category = categories[0]
  productState.tagsInput = ''
  productState.description = ''
  selectedFile.value = null
  imagePreview.value = null
  if (fileInput.value) fileInput.value.value = ''
}

const showNotification = (msg: string) => {
  notification.value = msg
  setTimeout(() => notification.value = '', 4000)
}
</script>

<style scoped>
/* Custom scrollbar to keep the subscriber list looking clean */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.3);
  border-radius: 20px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(75, 85, 99, 0.4);
}
</style>