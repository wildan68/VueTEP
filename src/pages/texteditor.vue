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

// Handling Unlicensed Froala Editor
watch(
  textModel,
  (val) => {
    if (val.includes('<p data-f-id="pbf"')) {
      // split the string
      const split = val.split('<p data-f-id="pbf"');
      // get the first index
      textModel.value = split[0];
    }
  },
)
</script>