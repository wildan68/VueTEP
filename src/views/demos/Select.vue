<template>
  <div class="flex items-center gap-7">
    <label>Select</label>
    <div>
      <ElSelect
        v-model="selected"
        placeholder="Select One"
      >
        <ElOption
          v-for="opt in options"
          :key="opt.value"
          :label="opt.label"
          :value="opt.value"
        />
      </ElSelect>
    </div>
  </div>
</template>
  
<script setup lang="ts">
const selected = ref('')

const options = reactive([
  { 
    label: 'Foo',
    value: 'foo',
  }, {
    label: 'Bar',
    value: 'bar',
  }, {
    label: 'Box',
    value: 'box',
  },
])
</script>