<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@stores'
import { Actions } from '@/enum/stores';

const themeStore = useThemeStore();
const colorTheme = ref<string>(themeStore.themeColor);

onMounted(() => themeStore[Actions.SET_THEME_COLOR](colorTheme.value))
</script>