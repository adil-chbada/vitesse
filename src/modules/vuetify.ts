import 'vuetify/styles/main.sass'

import { createVuetify } from 'vuetify'
import { type UserModule } from '~/types'

// Import Vuetify
export const install: UserModule = ({ app }) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: isDark.value ? 'dark' : 'light',
      themes: {
        light: {
          colors: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            // https://vuetifyjs.com/en/customization/colors#vuetify-custom-colors
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',

            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',

            // https://vuetifyjs.com/en/customization/colors#vuetify-custom-colors

          },
        },
      },
    },

  })
  app.use(vuetify)
}
