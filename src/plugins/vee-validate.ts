import { Form, Field, ErrorMessage } from 'vee-validate';
import type { App } from 'vue'

import '@core/validators'

const defineVeeValidate = (): { install(app: App): void } => {
  return {
    install(app) {
      app.component('Form', Form)
      app.component('Field', Field)
      app.component('ErrorMessage', ErrorMessage)
    },
  }
}
    
export default defineVeeValidate()