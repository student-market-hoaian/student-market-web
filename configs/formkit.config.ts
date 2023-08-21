import { fr } from '@formkit/i18n'
import { defineFormKitConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import tailwindTheme from '@/configs/tailwind-theme'

export default defineFormKitConfig({
  locales: { fr },
  locale: 'fr',
  icons: {
    ...genesisIcons
  },
  config: {
    classes: generateClasses(tailwindTheme)
  }
})
