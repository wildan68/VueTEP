<template>
  <VOnboardingWrapper
    ref="wrapper"
    :steps="steps"
    :options="options"
  >
    <template #default="{ previous, next, step, isFirst, isLast }">
      <VOnboardingStep>
        <div class="flex flex-col gap-6 p-6 rounded-md bg-background">
          <div
            v-if="step.content"
            class="flex flex-col gap-4"
          >
            <span class="text-lg font-semibold">
              {{ step.content.title }}
            </span>

            <span class="text-sm text-placeholder">
              {{ step.content.body }}
            </span>
          </div>

          <div class="flex justify-end">
            <ElButton
              v-if="!isFirst"
              v-ripple
              class="mr-2"
              text
              @click="previous"
            >
              Previous
            </ElButton>

            <ElButton
              v-if="!isLast"
              v-ripple
              type="primary"
              @click="next"
            >
              Next
            </ElButton>

            <ElButton
              v-if="isLast"
              v-ripple
              type="primary"
              @click="finishedOnboarding"
            >
              Finish
            </ElButton>
          </div>
        </div>
      </VOnboardingStep>
    </template>
  </VOnboardingWrapper>
    
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
      <div class="col-span-2">
        <SummarySlide id="summary" />
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
const { start, finish } = useVOnboarding(wrapper)
const steps = [
  { 
    attachTo: { element: '#summary' }, 
    content: { 
      title: 'Summary!', 
      body: 'This is the summary of your sales',
    }, 
  },
  { attachTo: { element: '#overview' }, 
    content: { 
      title: 'Overview!', 
      body: 'This is the overview of your sales',
    }, 
  },
  { attachTo: { element: '#revenue' }, 
    content: { 
      title: 'Revenue!', 
      body: 'This is the revenue of your sales',
    }, 
  },
]

const options = {
  popper: {
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  },
}

const isFinishedOnboarding = (): boolean => localStorage.getItem('finishedOnboarding') === 'true'

const finishedOnboarding = () => {
  localStorage.setItem('finishedOnboarding', 'true')
  finish()
}

onMounted(() => !isFinishedOnboarding() && start())
</script>