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
      <TransitionExpand
        appear
        @before-enter="loadPage"
      >
        <Component :is="Component" />
      </TransitionExpand>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@layouts/component/Sidebar.vue' 
import Header from '@layouts/component/Header.vue'
import SIZE from '@/constants/SIZE'

const { SIDEBAR_WIDTH } = SIZE

const loadPage = () => console.log('hello')
</script>