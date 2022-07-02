import 'vuetify/styles/main.sass'

import { createVuetify } from 'vuetify'
import { type UserModule } from '~/types'

// Import Vuetify
export const install: UserModule = ({ app }) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: isDark.value ? 'dark' : 'light',
    },
  })
  app.use(vuetify)
}
