<template>
  <div class="flex items-center gap-7">
    <label>Radio</label>
    <div>
      <ElRadioGroup v-model="input">
        <ElRadio label="foo">
          Foo
        </ElRadio>

        <ElRadio label="bar">
          Bar
        </ElRadio>
        
        <ElRadio label="box">
          Box
        </ElRadio>
      </ElRadioGroup>
    </div>
  </div>
</template>
  
<script setup lang="ts">
const input = ref('')
  
</script>