<template>
  <template v-if="model === 'froala'">
    <Froala v-model:value="modelVal" />
  </template>
</template>

<script setup lang="ts">
interface IProps {
  modelValue?: string
  value?: string
  model?: 'froala'
}

interface IEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'update:value', value: string): void
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  value: '',
  model: 'froala',
})

const emit = defineEmits<IEmits>()

const modelVal = computed<string>({
  get: () => {
    const model = props.value ? props.value : props.modelValue

    const detectNewLine = model.includes('\n')

    // Handle New Line
    if (detectNewLine) {
      const split = model.split('\n')
      return split.join('<br>')
    }

    return model
  },
  set: (val) => {
    // Handling Unlicensed Froala Editor
    if (val.includes('<p data-f-id="pbf"')) {
      // split the string
      const split = val.split('<p data-f-id="pbf"');
      // get the first index
      return props.value ? emit('update:value', split[0]) : emit('update:modelValue', split[0])
    }
    
    return props.value ? emit('update:value', val) : emit('update:modelValue', val)
  },
})
</script>