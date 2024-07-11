// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  runtimeConfig: {
    public : {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
     CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT || 'master'

    }
  }

  console.log('Contentful Configurations:');
  console.log('Space ID:', process.env.CONTENTFUL_SPACE_ID);
  console.log('Access Token:', process.env.CONTENTFUL_ACCESS_TOKEN);
  console.log('Environment:', process.env.CONTENTFUL_ENVIRONMENT);


})