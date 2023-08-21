// tailwind.configs.js
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  prefix: 'tw-',
  important: true,
  content: [...'@/configs/tailwind-theme.js'],
  plugins: [FormKitVariants]
}
