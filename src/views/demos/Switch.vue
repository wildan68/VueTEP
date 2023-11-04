<template>
  <div class="flex items-center gap-7">
    <label>Switch</label>
    <div>
      <ElSwitch v-model="input" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
const input = ref<boolean>(false)
  
</script>