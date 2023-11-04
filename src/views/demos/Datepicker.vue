<template>
  <div class="flex items-center gap-7">
    <label>Input</label>
    <div>
      <ElDatePicker
        v-model="input"
        type="date"
        placeholder="Pick a day"
        size="default"
      />
    </div>
  </div>
</template>
  
<script setup lang="ts">
const input = ref('')
  
</script>