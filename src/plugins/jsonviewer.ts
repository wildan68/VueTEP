import JsonViewer from 'vue-json-viewer'
import type { App } from 'vue'

import 'vue-json-viewer/style.css'

const defineJsonViewer = (): { install(app: App): void } => {
  return {
    install(app) {
      app.component('JsonViewer', JsonViewer)
    },
  }
}
  
export default defineJsonViewer()