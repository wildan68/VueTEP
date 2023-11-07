<template>
  <Sidebar />
  <div
    :style="{
      marginLeft: SIDEBAR_WIDTH + 'px',
    }"
  >
    <RouterView v-slot="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@layouts/component/Sidebar.vue' 
import SIZE from '@/constants/SIZE'

const { SIDEBAR_WIDTH } = SIZE
</script>