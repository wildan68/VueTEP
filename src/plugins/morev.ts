import { plugin as VueTransitions, TransitionFade, TransitionExpand, TransitionScale, TransitionSlide } from '@morev/vue-transitions';
import type { PluginOptions } from '@morev/vue-transitions';
import '@morev/vue-transitions/styles';
import type { App } from 'vue'

const defineMoreV = (options?: PluginOptions): { install(app: App): void } => {
  return {
    install(app) {
      app.use(VueTransitions(options))
      app.component('TransitionFade', TransitionFade)
      app.component('TransitionExpand', TransitionExpand)
      app.component('TransitionScale', TransitionScale)
      app.component('TransitionSlide', TransitionSlide)
    },
  }
}

export default defineMoreV({
  defaultProps: {
    duration: 200,
  },
})