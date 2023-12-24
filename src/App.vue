<template>
  <RouterView v-slot="{ Component }">
    <Component :is="Component" />
  </RouterView>
</template>

<script setup lang="ts">
// 
</script>