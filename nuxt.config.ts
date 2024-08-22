// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', '@nuxt/eslint'],
  tailwindcss: {
    cssPath: '@/assets/scss/tailwind.scss',
    configPath: 'tailwind.config',
  },
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
