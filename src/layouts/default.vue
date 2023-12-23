<template>
  <div class="bg-zinc-100 dark:bg-zinc-900">
    <Sidebar />
    <Header />
    <div
      :style="{
        marginLeft: sidebarWidth + 'px',
        minHeight: height - 120 + 'px',
      }"
      class="p-6 mt-3"
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
    <Footer
      :style="{
        marginLeft: sidebarWidth + 'px' 
      }"
    />
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@layouts/component/Sidebar.vue' 
import Header from '@layouts/component/Header.vue'
import Footer from '@layouts/component/Footer.vue';
import { useSidebar } from '@core/sidebarmenu';

const { sidebarWidth } = useSidebar()

const { height } = useWindowSize()

const loadPage = () => console.log('hello')
</script>