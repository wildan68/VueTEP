<template>
  <ContentCard>
    <template #title>
      Checkbox Component
    </template>
    <template #subtitle>
      Default element plus checkbox components
    </template>
        
    <Checkbox />
  </ContentCard>
</template>
        
<script setup lang="ts">
import Checkbox from '@/views/demos/Checkbox.vue';
</script>