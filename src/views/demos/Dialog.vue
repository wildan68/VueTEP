<template>
  <div class="flex items-center gap-7">
    <label>Dialog</label>
    <div>
      <ElButton
        type="primary"
        @click="dialogVisible = true"
      >
        Open Dialog
      </ElButton>

      <ElDialog
        v-model="dialogVisible"
        title="Dialog"
      >
        <h3>Hello World</h3>
      </ElDialog>
    </div>
  </div>
</template>
  
<script setup lang="ts">
const dialogVisible = ref<boolean>(false)
  
</script>