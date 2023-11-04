<template>
  <div class="flex items-center gap-7">
    <label>Button</label>
    <div class="flex items-center">
      <ElButton>
        Default
      </ElButton>

      <ElButton
        v-ripple
        type="primary"
      >
        Ripple
      </ElButton>
      
      <ElButton
        type="primary"
      >
        Primary
      </ElButton>

      <ElButton
        type="success"
      >
        Success
      </ElButton>

      <ElButton
        type="warning"
      >
        Warning
      </ElButton>

      <ElButton
        type="danger"
      >
        Danger
      </ElButton>

      <ElButton
        type="info"
      >
        Info
      </ElButton>
    </div>
  </div>
</template>
  
<script setup lang="ts">
// 
  
</script>