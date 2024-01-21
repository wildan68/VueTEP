<template>
  <ContentCard
    title="Sales by Country"
    subtitle="Sales performance revenue based by country"
  >
    <div
      ref="navRef"
      class="overflow-y-scroll h-[270px] flex flex-col gap-3 pr-4"
      :class="navScrolling"
    >
      <div
        v-for="items in countryList"
        :key="items.id"
        class="flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 overflow-hidden rounded-full bg-primary">
            <img
              :src="`https://flagcdn.com/${items.id}.svg`"
              width="30"
              :alt="items.name"
              class="object-cover w-full h-full"
            >
          </div>
          
          <div class="flex flex-col gap-2">
            <span class="text-sm font-bold">${{ items.value }}</span>
            <span class="text-xs text-placeholder">{{ items.name }}</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <span
            class="p-2 rounded-md"
            :class="[items.growth === 'up' ? 'text-success bg-success/10' : 'text-danger bg-danger/10']"
          >
            <IconTablerArrowUpRight v-if="items.growth === 'up'" />
            <IconTablerArrowDownLeft v-else />
          </span>
          
          <span :class="[items.growth === 'up' ? 'text-success' : 'text-danger']">
            {{ items.growth === 'up' ? '+' : '-' }}{{ items.percent }}%
          </span>
        </div>
      </div>
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
const navRef = ref<HTMLElement | null>(null)

const { isScrolling } = useScroll(navRef, { behavior: 'smooth' })

const countryList = reactive<{
    id: string;
    name: string;
    value: number;
    percent: number;
    growth: 'up' | 'down';
}[]>([
  {
    id: 'id',
    name: 'Indonesia',
    value: 203,
    percent: 30,
    growth: 'up',
  },
  {
    id: 'us',
    name: 'United States',
    value: 503,
    percent: 50,
    growth: 'up',
  },
  {
    id: 'jp',
    name: 'Japan',
    value: 103,
    percent: 10,
    growth: 'down',
  },
  {
    id: 'cn',
    name: 'China',
    value: 403,
    percent: 40,
    growth: 'down',
  },
  {
    id: 'ru',
    name: 'Russia',
    value: 303,
    percent: 30,
    growth: 'up',
  },
  {
    id: 'au',
    name: 'Australia',
    value: 103,
    percent: 10,
    growth: 'down',
  },
  {
    id: 'ca',
    name: 'Canada',
    value: 203,
    percent: 20,
    growth: 'down',
  },
  {
    id: 'br',
    name: 'Brazil',
    value: 103,
    percent: 10,
    growth: 'up',
  },
  {
    id: 'in',
    name: 'India',
    value: 203,
    percent: 20,
    growth: 'up',
  },
  {
    id: 'mx',
    name: 'Mexico',
    value: 103,
    percent: 10,
    growth: 'down',
  },
  {
    id: 'de',
    name: 'Germany',
    value: 203,
    percent: 20,
    growth: 'up',
  },
  {
    id: 'gb',
    name: 'United Kingdom',
    value: 103,
    percent: 10,
    growth: 'down',
  },
  {
    id: 'fr',
    name: 'France',
    value: 203,
    percent: 20,
    growth: 'down',
  },
  {
    id: 'it',
    name: 'Italy',
    value: 103,
    percent: 10,
    growth: 'up',
  },
  {
    id: 'es',
    name: 'Spain',
    value: 203,
    percent: 20,
    growth: 'up',
  },
  {
    id: 'sa',
    name: 'Saudi Arabia',
    value: 103,
    percent: 10,
    growth: 'up',
  },
])

const navScrolling = computed(() => {
  return !isScrolling.value ? 'hide-scrollbar' : ''
})
</script>