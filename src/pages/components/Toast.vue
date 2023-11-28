<template>
  <ContentCard>
    <template #title>
      Toast Component
    </template>
    <template #subtitle>
      Default element plus toast components
    </template>
                
    <Toast />
  </ContentCard>
</template>
                
<script setup lang="ts">
import Toast from '@/views/demos/Toast.vue';
</script>