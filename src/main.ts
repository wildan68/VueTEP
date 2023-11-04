import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from '@/plugins/element-plus'
import Ripple from '@/plugins/ripple'
import Toastify from '@/plugins/toastify'

import App from './App.vue'
import router from './router'

import '@/assets/css/tailwind.css'
import '@/styles/scss/index.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.use(Toastify)

app.use(Ripple)

app.mount('#app')
