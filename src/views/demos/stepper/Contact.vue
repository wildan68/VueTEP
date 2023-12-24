<template>
  <Form
    class="flex flex-col gap-4 mt-6"
    @submit="onSubmit"
  >
    <!-- First Name & Last Name -->
    <div class="flex flex-grow gap-6">
      <Field
        v-slot="{ field, errorMessage }"
        name="firstName"
        label="First Name"
        rules="required"
      >
        <div class="flex flex-col w-full gap-1">
          <label>First Name <span class="text-danger">*</span></label>
          <ElInput
            v-bind="field"
            v-model="forms.firstName"
            placeholder="Enter First Name"
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
        name="lastName"
        label="Last Name"
        rules="required"
      >
        <div class="flex flex-col w-full gap-1">
          <label>Last Name <span class="text-danger">*</span></label>
          <ElInput
            v-bind="field"
            v-model="forms.lastName"
            placeholder="Enter Last Name"
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

    <!-- Email & Birthdate -->
    <div class="flex flex-grow gap-6">
      <Field
        v-slot="{ field, errorMessage }"
        name="email"
        label="Email"
        rules="required|email"
      >
        <div class="flex flex-col w-full gap-1">
          <label>Email<span class="text-danger">*</span></label>
          <ElInput
            v-bind="field"
            v-model="forms.email"
            placeholder="Enter Email"
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
        name="birthdate"
        label="Birhtdate"
        rules="required"
      >
        <div class="flex flex-col w-full gap-1">
          <label>Birthdate <span class="text-danger">*</span></label>
          <ElDatePicker
            v-bind="field"
            v-model="forms.birthDate"
            placeholder="Pick a date"
            style="width: 100%"
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

    <!-- Address -->
    <Field
      v-slot="{ field, errorMessage }"
      name="address"
      label="Address"
      rules="required|min:10"
    >
      <div class="flex flex-col w-full gap-1">
        <label>Address<span class="text-danger">*</span></label>
        <ElInput
          v-bind="field"
          v-model="forms.address"
          type="textarea"
          placeholder="Enter Address"
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

    <!-- Country & State -->
    <div class="flex flex-grow gap-6">
      <Field
        v-slot="{ field, errorMessage }"
        name="country"
        label="Country"
        rules="required"
      >
        <div class="flex flex-col w-full gap-1">
          <label>Country<span class="text-danger">*</span></label>
          <ElInput
            v-bind="field"
            v-model="forms.country"
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
        name="state"
        label="State"
        rules="required"
      >
        <div class="flex flex-col w-full gap-1">
          <label>State <span class="text-danger">*</span></label>
          <ElInput
            v-bind="field"
            v-model="forms.state"
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

    <!-- City & Zip -->
    <div class="flex flex-grow gap-6">
      <Field
        v-slot="{ field, errorMessage }"
        name="city"
        label="City"
        rules="required"
      >
        <div class="flex flex-col w-full gap-1">
          <label>City<span class="text-danger">*</span></label>
          <ElInput
            v-bind="field"
            v-model="forms.city"
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
        name="zipcode"
        label="ZIP Code"
        rules="required"
      >
        <div class="flex flex-col w-full gap-1">
          <label>ZIP Code <span class="text-danger">*</span></label>
          <ElInput
            v-bind="field"
            v-model="forms.zip"
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

    <!-- PIN Point -->
    <div class="flex flex-col w-full gap-2">
      <label>Maps Pin Point</label>
      <LMap
        v-if="mapLoaded"
        v-model:zoom="zoom"
        :center="forms.latLang"
        :style="{ height: '300px' }"
        :use-global-leaflet="false"
        :options="{
          zoomControl: false,
          attributionControl: false,
        }"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        />

        <LMarker
          :lat-lng="forms.latLang"
          draggable
          @update:lat-lng="updateLatLng"
        />

        <LControlZoom position="bottomright" />

        <LControl position="topleft">
          <div class="p-2 rounded-md bg-background">
            Lat: {{ forms.latLang[0] }}, Lang: {{ forms.latLang[1] }}
          </div>
        </LControl>
      </LMap>
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-end">
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

const mapLoaded = ref<boolean>(false)
const zoom = ref<number>(17)

const updateLatLng = (latLng: { lat: number; lng: number }) => {
  forms.latLang[0] = latLng.lat
  forms.latLang[1] = latLng.lng
}

const onSubmit = () => {
  store[Actions.SET_ACTIVE_STEP](2)

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  setTimeout(() => {
    mapLoaded.value = true
  }, 500)
})
</script>