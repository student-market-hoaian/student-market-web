import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo/student-market-logo.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
        }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      title: process.env.APP_NAME,
      titleTemplate: `%s - ${process.env.APP_NAME}`
    }
  },
  build: {
    transpile: ['vuetify']
  },
  css: ['vuetify/lib/styles/main.sass'],
  devtools: { enabled: true },
  formkit: {
    configFile: './configs/formkit.config.ts'
  },
  i18n: {
    vueI18n: './configs/i18n.config.ts'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/devtools',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@formkit/nuxt'
  ],
  pinia: {
    autoImports: [
      // import { defineStore } from 'pinia'
      'defineStore',
      // import { defineStore as definePiniaStore } from 'pinia'
      ['defineStore', 'definePiniaStore']
    ]
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  vite: {
    plugins: [vuetify()]
  }
})
