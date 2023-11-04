<template>
  <div class="flex items-center gap-7">
    <label>Input</label>
    <div>
      <ElInput
        v-model="input"
        placeholder="Input Text"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const input = ref('')

</script>