<template>
  <ContentCard
    title="Text Editor"
    subtitle="Text Editor using Froala Editor"
    transparent
  >
    <div class="flex flex-col gap-6">
      <ContentCard
        title="Default Editor"
      >
        <TextEditor
          v-model="textModel"
          model="froala"
        />
      </ContentCard>

      <ContentCard
        title="Result Raw String"
      >
        {{ textModel ? textModel : 'Write something...' }}
      </ContentCard>
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
import TextEditor from '@/components/TextEditor.vue'

const textModel = ref<string>('');
</script>