<template>
  <ContentCard
    title="Form Validation"
    subtitle="Form validation using VeeValidate"
    transparent
  >
    <div class="flex justify-center flex-grow gap-6">
      <ContentCard
        title="Example Form"
        full
        class="h-fit"
      >
        <Form
          class="flex flex-col gap-4"
          @submit="onSubmit"
        >
          <Field
            v-slot="{ field, errorMessage }"
            name="username"
            label="Username"
            rules="required|min:6|max:12"
          >
            <div class="flex flex-col gap-1">
              <label>Username</label>
              <ElInput
                v-bind="field"
                v-model="formField.username"
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
            name="email"
            label="Email"
            rules="required|email"
          >
            <div class="flex flex-col gap-1">
              <label>Email</label>
              <ElInput
                v-bind="field"
                v-model="formField.email"
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
            name="password"
            label="Password"
            rules="required|min:6"
          >
            <div class="flex flex-col gap-1">
              <label>Password</label>
              <ElInput
                v-bind="field"
                v-model="formField.password"
                type="password"
                show-password
              />

              <TransitionSlide>
                <PasswordMeter
                  v-if="formField.password"
                  :password="formField.password"
                />
              </TransitionSlide>
            
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
            name="confirm_password"
            label="Confirm Password"
            rules="required|confirmed:@password"
          >
            <div class="flex flex-col gap-1">
              <label>Confirm Password</label>
              <ElInput
                v-bind="field"
                v-model="formField.confirmPassword"
                type="password"
                show-password
              />

              <TransitionSlide>
                <PasswordMeter
                  v-if="formField.confirmPassword"
                  :password="formField.confirmPassword"
                />
              </TransitionSlide>
          
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

          <ElButton
            v-ripple
            type="primary"
            native-type="submit"
          >
            Register
          </ElButton>
        </Form>
      </ContentCard>

      <ContentCard
        title="Code"
        full
      >
        <ElTabs
          v-model="activeTab"
          type="border-card"
        >
          <ElTabPane
            label="Template"
            name="template"
          >
            <CodeHighlight>{{ templateCode }}</CodeHighlight>
          </ElTabPane>

          <ElTabPane
            label="Script"
            name="script"
          >
            <CodeHighlight>{{ scriptCode }}</CodeHighlight>
          </ElTabPane>
        </ElTabs>
      </ContentCard>
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
const activeTab = ref<string>('template')

const formField = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  showPassword: false,
  showConfirmPassword: false,
})

const onSubmit = () => {
  toast('Register success!', {
    type: 'success',
  })
}

const templateCode = 
`<Form
  class="flex flex-col gap-4 mt-6"
  @submit="onSubmit"
>
  <Field
    v-slot="{ field, errorMessage }"
    name="username"
    label="Username"
    rules="required|min:6|max:12"
  >
    <div class="flex flex-col gap-1">
      <label>Username</label>
      <ElInput
        v-bind="field"
        v-model="formField.username"
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
    name="email"
    label="Email"
    rules="required|email"
  >
    <div class="flex flex-col gap-1">
      <label>Email</label>
      <ElInput
        v-bind="field"
        v-model="formField.email"
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
    name="password"
    label="Password"
    rules="required|min:6"
  >
    <div class="flex flex-col gap-1">
      <label>Password</label>
      <ElInput
        v-bind="field"
        v-model="formField.password"
        type="password"
        show-password
      />

      <TransitionSlide>
        <PasswordMeter
          v-if="formField.password"
          :password="formField.password"
        />
      </TransitionSlide>
    
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
    name="confirm_password"
    label="Confirm Password"
    rules="required|confirmed:@password"
  >
    <div class="flex flex-col gap-1">
      <label>Confirm Password</label>
      <ElInput
        v-bind="field"
        v-model="formField.confirmPassword"
        type="password"
        show-password
      />

      <TransitionSlide>
        <PasswordMeter
          v-if="formField.confirmPassword"
          :password="formField.confirmPassword"
        />
      </TransitionSlide>
  
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

  <ElButton
    v-ripple
    type="primary"
    native-type="submit"
  >
    Register
  </ElButton>
</Form>`

const scriptCode = 
`<script setup lang="ts">
const formField = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  showPassword: false,
  showConfirmPassword: false,
})

const onSubmit = () => {
  toast('Register success!', {
    type: 'success',
  })
}
&lt;/script&gt;
`
</script>