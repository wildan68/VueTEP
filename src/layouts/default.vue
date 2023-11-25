<template>
  <Sidebar />
  <Header />
  <div
    :style="{
      marginLeft: SIDEBAR_WIDTH + 'px',
    }"
    class="p-6"
  >
    <RouterView v-slot="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@layouts/component/Sidebar.vue' 
import Header from '@layouts/component/Header.vue'
import SIZE from '@/constants/SIZE'

const { SIDEBAR_WIDTH } = SIZE
</script>