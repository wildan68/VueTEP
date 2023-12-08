<template>
  <div
    class="sticky z-50 flex items-center justify-end gap-2 px-6 py-3 rounded-lg shadow-lg top-3 bg-background"
    :style="{
      marginLeft: (SIDEBAR_WIDTH + 24) + 'px',
      marginRight: '24px',
    }"
  >
    <!-- Theme Color -->
    <div class="flex items-center gap-2">
      <!-- Select Color -->
      <ElSelect
        v-model="colorTheme"
        placeholder="Select One"
        size="default"
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

      <!-- Custom Color -->
      <ElColorPicker
        v-model="colorTheme"
        size="default"
        @active-change="(e) => themeStore[Actions.SET_THEME_COLOR](e as string)"
      />
    </div>

    <!-- Dark Mode -->
    <ElButton
      v-ripple
      type="primary"
      circle
      plain
      @click="isDark = !isDark"
    >
      <IconTablerMoonFilled v-if="isDark" />
      <IconTablerSunFilled v-else />
    </ElButton>

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
      <TransitionSlide>
        <div
          v-if="profilePopup"
          class="absolute right-0 p-4 rounded-md shadow-lg top-full bg-background min-w-[200px] mt-4 flex flex-col gap-4"
        >
          <div class="flex gap-2">
            <ElAvatar
              size="default"
              class="border-none"
            >
              VT
            </ElAvatar>

            <div class="flex flex-col">
              <span class="text-sm font-semibold">User</span>
              <span class="text-xs text-placeholder">Administrator</span>
            </div>
          </div>

          <div class="flex flex-col">
            <div
              v-for="menu in profileMenu"
              :key="menu.label"
              v-ripple
              class="flex items-center gap-2 p-2 rounded-lg cursor-pointer"
              :class="[
                { 'hover:bg-primary/10 hover:text-primary' : !menu.color },
                menu.color
              ]"
            >
              <template v-if="menu.icon">
                <Component :is="menu.icon" />
              </template>

              {{ menu.label }}
            </div>
          </div>
        </div>
      </TransitionSlide>
    </div>
  </div>
</template>

<script setup lang="ts">
import SIZE from '@/constants/SIZE'
import { useThemeStore } from '@stores'
import { Actions } from '@/enum/stores';
import type { FunctionalComponent, SVGAttributes } from 'vue'

const themeStore = useThemeStore();
const colorTheme = ref<string>(themeStore.themeColor);

const { SIDEBAR_WIDTH } = SIZE
const isDark = ref<boolean>(themeStore.isDark);
const profilePopup = ref<boolean>(false);
const profilePopupRef = ref<HTMLElement | null>(null);

const colorOptions = reactive<{ label: string; value: string }[]>([
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

const profileMenu = reactive<{ 
  label: string; 
  icon?: FunctionalComponent<SVGAttributes>;
  color?: string; 
  action: () => void
    }[]>([
      {
        label: 'Settings',
        icon: defineAsyncComponent(() => import('~icons/tabler/settings')),
        action: () => console.log('Settings'),
      }, {
        label: 'Logout',
        icon: defineAsyncComponent(() => import('~icons/tabler/logout')),
        color: 'text-danger hover:bg-danger/10 hover:text-danger',
        action: () => console.log('Logout'),
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