<template>
  <div class="flex flex-col p-6 rounded-lg bg-background">
    <div class="flex flex-col gap-1">
      <span
        v-if="$slots.title"
        class="text-xl font-bold text-primary"
      >
        <slot name="title" />
      </span>
      <span
        v-if="$slots.subtitle"
        class="mb-6 text-xs text-placeholder"
      >
        <slot name="subtitle" />
      </span>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
// 
</script>