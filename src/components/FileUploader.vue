<template>
  <!-- Default File Uploader Box -->
  <template v-if="type === 'default'">
    <!-- Auto Submit Circle Progress -->
    <TransitionScale
      axis="y"
      group
    >
      <div
        v-if="circle && autoSubmit && filesData && !successSubmit"
        class="flex items-center justify-center"
      >
        <ElProgress
          type="dashboard"
          :percentage="percentage"
          :color="customColors"
        >
          <template #default="{ percentage: prctg }">
            <template v-if="prctg === 100">
              <ElButton
                type="success"
                circle
              >
                <IconTablerCheck />
              </ElButton>
            </template>

            <template v-else>
              <span class="percentage-value">{{ prctg }}%</span>
              <span class="percentage-label">Uploading</span>
            </template>
          </template>
        </ElProgress>
      </div>
    
      <div
        v-else
        class="flex flex-col gap-2"
      >
        <div class="flex p-2 border-dashed rounded-md border-[3px] justify-between dark:border-zinc-600">
          <div class="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
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
              :disabled="percentage > 0 && percentage < 100"
              @click="() => open()"
            >
              Browse
            </ElButton>

            <TransitionExpand axis="x">
              <ElButton
                v-if="clearable && filesData && !autoSubmit"
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
    </TransitionScale>
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
      @click="() => percentage === 0 ? open() : null"
    >
      <TransitionScale
        axis="y"
        group
      >
        <!-- Auto Submit Circle Progress -->
        <div
          v-if="circle && autoSubmit && filesData && !successSubmit"
          class="flex items-center justify-center"
        >
          <ElProgress
            type="dashboard"
            :percentage="percentage"
            :color="customColors"
          >
            <template #default="{ percentage: prctg }">
              <template v-if="prctg === 100">
                <ElButton
                  type="success"
                  circle
                >
                  <IconTablerCheck />
                </ElButton>
              </template>

              <template v-else>
                <span class="percentage-value">{{ prctg }}%</span>
                <span class="percentage-label">Uploading</span>
              </template>
            </template>
          </ElProgress>
        </div>
    
        <div
          v-else
          class="flex gap-4"
        >
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
      </TransitionScale>
    </div>
  </template>

  <!-- Default Upload Progress -->
  <TransitionExpand axis="x">
    <ElProgress
      v-if="autoSubmit && filesData && !successSubmit && !circle"
      :percentage="percentage"
      :stroke-width="15"
      :color="customColors"
      striped
      striped-flow
      class="mt-3"
    />
  </TransitionExpand>

  <!-- Warning Dialog -->
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
import axios from '@axios';
import { CSSVariables } from '@/enum/css-variables';

//NOTE - Type of Uploader
type UploadType = 'default' | 'dropzone';

interface IProps {
  type: UploadType;
  clearable?: boolean;
  accept?: string[];
  autoSubmit?: boolean;
  endpoint?: string;
  circle?: boolean;
  modelValue?: File[] | File | null;
}

interface IEmits {
  (e: 'update:modelValue', value: File[] | File | null): void;
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'default',
  accept: () => [],
  endpoint: '',
  modelValue: null,
});

const emit = defineEmits<IEmits>()

const filesData = ref<File[] | null>(null)
const dropZoneRef = ref<HTMLDivElement>()
const acceptDialog = ref<boolean>(false)
const percentage = ref<number>(0)
const successSubmit = ref<boolean>(false)
const customColors = [
  { color: `var(${CSSVariables.PRIMARY_COLOR})`, percentage: 99 },
  { color: `var(${CSSVariables.SUCCESS_COLOR})`, percentage: 100 },
]

const { open, onChange, reset } = useFileDialog()

//NOTE - Check if file type is allowed
const checkFileTypes = (files: File) => {
  if (!props.accept.length) return false

  const fileTypes = files.name.split('.')

  return !props.accept.includes(fileTypes[fileTypes.length - 1])
}

//NOTE - Append files to data
const appendFiles = (files: FileList | File[] | null) => {
  successSubmit.value = false

  if (!files) return

  const file = Array.from(files)

  //NOTE - Check if file type is allowed
  if (checkFileTypes(file[0])) {
    acceptDialog.value = true
    
    return
  }

  filesData.value = null

  filesData.value = file

  //NOTE - Auto submit
  if (props.autoSubmit) onSubmit()

  emit('update:modelValue', filesData.value)
}

//NOTE - Selected Files
onChange((files) => appendFiles(files))

//NOTE - Reset files
const onReset = () => {
  filesData.value = null

  reset()
}

//NOTE - Dragged files
const onDrop = (files: File[] | null) => appendFiles(files)

//NOTE - Dropzone
const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
})

//NOTE - Auto Submit files action
const onSubmit = () => {
  if (!props.autoSubmit) return

  if (!props.endpoint) {
    console.warn('[FileUploader]: Endpoint is required when using auto-submit')
    return
  }

  if (!filesData.value) {
    console.warn('[File Uploader]: No file selected')
    return
  }

  const formData = new FormData()
  formData.append('file', filesData.value[0])

  //NOTE - Upload file with calculated percentage
  axios.post(props.endpoint, formData, {
    onUploadProgress: (progressEvent) => {
      percentage.value = Math.round((progressEvent.loaded * 100) / (progressEvent?.total || 0))
    },
  })
}

//NOTE - Watch percentage if success submit
watch(
  percentage,
  (val) => {
    if (val === 100) {
      setTimeout(() => {
        percentage.value = 0
        successSubmit.value = true
      }, 2000)
    }
  },
)
</script>

<style scoped lang="scss">
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.el-progress--line {
  margin-bottom: 15px;
  // width: 350px;
}
.el-progress--circle {
  margin-right: 15px;
}
</style>