import PasswordMeter from 'vue-simple-password-meter';
import type { App } from 'vue'

const definePasswordMeter = (): { install(app: App): void } => {
  return {
    install(app) {
      app.component('PasswordMeter', PasswordMeter)
    },
  }
}
    
export default definePasswordMeter()