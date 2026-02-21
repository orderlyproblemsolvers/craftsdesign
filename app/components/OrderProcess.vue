<template>
  <section class="w-full bg-gray-50 dark:bg-black py-24 lg:py-32 px-6">
    <div class="max-w-360 mx-auto flex flex-col gap-16">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div class="max-w-2xl space-y-4">
          <div class="inline-flex items-center gap-3">
            <span class="w-8 h-px bg-accent"></span>
            <h3 class="text-accent text-sm font-bold uppercase tracking-widest">How It Works</h3>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif text-primary dark:text-gray-100 leading-tight">
            The <span class="italic text-secondary">Commission</span> Process
          </h2>
        </div>
        <p class="text-gray-600 dark:text-gray-400 max-w-md md:text-right leading-relaxed pb-2">
          From your initial vision to final installation, we ensure a seamless and collaborative experience tailored to your estate.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div 
          v-for="(step, index) in steps" 
          :key="step.title"
          class="group relative bg-white dark:bg-white/5 border-none rounded-4xl p-8 lg:p-10 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-500"
        >
          <div class="absolute -right-4 -bottom-8 text-[8rem] font-serif font-black text-gray-50 dark:text-white/5 leading-none select-none group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-700 ease-out">
            {{ index + 1 }}
          </div>
          
          <div class="relative z-10 flex flex-col h-full gap-6">
            <div class="flex items-center justify-between">
              <div class="size-12 rounded-2xl bg-primary/5 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                <UIcon :name="step.icon" class="w-6 h-6" />
              </div>
              <span class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Step 0{{ index + 1 }}
              </span>
            </div>
            
            <div class="space-y-3 mt-auto pt-8">
              <h4 class="text-xl font-serif font-bold text-primary dark:text-white">
                {{ step.title }}
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-[90%]">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full bg-primary dark:bg-gray-900 rounded-4xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="relative z-10 flex flex-col md:flex-row items-center lg:items-start gap-8 flex-1 text-center md:text-left">
          <div class="shrink-0 size-16 rounded-full border border-white/20 bg-white/10 flex items-center justify-center backdrop-blur-md">
            <UIcon name="i-lucide-hammer" class="w-8 h-8 text-white" />
          </div>
          
          <div class="space-y-4 max-w-2xl">
            <h4 class="text-2xl md:text-3xl font-serif font-bold text-white">Made to Order Masterpieces</h4>
            <p class="text-gray-300 text-sm md:text-base leading-relaxed">
              All creations require a <span class="text-white font-semibold">2 to 5 week lead time</span> following a <span class="text-white font-semibold">70% deposit</span>. 
            </p>
            
            <div class="inline-flex items-center gap-2 bg-black/30 px-4 py-2.5 rounded-xl border border-white/10 mt-2">
              <UIcon name="i-lucide-info" class="w-4 h-4 text-secondary shrink-0" />
              <p class="text-xs text-gray-300">
                <strong class="text-white">Concrete Orders:</strong> Require the full 5-week timeline to ensure proper curing and weatherproofing.
              </p>
            </div>
          </div>
        </div>

        <div class="relative z-10 shrink-0 w-full md:w-auto">
          <AppButton 
            variant="solid" 
            size="lg" 
            rounded="full"
            icon="i-lucide-arrow-right" 
            class="w-full md:w-auto shadow-xl shadow-black/20"
          >
            Start Your Commission
          </AppButton>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Initial Inquiry',
    description: 'Reach out with your vision. Share your desired design, ideal sizing, and preferred material (bronze, stone, concrete, etc.).',
    icon: 'i-lucide-message-square'
  },
  {
    title: 'Quotation',
    description: 'We provide a comprehensive quote detailing the exact price, estimated delivery timeline, and material specifications.',
    icon: 'i-lucide-file-text'
  },
  {
    title: 'Order Confirmation',
    description: 'Approve the finalized quote and secure your commission in our production schedule with a 70% deposit.',
    icon: 'i-lucide-credit-card'
  },
  {
    title: 'Design & Production',
    description: 'We confirm the final design details for your approval, then our artisans begin the intricate crafting process.',
    icon: 'i-lucide-pen-tool'
  },
  {
    title: 'Review & Delivery',
    description: 'Review photos of the finished piece. Upon final payment, we arrange safe delivery or schedule a pickup.',
    icon: 'i-lucide-truck'
  },
  {
    title: 'Feedback',
    description: 'Enjoy your new garden centerpiece! We kindly ask for your feedback to help us continually refine our craft.',
    icon: 'i-lucide-star'
  }
]
</script>