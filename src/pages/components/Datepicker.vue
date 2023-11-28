<template>
  <ContentCard>
    <template #title>
      Datepicker Component
    </template>
    <template #subtitle>
      Default element plus datepicker components
    </template>
            
    <Datepicker />
  </ContentCard>
</template>
            
<script setup lang="ts">
import Datepicker from '@/views/demos/Datepicker.vue';
</script>