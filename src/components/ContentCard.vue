<template>
  <div
    class="flex flex-col p-6 rounded-lg bg-background"
    :class="[
      { 'border dark:border-zinc-500' : border}
    ]"
  >
    <div class="flex flex-col gap-1">
      <!-- Title Slots -->
      <span
        v-if="$slots.title"
        class="text-xl font-bold text-primary"
      >
        <slot name="title" />
      </span>

      <!-- Title Props -->
      <span
        v-else-if="title"
        class="text-xl font-bold text-primary"
      >
        {{ title }}
      </span>

      <!-- Subtitle Slots -->
      <span
        v-if="$slots.subtitle"
        class="mb-6 text-xs text-placeholder"
      >
        <slot name="subtitle" />
      </span>

      <!-- Subtitle Props -->
      <span
        v-else-if="subtitle"
        class="mb-6 text-xs text-placeholder"
      >
        {{ subtitle }}
      </span>
    </div>
    
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
  border?: boolean;
}

defineProps<Props>();
</script>