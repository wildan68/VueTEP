<template>
  <div class="flex flex-col gap-4">
    <div>
      <ElButton type="primary">
        ini home <IconTablerChevronRight />
      </ElButton>
    </div>
    
    ASede 
    <ElInput
      v-model="input"
      placeholder="Enter something..."
    />

    {{ input }}
  </div>
</template>

<script setup lang="ts">
const input = ref('')
</script>