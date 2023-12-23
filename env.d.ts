/// <reference path="auto-imports.d.ts" />
/// <reference path="components.d.ts" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="unplugin-icons/types/vue" />
/// <reference types="global.d.ts" />
/// <reference types="dayjs" />

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    action?: string
    subject?: string
    layoutWrapperClasses?: string
  }
}