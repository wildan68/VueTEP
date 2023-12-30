<template>
  <aside
    id="layout-sidebar" 
    class="fixed top-0 bottom-0 left-0 z-50 p-6 transition-all duration-300 shadow-lg bg-background"
    :style="{ width: scopedHovered ? '282px' : sidebarWidth + 'px' }"
    @mouseenter="onSidebarHover"
    @mouseleave="onSidebarHover"
  >
    <div class="flex flex-col gap-6">
      <span class="w-full text-lg font-extrabold text-center text-primary">VueTEP</span>

      <!-- Menu -->
      <nav
        class="relative h-[calc(100vh-74px)] overflow-y-auto"
        :class="[{ 'pr-3' : !sidebarCollapsed || scopedHovered }]"
      >
        <ul class="flex flex-col gap-2">
          <!-- Menu Items -->
          <li
            v-for="item in sidebarMenu"
            :key="item.key"
            class="relative transition-all duration-300"
          >
            <!-- Check if Group Label -->
            <template v-if="item.isGroup">
              <!-- Hide group label if Collapsed -->
              <template v-if="sidebarCollapsed && !scopedHovered">
                <div class="flex justify-center text-center">
                  <IconTablerLineDashed class="text-primary" />
                </div>
              </template>
              <!-- Show group label if expand -->
              <template v-else>
                <div class="mt-4 mb-2 text-placeholder">
                  <span class="text-sm">{{ item.label }}</span>
                </div>
              </template>
            </template>
          
            <!-- Menu Items -->
            <template v-else>
              <div
                v-ripple
                class="flex items-center px-6 py-3 transition-all duration-300 rounded-md cursor-pointer select-none hover:bg-gray-100"
                :class="[
                  { 'bg-gray-100 text-gray-500 dark:bg-zinc-800' : item.childrenOpen },
                  { 'bg-gradient-to-r from-primary/80 to-primary text-white' : activeMenu === item.key },
                  { 'text-gray-500' : activeMenu !== item.key },
                  { 'px-6 justify-between' : !sidebarCollapsed || scopedHovered },
                  { 'px-3 justify-center' : sidebarCollapsed && !scopedHovered },
                ]"
                @click="onAction(item)"
              >
                <div class="flex items-center gap-2">
                  <Component
                    :is="item.icon"
                    v-if="item.icon"
                  />
              
                  <!-- Hide menu label if collapsed -->
                  <TransitionExpand axis="y">
                    <span v-if="!sidebarCollapsed || scopedHovered">{{ item.label }}</span>
                  </TransitionExpand>
                </div>

                <!-- Hide chevron childer if collapsed -->
                <template v-if="item.children && (!sidebarCollapsed || scopedHovered)">
                  <IconTablerChevronUp
                    class="transition-transform duration-300" 
                    :class="[!item.childrenOpen && 'transform rotate-180']"
                  />
                </template> 
              </div>

              <!-- Children / Sub Menu Items -->
              <TransitionSlide
                appear
                easing="ease-out"
              >
                <ul
                  v-if="item.childrenOpen && (!sidebarCollapsed || scopedHovered)"
                  class="flex flex-col gap-2 mt-2 ml-3"
                >
                  <li
                    v-for="child in item.children"
                    :key="child.key"
                    class="flex items-center gap-2 px-6 py-3 text-sm transition-all duration-300 rounded-md cursor-pointer select-none hover:transform hover:translate-x-1"
                    :class="[
                      { 'text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400' : activeMenu !== child.key },
                      { 'text-primary font-medium' : activeMenu === child.key },
                    ]"
                    @click="onAction(child)"
                  >
                    <Component
                      :is="child.icon"
                      v-if="child.icon"
                    />
              
                    <span>{{ child.label }}</span>
                  </li>
                </ul>
              </TransitionSlide>
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useSidebar } from '@core/sidebarmenu'
import type { ISidebar } from '@/types/sidebar';

const { 
  sidebarMenu, 
  openChildren, 
  sidebarWidth, 
  sidebarCollapsed, 
  sidebarHovered, 
} = useSidebar()

const route = useRoute()
const scopedHovered = ref<boolean>(false)

const onAction = (items: ISidebar) => {
  if (items.isGroup) return

  if (items.children) {
    return openChildren(items.key)
  }
  
  if (!items.action) {
    return toast.info('Action not found')
  }
    
  return items.action()
}

const onSidebarHover = () => {
  if (!sidebarCollapsed.value && !sidebarHovered.value) return
  
  setTimeout(() => {
    scopedHovered.value = !scopedHovered.value
  }, 100)
}

const activeMenu = computed(() => {
  const { path } = route
  
  return path.split('/').pop() || 'dashboard'
})

watch(
  scopedHovered,
  (val) => console.log('val', val),
)
</script>