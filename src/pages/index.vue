<template>
  <VOnboardingWrapper
    ref="wrapper"
    :steps="steps"
  />
    
  <div class="flex flex-col gap-6">
    <div class="grid grid-cols-3 gap-6">
      <ContentCard class="col-span-2">
        <div class="flex flex-col flex-1 gap-4">
          <h2 class="text-2xl font-bold text-primary">
            Welcome to {{ appName }} ✨
          </h2>
          <span class="text-sm text-placeholder">
            Vue, Tailwind, Element Plus and Extend Component's combination for the best developing frontend experience
          </span>
        </div>
      </ContentCard>

      <div class="relative flex items-center p-6 overflow-hidden text-white rounded-lg bg-gradient-to-r from-primary/80 to-primary">
        <img
          :src="PlanetDraw"
          class="absolute top-0 bottom-0 right-0 w-[50%] select-none"
        >
        <span class="text-3xl font-bold">Easy & Fast</span>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-6">
      <div
        id="summary"
        class="col-span-2"
      >
        <SummarySlide />
      </div>

      <Overview id="overview" />
      <Revenue id="revenue" />
    </div>

    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-2">
        <SalesReport />
      </div>

      <SalesByCountry />
    </div>
  </div>
</template>

<script setup lang="ts">
import PlanetDraw from '@images/planet-draw.png'
import SummarySlide from '@/views/demos/dashboard/SummarySlide.vue'
import Overview from '@/views/demos/dashboard/Overview.vue';
import Revenue from '@/views/demos/dashboard/Revenue.vue';
import SalesReport from '@/views/demos/dashboard/SalesReport.vue';
import SalesByCountry from '@/views/demos/dashboard/SalesByCountry.vue';
import { useApp } from '@core/app';

const { appName } = useApp()

const wrapper = ref(null)
const { start, goToStep, finish } = useVOnboarding(wrapper)
const steps = [
  { attachTo: { element: '#summary' }, content: { title: 'Summary!' } },
  { attachTo: { element: '#overview' }, content: { title: 'Overview!' } },
  { attachTo: { element: '#revenue' }, content: { title: 'Revenue!' } },
]

onMounted(() => start())
</script>