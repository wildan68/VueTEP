<template>
  <ContentCard>
    <template #title>
      Input Component
    </template>
    <template #subtitle>
      Default element plus input components
    </template>
  
    <Input />
  </ContentCard>
</template>
  
<script setup lang="ts">
import Input from '@/views/demos/Input.vue';
</script>