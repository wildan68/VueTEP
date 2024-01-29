<template>
  <div :id="randomIdKey" />
</template>

<script setup lang="ts">  
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import ImageTool from '@editorjs/image';
import type { OutputBlockData, ToolConstructable } from '@editorjs/editorjs';

interface IProps {
  modelValue?: OutputBlockData[];
}

interface IEmits {
  (e: 'update:modelValue', value: OutputBlockData[]): void
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: () => [],
})

const emit = defineEmits<IEmits>()

const modelVal = computed<OutputBlockData[]>({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    return  emit('update:modelValue', val)
  },
})

const randomIdKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
const editorJs = ref<EditorJS>()

const initEditorJs = () => {
  editorJs.value = new EditorJS({
    holder: randomIdKey,
    data: {
      blocks: modelVal.value,
    },
    tools: {
      header: {
        class: Header as unknown as ToolConstructable,
        inlineToolbar: true,
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      image: {
        class: ImageTool,
        config: {
          endpoints: {
            // example endpoint https://api.escuelajs.co/api/v1/files/upload
            byFile: 'https://api.escuelajs.co/api/v1/files/upload', // Your backend file uploader endpoint
            byUrl: 'http://localhost:3000/fetchUrl', // Your endpoint that provides uploading by Url
          },
        },
      },
    },
    onReady: () => {
      // 
    },
    onChange: () => {
      editorJs.value?.save()
        .then(({ blocks }) => {
          return modelVal.value = blocks
        })
        .catch((err) => { throw new Error(err) })
    },
  })
}

onMounted(() => initEditorJs())
</script>

<style scoped lang="scss">
:deep(.codex-editor__redactor) {
  padding-bottom: 0 !important;
}
</style>