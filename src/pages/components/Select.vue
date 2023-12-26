<template>
  <ContentCard transparent>
    <template #title>
      Select Component
    </template>
    <template #subtitle>
      Default element plus select components
    </template>
    
    <ContentCard>
      <Select />
    </ContentCard>
  </ContentCard>
</template>
    
<script setup lang="ts">
import Select from '@/views/demos/Select.vue';
</script>