import { VOnboardingWrapper, VOnboardingStep } from 'v-onboarding'
import type { App } from 'vue'

import 'v-onboarding/dist/style.css'

const defineOnboarding = (): { install(app: App): void } => {
  return {
    install(app) {
      app.component('VOnboardingWrapper', VOnboardingWrapper)
      app.component('VOnboardingStep', VOnboardingStep)
    },
  }
}

export default defineOnboarding()
