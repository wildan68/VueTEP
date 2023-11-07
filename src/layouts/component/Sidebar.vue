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
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SIZE from '@/constants/SIZE'
import { sidebarMenu } from '@core/sidebar-menu'

const { SIDEBAR_WIDTH } = SIZE
</script>