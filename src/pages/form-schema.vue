<template>
  <ContentCard
    title="Form Schema"
    subtitle="Vue Form Schema"
    transparent
  >
    <ContentCard title="Form Schema">
      <div class="flex gap-4">
        <ElTabs
          type="border-card"
          class="flex-1"
        >
          <ElTabPane label="JSON">
            <VueMonacoEditor
              v-model:value="schemaCode"
              theme="vs"
              :options="MONACO_EDITOR_OPTIONS"
              height="500px"
              language="json"
              @mount="handleMount"
            />
          </ElTabPane>

          <ElTabPane label="Data">
            <VueMonacoEditor
              v-model:value="initialDataCode"
              theme="vs"
              :options="MONACO_EDITOR_OPTIONS"
              height="500px"
              language="json"
              @mount="handleMount"
            />
          </ElTabPane>
        </ElTabs>

        <div class="border rounded-xl flex-1 p-4">
          <component :is="renderSchema" />
        </div>
      </div>
    </ContentCard>
  </ContentCard>
</template>

<script setup lang="ts">
import { type ISchema, useRender, useConfig } from '@wildanrizky/vue-form-schema'

const { setSchema } = useRender()
const { config } = useConfig()

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}

const editorRef = shallowRef()
const handleMount = (editor: any) => (editorRef.value = editor)

const schemaCode = computed({
  get: () => JSON.stringify(schema, null, 2),
  set: (val) => schema.splice(0, schema.length, ...JSON.parse(val)),
})

const initialData = ref<Record<string, any>>({
  email: 'emailsaya@gmail.com',
  password: '',
})

const initialDataCode = computed({
  get: () => JSON.stringify(initialData.value, null, 2),
  set: (val) => initialData.value = JSON.parse(val),
})

const schema = reactive<ISchema[]>([
  {
    "type": "VIEW",
    "component": "TEXT",
    "props": {
      "class": "flex flex-col gap-4",
    },
    "children": [
      {
        "type": "FIELD",
        "component": "INPUT",
        "props": {
          "placeholder": "Masukkan Email",
        },
        "config": {
          "key": "email",
        },
      },
      {
        "type": "FIELD",
        "component": "INPUT",
        "props": {
          "placeholder": "Masukkan Password",
          "type": "password",
        },
      },
      {
        "type": "FIELD",
        "component": "BUTTON",
        "props": {
          "type": "primary",
        },
        "slots": "Login",
      },
    ],
  },
])

const handleUpdate = (key: keyof typeof initialData.value, value: any) => {
  initialData.value[key] = value;
};

const renderSchema = computed(() => setSchema({
  schema,
  data: initialData.value,
  onUpdate: handleUpdate,
}))

onMounted(() => console.log('config', config))
</script>