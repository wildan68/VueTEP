<template>
  <ContentCard transparent>
    <template #title>
      Radio Component
    </template>
    <template #subtitle>
      Default element plus radio components
    </template>
      
    <ContentCard>
      <Radio />
    </ContentCard>
  </ContentCard>
</template>
      
<script setup lang="ts">
import Radio from '@/views/demos/Radio.vue';
</script>