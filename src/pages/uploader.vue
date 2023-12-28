<template>
  <ContentCard
    title="File Uploader"
    subtitle="File Uploder using custom components"
    transparent
  >
    <div class="grid grid-flow-row grid-cols-2 gap-6">
      <!-- Default -->
      <ContentCard
        title="Default"
        full
      >
        <FileUploader
          clearable
          :accept="['jpg', 'pdf', 'xlsx']"
        />
      </ContentCard>

      <!-- Dropzone -->
      <ContentCard
        title="Dropzone"
        full
      >
        <FileUploader
          type="dropzone"
          :accept="['png', 'docx']"
        />
      </ContentCard>

      <!-- Default Auto Submit -->
      <ContentCard
        title="Auto Submit"
        full
      >
        <!-- Example Endpoint with Fake API -->
        <FileUploader
          clearable
          auto-submit
          endpoint="https://api.escuelajs.co/api/v1/files/upload"
          :accept="['jpg', 'docx']"
        />
      </ContentCard>

      <!-- Default Auto Submit Circle -->
      <ContentCard
        title="Auto Submit Circle Progress"
        full
      >
        <!-- Example Endpoint with Fake API -->
        <FileUploader
          clearable
          auto-submit
          endpoint="https://api.escuelajs.co/api/v1/files/upload"
          :accept="['jpg', 'docx']"
          circle
        />
      </ContentCard>

      <!-- Dropzone Auto Submit Circle -->
      <ContentCard
        title="Dropzone Auto Submit Circle Progress"
        full
      >
        <FileUploader
          type="dropzone"
          endpoint="https://api.escuelajs.co/api/v1/files/upload"
          :accept="['jpg', 'docx']"
          circle
          auto-submit
        />
      </ContentCard>

      <!-- Form Validation -->
      <ContentCard title="File Uploader Validation">
        <Form
          class="flex flex-col gap-4"
          @submit="onSubmit"
        >
          <Field
            v-slot="{ field, errorMessage }"
            name="name"
            label="Name"
            rules="required|min:3"
          >
            <div class="flex flex-col gap-1">
              <label>Name <span class="text-danger">*</span></label>
              <ElInput
                v-bind="field"
                v-model="name"
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
            name="image"
            label="Image"
            rules="required"
          >
            <div class="flex flex-col gap-1">
              <label>Upload Image <span class="text-danger">*</span></label>
              <FileUploader
                v-bind="field"
                v-model="fileData"
                :accept="['jpg', 'png']"
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
            v-ripple
            type="primary"
            native-type="submit"
          >
            Submit
          </ElButton>
        </Form>
      </ContentCard>
    </div>
  </ContentCard>

  <ElDialog
    v-model="submitDialog"
    width="30%"
    :show-close="false"
  >
    <div class="flex flex-col items-center justify-center gap-3">
      <IconTablerCheck class="w-16 h-16 text-success" />
      <h3 class="text-lg font-semibold">
        Form Submitted Successfully
      </h3>
    </div>
  </ElDialog>
</template>

<script setup lang="ts">
import FileUploader from '@/components/FileUploader.vue';

const name = ref<string>('');
const fileData = ref<File[] | null>(null);
const submitDialog = ref<boolean>(false);

const onSubmit = () => submitDialog.value = true;
</script>