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
        <span class="mb-6 text-sm text-placeholder">
          You can install other tool plugins 
          <a
            href="https://github.com/editor-js/awesome-editorjs?tab=readme-ov-file"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>, 
          editor.js provides many Tool Block Plugins
        </span>
        <BlockStyleEditor v-model="textModel" />
      </ContentCard>
  
      <ContentCard
        title="Result JSON Raw"
      >
        <JsonViewer
          :value="textModel"
          expanded
          boxed
          :expand-depth="5"
        />
      </ContentCard>
    </div>
  </ContentCard>
</template>
  
<script setup lang="ts">
import BlockStyleEditor from '@/components/BlockStyleEditor.vue'
  
const textModel = ref([
  {
    type: 'header',
    data: {
      text: 'Welcome to VueTEP',
      level: 4,
    },
  },
  {
    type: 'paragraph',
    data: {
      text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
    },
  },
]);
</script>