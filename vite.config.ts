import { fileURLToPath } from 'url'

import { defineConfig, splitVendorChunkPlugin } from 'vite'
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
import { VitePWA } from 'vite-plugin-pwa'

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
        'vue3-apexcharts': [['default', 'ApexChart']],
        '@vue-leaflet/vue-leaflet': [ 
          'LCircle', 
          'LCircleMarker', 
          'LControl', 
          'LControlAttribution', 
          'LControlLayers', 
          'LControlScale', 
          'LControlZoom', 
          'LFeatureGroup', 
          'LGeoJson', 
          'LGridLayer', 
          'LIcon', 
          'LImageOverlay', 
          'LLayerGroup', 
          'LMap', 
          'LMarker', 
          'LPolygon', 
          'LPolyline', 
          'LPopup', 
          'LRectangle', 
          'LTileLayer', 
          'LTooltip', 
          'LWmsTileLayer',
        ],
        'vee-validate': [
          'Form',
          'Field',
          'ErrorMessage',
        ],
        'vue-simple-password-meter': [['default', 'PasswordMeter']],
        'swiper/vue': ['Swiper', 'SwiperSlide'],
        'swiper/modules': [
          ['Autoplay', 'SwiperAutoplay'],
          ['Controller', 'SwiperController'],
          ['Navigation', 'SwiperNavigation'],
          ['Pagination', 'SwiperPagination'],
          ['Scrollbar', 'SwiperScrollbar'],
        ],
        'vue-froala-wysiwyg': [['default', 'Froala']],
      }],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['./src/components'],
      dts: true,
      deep: true,
      resolvers: [
        ElementPlusResolver(), 
        IconsResolver({
          prefix: 'icon',
        }),
      ],
    }),
    DefineOptions({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/],
    }),
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
        ...routes,
      ],
    }),
    splitVendorChunkPlugin(),
    Unfonts({
      google: {
        families: [
          // families can be either strings (only regular 400 will be loaded)
          'Montserrat',
        ],
      },
    }),
    VitePWA({ 
      base: '/',
      srcDir: 'src',
      filename: 'sw.ts',
      injectRegister: 'script',
      includeAssets: ['/icon.png'],
      strategies: 'injectManifest',
      manifest: {
        name: 'VueTEP - Vuejs Element Plus and TailwindCSS UI',
        short_name: 'VueTEP',
        theme_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: '/icon/mipmap-xxxhdpi/icon.png',
            sizes: '192x192',
            type: 'image/png',
          }, {
            src: '/icon/mipmap-xxxhdpi/icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images/', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles/', import.meta.url)),
      '@axios': fileURLToPath(new URL('./src/plugins/axios', import.meta.url)),
      '@validators': fileURLToPath(new URL('./src/@core/utils/validators', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores/index.ts', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@fb': fileURLToPath(new URL('./src/plugins/firebase.ts', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  server: {
    port: 3000,
  },
})
