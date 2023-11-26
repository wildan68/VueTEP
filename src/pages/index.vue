<template>
  <div class="flex flex-col gap-4">
    <h2 class="font-bold text-primary">
      Element Plus + TailwindCSS Starter ✨
    </h2>
    
    <Input />
    <Button />
    <Select />
    <Radio />
    <Checkbox />
    <Switch />
    <Datepicker />
    <Dialog />
    <Toast />

    <div class="flex items-center justify-center gap-1 mt-6 text-sm text-gray-500">
      Powered by 
      <span class="text-danger">♥️</span> 
      <a
        href="https://instagram.com/wldan.rzky_"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wildan Rizky
      </a>
    </div>
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
import Toast from '@/views/demos/Toast.vue';
import { useThemeStore } from '@stores'
import { Actions } from '@/enum/stores';

const themeStore = useThemeStore();
const colorTheme = ref<string>(themeStore.themeColor);
const isDark = ref<boolean>(themeStore.isDark);

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