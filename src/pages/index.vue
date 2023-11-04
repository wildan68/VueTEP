<template>
  <div class="flex flex-col gap-4 p-6">
    <h2 class="font-bold text-primary">
      Component
    </h2>

    <div class="flex items-center gap-7">
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

    <div class="flex items-center gap-7">
      <label>{{ isDark ? 'Dark' : 'Light' }}</label>
      <ElSwitch
        v-model="isDark"
        :inactive-action-icon="SunFilled"
        :active-action-icon="MoonFilled"
      />
    </div>
    <IconSunHigh />
    
    <Input />
    <Button />
    <Select />
    <Radio />
    <Checkbox />
    <Switch />
    <Datepicker />
    <Dialog />
  </div>
</template>

<script setup lang="ts">
import Input from '@/views/demos/Input.vue';
import Button from '@/views/demos/Button.vue';
import Select from '@/views/demos/Select.vue';
import Radio from '@/views/demos/Radio.vue';
import Checkbox from '@/views/demos/Checkbox.vue';
import Switch from '@/views/demos/Switch.vue';
import Datepicker from '@/views/demos/Datepicker.vue';
import Dialog from '@/views/demos/Dialog.vue';
// eslint-disable-next-line import/no-unresolved
import SunFilled from '~icons/tabler/sun-filled'
// eslint-disable-next-line import/no-unresolved
import MoonFilled from '~icons/tabler/moon-filled'
import { useThemeStore } from '@stores'
import { Actions } from '@/enum/stores';

const themeStore = useThemeStore();
const colorTheme = ref<string>(themeStore.themeColor);
const isDark = ref<boolean>(themeStore.isDark);

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

watch(
  isDark,
  () => themeStore[Actions.TOGGLE_DARK_MODE](),
)


// // create template ref, Create <IconTablerSunFilled /> component
</script>