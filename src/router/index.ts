import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
// import { isUserLoggedIn } from './utils'
import routes from '~pages'
// import { canNavigate } from '@layouts/plugins/casl'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
  ],
})

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to) => {
  // scroll page to top on each route change
  window.scrollTo(0, 0)
})

export default router