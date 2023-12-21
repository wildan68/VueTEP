import VueHighlightJS from 'vue3-highlightjs'
import type { App } from 'vue'

import 'highlight.js/styles/solarized-light.css'

const defineHighlightJs = (): { install(app: App): void } => {
  return {
    install(app) {
      app.use(VueHighlightJS)
    },
  }
}
    
export default defineHighlightJs()