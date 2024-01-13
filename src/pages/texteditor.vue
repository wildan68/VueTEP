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
        <Froala v-model:value="textModel" />
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
const textModel = ref<string>('');
</script>