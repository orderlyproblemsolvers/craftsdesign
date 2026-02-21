<template>
  <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-black text-primary dark:text-gray-100 font-sans antialiased selection:bg-accent selection:text-white">
    <AppHeader />

    <main class="grow flex flex-col relative z-0">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// You can also place global SEO meta tags here using useHead()
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Crafts` : 'Crafts - Modern Garden Luxury';
  }
})
</script>