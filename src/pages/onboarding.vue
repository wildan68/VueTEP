<template>
  <!-- For Default Slot -->
  <VOnboardingWrapper
    ref="wrapperDefault"
    :steps="defaultSteps"
    :options="options"
  />

  <!-- For Custom Slot -->
  <VOnboardingWrapper
    ref="wrapperCustom"
    :steps="customSteps"
    :options="options"
  >
    <template #default="{ previous, next, step, exit, isFirst, isLast, index }">
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
              @click="finish"
            >
              Finish
            </ElButton>
          </div>
        </div>
      </VOnboardingStep>
    </template>
  </VOnboardingWrapper>

  <ContentCard
    title="Onboarding"
    subtitle="Onboarding using Vue Onboarding"
    transparent
  >
    <div class="grid grid-cols-2 gap-6">
      <ContentCard
        id="default"
        title="Default Slot"
      >
        <div class="flex flex-col gap-6">
          <span class="text-sm text-placeholder">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt a totam vero perspiciatis hic soluta quas possimus nisi expedita eveniet quo nobis minima, aut inventore. Omnis repellat et eos dignissimos.</span>

          <div class="flex justify-end">
            <ElButton 
              v-ripple
              type="primary"
              @click="defaultStart"
            >
              Start Onboarding
            </ElButton>
          </div>
        </div>
      </ContentCard>

      <ContentCard
        id="custom"
        title="Custom Slot"
      >
        <div class="flex flex-col gap-6">
          <span class="text-sm text-placeholder">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt a totam vero perspiciatis hic soluta quas possimus nisi expedita eveniet quo nobis minima, aut inventore. Omnis repellat et eos dignissimos.</span>

          <div class="flex justify-end">
            <ElButton 
              v-ripple
              type="primary"
              @click="customStart"
            >
              Start Onboarding
            </ElButton>
          </div>
        </div>
      </ContentCard>
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
const wrapperDefault = ref(null)
const wrapperCustom = ref(null)

const { start: defaultStart } = useVOnboarding(wrapperDefault)
const { start: customStart, goToStep, finish } = useVOnboarding(wrapperCustom)

const defaultSteps = [
  { 
    attachTo: { element: '#default' }, 
    content: { 
      title: 'Default Slot!', 
      body: 'This is a default slot',
    }, 
  },
]

const customSteps = [
  { 
    attachTo: { element: '#custom' }, 
    content: { 
      title: 'Custom Slot!', 
      body: 'This is a custom slot, you can add your own slot here✨',
    }, 
  },
]

const options = {
  popper: {
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  },
}
</script>