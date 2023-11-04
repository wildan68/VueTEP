import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import type { App } from 'vue'

import 'vue3-toastify/dist/index.css';

const defineToastify = (options: ToastContainerOptions): { install(app: App): void } => {
  return {
    install(app) {
      app.use(Vue3Toasity, options)
    },
  }
}

export default defineToastify({
  autoClose: 3000,
  theme: 'colored',
})
