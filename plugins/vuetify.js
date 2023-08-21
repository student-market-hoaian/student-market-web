import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import en from '@/locales/en.ts'

const themeGlobal = {
  dark: false,
  colors: {
    background: '#EEC873',
    surface: '#ffffff',
    primary: '#7C79EC',
    secondary: '#AD80C5',
    accent: '#F3B9D2',
    info: '#EDDBFF',
    warning: '#fcaf17',
    success: '#27ae60',
    error: '#e24343'
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    locale: {
      locale: en.vuetify,
      messages: en.vuetify
    },
    theme: {
      defaultTheme: 'themeGlobal',
      themes: {
        themeGlobal
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
