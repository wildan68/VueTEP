import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Icons from 'unplugin-icons/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import ElementPlus from 'unplugin-element-plus/vite'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/math', 'pinia', {
        'vue3-toastify': [
          'toast',
        ],
        '@morev/vue-transitions': [
          'TransitionFade',
          'TransitionExpand',
          'TransitionScale',
          'TransitionSlide',
        ],
      }],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],

    }),
    Components({
      dirs: ['src/components', 'src/views/demos'],
      dts: true,
      resolvers: [
        ElementPlusResolver(), 
        IconsResolver({
          prefix: 'icon',
        }),
      ],
    }),
    DefineOptions(),
    ElementPlus({
      useSource: true,
    }),
    Icons({
      // experimental
      autoInstall: true,
    }),
    Layouts({
      layoutsDirs: './src/layouts/',
    }),
    Pages({
      dirs: ['./src/pages'],

      // ℹ️ We need three routes using single routes so we will ignore generating route for this SFC file
      onRoutesGenerated: routes => [
        // Email filter
        // {
        //   path: '/apps/email/:filter',
        //   name: 'apps-email-filter',
        //   component: '/src/pages/apps/email/index.vue',
        //   meta: {
        //     navActiveLink: 'apps-email',
        //     layoutWrapperClasses: 'layout-content-height-fixed',
        //   },
        // },

        // // Email label
        // {
        //   path: '/apps/email/label/:label',
        //   name: 'apps-email-label',
        //   component: '/src/pages/apps/email/index.vue',
        //   meta: {
        //     // contentClass: 'email-application',
        //     navActiveLink: 'apps-email',
        //     layoutWrapperClasses: 'layout-content-height-fixed',
        //   },
        // },
        ...routes,
      ],
    }),
    Unfonts({
      google: {
        families: [
          // families can be either strings (only regular 400 will be loaded)
          'Montserrat',
        ],
      }, 
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@themeConfig': fileURLToPath(new URL('./themeConfig.ts', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images/', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles/', import.meta.url)),
      // '@axios': fileURLToPath(new URL('./src/plugins/axios', import.meta.url)),
      // '@validators': fileURLToPath(new URL('./src/@core/utils/validators', import.meta.url)),
      // 'apexcharts': fileURLToPath(new URL('node_modules/apexcharts-clevision', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores/index.ts', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  server: {
    port: 3000,
  },
})
