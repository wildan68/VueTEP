<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen gap-6">
    <img
      :src="NotFoundAssets"
      width="450"
    >
    
    <div class="flex flex-col gap-4">
      <span class="text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
        404 Not Found
      </span>

      <ElButton
        v-ripple
        type="primary"
        round
        @click="$router.push('/')"
      >
        <template #icon>
          <IconTablerChevronLeft />
        </template>
        
        Back to Home
      </ElButton>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import NotFoundAssets from '@images/404-not-found.png' 
</script>
  
<!-- Must be add route meta layout -->
<route lang="yaml">
meta:
  layout: blank
</route>