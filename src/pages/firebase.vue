<template>
  <ContentCard
    title="Firebase"
    :subtitle="`Integrating Firebase with ${appName}`"
    transparent
  >
    <div class="grid grid-flow-row grid-cols-2 gap-6">
      <ContentCard
        title="Add Data"
      >
        <span class="text-sm italic text-zinc-400">
          <span class="text-danger">*</span>Add Data action is fake, You can see the add action code in the source
        </span>
        
        <Form
          class="flex flex-col gap-4 mt-4"
          @submit="onAdd"
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
                v-model="forms.username"
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
                v-model="forms.email"
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

          <ElButton
            type="primary"
            native-type="submit"
          >
            Add Data
          </ElButton>
        </Form>
      </ContentCard>
        
      <ContentCard
        title="Read Data"
      >
        <!-- Data Table -->
        <ElTable
          v-loading="dataLoading"
          :data="dataTable"
          stripe
        >
          <ElTableColumn
            prop="username"
            label="Username"
          />

          <ElTableColumn
            prop="email"
            label="Email"
          />
        </ElTable>
        
        <ElButton
          type="primary"
          class="mt-6"
          @click="onGetAll"
        >
          Refresh
        </ElButton>
      </ContentCard>
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
import { useFiresbaseServices } from '@composables/firebaseServices';
import { useApp } from '@core/app';

const { appName } = useApp()
const { add, getAll } = useFiresbaseServices();
const forms = reactive<{ username: string; email: string}>({
  username: '',
  email: '',
})
const dataTable = ref<any>([])
const dataLoading = ref<boolean>(true)

const onAdd = () => {
  toast('Added successfully!', { type: 'success' })

  // add('userstest', forms)
  //   .then(() => {
  //     onGetAll()
  //     return toast('Added successfully!', { type: 'success' })
  //   })
  //   .catch(() => toast('Failed to add!', { type: 'error' }))
}

const onGetAll = () => {
  dataLoading.value = true

  getAll('userstest')
    .then((res) => {
      dataLoading.value = false

      return dataTable.value = res
    })
    .catch(() => toast('Failed to get data!', { type: 'error' }))
    
}

onMounted(() => {
  onGetAll()
})
</script>