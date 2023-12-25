<template>
  <ContentCard
    title="Stepper"
    subtitle="Stepper Form custom component"
    transparent
  >
    <div class="flex gap-6">
      <ContentCard class="w-[20%]">
        <ElSteps
          :space="150"
          :active="activeSteps"
          direction="vertical"
        >
          <ElStep
            v-for="(step, index) in steps"
            :key="index"
            :title="step.title"
            :description="step.description"
          />
        </ElSteps>
      </ContentCard>

      <ContentCard
        full
        title="Checkout Form" 
        class="relative"
      >
        <TransitionSlide>
          <KeepAlive>
            <Component :is="activeComponent" />
          </KeepAlive>
        </TransitionSlide>
      </ContentCard>
    </div> 
  </ContentCard>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { useStepperStore } from '@stores';
import { Getters } from '@/enum/stores';

const store = useStepperStore()

interface ISteps {
  title: string;
  description: string;
  component: Component;
}

const steps = reactive<ISteps[]>([
  {
    title: 'Contact',
    description: 'Fill in your contact information',
    component: defineAsyncComponent(() => import('@/views/demos/stepper/Contact.vue')),
  },
  {
    title: 'Billing',
    description: 'Billing Information',
    component: defineAsyncComponent(() => import('@/views/demos/stepper/Billing.vue')),
  },
  {
    title: 'Shipping',
    description: 'Shipping Information',
    component: defineAsyncComponent(() => import('@/views/demos/stepper/Shipping.vue')),
  },
])

const activeSteps = computed<number>(() => store[Getters.GET_ACTIVE_STEP])
const activeComponent = computed<Component>(() => steps[activeSteps.value - 1].component)
</script>