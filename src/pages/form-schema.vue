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
          <ElTabPane label="Component">
            <div class="flex flex-col gap-4">
              <span class="text-sm font-semibold text-zinc-400">Field</span>
              <Draggable
                :list="component"
                :group="{ name: 'component', pull: 'clone', put: false }"
                item-key="id"
                class="flex flex-wrap gap-2"
                @change="onDragComponent"
              >
                <template #item="{ element }">
                  <div class="flex p-2 border rounded-md border-zinc-100 dark:border-zinc-800 w-fit items-center bg-white dark:bg-zinc-800 cursor-pointer select-none gap-2">
                    <IconTablerComponents />
                    {{ element.component }}
                  </div>
                </template>
              </Draggable>
            </div>
          </ElTabPane>
          <ElTabPane label="Schema">
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
          <!-- <component :is="renderSchema" /> -->

          <Draggable
            :list="schema"
            item-key="id"
            group="component"
            @change="onDragComponent"
          >
            <template #item="{ element }">
              <div class="flex items-center w-full">
                <component
                  :is="renderSchemaSingle(element)"
                  class="w-full"
                />

                <IconTablerGripVertical class="hover:text-primary focus:text-primary cursor-pointer" />
              </div>
            </template>
          </Draggable>
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

const component = reactive<ISchema[]>([
  {
    id: 'input',
    type: 'FIELD',
    component: 'INPUT',
    props: {
      placeholder: 'Input text',
    },
  },
  {
    id: 'button',
    type: 'FIELD',
    component: 'BUTTON',
    props: {
      type: 'primary',
    },
    slots: "Button",
  },
  {
    id: 'checbox',
    type: 'FIELD',
    component: 'CHECKBOX',
    props: {
      label: 'Example Checkbox',
    },
  },
  {
    id: 'radio',
    type: 'FIELD',
    component: 'RADIO',
    props: {
      label: 'Example Radio',
      value: 'radio-1',
    },
  },
  {
    id: 'select',
    type: 'FIELD',
    component: 'SELECT',
    props: {
      placeholder: 'Example Select',
      options: [
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' },
      ],
    },
    children: [
      {
        id: 'option-1',
        type: 'FIELD',
        component: 'OPTION',
        props: {
          label: 'Option 1',
          value: 'option-1',
        },
      },
    ],
  },
])

const onDragComponent = (evt: any) => {
  console.log('event', evt)
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
    "id": "group",
    "type": "VIEW",
    "component": "TEXT",
    "props": {
      "class": "flex flex-col gap-4",
    },
    "children": [
      {
        "id": "input",
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
        "id": "input",
        "type": "FIELD",
        "component": "INPUT",
        "props": {
          "placeholder": "Masukkan Password",
          "type": "password",
        },
      },
      {
        "id": "button",
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

const renderSchemaSingle = (schema: ISchema) => setSchema({
  schema,
  data: initialData.value,
  onUpdate: handleUpdate,
})

const renderSchema = computed(() => setSchema({
  schema,
  data: initialData.value,
  onUpdate: handleUpdate,
}))

onMounted(() => console.log('config', config))
</script>