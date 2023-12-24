<template>
  <Form
    class="flex flex-col gap-4 mt-6"
    @submit="onSubmit"
  >
    Hello Billing
    <!-- Actions -->
    <div class="flex items-center justify-between">
      <ElButton
        type="primary"
        plain
        size="large"
        @click="onBack"
      >
        <div class="flex items-center gap-2">
          <IconTablerChevronLeft />
          <span>Back</span>
        </div>
      </ElButton>

      <ElButton
        type="primary"
        native-type="submit"
        size="large"
      >
        <div class="flex items-center gap-2">
          <span>Next</span>
          <IconTablerChevronRight />
        </div>
      </ElButton>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { useStepperStore } from '@stores';
import { Actions } from '@/enum/stores';

const store = useStepperStore()

const onSubmit = () => {
  store[Actions.SET_ACTIVE_STEP](3)

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const onBack = () => {
  store[Actions.SET_ACTIVE_STEP](1)

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>