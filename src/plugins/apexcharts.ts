import ApexCharts from 'vue3-apexcharts';
import type { App } from 'vue'

const defineApexCharts = (): { install(app: App): void } => {
  return {
    install(app) {
      app.use(ApexCharts)
      app.component('ApexChart', ApexCharts)
    },
  }
}
  
export default defineApexCharts()