<template>
  <Form
    class="flex flex-col gap-4 mt-6"
    @submit="onSubmit"
  >
    <!-- Payment Method -->
    <div class="flex justify-center mt-12">
      Select Payment Method
    </div>
    
    <div class="flex justify-center gap-3">
      <ElButton
        :type="paymentMethod === 0 ? 'primary' : 'default'"
        plain
        size="large"
        :style="{
          height: 'auto',
          minWidth: '150px',
        }"
        @click="paymentMethod = 0"
      >
        <div class="flex flex-col items-center gap-2">
          <IconTablerCreditCard class="w-10 h-10" />
          <span class="text-sm">Credit Card</span>
        </div>
      </ElButton>

      <ElButton
        :type="paymentMethod === 1 ? 'primary' : 'default'"
        plain
        size="large"
        :style="{
          height: 'auto',
          minWidth: '150px',
        }"
        @click="paymentMethod = 1"
      >
        <div class="flex flex-col items-center gap-2">
          <IconTablerBrandPaypal class="w-10 h-10" />
          <span class="text-sm">Paypal</span>
        </div>
      </ElButton>
    </div>

    <!-- Field -->
    <template v-if="paymentMethod === 0">
      <Field
        v-slot="{ field, errorMessage }"
        name="cardname"
        label="Card Name"
        rules="required"
      >
        <div class="flex flex-col w-full gap-1">
          <label>Card Name <span class="text-danger">*</span></label>
          <ElInput
            v-bind="field"
            v-model="forms.cardName"
            placeholder="Enter Card Name"
            size="large"
          />
        
          <TransitionSlide>
            <p
              v-if="errorMessage"
              class="text-danger"
            >
              {{ errorMessage }}
            </p>
          </TransitionSlide>
        </div>
      </Field>

      <Field
        v-slot="{ field, errorMessage }"
        name="cardnumber"
        label="Card Number"
        rules="required|integer|min:10"
      >
        <div class="flex flex-col w-full gap-1">
          <label>Card Number <span class="text-danger">*</span></label>
          <ElInput
            v-bind="field"
            v-model="forms.cardNumber"
            placeholder="Enter Card Number"
            size="large"
          >
            <template #prefix>
              <IconTablerCreditCard />
            </template>
          </ElInput>
        
          <TransitionSlide>
            <p
              v-if="errorMessage"
              class="text-danger"
            >
              {{ errorMessage }}
            </p>
          </TransitionSlide>
        </div>
      </Field>

      <div class="flex justify-between gap-4">
        <Field
          v-slot="{ field, errorMessage }"
          name="cvv"
          label="CVV"
          rules="required|integer|min:3|max:3"
        >
          <div class="flex flex-col w-full gap-1">
            <label>CVV <span class="text-danger">*</span></label>
            <ElInput
              v-bind="field"
              v-model="forms.cardCvv"
              placeholder="CVV"
              size="large"
              maxlength="3"
              show-word-limit
            />
        
            <TransitionSlide>
              <p
                v-if="errorMessage"
                class="text-danger"
              >
                {{ errorMessage }}
              </p>
            </TransitionSlide>
          </div>
        </Field>

        <Field
          v-slot="{ field, errorMessage }"
          name="month"
          label="Month"
          rules="required|integer|min:2|max:2"
        >
          <div class="flex flex-col w-full gap-1">
            <label>Month <span class="text-danger">*</span></label>
            <ElInput
              v-bind="field"
              v-model="forms.cardMonth"
              placeholder="Month"
              size="large"
              maxlength="2"
              show-word-limit
            />
        
            <TransitionSlide>
              <p
                v-if="errorMessage"
                class="text-danger"
              >
                {{ errorMessage }}
              </p>
            </TransitionSlide>
          </div>
        </Field>

        <Field
          v-slot="{ field, errorMessage }"
          name="year"
          label="Year"
          rules="required|integer|min:4|max:4"
        >
          <div class="flex flex-col w-full gap-1">
            <label>Year <span class="text-danger">*</span></label>
            <ElInput
              v-bind="field"
              v-model="forms.cardYear"
              placeholder="Year"
              size="large"
              maxlength="4"
              show-word-limit
            />
        
            <TransitionSlide>
              <p
                v-if="errorMessage"
                class="text-danger"
              >
                {{ errorMessage }}
              </p>
            </TransitionSlide>
          </div>
        </Field>
      </div>
    </template>
    
    <template v-else>
      <div class="flex flex-col gap-4 mt-12">
        <Field
          v-slot="{ field, errorMessage }"
          name="email"
          label="Email"
          rules="required|email"
        >
          <div class="flex flex-col w-full gap-1">
            <label>Email <span class="text-danger">*</span></label>
            <ElInput
              v-bind="field"
              v-model="forms.paypalEmail"
              placeholder="Paypal Email"
              size="large"
            >
              <template #prefix>
                <IconTablerMail />
              </template>
            </ElInput>
            
            <TransitionSlide>
              <p
                v-if="errorMessage"
                class="text-danger"
              >
                {{ errorMessage }}
              </p>
            </TransitionSlide>
          </div>
        </Field>
      </div>
    </template>

    <!-- Actions -->
    <div class="flex items-center justify-between">
      <ElButton
        type="primary"
        text
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
import { Actions, Getters } from '@/enum/stores';

const store = useStepperStore()
const forms = store[Getters.GET_FORMS]

const paymentMethod = ref<number>(0)

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

watch(
  () => forms.cardNumber,
  (val) => {
    if (isNaN(parseInt(val))) forms.cardNumber = ''
  },
)

watch(
  () => forms.cardCvv,
  (val) => {
    if (isNaN(parseInt(val))) forms.cardCvv = ''
  },
)

watch(
  () => forms.cardMonth,
  (val) => {
    if (isNaN(parseInt(val))) forms.cardMonth = ''
    if (parseInt(val) > 12) forms.cardMonth = '12'
  },
)

watch(
  () => forms.cardYear,
  (val) => {
    if (isNaN(parseInt(val))) forms.cardYear = ''
  },
)
</script>