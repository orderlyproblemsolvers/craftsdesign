<template>
  <section class="w-full bg-gray-50 dark:bg-black py-24 lg:py-32 px-6 overflow-hidden">
    <div class="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-8 relative">
      
      <div class="relative group rounded-[2.5rem] bg-primary dark:bg-gray-900 p-10 md:p-16 flex flex-col justify-center min-h-[400px] shadow-2xl">
        
        <div class="absolute -top-12 left-0 w-64 h-64 bg-yellow-600/20 rounded-full blur-[80px] group-hover:bg-yellow-600/40 transition-colors duration-700 pointer-events-none"></div>

        <img 
          src="/img/deer.png" 
          alt="Golden Deer Sculpture" 
          class="absolute -top-20 md:-top-32 left-4 md:-left-12 w-48 md:w-72 lg:w-80 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] z-20 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-6 asset-float"
        />

        <div class="relative z-10 w-full max-w-md ml-auto text-right flex flex-col items-end">
          <div class="inline-flex items-center gap-3 mb-6">
            <h3 class="text-accent text-sm font-bold uppercase tracking-widest">The Inner Circle</h3>
            <span class="w-8 h-px bg-accent"></span>
          </div>
          
          <h2 class="text-3xl md:text-5xl font-serif text-white leading-tight mb-4">
            Curated Elegance, <br/> <span class="italic text-white/70">Delivered.</span>
          </h2>
          
          <div v-if="isSuccess" class="flex flex-col items-end mt-4 animate-fade-in-up">
            <div class="flex items-center gap-3 text-accent mb-3">
              <span class="text-xl font-serif font-bold text-white">Welcome to the circle.</span>
              <UIcon name="i-lucide-check-circle" class="w-6 h-6" />
            </div>
            <p class="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
              Your invitation has been secured. Keep an eye on your inbox for our next private exhibition.
            </p>
          </div>

          <div v-else class="w-full flex flex-col items-end">
            <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              Join our private mailing list for exclusive early access to new collections and bespoke garden design insights.
            </p>

            <form @submit.prevent="subscribeToNewsletter" class="w-full flex flex-col sm:flex-row gap-3 relative">
              <UInput 
                v-model="email"
                type="email" 
                placeholder="Enter your email" 
                icon="i-lucide-mail"
                size="lg"
                variant="none"
                required
                :disabled="isLoading"
                class="flex-1 bg-white/10 dark:bg-black/20 border border-white/20 text-white rounded-full backdrop-blur-sm placeholder:text-gray-400 focus-within:border-accent transition-colors disabled:opacity-50"
                :ui="{ icon: { trailing: { pointer: '' } } }"
              />
              <AppButton 
                variant="solid" 
                type="submit"
                rounded="full"
                class="shrink-0"
                :disabled="isLoading"
              >
                <UIcon v-if="isLoading" name="i-lucide-loader-2" class="w-4 h-4 animate-spin mr-2" />
                {{ isLoading ? 'Subscribing...' : 'Subscribe' }}
              </AppButton>
            </form>
            
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <p v-if="errorMessage" class="text-red-400 text-sm mt-3">{{ errorMessage }}</p>
            </transition>
          </div>
        </div>
      </div>

      <div class="relative group rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-10 md:p-16 flex flex-col justify-center min-h-100 hover:border-accent dark:hover:border-accent transition-colors duration-500">
        
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-colors duration-700 pointer-events-none"></div>

        <div class="relative z-10 w-full max-w-md mr-auto text-left flex flex-col items-start">
          <div class="inline-flex items-center gap-3 mb-6">
            <span class="w-8 h-px bg-accent"></span>
            <h3 class="text-accent text-sm font-bold uppercase tracking-widest">Bespoke Requests</h3>
          </div>
          
          <h2 class="text-3xl md:text-5xl font-serif text-primary dark:text-white leading-tight mb-4">
            Commission a <br/> <span class="italic text-secondary">Masterpiece.</span>
          </h2>
          
          <p class="text-gray-900 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
            Have a specific vision? Connect directly with our lead artisans to discuss custom materials, sizing, and pricing.
          </p>

          <AppButton 
            variant="outline" 
            size="lg"
            rounded="full"
            icon="i-lucide-message-circle" 
            iconPosition="left"
            class="shadow-xl shadow-accent/5"
            @click="handleWhatsApp"
          >
            Chat on WhatsApp
          </AppButton>
        </div>

        <img 
          src="/img/turtle.png" 
          alt="Ancient Jade Turtle Sculpture" 
          class="absolute -bottom-8 md:-bottom-16 -right-8 md:-right-16 w-56 md:w-80 lg:w-96 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] z-20 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-x-8 asset-breathe"
        />

      </div>

    </div>
  </section>
</template>

<style scoped>
.asset-float {
  animation: float 6s ease-in-out infinite;
}

.asset-breathe {
  animation: breathe 8s ease-in-out infinite;
  transform-origin: bottom center;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

@keyframes breathe {
  0% { transform: scaleY(1) translateY(0px); }
  50% { transform: scaleY(0.98) translateY(4px); }
  100% { transform: scaleY(1) translateY(0px); }
}

/* Simple fade in for the success state */
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

const supabase = useSupabaseClient()

// State variables for the newsletter form
const email = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const subscribeToNewsletter = async () => {
  if (!email.value) return
  
  isLoading.value = true
  errorMessage.value = ''

  try {
    const { error } = await supabase
      .from('subscribers')
      .insert([{ email: email.value }])

    if (error) {
      // Postgres error code '23505' is a unique constraint violation
      if (error.code === '23505') {
        throw new Error("You're already on our list! Thank you.")
      }
      throw error
    }

    // Trigger the beautiful success UI
    isSuccess.value = true
    email.value = ''

  } catch (err: any) {
    console.error('Newsletter subscription error:', err)
    errorMessage.value = err.message || 'Something went wrong. Please try again.'
  } finally {
    isLoading.value = false
  }
}

// Quick handler for the general WhatsApp button
const handleWhatsApp = () => {
  const phoneNumber = '2348136658893' // Replace with your business number
  const message = 'Hello Crafts team! I am interested in commissioning a bespoke masterpiece and would love to discuss options.'
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
}
</script>