<template>
  <aside
    id="layout-sidebar" 
    class="fixed top-0 bottom-0 left-0 z-50 p-6 shadow-lg bg-background"
    :style="{ width: sidebarWidth + 'px' }"
  >
    <div class="flex flex-col gap-6">
      <span class="w-full text-lg font-extrabold text-center text-primary">VueTEP</span>

      <!-- Menu -->
      <nav class="relative h-[calc(100vh-74px)] pr-3 overflow-y-auto">
        <ul class="flex flex-col gap-2">
          <li
            v-for="item in sidebarMenu"
            :key="item.key"
            class="transition-all duration-300"
          >
            <template v-if="item.isGroup">
              <div class="mt-4 mb-2 text-placeholder">
                <span class="text-sm">{{ item.label }}</span>
              </div>
            </template>
          
            <template v-else>
              <div
                v-ripple
                class="flex items-center justify-between px-6 py-3 transition-colors duration-300 rounded-md cursor-pointer select-none"
                :class="[
                  { 'bg-gray-100 text-gray-500 dark:bg-zinc-800' : item.childrenOpen },
                  { 'bg-gradient-to-r from-primary/80 to-primary text-white' : activeMenu === item.key },
                  { 'text-gray-500' : activeMenu !== item.key },
                ]"
                @click="onAction(item)"
              >
                <div class="flex items-center gap-2">
                  <Component
                    :is="item.icon"
                    v-if="item.icon"
                  />
              
                  <span>{{ item.label }}</span>
                </div>

                <template v-if="item.children">
                  <IconTablerChevronUp
                    class="transition-transform duration-300" 
                    :class="[!item.childrenOpen && 'transform rotate-180']"
                  />
                </template> 
              </div>

              <!-- Children / Sub Menu -->
              <TransitionSlide
                appear
                easing="ease-out"
              >
                <ul
                  v-if="item.childrenOpen"
                  class="flex flex-col gap-2 mt-2 ml-3"
                >
                  <li
                    v-for="child in item.children"
                    :key="child.key"
                    v-ripple
                    class="flex items-center gap-2 px-6 py-3 text-sm transition-colors duration-300 rounded-md cursor-pointer select-none"
                    :class="[
                      { 'text-gray-500' : activeMenu !== child.key },
                      { 'bg-gradient-to-r from-primary/80 to-primary text-white' : activeMenu === child.key },
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

const { sidebarMenu, openChildren, sidebarWidth } = useSidebar()

const route = useRoute()

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

const activeMenu = computed(() => {
  const { path } = route
  
  return path.split('/').pop() || 'dashboard'
})
</script>