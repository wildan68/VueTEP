import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from '@/plugins/element-plus'
import Ripple from '@/plugins/ripple'
import Toastify from '@/plugins/toastify'
import MoreV from '@/plugins/morev'
import ApexCharts from '@/plugins/apexcharts'
import Leaflet from '@/plugins/leaflet'
import VeeValidate from '@/plugins/vee-validate'
import PasswordMeter from '@/plugins/password-meter'
import HighlightJs from '@/plugins/highlightjs'
import Swiper from '@/plugins/swiper'
import Froala from '@/plugins/froala'
import Onboarding from '@/plugins/onboarding'
import JsonViewer from '@/plugins/jsonviewer'

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

app.use(VeeValidate)

app.use(PasswordMeter)

app.use(HighlightJs)

app.use(Swiper)

app.use(Froala)

app.use(Onboarding)

app.use(JsonViewer)

app.mount('#app')
