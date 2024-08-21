// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  runtimeConfig: {
    public : {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
      CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT || 'master',
      RESEND_API_KEY : process.env.RESNED_API_KEY
    }
  },

  compatibilityDate: "2024-07-12"
})