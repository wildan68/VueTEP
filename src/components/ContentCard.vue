<template>
  <div
    class="flex flex-col p-6 rounded-lg"
    :class="[
      { 'border dark:border-zinc-500' : border },
      { 'w-100 flex-1' : full },
      { 'bg-background' : !transparent }
    ]"
  >
    <div class="flex flex-col gap-1">
      <!-- Title Slots -->
      <span
        v-if="$slots.title"
        class="text-xl font-bold text-primary"
        :class="{ 'mb-6' : !$slots.subtitle }"
      >
        <slot name="title" />
      </span>

      <!-- Title Props -->
      <span
        v-else-if="title"
        class="text-xl font-bold text-primary"
        :class="{ 'mb-6' : !subtitle }"
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
interface IProps {
  title?: string;
  subtitle?: string;
  border?: boolean;
  full?: boolean;
  transparent?: boolean;
  modelValue?: boolean;
}

withDefaults(defineProps<IProps>(), {
  title: '',
  subtitle: '',
  transparent: false,
});
</script>