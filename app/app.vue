<template>
  <UApp>
    <NuxtLoadingIndicator :height="4" color="text-primary"/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useSchemaOrg([
  // Tells Google this is a top-level website
  defineWebSite({
    name: 'Crafts Design',
    description: 'Masterpiece estate sculptures and architectural centerpieces.',
  }),
  // Tells Google who owns the website
  defineOrganization({
    name: 'Crafts Design',
    logo: '/logo.png', // Put your logo in the public/ folder
    sameAs: [
      'https://www.instagram.com/yourprofile', // Add your social links
      'https://twitter.com/yourprofile'
    ]
  }),
  // Provides a base fallback for every page
  defineWebPage() 
])

// Global SEO Meta fallbacks
useSeoMeta({
  titleTemplate: '%s | Crafts Design', // Automatically adds your brand to all page titles
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>