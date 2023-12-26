<template>
  <!-- Default File Uploader Box -->
  <template v-if="type === 'default'">
    <div class="flex flex-col gap-2">
      <div class="flex p-2 border-dashed rounded-md border-[3px] justify-between">
        <div class="flex items-center gap-2 text-zinc-600">
          <IconTablerFile />

          <template v-if="filesData">
            <span class="text-sm">{{ filesData[0].name }}</span>
          </template>

          <template v-else>
            <span class="text-sm italic">Select a file</span>
          </template>
        </div>

        <div class="flex items-center gap-2">
          <ElButton
            type="primary"
            size="small"
            @click="() => open()"
          >
            Browse
          </ElButton>

          <TransitionExpand axis="x">
            <ElButton
              v-if="clearable && filesData"
              type="danger"
              size="small"
              @click="onReset"
            >
              <IconTablerTrash />
            </ElButton>
          </TransitionExpand>
        </div>
      </div>

      <span
        v-if="accept.length > 0"
        class="text-xs italic text-zinc-600"
      >
        File must {{ accept.join(', ') }}
      </span>
    </div>
  </template>

  <!-- Dropzone File Uploader Box -->
  <template v-else-if="type === 'dropzone'">
    <div
      ref="dropZoneRef" 
      class="flex p-2 border-dashed border-primary rounded-md border-[3px] min-h-[200px] justify-center items-center text-primary cursor-pointer trasition-all duration-200"
      :class="[
        { 'bg-primary/20': isOverDropZone },
        { 'bg-primary/10': !isOverDropZone },
      ]"
      @click="() => open()"
    >
      <div class="flex w-2/3 gap-4">
        <IconTablerUpload class="w-8 h-8" />
        
        <div class="flex flex-col gap-2">
          <span class="text-lg font-semibold">Drag and drop your file here</span>
          <span
            v-if="accept.length > 0"
            class="text-sm italic"
          >
            File must {{ accept.join(', ') }}
          </span>
          
          <template v-if="filesData">
            <div class="flex gap-2">
              <IconTablerFile class="w-4 h-4" />

              <span class="text-sm">{{ filesData[0].name }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </template>

  <ElDialog
    v-model="acceptDialog"
    width="30%"
    :show-close="false"
  >
    <div class="flex flex-col items-center justify-center gap-3">
      <IconTablerAlertTriangle class="w-12 h-12 text-danger" />
      <h3 class="text-lg font-semibold">
        File not allowed
      </h3>
    </div>
  </ElDialog>
</template>

<script setup lang="ts">
type UploadType = 'default' | 'dropzone';

interface IProps {
  type: UploadType;
  clearable?: boolean;
  accept?: string[];
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'default',
  accept: () => [],
});

const filesData = ref<File[] | null>(null)
const dropZoneRef = ref<HTMLDivElement>()
const acceptDialog = ref<boolean>(false)

const { open, onChange, reset } = useFileDialog()

const checkFileTypes = (files: File) => {
  if (!props.accept.length) return false

  const fileTypes = files.name.split('.')

  return !props.accept.includes(fileTypes[fileTypes.length - 1])
}

const appendFiles = (files: FileList | File[] | null) => {
  filesData.value = null

  if (!files) return

  const file = Array.from(files)

  if (checkFileTypes(file[0])) {
    acceptDialog.value = true

    reset()
    return
  }

  filesData.value = file
}

onChange((files) => appendFiles(files))

const onReset = () => {
  filesData.value = null

  reset()
}

const onDrop = (files: File[] | null) => appendFiles(files)

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
})
</script>