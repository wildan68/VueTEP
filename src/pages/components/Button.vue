<template>
  <ContentCard transparent>
    <template #title>
      Button Component
    </template>
    <template #subtitle>
      Default element plus button components
    </template>

    <ContentCard>
      <Button />
    </ContentCard>
  </ContentCard>
</template>

<script setup lang="ts">
import Button from '@/views/demos/Button.vue';
</script>