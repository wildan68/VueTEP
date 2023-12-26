<template>  
  <ContentCard transparent>
    <template #title>
      Input Component
    </template>
    <template #subtitle>
      Default element plus input components
    </template>
  
    <ContentCard>
      <Input />
    </ContentCard>
  </ContentCard>
</template>
  
<script setup lang="ts">
import Input from '@/views/demos/Input.vue';
</script>