<template>
  <div 
    class="fixed top-0 bottom-0 left-0 z-50 p-6 shadow-lg bg-background"
    :style="{ width: SIDEBAR_WIDTH + 'px' }"
  >
    <div class="flex flex-col gap-6">
      <span class="w-full text-lg font-extrabold text-center text-primary">VueTEP</span>

      <!-- Menu -->
      <div class="flex flex-col gap-2">
        <div
          v-for="item in sidebarMenu"
          :key="item.key"
        >
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
            <div
              v-if="item.childrenOpen"
              class="flex flex-col gap-2 mt-2 ml-3"
            >
              <div
                v-for="child in item.children"
                :key="child.key"
                v-ripple
                class="px-6 py-3 text-sm transition-colors duration-300 rounded-md cursor-pointer select-none"
                :class="[
                  { 'text-gray-500' : activeMenu !== child.key },
                  { 'bg-gradient-to-r from-primary/80 to-primary text-white' : activeMenu === child.key },
                ]"
                @click="onAction(child)"
              >
                <div class="flex items-center gap-2">
                  <Component
                    :is="child.icon"
                    v-if="child.icon"
                  />
              
                  <span>{{ child.label }}</span>
                </div>
              </div>
            </div>
          </TransitionSlide>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SIZE from '@/constants/SIZE'
import { useSidebar } from '@core/sidebarmenu'
import type { ISidebar } from '@/types/sidebar';

const { SIDEBAR_WIDTH } = SIZE
const { sidebarMenu, openChildren } = useSidebar()

const route = useRoute()

const onAction = (items: ISidebar) => {
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