<template>
  <main>
    <HeroSection />
    
    <section id="collections" aria-label="Our Masterpieces">
      <MiniCollection />
    </section>

    <OrderProcess />
    <CtaSection />
  </main>
</template>

<script setup>
// 1. Standard SEO Meta Tags
useSeoMeta({
  title: 'Crafts Design | Life-Size Animal Sculptures & Estate Art in Abuja',
  ogTitle: 'Crafts Design | Premium Garden Estate Sculptures',
  description: 'Exquisite, hand-crafted life-size animal sculptures. From bronze to stone, our masterpieces define luxury gardens and estates in Abuja and beyond.',
  ogDescription: 'Explore our complete menagerie of meticulously crafted garden estate sculptures.',
  twitterCard: 'summary_large_image',
})

// 2. Local Business & Product Schema (JSON-LD)
useSchemaOrg([
  defineLocalBusiness({
    name: 'Crafts Design',
    logo: '/img/logo.png',
    address: {
      addressLocality: 'Abuja',
      addressRegion: 'FCT',
      addressCountry: 'NG',
    },
    image: '/img/cd-lion.jpg',
    telephone: '+2348136658893',
    url: 'https://craftsdesign.ng', // Replace with your actual domain
  })
])

// 3. Updated OG Image Component
// Using 'CraftsPattern' as it is the most stable version we built
defineOgImageComponent('CraftsRadial', {
  title: 'Crafts Design: The Master Collection',
  description: 'Life-size animal sculptures and bespoke estate art curated for the discerning eye.'
})
</script>