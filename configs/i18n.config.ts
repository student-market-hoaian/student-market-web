import { defineI18nConfig } from '#i18n'
import en from '@/locales/en'
import vn from '@/locales/vn'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: { en, vn }
}))
