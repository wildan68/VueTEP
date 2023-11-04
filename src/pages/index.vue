<template>
  <div class="flex flex-col gap-4 p-6">
    <h2 class="font-bold text-primary">
      Component
    </h2>

    <div class="flex items-center gap-2">
      <label>Theme Color</label>
      <ElSelect
        v-model="colorTheme"
        placeholder="Select One"
      >
        <ElOption
          v-for="opt in colorOptions"
          :key="opt.value"
          :label="opt.label"
          :value="opt.value"
        />
      </ElSelect>
    </div>
    
    <Input />
    <Button />
    <Select />
    <Radio />
    <Checkbox />
    <Datepicker />
  </div>
</template>

<script setup lang="ts">
import Input from '@/views/demos/Input.vue';
import Button from '@/views/demos/Button.vue';
import Select from '@/views/demos/Select.vue';
import Radio from '@/views/demos/Radio.vue';
import Checkbox from '@/views/demos/Checkbox.vue';
import Datepicker from '@/views/demos/Datepicker.vue';
import { useThemeStore } from '@stores'
import { Actions } from '@/enum/stores';

const themeStore = useThemeStore();
const colorTheme = ref<string>(themeStore.themeColor);

const colorOptions = reactive([
  {
    label: 'Purple',
    value: '#8442ff',
  }, {
    label: 'Navy',
    value: '#192a56',
  }, {
    label: 'Orange',
    value: '#f0932b',
  },
])

watch(
  colorTheme,
  (val) => themeStore[Actions.SET_THEME_COLOR](val),
)
</script>