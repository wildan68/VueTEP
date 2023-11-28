<template>
  <ContentCard>
    <template #title>
      Dialog Component
    </template>
    <template #subtitle>
      Default element plus dialog components
    </template>
              
    <Dialog />
  </ContentCard>
</template>
              
<script setup lang="ts">
import Dialog from '@/views/demos/Dialog.vue';
</script>