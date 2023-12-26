<template>
  <ContentCard
    title="Upload"
    subtitle="Uploder using custom components"
    transparent
  >
    <div class="flex gap-6">
      <ContentCard
        title="Default"
        full
      >
        <FileUploader
          clearable
          :accept="['jpg', 'pdf', 'xlsx']"
        />
      </ContentCard>

      <ContentCard
        title="Dropzone"
        full
      >
        <FileUploader
          clearable
          type="dropzone"
          :accept="['png', 'docx']"
        />
      </ContentCard>
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
// 
</script>