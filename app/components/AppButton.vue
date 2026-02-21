<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="to ? undefined : type"
    :class="[
      'group relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out outline-none',
      block ? 'w-full' : '',
      roundedClasses[rounded],
      sizeClasses[size],
      variantClasses[variant],
      animated ? 'overflow-hidden' : ''
    ]"
  >
    <span 
      v-if="animated" 
      class="absolute inset-0 w-full h-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"
      :class="animatedBgClass"
    ></span>

    <span class="relative flex items-center justify-center gap-2">
      <UIcon 
        v-if="icon && iconPosition === 'left'" 
        :name="icon"
        class="w-5 h-5"
      />
      
      <span><slot /></span>
      
      <UIcon 
        v-if="icon && iconPosition === 'right'" 
        :name="icon"
        class="w-5 h-5 transition-transform"
        :class="animated ? 'group-hover:translate-x-1' : ''"
      />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// 2. Explicitly import NuxtLink from the virtual components alias
import { NuxtLink } from '#components' 

const props = defineProps({
  to: { type: String, default: null },
  type: { type: String, default: 'button' },
  variant: { 
    type: String, 
    default: 'solid',
    validator: (v: string) => ['solid', 'outline', 'soft', 'white-outline'].includes(v)
  },
  size: { 
    type: String, 
    default: 'md',
    validator: (v: string) => ['sm', 'md', 'lg'].includes(v)
  },
  rounded: {
    type: String,
    default: 'lg',
    validator: (v: string) => ['md', 'lg', 'full'].includes(v)
  },
  icon: { type: String, default: null },
  iconPosition: { type: String, default: 'right' },
  block: { type: Boolean, default: false },
  animated: { type: Boolean, default: false }
})

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-4 text-base'
}

const roundedClasses = {
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
}

const variantClasses = {
  solid: 'bg-accent text-white hover:bg-opacity-90 shadow-md',
  outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black',
  soft: 'border border-accent/30 bg-accent/5 text-accent hover:bg-accent hover:text-white dark:hover:text-black',
  'white-outline': 'border border-white text-white hover:text-primary'
}

const animatedBgClass = computed(() => {
  if (props.variant === 'white-outline') return 'bg-white'
  if (props.variant === 'outline') return 'bg-primary dark:bg-white'
  return 'bg-white/20' 
})
</script>