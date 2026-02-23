// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // App Head Configuration for Favicons
  app: {
    head: {
      title: 'Crafts Design | Garden Statues',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  ssr:true,
  nitro: {
    preset: 'netlify'
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    optimizeDeps: {
      include: [
        '@nuxt/ui > prosemirror-state',
        '@nuxt/ui > prosemirror-transform',
        '@nuxt/ui > prosemirror-model',
        '@nuxt/ui > prosemirror-view',
        '@nuxt/ui > prosemirror-gapcursor'
      ]
    }
  },

  // colorMode: {
  //   preference: 'light',
  //   fallback: 'light',
  //   classSuffix: ''
  // },

  supabase: {
    redirectOptions: {
      login: '/admin/login',
      callback: '/confirm',
      include: ['/admin(/*)?'],
      exclude: ['/', '/collections', '/collections/*'],
    }
  },

  runtimeConfig: {
    public: {
      CLOUDINARY_CLOUD_NAME: process.env.NUXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_UPLOAD_PRESET: process.env.NUXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  },

  site: {
    // In development, use your localhost. In production, use your actual domain.
    url: process.env.NODE_ENV === 'production' ? 'https://craftsdesign.ng' : 'http://localhost:3000',
    name: 'Crafts Design',
  },
  sitemap: {
    // Automatically include all static pages (/, /collections, /about)
    autoLastmod: true,
    
    // Dynamic Routes for your Sculptures
    sources: [
      '/api/sitemap-urls'
    ]
  },

  // Ensure this is present if not already
  ogImage: {
    enabled: true,
  }
})