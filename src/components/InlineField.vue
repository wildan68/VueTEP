<template>
  <TransitionFade
    group
  >
    <!-- Text Model -->
    <div
      v-if="!edit"
      @click="toggleEdit"
    >
      <!-- If Model Value Null or Empty -->
      <p
        v-if="!modelVal"
        class="italic text-placeholder"
      >
        Click for edit!
      </p>

      <!-- If Model Value not empty -->
      <template v-else>
        <!-- Type Custom preview with HTML -->
        <div
          v-if="type === 'custom'"
          class="break-words whitespace-pre text-wrap"
          v-html="modelVal"
        />

        <!-- Type not Custom type with Text -->
        <p
          v-else
          class="break-words whitespace-pre text-wrap"
        >
          {{ modelVal }}
        </p>
      </template>
    </div>

    <!-- Edit Field -->
    <div
      v-if="edit"
      class="flex flex-col gap-2"
    >
      <!-- Text Field -->
      <div
        v-if="type === 'text' || type === 'textarea'"
        class="flex flex-col gap-2"
      >
        <ElInput
          ref="refField"
          v-model="modelTemp"
          v-click-outside="toggleEdit"
          placeholder="Enter Text"
          autofocus
          :type="type === 'textarea' ? 'textarea' : 'text'"
          :rows="5"
        />
      </div>

      <!-- Select Field -->
      <div
        v-if="type === 'select'"
        class="flex flex-col gap-2"
      >
        <ElSelect
          v-model="modelTemp"
          v-click-outside="toggleEdit"
          placeholder="Select One"
          autofocus
          @change="onSave"
        >
          <ElOption
            v-for="opt in selectOptions"
            :key="opt.value"
            :label="opt.label"
            :value="opt.value"
          />
        </ElSelect>
      </div>

      <!-- Custom Field -->
      <div
        v-if="type === 'custom'"
        class="flex flex-col gap-2"
      >
        <!-- Model: For Direct Parent Value Model to Slot Value Model -->
        <!-- onUpdate: For trigger update Value Model from Slot to Parent  -->
        <slot
          name="field"
          :model="modelTemp"
          :on-update="updateTemp"
        />
      </div>

      <!-- With Save Action -->
      <div
        v-if="(withSave && edit) || type === 'custom'"
        class="flex items-center justify-end gap-2"
      >
        <ElButton
          type="primary"
          class="shadow-md"
          circle
          @click="onSave"
        >
          <IconTablerCheck />
        </ElButton>

        <ElButton
          type="danger"
          class="shadow-md"
          circle
          @click="edit = false"
        >
          <IconTablerX />
        </ElButton>
      </div>
    </div>
  </TransitionFade>
</template>

<script setup lang="ts">
// NOTE - Field Type
type Field = 'text' | 'select' | 'textarea' | 'custom'

interface IProps {
  type: Field
  modelValue: string
  withSave?: boolean  
  selectOptions?: {
    label: string
    value: string
  }[]
}

interface IEmits {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
  withSave: false,
  selectOptions: () => [],
})

const emit = defineEmits<IEmits>()

// NOTE - Ref Field
const refField = ref()

// NOTE - Edit Value
const edit = ref<boolean>(false)

// NOTE - Model Value
const modelVal = computed<string>({
  get: () => props.modelValue,
  set: (val) => modelTemp.value = val,
})

// NOTE - Model Temporary Value: For prevent update model value when edit with save action
const modelTemp = ref<string>(props.modelValue)

// NOTE - Toggle Edit
const toggleEdit = () => {
  edit.value = !edit.value
  modelTemp.value = modelVal.value
}

// NOTE - On Save Action
const onSave = () => {
  edit.value = false
  emit('update:modelValue', modelTemp.value)
}

// NOTE - Update Model Temp Value if type custom field
const updateTemp = (val: string) => modelTemp.value = val

// NOTE - Click Outside Field
onClickOutside(
  refField,
  () => {
    if (props.withSave) return

    toggleEdit()
  },
)

// NOTE - Watch Model Temp Value
watch(
  modelTemp,
  (val) => {
    if (props.withSave) return  

    emit('update:modelValue', val)
  },
)
</script>