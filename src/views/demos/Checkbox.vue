<template>
  <div class="flex items-center gap-7">
    <label>Checkbox</label>
    <div>
      <ElCheckbox
        v-model="input1"
        label="Foo"
        size="large"
      />

      <ElCheckbox
        v-model="input2"
        label="Bar"
        size="large"
      />

      <ElCheckbox
        v-model="input3"
        label="Box"
        size="large"
      />
    </div>
  </div>
</template>
  
<script setup lang="ts">
const input1 = ref<boolean>(false)
const input2 = ref<boolean>(false)
const input3 = ref<boolean>(false)
</script>