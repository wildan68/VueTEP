import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from '@/plugins/element-plus'
import Ripple from '@/plugins/ripple'
import Toastify from '@/plugins/toastify'
import MoreV from '@/plugins/morev'
import ApexCharts from '@/plugins/apexcharts'
import Leaflet from '@/plugins/leaflet'

import App from './App.vue'
import router from './router'

import '@/assets/css/tailwind.css'
import '@/styles/scss/index.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'unfonts.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.use(Toastify)

app.use(Ripple)

app.use(MoreV)

app.use(ApexCharts)

app.use(Leaflet)

app.mount('#app')
