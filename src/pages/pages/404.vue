<template>
  <NotFoundPages />
</template>

<script setup lang="ts">
import NotFoundPages from '@/pages/[...all].vue'
</script>

<!-- Must be add route meta layout -->
<route lang="yaml">
meta:
  layout: blank
</route>