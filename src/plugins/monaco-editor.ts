import type { App } from 'vue'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

const defineMonacoEditor = (): { install(app: App): void } => {
  return {
    install(app) {
      app.use(VueMonacoEditorPlugin, {
        paths: {
          // The recommended CDN config
          vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs',
        },
      })
    },
  }
}

export default defineMonacoEditor()
