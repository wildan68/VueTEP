import type { App } from 'vue'
import Draggable from 'vuedraggable'

const defineDraggable = (): { install(app: App): void } => {
  return {
    install(app) {
      app.component('Draggable', Draggable)
    },
  }
}

export default defineDraggable()
