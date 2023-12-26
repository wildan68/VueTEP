<template>
  <ContentCard transparent>
    <template #title>
      Switch Component
    </template>
    <template #subtitle>
      Default element plus switch components
    </template>
        
    <ContentCard>
      <Switch />
    </ContentCard>
  </ContentCard>
</template>
          
<script setup lang="ts">
import Switch from '@/views/demos/Switch.vue';
</script>