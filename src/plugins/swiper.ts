import { Swiper, SwiperSlide } from 'swiper/vue'
import type { App } from 'vue'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


const defineSwiper = (): { install(app: App): void } => {
  return {
    install(app) {
      app.component('Swiper', Swiper)
      app.component('SwiperSlide', SwiperSlide)
    },
  }
}

export default defineSwiper()
