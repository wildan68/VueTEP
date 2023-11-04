import Ripple from 'vue3-whr-ripple-directive'
import type { App } from 'vue'

const defineRipple = (name: string): { install(app: App): void } => {
  return {
    install(app) {
      app.directive(name, Ripple)
    },
  }
}

export default defineRipple('ripple')