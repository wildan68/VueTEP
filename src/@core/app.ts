import AppMainLogo from '@images/main-logo.png'
import AppLogo from '@images/logo.png'

export const useApp = () => {
  const appName = ref<string>('VueTEP')
  const appDescription = ref<string>('Vue 3 + TypeScript + Element Plus')
  const appVersion = ref<string>('1.0.0')

  return {
    appName,
    appDescription,
    appVersion,
    AppLogo,
    AppMainLogo,
  }
}