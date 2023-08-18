// tailwind.config.js
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [...'@/config/tailwind-theme.js'],
  plugins: [FormKitVariants]
}
