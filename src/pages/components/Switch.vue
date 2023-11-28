<template>
  <ContentCard>
    <template #title>
      Switch Component
    </template>
    <template #subtitle>
      Default element plus switch components
    </template>
          
    <Switch />
  </ContentCard>
</template>
          
<script setup lang="ts">
import Switch from '@/views/demos/Switch.vue';
</script>