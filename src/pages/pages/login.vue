<template>
  <div class="flex items-center justify-center w-screen h-screen bg-background">
    <div class="flex flex-col gap-6 p-6 rounded-xl shadow-lg bg-background min-w-[350px] relative overflow-hidden">
      <div class="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            :fill="`${getPrimaryColor}10`"
            fill-opacity="1"
            d="M0,64L60,80C120,96,240,128,360,133.3C480,139,600,117,720,138.7C840,160,960,224,1080,213.3C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      <div class="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            :fill="`${getPrimaryColor}20`"
            fill-opacity="1"
            d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,176C840,139,960,85,1080,90.7C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
      
      <div class="flex flex-col items-center justify-center gap-2">
        <img
          :src="AppMainLogo"
          width="90"
        >

        <span class="font-semibold text-zinc-600 dark:text-zinc-400">
          Welcome to {{ appName }}, Explore it!
        </span>

        <span class="text-sm text-placeholder">
          Login to your account
        </span>
      </div>

      <Form
        class="z-10 flex flex-col gap-4"
        @submit="onSubmit"
      >
        <Field
          v-slot="{ field, errorMessage }"
          name="email"
          label="Email"
          rules="required"
        >
          <div class="flex flex-col gap-1">
            <label>Email or Username</label>
            <ElInput
              v-bind="field"
              v-model="formField.email"
            />
        
            <TransitionSlide>
              <p
                v-if="errorMessage"
                class="text-xs text-danger"
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
          rules="required"
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
              <p
                v-if="errorMessage"
                class="text-xs text-danger"
              >
                {{ errorMessage }}
              </p>
            </TransitionSlide>
          </div>
        </Field>

        <ElCheckbox
          v-model="formField.remember"
          label="Remember me"
        />

        <ElButton
          v-ripple
          native-type="submit"
          type="primary"
          round
        >
          Sign in
        </ElButton>

        <div class="flex justify-center text-xs">
          <span class="text-sm text-placeholder">Don't have an account?</span>
          <span
            class="ml-1 text-sm cursor-pointer text-primary"
            @click="$router.push('/pages/register')"
          >
            Sign up
          </span>
        </div>

        <div class="flex items-center gap-2">
          <ElDivider /><span class="text-xs text-placeholder">or</span><ElDivider />
        </div>

        <div class="flex items-center justify-center gap-6 mb-6">
          <ElButton
            v-ripple
            type="primary"
            circle
            size="large"
            text
          >
            <Icon
              icon="flat-color-icons:google"
              class="text-3xl"
            />
          </ElButton>

          <ElButton
            v-ripple
            type="primary"
            circle
            size="large"
            text
          >
            <Icon
              icon="bi:github"
              class="text-3xl text-black dark:text-white"
            />
          </ElButton>

          <ElButton
            v-ripple
            type="primary"
            circle
            size="large"
            text
          >
            <Icon
              icon="ic:baseline-apple"
              class="text-3xl text-black dark:text-white"
            />
          </ElButton>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApp } from '@core/app'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '@/stores';

const { AppMainLogo, appName } = useApp()
const router = useRouter()
const store = useThemeStore()
const formField = reactive({
  email: '',
  password: '',
  remember: false,
})

const onSubmit = () => router.push('/')
const getPrimaryColor = computed(() => store.themeColor)
</script>

<!-- Must be add route meta layout -->
<route lang="yaml">
meta:
  layout: auth
</route>