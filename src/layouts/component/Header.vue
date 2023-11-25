<template>
  <div
    class="sticky top-0 flex items-center justify-end gap-2 px-6 py-3 border-b bg-background"
    :style="{
      marginLeft: SIDEBAR_WIDTH + 'px',
    }"
  >
    <!-- Theme Color -->
    <ElSelect
      v-model="colorTheme"
      placeholder="Select One"
      size="large"
      class="w-[150px]"
    >
      <template #prefix>
        <div
          class="w-[14px] h-[14px]"
          :style="{ background: colorTheme }"
        />
      </template>
      
      <ElOption
        v-for="opt in colorOptions"
        :key="opt.value"
        :label="opt.label"
        :value="opt.value"
      >
        <div class="flex items-center gap-2">
          <div
            class="w-[14px] h-[14px]"
            :style="{ background: opt.value}"
          />
          {{ opt.label }}
        </div>
      </eloption>
    </ElSelect>

    <!-- Avatar -->
    <div
      ref="profilePopupRef"
      class="relative"
    >
      <ElAvatar
        size="default"
        class="border-none cursor-pointer"
        @click="profilePopup = !profilePopup"
      >
        VT
      </ElAvatar>

      <!-- Profile Popup -->
      <div
        v-if="profilePopup"
        class="absolute right-0 p-4 rounded-md shadow-lg top-full bg-page-background min-w-[200px] mt-4"
      >
        Hello Profile
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SIZE from '@/constants/SIZE'
import { useThemeStore } from '@stores'
import { Actions } from '@/enum/stores';

const themeStore = useThemeStore();
const colorTheme = ref<string>(themeStore.themeColor);

const { SIDEBAR_WIDTH } = SIZE
const isDark = ref<boolean>(themeStore.isDark);
const profilePopup = ref<boolean>(false);
const profilePopupRef = ref<HTMLElement | null>(null);

const colorOptions = reactive([
  {
    label: 'Purple',
    value: '#8442ff',
  }, {
    label: 'Navy',
    value: '#1e3799',
  }, {
    label: 'Orange',
    value: '#f0932b',
  }, {
    label: 'High Blue',
    value: '#45aaf2',
  }, {
    label: 'Royal Blue',
    value: '#4b7bec',
  }, {
    label: 'Aurora Green',
    value: '#78e08f',
  }, {
    label: 'Tomato Red',
    value: '#eb2f06',
  }, {
    label: 'Rogue Pink',
    value: '#f8a5c2',
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

onClickOutside(
  profilePopupRef,
  () => profilePopup.value = false,
)
</script>