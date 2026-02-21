<script setup lang="ts">
/**
 * OG Image Component: CraftsPattern
 * Fixed for Satori "explicit display" requirements.
 */
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Masterpiece Collection'
  },
  description: {
    type: String,
    default: 'Curated Elegance. Life-size animal sculptures and estate art.'
  }
})
</script>

<template>
  <div class="w-full h-full flex relative overflow-hidden" style="background: linear-gradient(to bottom right, #ffffff, #f5f5f4); display: flex;">

    <div style="position: absolute; top: -150px; right: -150px; width: 700px; height: 700px; border-radius: 350px; border: 2px solid #e7e5e4; display: flex;"></div>
    
    <div style="position: absolute; top: 100px; right: -50px; width: 500px; height: 500px; border-radius: 250px; border: 2px solid #d6d3d1; display: flex;"></div>
    
    <div style="position: absolute; bottom: -100px; right: 50px; width: 450px; height: 450px; border-radius: 225px; border: 40px solid #f5f5f4; display: flex;"></div>
    
    <div style="position: absolute; top: 45%; right: 25%; width: 150px; height: 150px; border-radius: 75px; background-color: #d97706; opacity: 0.1; display: flex;"></div>

    <div class="h-full px-24 flex flex-col justify-center relative z-10" style="display: flex; flex-direction: column; width: 75%;">
      
      <div class="flex items-center mb-10" style="display: flex; align-items: center; gap: 20px;">
         <div style="height: 4px; width: 60px; background-color: #d97706; display: flex;"></div>
         <span style="font-family: sans-serif; font-size: 16px; font-weight: 800; letter-spacing: 0.3em; color: #a8a29e; text-transform: uppercase; display: flex;">
           Crafts Design
         </span>
      </div>
      
      <h1 style="display: flex; font-family: serif; font-size: 90px; font-weight: 800; color: #1c1917; line-height: 1.1; margin-bottom: 30px; letter-spacing: -0.02em;">
        {{ title }}
      </h1>
      
      <p style="display: flex; font-family: serif; font-size: 36px; color: #57534e; font-style: italic; line-height: 1.4;">
        {{ description }}
      </p>
    </div>

    <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 12px; background-color: #d97706; display: flex;"></div>
  </div>
</template>